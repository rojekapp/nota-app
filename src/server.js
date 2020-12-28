import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb'
import path from 'path'

const app = express();
app.use(express.static(path.join(__dirname,'/build')))
app.use(bodyParser.json())

const wthDB = async (operations,res) =>{
        try{
            const client = await MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser:true,useUnifiedTopology:true})
            const db = client.db('nota-app')
           await operations(db);
            client.close();
        }catch(err){
            res.status(500).json({message:'error connecting to db',err})
        }
}

app.post('/api/add',async (req,res)=>{
    wthDB(async(db) => {
        const {nota,pesanan, tanggal, total,barang} = req.body;
        const insert = await db.collection('nota').insertOne({nota,pesanan, tanggal, total,barang})
        const pep = await db.collection("nota").find({}).toArray();
        res.status(200).json(pep)
    },res)
})

app.get('/api/list',async (req,res)=>{
    wthDB(async(db) => {
        
        const pep = await db.collection("nota").find({}).toArray();
        res.status(200).json(pep)
    },res)
})

app.get('/api/drop',async (req,res)=>{
    wthDB(async(db) => {
        
        const pep = await db.collection("nota").drop()
        res.status(200).json(pep)
    },res)
})

app.post('/api/nota',async (req,res)=>{
   
    const tanggal = req.body.tanggal;
    wthDB(async(db) => {
        
        const pep = await db.collection("nota").find({tanggal:tanggal}).toArray();
       
       
        res.status(200).json(pep)
    },res)
});

app.post('/api/delete',async (req,res)=>{
   
    const nota_list = req.body.nota;

    wthDB(async(db) => {
        
var myquery = { nota: { $in: nota_list } };
  
        const pep = await db.collection("nota").deleteMany(myquery);
       
       
        res.status(200).json(pep)
    },res)
});

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname+"/build/index.html"));
})

app.listen(8000,()=>console.log('Listening on port 8000'))