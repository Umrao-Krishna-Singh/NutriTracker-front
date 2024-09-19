import { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import axios from 'axios'

const Login = () => {
    const [data, setData] = useState({ firstName: '', lastName: '' })

    const sendData = useMutation({
        mutationFn: async (val: { firstName: string; lastName: string }) =>
            await axios.post('http://localhost:5001/api/v1/test', val),
    })

    const fetchData = useQuery({
        queryKey: ['getMyRoute'],
        queryFn: async () => {
            return await axios.get('http://localhost:5001/api/v1/test')
        },
    })

    const submitFunc = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        sendData.mutate(data)
        setData({ firstName: '', lastName: '' })
    }

    if (fetchData.isLoading) return <div>Loading...</div>
    if (fetchData.isError) return <div>Error... {fetchData.error.message}</div>

    const successData = fetchData.data?.data?.data ? fetchData.data.data.data : ''

    return (
        <>
            <div>Login Page</div>
            <div>{successData}</div>
            <section className="bg-indigo-50">
                <div className="container m-auto max-w-2xl py-24">
                    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                        <form onSubmit={submitFunc}>
                            <h2 className="text-3xl text-center font-semibold mb-6">
                                Test Form
                            </h2>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    placeholder="Enter text here"
                                    required
                                    value={data.firstName}
                                    onChange={(e) =>
                                        setData(() => {
                                            data.firstName = e.target.value
                                            return { ...data }
                                        })
                                    }
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    placeholder="Enter text here"
                                    required
                                    value={data.lastName}
                                    onChange={(e) =>
                                        setData(() => {
                                            data.lastName = e.target.value
                                            return { ...data }
                                        })
                                    }
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
