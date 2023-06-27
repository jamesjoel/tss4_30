import React, {useState, useEffect} from 'react'
import axios from 'axios'
const MyProduct = () => {
    let [allPro, setAllPro] = useState([]);
    let [txt, setTxt] = useState("");
    let [temp, setTemp] = useState([]);
    let [check, setCheck] = useState(true);
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(result=>{
            
            setAllPro(result.data);
            setTemp(result.data);
        })
    }, [])

    let search = (e)=>{
        let a = e.target.value;
        setAllPro((data)=>{
            return temp.filter(x=>x.title.includes(a));
        })
        // console.log(a);
    }

    let sortPro = ()=>{
        if(check==true){

            setAllPro([].concat(allPro.sort((a, b)=>a.price- b.price)))
            setCheck(false);
        }
        else{
            
            setAllPro([].concat(allPro.sort((a, b)=>b.price- a.price)))
            setCheck(true);
            
        }
    }
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    
                    <label>Search Product</label>
                    <input type='text' onChange={(e)=>search(e)} className='form-control' placeholder='Search Your Product'/>
                    {
                        allPro ? 
                    
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Title</th>
                            <th onClick={sortPro} style={{cursor : "pointer"}}>Price</th>
                        </tr>

                        </thead>
                        <tbody>
                            {
                                allPro.map((x, n)=>{
                                    return(
                                        <tr key={n}>
                                            <td>{n+1}</td>
                                            <td>{x.title}</td>
                                            <td>{x.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    : ""
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default MyProduct