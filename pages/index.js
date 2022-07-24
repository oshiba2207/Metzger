/* import Link from "next/link"; */
import Head from "next/head";
import styles from "../styles/Home.module.css";
/* import Image from "next/image"; */

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Metzger App</title>
      </Head>
      {/* <Link href="/about"> About</Link> */}
      <h1 className={styles.homePageTitle}> Hello World</h1>
      
    </div>
  );
}