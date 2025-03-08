import { BrowserRouter, Route, Routes } from 'react-router'
import "./styles/main.scss"
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import { PageWrapper } from './components'
import NotFound from './pages/NotFound'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
]

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageWrapper links={links} />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
