import Layout from './components/Layout/Layout.jsx';
import About from './pages/About/About.jsx';
import Techstack from './pages/Techstack/Techstack.jsx';
import Project from './pages/Projects/Project.jsx';
import Education from './pages/Educations/Education.jsx';
import Contact from './pages/Contact/Contact.jsx';
import ScrollToTop from 'react-scroll-to-top';
import MobileNav from './components/MobileNav/MobileNav.jsx';

function App()
{
  return(
  
    <>
    <MobileNav/>
        <Layout />
        <div className="container ">
        <About />
        <Techstack />
        <Education />
        <Project/>
        <Contact />
        </div>
        <div className="footer mb-3 ms-3">
          <h4 className="text-center">
            Made With ❤❤ Pradeep &copy; 2024
          </h4>
        </div>
        <ScrollToTop smooth  color="#f29f67" style={{backgroundColor:'#1e1e2c',borderRadius:'80px'}}/>

      </>
  
  )
}
export default App;