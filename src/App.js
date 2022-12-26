
import './App.css';
import { useState } from 'react';
import MovieList from './component/MovieList'; 
import AddMovie from './component/AddMovie';
import { v4 as uuidv4 } from 'uuid';
import Filter from './component/Filter';
import { Route,Routes } from 'react-router-dom';
import Descriptions from './component/Descriptions';




function App() {
const[key,setKey]=useState("")
const [rating , setRating] = useState(1)

const [movie,setMovie]=useState([
  
  {MovieName:'El Insa',
  Description:'ggggggggggggjkjlllllllläljklojoljoj',
  rating: 4,
  image:"https://assets.e-cinema.com/PICTURES/E01177-el-inca-nouvelle-affiche.jpg",
  id:1,
  trailer:'https://www.youtube.com/embed/M6nn8NenS-8',
},
  {MovieName:'THE Northman',
  Description:'llllllllllllljuoihigujjjjjjjjjjjjjjj',
  rating: 3,
  image:"https://egy4.best/uploads/m/a4160e4f91d624ae929a49bccb92b5b9.jpg",
  id:uuidv4(),
  trailer:'https://www.youtube.com/embed/4SH27F19dHw',
},
  {MovieName:'THE System',
  Description:'lkpkopljivggggggggffuzzvggggggggggggi',
  rating: 2,
  image:"https://egybestvip.com/uploads/m/9d68db10c146c7ed8751a4c9bc2e09cc.jpg",
  id:uuidv4(),
  trailer:'https://www.youtube.com/embed/AFoflf-hass',
},
  
])
const handeleAdd=(newMovie)=>{
  setMovie([...movie,newMovie]);
}

const handelKey=(text)=>{
  setKey(text)
}

const handleRating = (number) => {
  setRating(number)
}
  return (
    
  
    <div className="App">
     
    
    <Routes>
      <Route path='/' element={
        <>
            
      
     <Filter handelKey={handelKey} handleRating={handleRating}/>
    <AddMovie handeleAdd={handeleAdd}/>
    <br></br>
    <MovieList movie={movie.filter(el => el.MovieName.toLowerCase().includes(key.toLowerCase().trim())&& el.rating >= rating)}/>
        
        
        
        </>
      }/>
      <Route path='/trailer/:id' element={<Descriptions movie={movie}/>}/>
  </Routes>
    
    </div>
    
  );
}

export default App;
