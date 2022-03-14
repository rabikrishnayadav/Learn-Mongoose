//  for install mongoose
// npm install mongoose

const mongoose = require('mongoose'); // importing mongoose module

// connection creation and creating a new database
mongoose.connect("mongodb://localhost:27017/leranmongoose",{
    useNewUrlParser: true, useUnifiedTopology:true
}).then( () => console.log("Connection successful..."))
.catch((err) => console.log(err));

/*
Schema :- 
A Mongoose schema defines the structure of the document.
Default values, validatiors etc.
*/

const  playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author:String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})


/* 
Model:-
A Mongoose model is a wrapper on the the mongoose schema.
A Mongoose schema defines the structure of the document,
default values, validators, etc.
where as a mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
*/

// collection creation
const Playlist = new mongoose.model("Playlist", playlistSchema);