'use client'
import React from 'react'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'


const formSchema = z.object({
  id: z.string().min(5, {
    message: "Secret id must be at least 5 characters long",
  }),
  name: z.string().min(5, {
    message: "Your name must be at least 5 characters long and is valid.",
  }),
  username: z.string().min(4, { message: "Username must be at least 4 characters long"}).max(8, {
    message: "Username must be at least 4 characters long, maximum 8 characters long and is not empty!",
  }),
  password: z.string().min(8, {
    message: "Password should be combination of one uppercase , one lower case, one special char, one digit and min 8",
  }),
  email: z.string().email({ message: "Your email is not valid"}).min(6, {
    message: "Email must be at least 6 characters and is not empty!.",
  }),
  phone: z.string().min(10).max(10, {
    message: "Your phone number is too long or too short.",
  }),
})

export default function RegisterLayout() {
  const route = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios({
        method: 'post',
        url: `http://localhost:3001/auth/register/`,
        data: values
      });
      localStorage.setItem('token', JSON.stringify(response.data.token));
      console.log(response.data);
      alert("Your account has been registered!")
      route.push('/login');

    } catch (error) {
      console.error("Register Error:", error);
    }
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      username: "",
      password: "",
      email: "",
      phone: ""
    },
  })
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 mt-24">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to get started</p>
        </div>
        <div className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-20">
          <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>User code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your secret code (Example: 25412)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your username here" {...field} />
                  </FormControl>
                  <FormMessage />
              </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
            </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='email' placeholder="Your email address" {...field} />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
            />
            <FormField
              render={({ field }) => (
                <FormItem>
                </FormItem>
              )} name={''}            />
            <Button type="submit">Register</Button>
          </form>
        </Form>
        </div>
        <h4>Already have an account? <Link className='text-sky-400' href="/login">Login</Link></h4>
      </div>
    </div>
  )
}
