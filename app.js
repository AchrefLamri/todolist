const express = require('express');
let date = require('./date');

const app = express();

console.log()

// express body parser (req.body)
app.use(express.urlencoded({extended :true}));
//------------------------------------- 
// middleware and static files to import style files and imgs
//------------------------------------- 
app.use(express.static('public'));
//-------------------------------------

// register view engine
app.set('view engine','ejs');



// Global variables
let workItems = ['finsh EJS','Finsh DB','Start Freelancing'];
let items = ['Buy Food','Make Food','Eat Food'];
let item = '';

app.get('/',(req,res)=>{

   
    res.render('list',{listTitle:date.getDay() + ' ' + date.name,items:items})
    
});

app.get('/work',(req,res)=>{
    
    res.render('list',{listTitle:'work',items:workItems})
})

// app.post('/work',(req,res)=>{
//     let newItem = req.body.newItem;
//     workItems.push(newItem);
//     res.redirect('/work');
// });

app.post('/',(req,res)=>{

    item = req.body.newItem;
    let list = req.body.list;
    
    if(list === 'work'){
        workItems.push(item);
        res.redirect('/work');
    }
   
    items.push(item);
    res.redirect('/');

})

app.use((req,res)=>{
    res.status(404).render('404');
})
app.listen(3000,()=>{
    console.log("the server is running from port 3000");
});