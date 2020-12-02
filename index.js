const express=require('express');
const app=express();
const port=8001;
app.use('/',require('./routes'));
const db=require('./config/mongoose');
app.listen(port,function(error){
 if(error){
          console.log('error!!!',error)
 }
 console.log('my server is running on the port=',port);
})

