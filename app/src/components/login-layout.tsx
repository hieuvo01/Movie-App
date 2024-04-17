'use client';

import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import axios from 'axios'
import {useRouter} from 'next/navigation'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link';

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

export default function LoginLayout() {
  const route = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await axios({
        method: 'post',
        url: `http://localhost:3001/auth/login/user`,
        data: values
      });
      localStorage.setItem('token', JSON.stringify(response.data.token));
      console.log(response);
      alert('Successfully logged in!');
      window.location.href = '/';

    } catch (error) {
      console.error("Login Error:", error);
    }
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  })
  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 mt-24">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Log into your account!</h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-20">
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
              render={({ field }) => (
                <FormItem>
                </FormItem>
              )} name={''}            />
            <Button type="submit">Login</Button>
            <h4>Are you new to this site? <Link className='text-sky-400' href="/register">Register now!</Link></h4>
          </form>
        </Form>
      </div>
    </div>
  )
}
