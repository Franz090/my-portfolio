import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import Contact from '../Partials/contact'



 const RootLayout = ({children}) => {
  return (
    <div className="root-main">
      <Header/>
      {children} 
      <Contact/>
     <Footer/>
    </div>
  )
}

export default RootLayout
