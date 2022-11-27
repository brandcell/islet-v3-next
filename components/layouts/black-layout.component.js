import Navbar from '../Navbar/navBar';
import Footer from '../footer/footer.component'

function BlackLayout({children}) {
  return (
    <>

        <Navbar color='white'/>

        {children}

    </>
  )
}

export default BlackLayout;