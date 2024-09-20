import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from 'react-router-dom'
import Main from './layouts/mainLayout'
import Login from './pages/test'
import Landing from './pages/landing'
import { ThemeProvider } from '@src/components/theme-provider'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Main />}>
            <Route index element={<Landing />} />
            <Route path="/test" element={<Login />} />
        </Route>,
    ),
)

const App = () => {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    )
}

export default App
