import './app.css'
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Taskbar from './components/taskbar';
import Experience from './pages/Experience';
import Sidebar from './components/sidebar';
import Contact from './pages/Contact';
import GlobalSpotlight from './components/globalSpotlight.jsx';
import MobileContact from './components/mobileContact.jsx';

function App() {
  return (
    <>
      <MobileContact />

      <div className="app-content relative">
        <GlobalSpotlight />
        {/* Main content area, pushed to the right to avoid the yellow bar */}
        <div>
          <Taskbar />
          <Sidebar />
          <div className='overflow-visible'>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
  </>
  )
}

export default App;
