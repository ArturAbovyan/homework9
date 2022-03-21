import {useEffect,useState} from "react";
import './index.css'
function App() {
const [searchValue, setSearchValue] = useState("");
const [bookInfo, setBookInfo] = useState([]);
const [button, setButton] = useState("")
let a = 0;

const takeValue = (x)=>{
  setSearchValue(x.target.value.split(' ').join("+"))
}

const handleSearch = () => {
  fetch(`http://openlibrary.org/search.json?q=${searchValue}&page=`).then(res => res.json())
  .then(book => {
    console.log(book)
    setBookInfo(book.docs);
  })
}

  return (
    <div>
      <div>
      <input type="text" onChange={takeValue}/>
      <input type="button" value="Search" onClick={handleSearch}/>
      </div>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author Name</th>
                <th>First publish year</th>
                <th>Subject</th>
            </tr>
        </thead>
        <tbody>
          { bookInfo.map(item =>( 
            <tr key={item.key}>
              <td>{item.title}</td>
              <td>{item.author_name[0]}</td>
              <td>{item.first_publish_year}</td>
              <td>{item.subject ? item.subject.slice(0,3) : "No Information about it"}</td>
            
            </tr>
          ))}
        </tbody>
    </table>
    </div>
  );
}

export default App;
