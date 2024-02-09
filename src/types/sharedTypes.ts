// redux types
export interface IUserSlice {
    activeUser: string,
    talkingTo: string
}

// props

export interface ISingleMessageProps {
    message : string,
    date: string,
    position: "user" | "opponent"
  }

 export interface ICUstomAlertProps  {
 text: string,
 type: alertType,
 cleanUp: Function
} 


// other utilities
export type kindType = "newUser" | "oldUser";
export type userDataType = "name" | "lastName" | "password" | "nickName";
export type alertType = "success" | "info" | "warning" | "error";

export type AlertHandlerType = {
  isShown : boolean,
  text: string,
  type: alertType
}

// database
export type userType = {
  name?: string,
  lastName?: string,
  password: string,
  nickName: string,
}

export type messagesArrayType = {
    from : string,
    to: string,
    date: string,
    message: string
  }

 

