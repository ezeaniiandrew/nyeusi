import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import styles from "./layout.module.scss";
import Footer from "@/components/Footer/Footer";

function Layout() {
  return (
    <>
      <header className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
