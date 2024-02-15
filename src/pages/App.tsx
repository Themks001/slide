
import SectionOne from './sectionOne.tsx'
import SectionTwo from './sectionTwo.tsx'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
    <Routes>
    <Route path='/physic/' element={<SectionOne/>} />
    <Route path='/physic/section2' element={<SectionTwo/>} />
    </Routes>
    </div>
  )
}

export default App