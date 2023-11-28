import Logo from "./logo";
import classes from "./main-nav.module.css";
import Link from "next/link";
import Image from "next/image";
import cartIcon from "../../public/icons/cart.svg";
import searchIcon from "../../public/icons/search.svg";
import userIcon from "../../public/icons/user.svg";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/commision">Commision</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/ken-league">Ken League</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.iconContainer}>
        <Image src={cartIcon} alt="cart icon" height={30} width={30} />
        <Image src={searchIcon} alt="cart icon" height={30} width={30} />
        <Image src={userIcon} alt="cart icon" height={30} width={30} />
      </div>
    </header>
  );
}
export default MainNavigation;
