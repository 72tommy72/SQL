import express from "express";
import mysql from "mysql2";

const app = express();
const port = 3000;
app.use(express.json());
// Create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "tommy",
});

// A simple SELECT Product
app.get("/users", (req, res, next) => {
    connection.query(`SELECT * FROM products`, function(err, results, fields) {
        if (err) {
            return res.json({
                success: false,
                message: err.message,
            });
        }
        return res.json({
            success: true,
            result: results,
        });
    });
});
// A simple Add Product
app.post("/users", (req, res, next) => {
    const { id, name, password, age, email } = req.body;
    connection.query(
        `INSERT INTO products(id, name, password, age, email)
        VALUES ('${id}','${name},'${password}'','${age}','${email}')`,
        function(err, results, fields) {
            if (err) {
                return res.json({
                    success: false,
                    message: err.message,
                });
            } else if (results.effectedRows) {
                return res.json({
                    success: true,
                    message: "product add successfully",
                });
            } else {
                return res.json({
                    success: false,
                    message: "something went wrong ",
                });
            }
        }
    );
});
// A simple update Product
app.patch("/products/:id", (req, res, next) => {
    const { id } = req.params;
    const { name, password, age, email } = req.body;
    connection.query(
        `UPDATE products SET name='${name}',password='${password}',email='${email}',age='${age}' WHERE id = "${{
      id,
    }}`,
        function(err, results, fields) {
            if (err) {
                return res.json({
                    success: false,
                    message: err.message,
                });
            } else if (results.effectedRows) {
                return res.json({
                    success: true,
                    message: "product Updated successfully",
                });
            } else {
                return res.json({
                    success: false,
                    message: "product not found ",
                });
            }
        }
    );
});
// A simple DELETE Product
app.delete("/products/:id", (req, res, next) => {
    const { id } = req.params;
    connection.query(
        `DELETE FROM products WHERE id = "${{ id }}`,
        function(err, results, fields) {
            if (err) {
                return res.json({
                    success: false,
                    message: err.message,
                });
            } else if (results.effectedRows) {
                return res.json({
                    success: true,
                    message: "product Updated successfully",
                });
            } else {
                return res.json({
                    success: false,
                    message: "product not found ",
                });
            }
        }
    );
});

// A simple SELECT Product
app.get("/products", (req, res, next) => {
    connection.query(`SELECT * FROM products`, function(err, results, fields) {
        if (err) {
            return res.json({
                success: false,
                message: err.message,
            });
        }
        return res.json({
            success: true,
            result: results,
        });
    });
});
// A simple Add Product
app.post("/products", (req, res, next) => {
    const { id, name, description, price } = req.body;
    connection.query(
        `INSERT INTO products(id, pName, pDescription, price)
        VALUES ('${id}','${name},'${description}'','${price}')`,
        function(err, results, fields) {
            if (err) {
                return res.json({
                    success: false,
                    message: err.message,
                });
            } else if (results.effectedRows) {
                return res.json({
                    success: true,
                    message: "product add successfully",
                });
            } else {
                return res.json({
                    success: false,
                    message: "something went wrong ",
                });
            }
        }
    );
});
// A simple update Product
app.patch("/products/:id", (req, res, next) => {
    const { id } = req.params;
    const { name, description, price } = req.body;
    connection.query(
        `UPDATE products SET pName='${name}',pDescription='${description}',price='${price}' WHERE id = "${{id}}`,
        function(err, results, fields) {
            if (err) {
                return res.json({
                    success: false,
                    message: err.message,
                });
            } else if (results.effectedRows) {
                return res.json({
                    success: true,
                    message: "product Updated successfully",
                });
            } else {
                return res.json({
                    success: false,
                    message: "product not found ",
                });
            }
        }
    );
});
// A simple DELETE Product
app.delete("/products/:id", (req, res, next) => {
    const { id } = req.params;
    connection.query(
        `DELETE FROM products WHERE id = "${{ id }}`,
        function(err, results, fields) {
            if (err) {
                return res.json({
                    success: false,
                    message: err.message,
                });
            } else if (results.effectedRows) {
                return res.json({
                    success: true,
                    message: "product Updated successfully",
                });
            } else {
                return res.json({
                    success: false,
                    message: "product not found ",
                });
            }
        }
    );
});
// A simple certain Product
app.get("/products/:id", (req, res, next) => {
    const { id } = req.params;
    connection.query(
        `SELECT * FROM products WHERE id = "${{ id }}`,
        function(err, results, fields) {
            if (err) {
                return res.json({
                    success: false,
                    message: err.message,
                });
            }
            return res.json({
                success: true,
                message: results,
            });
        }
    );
});
// select WHERE price >= 3000 Product
app.get("/products/:id", (req, res, next) => {
    const { id } = req.params;
    connection.query(
        `SELECT * FROM products WHERE price >= 3000 `,
        function(err, results, fields) {
            if (err) {
                return res.json({
                    success: false,
                    message: err.message,
                });
            }
            return res.json({
                success: true,
                message: results,
            });
        }
    );
});

app.listen(port, () => console.log(`Example app listening on port ${ port }!`));