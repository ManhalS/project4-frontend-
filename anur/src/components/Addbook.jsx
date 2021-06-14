import React from 'react'
import  {useState, useEffect} from "react"
import { string } from 'prop-types';
import axios from 'axios';





function Addbook(props) {
    const [Addbook,setAddbook]=useState();
   
    const [title, settitle]= useState();
    const [num_pages, setnum_pages]=useState();
    const [publish_date, setpublish_date]=useState();
    const [FileBook, setFileBook]=useState()

  
   
 
    function Addnbook(e){
        const uploadbook = new FormData();
        uploadbook.append('title',title);
        uploadbook.append("num_pages",num_pages);
        uploadbook.append('publish_date',publish_date);
        uploadbook.append('FileBook',FileBook)
       
        axios.post("http://127.0.0.1:8000/books/", 
        {
       
        body: uploadbook
        })
        .then(res =>console.log(res))
        .catch(error =>console.log(error));
     

        
 
}
 
    return (
        <div>
    <h1>add a book</h1>
    <form >
        <label>
        Name of the book:
       <input  placeholder="Name of the book" type="text" value={title} onChange={(e)=>settitle(e.target.value)} name="bookName" /> 
       </label>
       <br />
       <label>
       number of pages:
       <input placeholder="number of pages"type ="number" value={num_pages} onChange={(e)=>setnum_pages(e.target.value)  } name="number of pages"/>
       </label>
       <br />
       <label>
       puplish date:
       <input placeholder="puplish date" value={publish_date} onChange={(e)=>setpublish_date (e.target.value)}   type= "number" name="puplish date" />
       </label>
       <br />
       
       <input placeholder="pdffile" value={FileBook} onChange={(e)=>setFileBook(e.target.file)}  type ="file" name ="FileBook" />
      
       
       <button onClick={() => Addnbook()}>add new book</button>
    </form>
        </div>
    )
       
    }
export default Addbook
