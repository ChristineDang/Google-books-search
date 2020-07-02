const express = require("express");
const path = require("path");
const saved = require("./src/pages/saved");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Heroku static assets
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//define API routes here
app.use(routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(_dirname, "./client/build/index.html"));
});

//connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksdb", { useNewUrlParser: true });

// const mongoose = require('mongoose');
//need to post onto MongoDB and be able to pull from database to post on the saved page
//currently not working. Need to fix
const Schema = mongoose.Schema;

const bookInfoSchema = new Schema({
    title: String,
    author: String,
    description: String,
    image: String,
    link: String,
});

const bookInfo = mongoose.model("bookInfo", nameSchema);

app.post('/pages/saved', (req, res) => {
    const savedBooks = new bookInfo({ saved: req.body.bookInfo});
    savedBooks.save()
        .then(bookInfo => {
            res.send("Name saved to database");
        })

        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
    // savedBooks.bookInfo;
});

app.get('/saved', function(req, res) {
    MongoClient.connect(dbConfig.url, function(err, db){
        useNewUrlParser: true
        if (err) throw err;
        var db = db.db("googlebooksdb");
        db.collection("bookInfo").find({}).toArray(function(err, result){
            if(err) throw err;
            res.send(result);
            db.close();
        })
    })
})

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  
  //🤯

  export default bookInfoSchema;