const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({

    userName:{
        type:String,
        required:[true,"userName is required"]
    },
    email:{
        type:String,
        required:[true,"Your email is required"],
        unique:true
    },
    mobileNumber:{
        type:Number,
        required:[true,"Mobile Number is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },

    date:{
        type:Date,
        default:Date.now
    }
})
userSchema.pre("save",async function(next){

    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    next;

});
userSchema.statics.login = async function(email,password){
    const user = await this.findOne({email});
    if(user){
      
            const auth = await bcrypt.compare(password,user);
            if(auth){
                return user;
            }
            throw Error ("Incorrect Password");
            <div className="col-lg-12 col-md-12 col-sm-12">
            <fieldset>
              <input
                name="name"
                type="password"
                className="form-control"
                id="reenter_password"
                placeholder="Reenter Password"
              />
            </fieldset>
          </div> }
        throw Error ("Incorrect email")
        
    
}

module.exports = mongoose.model('User',userSchema)