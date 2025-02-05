import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

const Footer = () => {
    return (
      <footer>
        <NavigationMenu className="flex flex-col items-center md:flex-row">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div>© Copyright PT. Strategic Partner Solution 2025. All Rights Reserved.</div>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
                <Link href="/leaderboard" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/leaderboard" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/leaderboard" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Privacy Policy
                  </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </footer>
    )
}

export default Footer