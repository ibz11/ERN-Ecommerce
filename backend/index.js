require('dotenv').config()
const cors=require('cors')
const express=require('express')
const app=express();

let products=require('./products')


app.use(cors(),express.json())

app.get("/",(req,res)=>{
res.status(200).send("Ecommerce API")
})


app.get("/api/reset",(req,res)=>{
    res.status(200).json(products)
})
app.post('/api',(req,res)=>{
const newProd=req.body
console.log(newProd)
products[0].push(newProd)
console.log(res.error)
res.status(200).json({msg:"New Product is added"});

})

app.delete('/api/:id',(req,res)=>{
const id=parseInt(req.params.id)
// books = books[0].filter(book => book.id !== ID);
products=products[0].filter(prod =>prod.id!==id)
res.status(200).json({msg:"Product is deleted"})
})

app.get('/api/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    let product = products[0].find((product) => product.id === id);
    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
        }
    res.status(200).json(product)
})
//API
app.get("/api",(req,res)=>{
    res.status(200).json(products)
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port http://localhost:${process.env.PORT}/`)
})