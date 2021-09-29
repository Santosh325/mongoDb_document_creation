const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/santoshDb")
.then(() => console.log('connection successfully '))
.then((err) => console.log(err))


const playListSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true,
  },
 cType: String,
 videos: Number,
 author: String,
 active: Boolean,
 date: {
     type: Date,
     default: Date.now,
 }
});

// creating collection
const PlayList = new mongoose.model("PlayList", playListSchema);




const creatDocument = async () => {
    try {
       const reactPlayList = new PlayList({
           name: "React",
           cType: "Front end",
           videos: 5,
           author:"malikan",
           active:"true"
       })
       const result = await reactPlayList.save();
       console.log(result);
    } catch(e) {
        console.log(e);
    }
}

creatDocument();