const mongoose =require('mongoose');
const bcrypt=require('bcryptjs');
const validator=require('validator');
const UserSchem=new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unqiue: true
    },
    email:{
        type: String,
        required:true,
        unique: true,
        validate: [validator.isEmail,'Invalid Email']

    },
    phone: {
        type: String,
        required: true,
        unique: true,
        minlength: 13,
        maxlength: 13,
        validate: {
          validator: function (v) {
            return /^\+\d{12}$/.test(v);
          },
            message: props => '${props.value} is not a vlaid phone number'
        },
    },
    password:{
        type: String,
        required: true,
        minlength:8
    },
    gender:{
        type:String,
        enum:['male','female','prefer not to say'],
        required: true
    },
    dob:{
        type:  Date,
        required: true
    },
    createdAt: {type:Date,default: Date.now}
});
UserSchem.pre('save',async function (next){
    if(!this.isModified('password')) return next();
    const preg=/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    if(!preg.test(this.password)){
        throw new Error('Password must contain atleast 8 characters , 1 uppercase , 1 digit and symbol');
    }
    const salt =await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
module.exports=mongoose.model('User',UserSchem);
