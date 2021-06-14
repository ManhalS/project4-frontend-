import React,{useState,useEffect} from "react"
import Axios from "axios"




function Searchbar(props) {

const{onsearch}= props
const [searchText, setsearchText]= useState("") 
const [getbook, setgetbook]=useState({})

   
const handleInput =(e)=>{
    setsearchText(e.target.value)
    console.log(searchText)
}


function  handlesubmit() {
            Axios.get(`http://localhost:8000/books/${searchText}`)
            .then(res => {
                setgetbook(res.data)
                console.log(res)
            })
            .catch(console.error)
        }
       
    
        return (
            <div>
          <label id= "label">Search a Book :</label><input type= "text" onChange={handleInput}  value={searchText} placeholder ="book name"></input>
             < button onClick={handlesubmit}> submit</button>
            
            <h2>{getbook.title}</h2>    
            <p> number of pages:{getbook.num_pages}</p>
            <p>puplish date: {getbook.publish_date}</p> 
           
           
           
           <button type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='./Addbook';
      }}>
           
           <label > add a book  </label>
           </button>
          

           
           <button type="button"
    onClick={(e) => {
      e.preventDefault();
      window.location.href='./deletebook';
      }}>
           <label > delete a book</label>
               <link to= './deletebook.jsx'/>
           </button>
           
            
        </div>
        
    )
}


export default Searchbar
