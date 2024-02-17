
import SectionOne from './sectionOne.tsx'
import SectionTwo from './sectionTwo.tsx'
import Elementary from './Elementary.tsx'
import Particle from './Particles.tsx'
import Classification from './Classificaton.tsx'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Routes>
    <Route path='/slide/' element={<SectionOne/>} />
    <Route path='/slide/elementryParticles' element={<Elementary/>} />
    <Route path='/slide/section2' element={<SectionTwo />} />
    <Route path='/slide/particles' element={<Particle />} />
    <Route path='/slide/classification' element={<Classification />} />
    </Routes>
    </div>
  )
}

export default App