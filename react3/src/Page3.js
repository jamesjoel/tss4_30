import {useState} from 'react';

const Page3 = () => {
    let [a, setA] = useState("red");

    let demo1 = ()=>{
        setA("yellow");
    }
    let demo2 = ()=>{
        setA("red");
    }
    let demo3 = ()=>{
        console.log("welcome");
    }
    let demo4 = ()=>{
        console.log("hello");
    }
    let demo5 = ()=>{
        console.log("***************")
    }
    let demo6 = ()=>{
        console.log("############");
    }
  return (
    <>
        First Name <input onKeyUp={demo4} onKeyDown={demo3} onBlur={demo2} onFocus={demo1} type="text" style={{ backgroundColor : a}}/>
        <br />
        <br />
        Last Name <input type="text" onCopy={demo5} onPaste={demo6}/>
    </>
  )
}

export default Page3


// gaurav