import * as z from 'zod';

export const loginSchema = z.object({

    email : z.string().email({message:"Enter correct Email"}),
    password : z.string().min(6 ,{
        message:"Password is required"
    })

})