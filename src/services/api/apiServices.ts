import axios from "axios";
import { userType } from "../../types/sharedTypes";

export const getAllUsersData = async ():Promise<any> => {
 try {
  const request = await axios({ method: 'get',
  url: 'http://localhost:3200/users'});
  return request;
 }
 catch(error) {
  console.log(error)
 }
}

export const setNewUserToDB = async (user: userType):Promise<any> => {
  try {
    const request = await axios({
      method: 'post',
      url: 'http://localhost:3200/users',
      headers: {},
      data: { 
          name: user.name,
          lastName: user.lastName,
          password: user.password,
          nickName: user.password,
      }
    })
    return request;
  } 
  catch (error) {
    console.log(error)
  }
}

export const getOpponents = async (nickName: string) : Promise<any> => {
 try {
  const request = await axios ({ method: 'get',
  url: `http://localhost:3200/messages/${nickName}`});
  return request;
 } 
 catch (error) {
  console.log(error)
 }
}