import React from 'react'

const App = () => {
  let name = "Amar Joshi";
  return (
    <>
      <h2>This is App Component {name}</h2>
      <Box1 name={name}/>
    </>
  )
}

const Box1 = (props)=>{
  return(
    <div style={{height : "500px", width : "500px", backgroundColor : "blue"}}>
      <h3>Box 1</h3>
      <Box2 name={props.name}/>
    </div>
  )
}

const Box2 = (props)=>{
  return(
    <div style={{height : "400px", width : "400px", backgroundColor : "green"}}>
      <h3>Box 2</h3>
      <Box3 name={props.name}/>
    </div>
  )
}

const Box3 = (props)=>{
  return(
    <div style={{height : "300px", width : "300px", backgroundColor : "yellow"}}>
      <h3>Box 3</h3>
      <Box4 info={props.name}/>
    </div>
  )
}
const Box4 = (props)=>{
  return(
    <div style={{height : "200px", width : "200px", backgroundColor : "pink"}}>
      <h3>Box 4 ---- {props.info}</h3>
    </div>
  )
}


export default App