import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from 'react-router-dom'
import Main from './layouts/mainLayout'
import Login from './pages/test'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Main />}>
            <Route path="/test" element={<Login />} />
        </Route>,
    ),
)

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
