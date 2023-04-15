require('dotenv').config();
const express=require('express');
const app=express();
const cors=require('cors');
const path=require('path');
const bodyparser=require('body-parser');
const db=require('./db/db');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/password_reset");
const multer=require('multer');
const edutionaldetailsroutes=require("./routes/sign1");
const inscriberoutes=require("./routes/inscribe");
//connecting to database
db();

//middleware
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use(express.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization'
    ]
  })
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// Other middleware and routes go here...


// const storage = multer.memoryStorage();

// const upload = multer({
//   storage: storage,
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname+"public/assets"));
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

  // routes
app.use("/api/users", userRoutes);
app.use("/api/users/educationdetails",upload.single("image"),edutionaldetailsroutes);
app.use((err,req,res,next)=>{
  if (err instanceof multer.MulterError) {
    console.log(err);
    // res.status(400).send('File upload error: ' + err.message);
  } else {
    
    console.error(err);
    res.status(500).send('Internal server error');
  }
})


app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);
app.use("/api/inscribe",inscriberoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));

