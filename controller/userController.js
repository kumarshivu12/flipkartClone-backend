import User from "../database/model/userSchema.js";

export const userSignup=async (req,res)=>{
    try {
        // console.log(req.body)
        const exist=await User.findOne({username: req.body.username});
        if(exist){
            return res.status(401).json({message:'Username already exist'});
        }
        const user=req.body;
        const newUser=new User(user);
        await newUser.save();

        res.status(200).json({message:user})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const userLogin =async (req,res)=>{
    try {
        const username= req.body.loginusername;
        const password=req.body.loginpassword;
        const user=await User.findOne({username:username,password:password})
        if(user){
            return res.status(200).json(user)
        }
        else{
            return res.status(401).json('Invalid login details')
        }
    } catch (error) {
        return res.status(500).json('Error',error.message)
    }
}