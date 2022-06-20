const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/news.route.js"));
app.use(require("./routes/categories.route.js"));
app.use(require("./routes/comments.route.js"));





mongoose.connect("mongodb+srv://GigaChad:Jason952@cluster0.ygimb.mongodb.net/?retryWrites=true&w=majority", () => {
    app.listen(3000, () => {
        console.log('Сервер запущен успешно')
      })
    
    })
