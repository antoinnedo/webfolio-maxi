import './app.css'
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Taskbar from './components/taskbar';
import Experience from './pages/Experience';
import Sidebar from './components/sidebar';
import Contact from './pages/Contact';
import GlobalSpotlight from './components/globalSpotlight.jsx';

function App() {
  return (
    <div className="relative">
      <GlobalSpotlight />
      {/* Main content area, pushed to the right to avoid the yellow bar */}
      <div>
        <Taskbar />
        <Sidebar />
        <div className='overflow-visible'>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App;
