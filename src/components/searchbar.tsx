'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@src/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@src/components/ui/form'
import { Input } from '@src/components/ui/input'

const formSchema = z.object({
    query: z.string().min(1, { message: 'Enter at least 1 character.' }),
})

export function SearchBar() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            query: '',
        },
    })

    const onSubmit = (data: { query: string }) => {
        console.log('Search query:', data)
        // Handle the search logic here
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="py-8 space-y-8 flex flex-col items-center"
            >
                <FormField
                    control={form.control}
                    name="query"
                    render={({ field }) => (
                        <FormItem className="w-full flex flex-col items-center">
                            <FormLabel className="block text-center text-xl font-bold">
                                Search
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Milk, Eggs, Bread..."
                                    {...field}
                                    className="max-w-lg"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Search</Button>
            </form>
        </Form>
    )
}
