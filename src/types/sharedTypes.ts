// redux types
export interface IUserSlice {
    activeUser: String,
    talkingTo: String
}

// props

export interface ISingleMessageProps {
    message : String,
    date: String,
    position: "user" | "opponent"
  }


// other utilities
export type kindType = "newUser" | "oldUser";
export type userDataType = "name" | "lastName" | "password" | "nickName";

// database
export type userType = {
  name?: String,
  lastName?: String,
  password: String,
  nickName: String,
}

export type messagesArrayType = {
    from : String,
    to: String,
    date: String,
    message: String
  }

 

