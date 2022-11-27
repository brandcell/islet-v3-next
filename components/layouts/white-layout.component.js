import Navbar from '../Navbar/navBar';
import Footer from '../footer/footer.component'

function WhiteLayout({children}) {
  return (
    <>

        <Navbar color='black'/>

        {children}
        
        <Footer/>

    </>
  )
}

export default WhiteLayout;