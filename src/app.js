//  for install mongoose
// npm install mongoose

const mongoose = require('mongoose'); // importing mongoose module

// connection creation and creating a new database
mongoose.connect("mongodb://localhost:27017/leranmongoose",{
    useNewUrlParser: true, useUnifiedTopology:true
}).then( () => console.log("Connection successful..."))
.catch((err) => console.log(err));