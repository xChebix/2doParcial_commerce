const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express()
app.use(cors())
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "e-commerce"
})
db.connect((err) => {
    if (err) {
      console.error('Database connection error:', err);
      throw err;
    }
    console.log('Connected to the database');
  });

app.get("/", (re,res)=> {
    return res.json('From backend side');
})
app.get("/user", (req,res)=> {
    const sql = "SELECT * from user";
    db.query(sql,(err,data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.get("/products", (req, res) => {
    const user_id = req.query.user_id; // Obtén el user_id de la cadena de consulta
    const sql = "SELECT * from product where user_id = ?";
    
    db.query(sql, user_id, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
});


// Define a route to handle the POST request
app.post('/add-product', (req, res) => {
    const { name, price, stock, image, user_id } = req.body;
    const values = [name, price, stock, image, user_id];

    // Insert the product into the database
    const query = 'INSERT INTO product (name, price, stock, image, user_id) VALUES (?, ?, ?, ?, ?)';
    db.query(query, values, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Error al agregar el producto");
      }
      return res.status(201).json("Producto agregado exitosamente");
    });
});


app.post('/login', (req, res) => {
    const query = "SELECT id FROM user WHERE username = ? AND password = ?";
  
    db.query(query, [req.body.username, req.body.password], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Login Failed");
      }
      if (data.length > 0) {
        const userId = data[0].id; // Obtén el ID del usuario de la respuesta
        return res.status(200).json({ id: userId, message: "Login Successfully" });
      } else {
        return res.status(401).json("No record");
      }
    });
});

app.post('/registerUser', (req,res) =>{
    const query = "insert into user (username,password) values (?,?)"
    db.query(query, [req.body.username, req.body.password], (err,data) =>{
        if(err) return res.json("Register Failed");
        if(data.length > 0) {
            return res.json("Register Successfully")
        } else{
            return res.json("No record")
        }
    })
}) 

app.listen(8081,()=> {
    console.log("Listening");
})