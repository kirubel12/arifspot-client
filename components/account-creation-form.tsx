'use client'
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from '@/hooks/auth'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import Link from 'next/link'

export function AccountCreationForm() {
    const [isLoading, setIsLoading] = useState(false)
    // Add state for errors
    const [errors, setErrors] = useState<string[]>([])

    const { register: registerUser } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard'
    })
    const formSchema = z.object({
        name: z.string().min(2, {
            message: "Name must be at least 2 characters.",
        }),
        email: z.string().email({
            message: "Please enter a valid email address.",
        }),
        password: z.string().min(8, {
            message: "Password must be at least 8 characters.",
        }),
        passwordConfirmation: z.string().min(8, {
            message: "Password must be at least 8 characters"
        })
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        setErrors([]) // Clear previous errors

        registerUser({
            name: values.name,
            email: values.email,
            password: values.password,
            password_confirmation: values.passwordConfirmation,
            setErrors: (errorMessages: any) => {
                setIsLoading(false)
                // Handle server-side errors
                if (errorMessages.email) {
                    form.setError('email', {
                        type: 'server',
                        message: errorMessages.email[0]
                    })
                }
                if (errorMessages.name) {
                    form.setError('name', {
                        type: 'server',
                        message: errorMessages.name[0]
                    })
                }
                if (errorMessages.password) {
                    form.setError('password', {
                        type: 'server',
                        message: errorMessages.password[0]
                    })
                }
                if (errorMessages.password_confirmation) {
                    form.setError('passwordConfirmation', {
                        type: 'server',
                        message: errorMessages.password_confirmation[0]
                    })
                }
                setErrors(Object.values(errorMessages).flat())
            }
        })
    }

    return (
        <Card className="w-[450px]">
            <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>Enter your details to register</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"

                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
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
                                        <Input id='email' type="email" placeholder="john@example.com" {...field} />
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
                                        <Input id='password' type="password" placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="passwordConfirmation"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password Confirmation</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="password" placeholder="********" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Creating..." : "Create account"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="mt-2 text-center text-sm gap-2">
                Have an account ?
                <Link href="/login" className="">
                    <span className='text-indigo-700'>Login</span>
                </Link>
            </CardFooter>

        </Card>
    )
}
