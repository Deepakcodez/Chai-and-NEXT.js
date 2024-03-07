"use client"
import CardWrapper from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import * as z from 'zod';
import { loginSchema } from "../../../schemas";
import { log } from "console";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const LoginForm = () => {

   const form = useForm<z.infer<typeof loginSchema >>({
      resolver :zodResolver(loginSchema),
      defaultValues : {
         email : "",
         password : "", 
           
      },
   })
   const onSubmit =(values : z.infer<typeof loginSchema>)=>{
           console.log('>>>>>>>>>>>', values)
   }
    return (
         <>
            <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"  
            showSocial
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                 <div className="space-y-4">
                  <FormField
                  control={form.control}
                  name ="email"
                  render={({field})=>(
                     <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                           <Input
                            {...field}
                            placeholder= "abc@example.com"
                            type="email"

                           />
                        </FormControl>
                     </FormItem>
                  )}
                  />
                  
                  <FormField
                  control={form.control}
                  name ="password"
                  render={({field})=>(
                     <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                           <Input
                            {...field}
                            placeholder= "***********"
                            type="password"

                           />
                        </FormControl>
                     </FormItem>
                  )}
                  />
                  <Button type="submit" className="w-full">Login</Button>

                 </div>
                </form>
               </Form>
                  
            </CardWrapper>
         </> 
    );
}
 
export default LoginForm;