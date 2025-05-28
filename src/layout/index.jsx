import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import styles from "./layout.module.scss";
import Footer from "@/components/Footer/Footer";
import { PageTransition } from "@/components";

function Layout() {
  return (
    <>
      <PageTransition />
      <div className="app">
        <header className={styles.header}>
          <Nav />
        </header>
        <main className={styles.main}>
          <Outlet />
        </main>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
