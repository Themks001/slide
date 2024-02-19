import React, {useState, useContext} from 'react'
 const showSlider = React.createContext()
 const updateShowSlider = React.createContext()

 export function change(){
  return useContext(showSlider)
 }
 export function updatechange(){
  return useContext(updateShowSlider)
 }

const Context = ({childern}) => {
 const [show, setshow] = useState(false)
 const update = ()=>{
  setshow(true)
 }
  return (
    <showSlider.Provider value={show}>
j    <updateShowSlider.Provider value={update}>
    {childern}
    </updateShowSlider.Provider>
    </showSlider.Provider>
  )
}

export default Context