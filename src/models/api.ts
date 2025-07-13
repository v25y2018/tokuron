import type { 
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
 export type APIChat = DBChat;

 export type APICreateMessage = DBCreateMessage;
 export type APIMessage = DBMessage;