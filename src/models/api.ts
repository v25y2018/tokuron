import { 
    DBChat,
    DBCreateChat,
    DBCreateMessage,
    DBCreateUser,
    DBMessage,
    DBUser,
 } from "./db";

 export type APICreateUser = DBCreateUser;
 export type APIUser = Omit < DBUser, "password">;

 export type APICreatechat = DBCreateChat;
 export type AIPChat = DBChat;

 export type APICreateMessage = DBCreateMessage;
 export type APIMessage = DBMessage;