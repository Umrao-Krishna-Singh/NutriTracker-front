import { Button } from './ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from './ui/navigation-menu'
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuTrigger,
//     DropdownMenuSeparator,
// } from './ui/dropdown-menu'

import { ModeToggle } from './mode-toggle'
const navbar = () => {
    return (
        <>
            {/* element 4 */}
            <nav className="bg-black p-2">
                <div className="absolute">
                    <ModeToggle />
                </div>
                <div className="container mx-auto flex justify-center">
                    <div className="flex space-x-4">
                        <Button variant="link" className="text-white">
                            Home
                        </Button>
                        <Button variant="link" className="text-white">
                            About
                        </Button>
                    </div>
                </div>
            </nav>

            {/* element 5 */}

            <nav className="bg-pink-700 p-4">
                <NavigationMenu>
                    <NavigationMenuList className="flex justify-center space-x-4">
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={navigationMenuTriggerStyle()}
                            >
                                Home
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-white p-2 rounded shadow-lg">
                                <NavigationMenuLink
                                    href="/"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={navigationMenuTriggerStyle()}
                            >
                                About
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-white p-2 rounded shadow-lg">
                                <NavigationMenuLink
                                    href="/about"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger
                                className={navigationMenuTriggerStyle()}
                            >
                                Contact
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="bg-white p-2 rounded shadow-lg">
                                <NavigationMenuLink
                                    href="/contact"
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                >
                                    Contact
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    <NavigationMenuIndicator className="bg-blue-500 h-1 mt-1" />
                    <NavigationMenuViewport
                    // className="absolute top-full left-0 w-full bg-white shadow-lg"
                    />
                </NavigationMenu>
            </nav>
        </>
    )
}

export default navbar
