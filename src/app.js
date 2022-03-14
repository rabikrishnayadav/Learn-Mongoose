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

// create or insert documents

const createDocument = async () => {
    try{
        const reactPlaylist = new Playlist({
        name: 'Node JS',
        ctype: 'Back End',
        videos: 55,
        author: 'Rabi Kr Yadav',
        active: true,
    })
    
        const jsPlaylist = new Playlist({
        name: 'JavaScript',
        ctype: 'Front End',
        videos: 59,
        author: 'Rabi Kr Yadav',
        active: true,
    })
        const mongoPlaylist = new Playlist({
        name: 'MongoDB',
        ctype: 'Database',
        videos: 5,
        author: 'Rabi Kr Yadav',
        active: true,
    })
        const mongoosePlaylist = new Playlist({
        name: 'MongooseDB',
        ctype: 'Database',
        videos: 15,
        author: 'Rabi Kr Yadav',
        active: true,
    })
        const expressPlaylist = new Playlist({
        name: 'Express Js',
        ctype: 'Back End',
        videos: 15,
        author: 'Rabi Kr Yadav',
        active: true,
    })

    const result = await Playlist.insertMany([reactPlaylist, jsPlaylist, mongoPlaylist, mongoosePlaylist, expressPlaylist]);
    console.log(result);
    }catch(err){
        console.log(err);
    }
}

createDocument();