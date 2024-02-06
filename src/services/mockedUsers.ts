import { messagesArrayType } from "../types/sharedTypes"

export const mockedUsers: string[] = [
  "robot", "Niko", "me myself and Iren"
]

export const mockedMessages : messagesArrayType[] = [
  {
    from : 'bot',
    to: 'test',
    date: "2024-01-16T12:29:48+01:00",
    message: 'Hi i am the bot. And that is my message'
  },
  {
    from : 'nikitos',
    to: 'test',
    date: '2023-05-07T12:29:48+01:00',
    message: 'Where is my money test user?'
  },
  {
    from : 'nikitos',
    to: 'test',
    date: '2023-05-07T14:29:48+01:00',
    message: 'I am waiting'
  },
  {
    from : 'inkognito',
    to: 'test',
    date: '2023-05-08T14:29:48+01:00',
    message: 'Niko told me you own him money'
  },
  {
    from : 'test',
    to: 'inkognito',
    date: '2023-05-08T15:29:48+01:00',
    message: 'I have never heard of this Niko'
  },
  {
    from : 'inkognito',
    to: 'test',
    date: '2023-05-08T16:29:48+01:00',
    message: 'He told me different things'
  },
  {
    from : 'test',
    to: 'inkognito',
    date: '2023-05-08T17:29:48+01:00',
    message: 'He is not decent person and has history of lying'
  },
]