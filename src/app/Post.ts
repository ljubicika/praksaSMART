import { User } from './User';

export interface Post{
    title:string;
    content:string;
    owner:User;
}