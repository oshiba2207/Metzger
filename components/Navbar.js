import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <Image src="/../public/EH_Logo.jpg" width="150px" height="70px" alt="E und H Logo" />
                <Link href="/"> Home</Link>
                <Link href="/about"> About</Link>
                <Link href="/profile"> Profile</Link>
                <Link href="/coins">Artikel</Link>
                <Image src="/../public/zurHeide.png" width="150px" height="70px" alt="E und H Logo" />
            </div>
        </div>
    );
};

export default Navbar;