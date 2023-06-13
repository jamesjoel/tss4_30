import React, {useContext, createContext} from 'react'

const Data = createContext();

const App = () => {
  let name = "Aman";
  return (
    <>
      <h2>This is App Component {name}</h2>
      <Data.Provider value={name}>
        <Box1/>
      </Data.Provider>
    </>
  )
}

const Box1 = ()=>{
  return(
    <div style={{height : "500px", width : "500px", backgroundColor : "blue"}}>
      <h3>Box 1</h3>
      <Box2 />
    </div>
  )
}

const Box2 = ()=>{
  let x = useContext(Data);
  return(
    <div style={{height : "400px", width : "400px", backgroundColor : "green"}}>
      <h3>Box 2 {x}</h3>
      <Box3 />
    </div>
  )
}

const Box3 = ()=>{
  return(
    <div style={{height : "300px", width : "300px", backgroundColor : "yellow"}}>
      <h3>Box 3</h3>
      <Box4 />
    </div>
  )
}
const Box4 = ()=>{

  let name = useContext(Data);

  return(
    <div style={{height : "200px", width : "200px", backgroundColor : "pink"}}>
      <h3>Box 4 {name}</h3>
    </div>
  )
}


export default App