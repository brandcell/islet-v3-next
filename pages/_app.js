import Navbar from "../components/Navbar/navBar";
import "../styles/globals.scss";

import { NavProvider } from "../contexts/navbar.context";

import { NavContext } from "../contexts/navbar.context";

import { useContext, useEffect } from "react";

import Footer from "../components/footer/footer.component";

function MyApp({ Component, pageProps }) {
  const { isFooter, setIsFooter } = useContext(NavContext);

  const Layout = Component.Layout || EmptyLayout;

  useEffect(() => {
    setIsFooter(false);
  }, []);

  return (
    <>
      <NavProvider>
        <Navbar />
        <Layout>
          <Component {...pageProps} />
        </Layout>

     {isFooter &&<Footer/>}
      </NavProvider>
    </>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
