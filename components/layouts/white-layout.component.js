import Navbar from "../Navbar/navBar";
import Footer from "../footer/footer.component";

function WhiteLayout({ children }) {
  return (
    <>
      <div
        style={{
          background: "white",
          position: "fixed",
          top: "0px",
          height: "100px",
          width: "100vw",
          zIndex: "80",
        }}
      ></div>
      <Navbar color="black" />

      {children}

      <Footer />
    </>
  );
}

export default WhiteLayout;
