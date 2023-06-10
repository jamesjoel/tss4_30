import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Pagination2 = () => {
    let [city, setCity] = useState([]);
    let [limit, setLimit] = useState(25);
    let [temp, setTemp] = useState(1);
    useEffect(()=>{
        axios.get(`http://localhost:3001/api/city/pagination2/${limit}`).then(result=>{
            setCity(result.data);
        })
    }, [])


    const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    if(scrollTop > 800*temp){
        setLimit((limit)=>limit+25);
    axios.get(`http://localhost:3001/api/city/pagination2/${limit}`).then(result=>{
        setCity(result.data);
        setTemp((x)=>x++);
    })
    }


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);

  return (
    <div className="container my-5" >
        Scroll top: <b>{scrollTop}</b>
        <div className="row">
            <div className="col-md-8 offset-md-2">
            <table className="table table-dark table-hover table-striped">
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>City</th>
                                <th>State</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                city.map((x, n)=>{
                                    return(
                                        <tr key={n}>
                                            <td>{n+1}</td>
                                            <td>{x.name}</td>
                                            <td>{x.state}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
            </div>
        </div>
        
    </div>
  )
}

export default Pagination2