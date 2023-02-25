import {getUsers, saveUser} from "../services/user.service.js";

export const getUsersController = async(req,res)=>{
    try {
        const response = await getUsers();
        res.json({
            status:"SUCCESS",
            data:response
        });
    } catch (error) {
        res.json({
            status:"ERROR",
            message:`Hubo un error ${error}`
        });
    }
}

export const saveUserController = async(req,res)=>{
    try {
        const response = await saveUser(req.body);
        res.json({data:response});
    } catch (error) {
        res.json({message:`Hubo un error ${error}`});
    }
}