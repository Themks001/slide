
import SectionOne from './sectionOne.tsx'
import SectionTwo from './sectionTwo.tsx'
import ElementryPerticle from './elementryPerticle.tsx'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Routes>
    <Route path='/slide/' element={<SectionOne/>} />
    <Route path='/slide/elementryPerticle' element={<ElementryPerticle/>} />
    <Route path='/slide/section2' element={<SectionTwo />} />
    </Routes>
    </div>
  )
}

export default App