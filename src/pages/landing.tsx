import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { foodDetailsApi } from '@src/pages/apis/nutrition'
import { Button } from '@src/components/ui/button'

const Landing = () => {
    const [search, setSearch] = useState<string>('')

    const sendData = useMutation({
        mutationFn: async (search: string) => {
            const config = {
                method: 'get',
                url: foodDetailsApi,
                params: { search },
            }

            return await axios(config)
        },
        onSuccess: (data) => {},
    })

    const submitFunc = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        sendData.mutate(search)
        setSearch('')
    }

    return (
        <>
            <div className="py-8 space-y-8 flex flex-col items-center outline-dashed h-screen justify-center">
                <form onSubmit={submitFunc} className="flex flex-col w-1/2">
                    <h2 className="text-3xl text-center font-semibold mb-6">Search</h2>

                    <div className="mb-4">
                        <input
                            type="text"
                            id="search"
                            name="search"
                            className="border rounded w-full py-2 px-3 mb-2 text-black bg-background dark:text-white"
                            placeholder="Milk, Eggs, Bread..."
                            required
                            value={search}
                            onChange={(e) => setSearch(() => e.target.value)}
                        />
                    </div>
                    <div className="flex w-full justify-center">
                        <Button size={'lg'}>Submit</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Landing
