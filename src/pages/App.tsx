
import SectionOne from './sectionOne.tsx'
import SectionTwo from './sectionTwo.tsx'
import Elementary from './Elementary.tsx'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Routes>
    <Route path='/slide/' element={<SectionOne/>} />
    <Route path='/slide/elementryPerticle' element={<Elementary/>} />
    <Route path='/slide/section2' element={<SectionTwo />} />
    </Routes>
    </div>
  )
}

export default App