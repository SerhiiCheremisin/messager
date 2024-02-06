import axios from "axios";

export const getAllUsersData = async ():Promise<any> => {
 const request = await axios({ method: 'get',
 url: 'http://localhost:3200/users'});
 return request;
}

export const setNewUserToDB = async ():Promise<any> => {
  
}