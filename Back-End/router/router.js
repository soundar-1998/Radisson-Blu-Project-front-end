const express=require('express');
const router=express.Router()
const signupCopy=require('../model/SignUpModel')

router.post('/signup',(request,response)=>
{
    const form_data=new signupCopy(
        {
            firstname:request.body.firstname,
            lastname:request.body.lastname,
            email:request.body.email,
            password:request.body.password,
            confirmpassword:request.body.confirmpassword,
            contact:request.body.contact,
            flatno:request.body.flatno,
            area:request.body.area,
            pincode:request.body.pincode,
            landmark:request.body.landmark,
            towncity:request.body.towncity,
            state:request.body.state,
            country:request.body.country,
            addaddress:request.body.addaddress
           
    })
    form_data.save().then (data=>
    {
        response.json(data);
        console.log(data);
        console.log("Register_Data added successfully") 
    }).catch(error=>
    {
        console.log(error);
        response.json(error);
    })
    
})
module.exports=router;