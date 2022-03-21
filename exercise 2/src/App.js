import './App.css';
import { useState, useEffect } from "react";
function App() {
  const [breed, setBreed] = useState("")
  const [dogPic, setDogPic] = useState([])
  let a
  useEffect(()=>{
   if(breed != 0) {fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then(res => res.json())
    .then(dog => {
      setDogPic(dog.message);
    })}
    else {
      setDogPic("")
    }
  },[breed])
  let bredSelect = (e)=>{
    setBreed(e.target.value);
  }
return(
  <div className='esim'>
    <select name="dogBreed" className="dogBreed" onChange={bredSelect}>
        <option value="0">-- Select a breed --</option>
        <option value="akita">Akita</option>
        <option value="beagle">Beagle</option>
        <option value="dalmatian">Dalmatian</option>
        <option value="germanshepherd">German Shepherd</option>
        <option value="husky">Husky</option>
        <option value="labrador">Labrador</option>
        <option value="pug">Pug</option>
        <option value="retriever/golden">Golden Retriever</option>
        <option value="spaniel/cocker">Cocker Spaniel </option>
      </select>
      <div className='dogPicture'>
      <img src={dogPic} alt=""/>
      </div>
  </div>
  
  )
}

export default App;
