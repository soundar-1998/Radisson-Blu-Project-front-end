const mongoose=require('mongoose')
const signUpTemplate1= new mongoose.Schema({
    firstName:{type:String,
        required:true
    },  
    lastName:{type:String,
        required:true
    },
    email:{type:String,
        required:true
    },
contactNumber:{type:String,
required:true
},bookingDate:{type:String,
    required:true
},outDate:{type:String,
required:true
},
checkIn:{type:String,
required:true
},
checkOut:{type:String,
required:true
},                                                      
date:{
type:Date,
default:Date.now
    }
})
//colletion name:Booking_details
module.exports=mongoose.model('Booking-details',signUpTemplate1);
