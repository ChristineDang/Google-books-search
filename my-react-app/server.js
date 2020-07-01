const express = require("express");
const path = require("path");
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

app.get("*", (req,res) => {
    res.sendFile(path.join(_dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksdb");

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  
  //🤯