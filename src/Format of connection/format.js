const mongoose = require("mongoose");
const validator=require("validator");


// mongoose -> Prod Dep --> Help ypu connect to your cloud DB ( .connect(connectionString) )
mongoose.connect("mongodb://localhost:27017/demo")
//mongodb://localhost:27017/demo

.then( () => console.log("connection seccessfull..."))
.catch(err=>console.log(err));

//Mongoose Schema
const playlistSchema=new mongoose.Schema({
   
    name:mongoose.Schema.Types.String,
    ctype:mongoose.Schema.Types.String,
    video:{
        type:Number,
        validate(value){
            if(value<0){
                throw new Error("video count should be greater then 0")
            }
        }
    },
    email:{
        type:String,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }

    }
})


//collection creation
const Playlist = new mongoose.model("Playlist",playlistSchema)


//documet
const NodePlaylist = new Playlist({
    
    name:"Node JS",
    ctype:"Back End",
    //video:"javascript"

})

const reactPlaylist = new Playlist({
    
    name:"JS",
    ctype:"Front End",
    video:1,
    email:"krishkansal7@gmail.com"

})

//document save
Playlist.insertMany([reactPlaylist,NodePlaylist])
.then( () => console.log("seccessfull Done.."))
.catch(err=>console.log(err));


const getDocument=async()=>{
    const result=await Playlist.find({ctype:"Front End"}).select({name:1});
    console.log(result);
}
getDocument();