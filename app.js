const express=require('express')
const app=express()




app.get('/api/:date',(req,res)=>{
          
    const {date}=req.params

         if(!date){
             var dat=new Date(); 
         }
         if(!isNaN(date)){
             dat = new Date(parseInt(date)); 
         }
          else{
             dat = new Date(date); 
          }
         
         console.log(dat)
  
       if(dat.toString()=="Invalid Date"){
       return res.json({"error":dat.toString()});
   }    
  res.json({unix:dat.valueOf(),"utc":dat.toUTCString()})
  })
  
  module.exports=app


  








