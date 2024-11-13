import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Toggle } from "./Toggle";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mr-5">
      <ul className="flex justify-center items-center">
        <li>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono app"
            width={90}
            height={90}
          />
        </li>
        <li>
          <Link href="/">
            <p className="text-2xl font-semibold">Pokémon</p>
          </Link>
        </li>
      </ul>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/favourites" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Favorites
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Toggle />
    </nav>
  );
};
