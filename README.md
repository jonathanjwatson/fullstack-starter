# fullstack-starter

## Setup the Repo

1. Create new repo
2. Add README and node gitignore
3. Add contributors

## Setup the Server

1. `touch server.js`
2. `npm init -y` (check to see the package.json was created)
3. `npm install express`
4. Boilerplate the server

```javascript
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

5. Add middleware for POST body.
6. Add `/api/config` route to test.

## Add Handlebars

1. `npm install express-handlebars`
2. Require express-handlebars in server.js
3. Add the handlebars middleware (view engine, etc. )

```javascript
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
```

4. Setup your views directory with proper sub folders.
   |
   ----- views
   |
   ----- layouts
   | |
   | ------- main.handlebars
   ----- index.handlebars

5. Add boilerplate and "triple-stache" into main.handlebars
6. (Optional) Include your CSS Library and jQuery
7. Add "Hello World" to the index.handlebars
8. Add a server route to test the index.handlebars file.

```javascript
app.get("/", (req, res) => {
  res.render("index");
});
```

## Add Database/Models

1. `npm install sequelize mysql2`
2. `sequelize init:config & sequelize init:models` (Confirm we see config and models directories)
3. Create a db folder and add schema.sql

```sql
DROP DATABASE IF EXISTS starter_db;
-- Creates the "starter_db" database --
CREATE DATABASE starter_db;

USE starter_db;
```

4. Modify config/config.json with password and database name in development.
5. Create your first model.

```javascript
module.exports = function (sequelize, DataTypes) {
  const Thing = sequelize.define("Thing", {
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
  });
  return Thing;
};
```

6. Import db into server.js
7. Connect the database to our server, by wrapping app.listen in `db.sequelize.sync()`

## Abstract Controllers

1. Create a new controller for your model.
2. Include basic boilerplate code: 

```javascript
const express = require("express");
const router = express.Router();

module.exports = router;
```

3. Setup Views routes and API routes
4. View Routes may include:
    * all-things
    * single-thing
    * edit-thing
    * new-thing
5. Import db into our controller and populate the page. 
6. Getting error: `Access has been denied to resolve the property "name" because it is not an "own property" of its parent.`? 

### Configure Handlebars

1. Run `npm install handlebars @handlebars/allow-prototype-access`
2. Modify your server: 

```javascript
const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
```

3. Modify the `app.engine`

```javascript
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
```