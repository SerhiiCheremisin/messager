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


// other utilities
export type kindType = "newUser" | "oldUser";
export type userDataType = "name" | "lastName" | "password" | "nickName";

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

 

