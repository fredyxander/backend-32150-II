import {getUsers, saveUser} from "../services/user.service.js";

export const getUsersController = async(req,res)=>{
    try {
        const users = await getUsers();
        res.render("html-onwire",{personas:users});
    } catch (error) {
        res.send(`Hubo un error ${error}`)
    }
}

export const saveUserController = async(req,res)=>{
    try {
        await saveUser(req.body);
        res.redirect("/");
    } catch (error) {
        res.send(`Hubo un error ${error}`)
    }
}