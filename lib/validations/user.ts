import * as z from 'zod';
export const UserValidation = z.object({
    profile_photo:z.string().url().min(1),
    name:z.string().min(3).max(30,{message:"Name must be between 3 and 30 characters"}),
    username:z.string().min(3).max(30,{message:"Username must be between 3 and 30 characters"}),
    bio:z.string().max(300),

});