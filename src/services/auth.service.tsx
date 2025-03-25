import UserData from "../model/UserData.model";
import API from "./api.service";

 
 export const login = async (email:String, password:String) =>{
    const response = await API.post("/auth/login", {email,password})
    return  response.status == 200 ?  response.data : null;
 }

 export const register = async(userData : UserData)=>{
    const response = await API.post("/member/create",userData);
    return response.status == 200 ?  response : null;
 }

