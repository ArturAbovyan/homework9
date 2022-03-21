import {useState,useEffect} from "react";
let url = "https://ghibliapi.herokuapp.com/films"
function App() {
  const [filmInfo, setFilmInfo] = useState([])
  useEffect(()=>{
    fetch(url).then(res => res.json())
    .then(info => {
      setFilmInfo(info);
    })
  },[url])
  
 return (
  <div>
    { filmInfo.map(item => ( 
       <div key ={item.id}>
       <h1>{item.title}</h1>
        Original title: {item.original_title} <br/>
        Release Date:{item.release_date}<br/>
        Director: {item.director}
        <h3>Description</h3>{item.description} <br/>
        <img src={item.image} alt="image"/>
        <br/>
         </div>
      ))}

                
  </div>
 )

}

export default App;
