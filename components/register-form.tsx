'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { formSchema } from '@/lib/schema'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ReloadIcon } from '@radix-ui/react-icons'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '@/components/ui/form'
import { createSafeSignup } from '@/app/actions'
import { useAction } from 'next-safe-action/hooks'
import Success from './ui/success'

export function RegisterForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            company: '',
            title: '',
            email: '',
            phone: ''
        }
    })

    const { execute, status, result } = useAction(createSafeSignup, {
        onSuccess(data) {
            if (data?.error) console.log('Form error')
            if (data?.success) console.log('Successfully submitted signup')
        },
        onExecute(data) {
            console.log('Creating signup')
        }
        // onError(error) {}
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        execute(values)
    }

    if (status === 'hasSucceeded') {
        return <Success />
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Name"
                                    className="text-md"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Company"
                                    className="text-md"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Title"
                                    className="text-md"
                                    {...field}
                                />
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
                                <Input
                                    placeholder="Email"
                                    className="text-md"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
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
                                <Input
                                    placeholder="Phone"
                                    className="text-md"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="pt-2">
                    <Button
                        disabled={status === 'executing'}
                        type="submit"
                        className="w-full rounded-full bg-brand-500 text-white transition-colors duration-200 hover:bg-brand-500/90 hover:text-white"
                    >
                        {status === 'executing' && (
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Register
                    </Button>
                </div>
            </form>
        </Form>
    )
}
