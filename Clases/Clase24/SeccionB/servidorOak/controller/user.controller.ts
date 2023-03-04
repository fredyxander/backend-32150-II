import { Context, helpers } from "../depts.ts";
import {User} from "../model/dbModels/user.ts";

const users:Array<User> = [];

export const findUserAll = (ctx:Context):void=>{
    try {
        ctx.response.status=200;
        ctx.response.body={data:users}
    } catch (error) {
        ctx.response.status = 401;
        ctx.response.body = {message:`hubo un error ${error.message}`} //res.json
    }
}

export const findUserById = (ctx:Context)=>{
    try {
        const {id} = helpers.getQuery(ctx,{mergeParams:true});//req.params;
        const user = users.find(u=>u.id === id);
        ctx.response.body = {data:user}
    } catch (error) {
        ctx.response.status = 401;
        ctx.response.body = {message:`hubo un error ${error.message}`}
    }
}

export const createUser = async(ctx:Context)=>{
    try {
        const {name, age} = await ctx.request.body().value;//req.body
        const newUser:User = {
            id:Math.random().toString(),
            name:name,
            age:age
        };
        users.push(newUser);
        ctx.response.status = 200;
        ctx.response.body={data:newUser}
    } catch (error) {
        ctx.response.status = 401;
        ctx.response.body = {message:`hubo un error ${error.message}`} //res.json
    }
}