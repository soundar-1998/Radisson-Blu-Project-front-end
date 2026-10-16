const mongoose= require('mongoose')
const signUpTemplate= new mongoose.Schema({
    firstname:{type:String,
        required:true
    },  
    lastname:{type:String,
        required:true
    },
    email:{type:String,
        required:true
    },
password:{type:String,
        required:true
},
confirmpassword:{type:String,
required:true
},
contact:{type:String,
required:true
},flatno:{type:String,
    required:true}
,area:{type:String,
required:true
},
pincode:{type:String,
required:true
},
landmark:{type:String,
required:true
},
towncity:{type:String,
required:true
},
state:{type:String,
required:true
},
country:{type:String,
required:true
},
addaddress:{type:String,
required:true
},                                                      
date:{
type:Date,
default:Date.now
    }
})
//colletion name:register_details
module.exports=mongoose.model('customer-details',signUpTemplate);

//db-router--app.js
//model(db) --->router(app.post)--->server.js