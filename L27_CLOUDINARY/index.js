const express = require("express");
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const path = require("path");
require("dotenv").config(); 

//CLOUDINARY
const cloudinary = require('cloudinary').v2;



cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


app.post("/profile", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json({ url: result.secure_url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/// TEMPLATE ENGINE USING HBS

var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


app.get("/",(req,res)=>{
  res.render('home.hbs',{
    firstname:"Palak",
    lastname: "Singla"
  })
})


app.get("/products",(req,res)=>{
  res.render('products.hbs',{
  products: [
    "Watch",
    "Shirts",
    "Sunglasses",
  ],
})
})


app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json({ url: result.secure_url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});





