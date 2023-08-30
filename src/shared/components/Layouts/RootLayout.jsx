import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import Contact from '../Partials/contact'
import {Outlet} from 'react-router-dom'


 const RootLayout = () => {
  return (
    <div className="root-main">
      <Header/>
      <Outlet/>
      <Contact/>
     <Footer/>
    </div>
  )
}

export default RootLayout
