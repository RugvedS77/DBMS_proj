const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    customerID:{
        type: Number,
        unique : true
    },
    username:{
        type: String,
        required : true,
        unique : true
    },
    email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    },
    age:{
        type: Number,
    },
    gender:{
        type: String,

    },
    address:{
        type: String,
    },
    state:{
        type: String,
    },
    country:{
        type: String,
    },
    PIN:{
        type: Number,
    }
} ,{
    timestamps : true,
}
);

userSchema.pre('save',async function (next){
    const user = this;

    if(user.isNew && user.customerID == null){
        try{
                let isUnique = false;
                while (!isUnique) {

                const latestUser = await mongoose.model('user').findOne().sort({ customerID: -1});

                user.customerID = latestUser ? latestUser.customerID+1 : 101;
                const existingUser = await mongoose.model('user').findOne({ customerID: user.customerID});
            
                if(!existingUser){
                    isUnique = true;
                }
                console.log(`Assigning customerID: ${user.customerID}`); // Log for debugging
            }
            next();
        }catch (err){
            console.error('Error generating customerID:', err);
            next(err);
        }
    }else{
        next()
    }
})

const user = new mongoose.model("user",userSchema)

module.exports = user;