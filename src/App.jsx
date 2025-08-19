import './app.css'
import Hero from './pages/Hero'
import About from './pages/About'
import Projects from './pages/Projects'
import Taskbar from './components/taskbar'
import ScrollArrow from './components/scroll-arrow'
import Sidebar from './components/sidebar';
import Contact from './pages/Contact'

function App() {
  return (
    <div className="relative">
      {/* Main content area, pushed to the right to avoid the yellow bar */}
      <div>
        <Taskbar />
        <Sidebar />
        <div className='overflow-visible'>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App;
