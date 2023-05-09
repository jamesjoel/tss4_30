import './Page.css';
import path from './images/1.jpg';
let Page = ()=>{
    let style = { 
            color : "red", 
            fontSize : "25px", 
            backgroundColor : "#748596" 
        };


    let styleH2 = {
        backgroundColor : "#406050",
        fontSize : "35px",
        width : "300px"
    }
    
    let img = {
        height : "200px",
        width : "200px",
        border : "1px solid red"
    }

    let demo = ()=>{
        console.log("welcome");
    }
    
    return(
        <>
        <h1 className='name'>The Stepping Stone</h1>
        <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem ipsa nihil aperiam culpa provident molestiae, nemo deserunt doloribus iusto nulla tenetur dolorum. Nesciunt deleniti quam eaque nisi sit aliquid asperiores?</p>
        <div style={style}>
            hello world
        </div>
        <h2 style={styleH2}>James Joel</h2>

        <img src= {path} style={img}/>
        <br />
        <br />
        <button onClick={demo}>OK</button>
        </>
    )
}

export default Page;

// <button class="btn btn-primary"

/*
    h1{
        color : red; font-size : 12px;
    }


*/