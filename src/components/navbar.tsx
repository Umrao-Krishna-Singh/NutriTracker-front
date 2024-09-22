import { NavigationMenu, NavigationMenuLink } from './ui/navigation-menu'

import { ModeToggle } from './mode-toggle'
const navbar = () => {
    return (
        <nav className="bg-black p-3">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <ModeToggle />
                </div>
                <div className="flex items-center">
                    <img src="../../logo cropped.svg" alt="Logo" className="h-16" />
                </div>
                <div className="flex space-x-4">
                    <NavigationMenu>
                        <NavigationMenuLink
                            href="/"
                            className="rounded-md px-4 py-2 bg-black text-white hover:bg-white hover:text-black"
                        >
                            Home
                        </NavigationMenuLink>
                        <NavigationMenuLink
                            href="/test"
                            className="rounded-md px-4 py-2 bg-black text-white hover:bg-white hover:text-black"
                        >
                            About
                        </NavigationMenuLink>
                    </NavigationMenu>
                </div>
            </div>
        </nav>
    )
}
export default navbar
