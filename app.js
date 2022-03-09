const express=require('express')
const app=express()
const moment=require('moment')



app.get('/api/:val',(req,res)=>{
    let pattern=/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/gm
    const {val}=req.params
   if (pattern.test(val)){
           const d = new Date(val);
           let text = d.toUTCString();
           console.log(d);
           console.log(text);
           var unixvalue=moment(text).unix()*1000
           return res.status(200).json({unix:unixvalue})}
    
    else {
        dateObj = new Date((val/1000)*1000);
       d = dateObj.toUTCString();
       console.log(d);
        return res.status(200).json({"UTC":d})
    }
  })
  
  module.exports=app


  








