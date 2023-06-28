import React, {useState} from 'react'
import Color from './Color'

const Home = () => {
  let [name, setName] = useState(10);
  let arr = ["red", "green", "blue"];

  let demo = ()=>{
    setName((a)=>a+1);
  }
  return (
    <>
      <h1>HomePage</h1>
      <h2>{name}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia illum ipsa nemo veniam tenetur, nihil voluptate, ullam cumque vitae sint placeat architecto, expedita quos quisquam at facilis neque? Molestias.</p>
      <button onClick={demo}>OK</button>
      <Color colorarr={arr}/>
    </>
  )
}

export default Home