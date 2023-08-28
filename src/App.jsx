import RootLayout from './shared/components/Layouts/RootLayout'
import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ResumePage from './pages/resume'
import MyProject from './pages/project'
import Skills from './pages/skills'
import NotFoundPage from './pages/NotFound'


 const App = () => {
  return (
    <Routes>
      <Route element={ <RootLayout />}>
         <Route path="/" element= {<HomePage/>} />
         <Route path="/about" element= {<AboutPage/>} />
         <Route path="/resume" element= {<ResumePage/>} />
         <Route path="/skills" element= {<Skills/>} />
         <Route path="/project" element= {<MyProject/>} />
      </Route>
     <Route path="*" element= {<NotFoundPage/>} /> 
     </Routes>
  )
}


export default App
