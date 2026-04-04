require('dotenv').config();
const express=require('express')
const mongoose=require('mongoose');
const cors=require('cors');
const multer=require('multer')

const upload=multer();
const app=express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
mongoose.connect(process.env.RESTAPI_DBCONNECT).then(()=>{
    console.log('connected')})
.catch((err)=>{
    console.log(err)})



    const titleschema=new mongoose.Schema({
        type:String,
        title:String,
        about:String,
        description:String,
        date:String,
        image:String,
        timestamp: { type: Date, default: Date.now },
    },{_id:true});

    const schema= new mongoose.Schema({
        name:String,
        email:String,
        password:String,
        news:[titleschema]
        


    })

    const model=new mongoose.model('news',schema);


app.post('/news',async(req,res)=>{
    const {name,email,password}=req.body;
    try{
        const newdata= model({name,email,password})
       await newdata.save();
        return res.status(201).json(newdata);
    }
    catch(err){
        console.err("error while uploading",err);
        res.status(500).json({message:"Internal server error."})
    }
})



app.post('/news/:id/news',upload.none(),async(req,res)=>{
          const {type,title,about,description,date,image,timestamp}=req.body;
          const {id}=req.params;
         
          try{
               const user=await model.findById(id);
               if(!user){
                return res.status(401).json({message:"user not found."})
               }
               if(!title||!description||!date||!image){
                return res.status(400).json({message:"All field are required"})
               }
               if(!Array.isArray(user.news)){
                user.news=[];
               }
               user.news.push({type,title,about,description,date,image,timestamp})
               await user.save();
               res.status(200).json(user)
          }
          catch(err){
            console.log(err)
            return res.status(500).json({message:"Internal server error."})
          }
})


app.get('/news',async(req,res)=>{
    try{
        const list=await model.find();
        res.status(201).json(list);
    }
     catch(err){
        console.log(err)
        res.status(500).json({message:err.message});

    }
})


app.get('/news/:id/news',async(req,res)=>{
  

    try{
        const {id}=req.params;
        const list=await model.findById(id);
        res.status(201).json(list);
    }
     catch(err){
        console.log(err)
        res.status(500).json({message:err.message});

    }
})


app.get('/news/:id/news/:id1',async(req,res)=>{
  

    try{
       const { id, id1 } = req.params;

    const user = await model.findOne(
      { _id: id, 'news._id': id1 },
      { 'news.$': 1 }     );
        res.status(201).json(user);
    } 
     catch(err){
        console.log(err)
        res.status(500).json({message:err.message});

    }
})

app.put('/news/:id/news/:id1', async (req, res) => {
    const { id, id1 } = req.params;
    const { title, description } = req.body;

    try {
        const user = await model.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newsItem = user.news.id(id1);
        if (!newsItem) {
            return res.status(404).json({ message: 'News item not found' });
        }

        newsItem.title = title || newsItem.title;
        newsItem.description = description || newsItem.description;

        await user.save();
        res.status(200).json({ message: 'News updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



app.get('/news/news', async (req, res) => {
    try {
        const list = await model.aggregate([
            { $unwind: "$news" },
            { $sort: { "news.timestamp": -1 } }, 
            { $replaceRoot: { newRoot: "$news" } } 
            ]);

        res.status(200).json(list); 
    } catch (err) {
        console.error("Error fetching news:", err);
        res.status(500).json({ message: err.message });
    }
});



app.get('/news/headline',async(req,res)=>{
    try{
        const headline=await model.aggregate([
            { $unwind: "$news" }, { $sort: { "news.timestamp": -1 } }, 
            { $match: { "news.type": "Headlines" } }, 
            { $replaceRoot: { newRoot: "$news" } }    ]);
              res.status(201).json(headline);
    }
    catch(err){
       console.log(err)
        res.status(500).json({message:err.message})
    }
    
})

app.get('/news/india',async (req,res)=>
{
    try{
        const indianews=await model.aggregate([
            {$unwind:'$news'},{ $sort: { "news.timestamp": -1 } }, 
            {$match:{"news.type":"India"}},
            {$replaceRoot:{newRoot:"$news"}}
        ]);
        res.status(201).json(indianews);
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:err.message})
    }
})

app.get('/news/movies',async (req,res)=>
{
    try{
        const movies=await model.aggregate([
            {$unwind:'$news'},{ $sort: { "news.timestamp": -1 } }, 
            {$match:{"news.type":"Movies"}},
            {$replaceRoot:{newRoot:"$news"}}
        ]);
        res.status(201).json(movies);
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:err.message})
    }
})

app.get('/news/sports',async (req,res)=>
{
    try{
        const sports=await model.aggregate([
            {$unwind:'$news'},{ $sort: { "news.timestamp": -1 } }, 
            {$match:{"news.type":"Sports"}},
            {$replaceRoot:{newRoot:"$news"}}
        ])
        res.status(201).json(sports);
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:err.message})
    }
})


app.get('/news/health',async (req,res)=>
{
    try{
        const health=await model.aggregate([
            {$unwind:'$news'},{ $sort: { "news.timestamp": -1 } }, 
            {$match:{"news.type":"Health"}},
            {$replaceRoot:{newRoot:"$news"}}
        ])
        res.status(201).json(health);
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:err.message})
    }
})

app.get('/news/science',async (req,res)=>
{
    try{
        app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

        const science=await model.aggregate([
            {$unwind:'$news'},{ $sort: { "news.timestamp": -1 } }, 
            {$match:{"news.type":"Science"}},
            {$replaceRoot:{newRoot:"$news"}}
        ])
        res.status(201).json(science);
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:err.message})
    }
})

app.get('/news/business', async (req, res) => {
    console.log("Request received at /news/business");

    try {
        app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

        const business = await model.aggregate([
            { $unwind: '$news' },{ $sort: { "news.timestamp": -1 } }, 
            { $match: { "news.type": "Business" } },
            { $replaceRoot: { newRoot: "$news" } }
        ]);
        res.status(201).json(business); 
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
});



app.get('/news/india',async (req,res)=>
{
    try{
        const indianews=await model.aggregate([
            {$unwind:'$news'},{ $sort: { "news.timestamp": -1 } }, 
            {$match:{"news.type":"India"}},
            {$replaceRoot:{newRoot:"$news"}}
        ])
        res.status(201).json(indianews);
    }
    catch(err){
        console.log(err)
        res.status(500).json({message:err.message})
    }
})



app.delete('/news/:id/news/:id2',async (req,res)=>{
    try{
     const { id, id2 } = req.params;

   
    const updatedUser = await model.findByIdAndUpdate(
      id,
      { $pull: { news: { _id: id2 } } }, 
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User or news not found" });
    }

    res.status(200).json({ message: "News deleted successfully", updatedUser });
  } catch(err){
        console.log(err)
        res.status(500).json({message:err.message});

    }
})




const port=process.env.PORT || 4000
app.listen(port,()=>{
    console.log("the server responding at" + port)
})
