"use client"
 
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import Link from "next/link"
  
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
    const { setTheme } = useTheme()

    return (
        <header>
            <NavigationMenu>
                <NavigationMenuList>
                <NavigationMenuItem>
                <Link href="/home" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="/leaderboard" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Leaderboard
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="/task" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Task
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="/rating" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Rating
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                <Link href="/reward" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Reward
                    </NavigationMenuLink>
                </Link>
                </NavigationMenuItem>
                <NavigationMenuItem> 
                <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                    </Button>
                    </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
)}          

export default Navbar