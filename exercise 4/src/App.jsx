import './App.css';
import { useEffect, useState } from "react";
const url = "https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe";

function App() {
  const [filmInfo, setFilmInfo] = useState([]);
  useEffect(() => {
    fetch(url).then(res => res.json())
    .then(info => {
      console.log(info)
      setFilmInfo(info);
  })
  }, [url])
  return (
    <div className='filmInfo' style={
      { 
      backgroundImage: `url(${filmInfo.image})`,
      width: "600px",
      height: "900px" 
    }
    }>
     <h1 id='title'>{filmInfo.title}</h1>
     <img src={filmInfo.movie_banner} id="image"/> 
     <div id="description">Producer is {filmInfo.producer}. The film has been released in  {filmInfo.release_date}. Director was {filmInfo.director}.{filmInfo.description}<br/> Original title was   {filmInfo.original_title}, Its translate in Romanised is{filmInfo.original_title_romanised}</div>
    </div>
  );
}
export default App;
