import Navbar from "../components/Navbar/navBar";
import "../styles/globals.scss";

import { NavProvider } from "../contexts/navbar.context";


function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout;


  return (
    <>
      <NavProvider>
        
        <Layout>
        
          <Component {...pageProps} />
        </Layout>
      </NavProvider>
    </>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;

export default MyApp;
