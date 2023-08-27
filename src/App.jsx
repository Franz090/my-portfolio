import RootLayout from './shared/components/Layouts/RootLayout'
import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ResumePage from './pages/resume'
import MyProject from './pages/project'
import Skills from './pages/skills'


 const App = () => {
  return (
     <RootLayout>
      
      <Routes>
      <Route path="/" element= {<HomePage/>} />
      <Route path="/about" element= {<AboutPage/>} />
      <Route path="/resume" element= {<ResumePage/>} />
      <Route path="/skills" element= {<Skills/>} />
      <Route path="/project" element= {<MyProject/>} />
      </Routes>
     </RootLayout>
  )
}


export default App
