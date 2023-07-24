const dbConnect=require('./mongodb')

// ye promise handle krne ka tarika
// dbConnect().then((resp)=>{
//  resp.find().toArray().then((data)=>{
//    console.log(data);
//  })
// })



// dusra method 
const main= async ()=>{
   let data= await dbConnect();
   data = await data.find().toArray();
   console.log(data);
}
main();










// // Connect Node with MongoDB

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://127.0.0.1:27017';
// // const url = 'mongodb://host:127.0.0.1';
// const database='e-comm';
// const client = new MongoClient(url);

// async function getData(){

//    let result=await client.connect();
//    let db= result.db(database);
//    let collection=db.collection('products');
//    let response = await collection.find({}).toArray();
//    console.log(response);
   
// }

// getData();








// Middleware 
// const express=require('express'); 

// // ye jo alg se bnaya usko export kiya
// const reqFilter=require('./middleware');  
// const app=express(); 
// const route=express.Router();


// isko alg se bhi kam file me bna sakte hai
// const reqFilter=(req,resp,next)=>{
//     if(!req.query.age){
//         resp.send('Please provide age');
//     }
//     else if(req.query.age<18){
//         resp.send('Your are under age');
//     }
//     else{
//         next();
//     }
     
// }

// aise ye sabpe lag jayega,
// individual ke liye hme unke nadar rakhna padega
// app.use(reqFilter);

// route.use(reqFilter);
// app.get('/',(req,resp)=>{

//     resp.send('hello, mai abhi');

// });

// app.get('/about',(req,resp)=>{

//     resp.send('exploring something new');

// });

// route.get('/life',(req,resp)=>{

//     resp.send('exploring something new');

// });
// route.get('/contact',(req,resp)=>{

//     resp.send('exploring something new');

// });

// app.use('/',route);

// app.listen(5000);










// //engine  template
// const express=require('express');
// const path=require('path'); 

// const app=express();
// const publicPath=path.join(__dirname,'public'); 

// app.set('view engine','ejs');

// app.get('',(req,resp)=>{
//     resp.sendFile(`${publicPath}/home.html`);
// });

// app.get('/profile',(req,resp)=>{
//     const user={
//         name:'abhi',
//         email:'abhirai@gmail.com',
//         skill:['c++','js','flutter'],
//     }
//     resp.render('profile',{user});
// });

// app.get('/login',(req,resp)=>{
//     const user={
//         name:'abhi',
//         email:'abhirai@gmail.com',
//         skill:['c++','js','flutter'],
//     }
//     resp.render('login',{user});
// });

// app.get('/about',(req,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`);
// });

// app.listen(5000);






// // Make HTML Pages
// const express=require('express');
// const path=require('path'); 

// const app=express();
// const publicPath=path.join(__dirname,'public'); 

// // app.use(express.static(publicPath));

// // extension remove krne ke liye hm get ka use krenge

// app.get('',(req,resp)=>{
//     resp.sendFile(`${publicPath}/home.html`);
// });

// app.get('/about',(req,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`);
// });

// // kuchh na dikhe to ye dikha dena
// app.get('*',(req,resp)=>{
//     resp.sendFile(`${publicPath}/nopage.html`);
// });

// app.listen(5000);








// // Expess JS
// const express=require('express');
// const app=express();

// app.get('',(req,res)=>{
//     res.send('<h1> sikh rhe hai</h1>');
// });

// app.get('/about',(req,res)=>{
//     res.send('kr lenge');
// })

// app.listen(5000);







// CRUD with files system
// const fs=require('fs'); 
// const path=require('path'); 
// const dirPath=path.join(__dirname,'curd'); 
// const filePath=`${dirPath}/life.txt`; 

// file ho gyi create
// fs.writeFileSync(filePath,'Abhi this side');

// ab krte hai file ko read
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })

// file update karna hai
// fs.appendFile(filePath,' hare krishna',(err)=>{
//     if(!err)
//     console.log("file updated");
//     else
//     console.log("Error Found");
// })
// fs.rename(filePath,`${dirPath}/lifeUpdated.txt`,(err)=>{
//     if(!err)
//     console.log("file renamed");
// })
// fs.unlinkSync(`${dirPath}/lifeUpdated.txt`);









// // // Show file List
// const fs=require('fs'); 
// const path=require('path');
// const dirpath=path.join(__dirname,'Files'); 
// console.log(dirpath)

// // for(i=0;i<5;i++){
// //     fs.writeFileSync(dirpath+"/hello"+i+".txt","my name is abhi");
// // }
// // ab suppose hme read krna hai files ko to kaise karenge 

// fs.readdir(dirpath,(err,files)=>{

//     // aise ek array me read hoga
//     // console.log(files);

//     // alg read krne ke liye
//     files.forEach((item)=>{
//         console.log(item);
//     })

// })



// extra learning 
// const fs=require('fs'); 
// const input = (process.argv);

// // fs.writeFileSync(process.argv[2],process.argv[3]);
// fs.unlinkSync(input[2]);








// Input From Command Line
// console.log( process.argv);
// const fs=require('fs'); 

// const input = (process.argv);

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log("invalid input");
// }








// ....API
// const http = require('http'); 
// const data=require('./data')
// http.createServer((req,resp)=>{

//     resp.writeHead(200,{'content-type' : 'application\json'});
//     resp.write(JSON.stringify(data)); 
//     resp.end();
// }).listen(5000);








// .......

// var colors = require('colors');
// // const chalk = require('chalk');
// // console.log(chalk.blue('Hello world!'));

// // console.log(chalk.green("hare krishna"));

// console.log("hello bachcho".red);







// .......

// const http = require('http')

// http.createServer((req,resp)=>{
//     resp.write("<h1>hare krishna</h1>")
//     resp.end();
// }).listen(5000);








// ......


// const app = require('./app')

// // console.log(app)

// const arr=[1,3,2,4,5,6,7,9];

// let result = arr.filter((item)=>{

//     return item%2===0;

//     // if(item%2==0)
//     // console.log(item);
// })

// console.log(result)



