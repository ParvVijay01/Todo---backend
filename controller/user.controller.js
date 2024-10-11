const UserService = require('../services/user.services');

exports.register = async(req,res,next) => {
    try {
        const {email,password} = req.body;

        const successRes = await UserService.registerUser(email,password);

        res.json({status: true, success:"User Registered Successfully!!"});
    } catch (error) {
        throw error;
    }
}

exports.login = async(req,res) => {
    try {
        const {email,password} = req.body;
        const user = await UserService.loginUser(email);
        if(!user){
           throw new Error("User doesn't exist!!");
        }

        const isMatch = user.comparePassword(password);
        if(isMatch == false){
            throw new Error("Invalid Password!!");
        } 

        let tokenData = {_id: user._id, email: user.email}

        const token =await UserService.generateToken(tokenData, "secretkey", '1h');

        res.status(200).json({status: true, token: token});
        
    } catch (error) {
        throw error;
    }
}