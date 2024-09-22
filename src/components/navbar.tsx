import { NavigationMenu, NavigationMenuLink } from './ui/navigation-menu'

import { ModeToggle } from './mode-toggle'
const Navbar = () => {
    return (
        <nav className="bg-black h-12">
            <div className="container mx-auto flex justify-between items-center relative">
                <div className="flex items-center">
                    <ModeToggle />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <img src="../../logo cropped.svg" alt="Logo" className="h-10" />
                </div>
                <div className="flex">
                    <NavigationMenu>
                        <NavigationMenuLink
                            href="/"
                            className="rounded-md px-4 py-2 bg-black text-white hover:bg-white hover:text-black mr-2"
                        >
                            Home
                        </NavigationMenuLink>
                        <NavigationMenuLink
                            href="/test"
                            className="rounded-md px-4 py-2 bg-black text-white hover:bg-white hover:text-black mr-2"
                        >
                            About
                        </NavigationMenuLink>
                    </NavigationMenu>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
