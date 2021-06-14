
import React from 'react'
import {useEffect, useState} from "react"
import Axios from 'axios'
import Searchbar from "./searchbar"
import './home.css'
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardHeader
} from '@material-ui/core/'
import bookdetails from './bookdetails'








function Home(){
    const [searchtext, setsearchtext]= useState("")
    const [book ,setBook]= useState([]);
    useEffect(() => {
    
        function getbook() {
            Axios.get('http://localhost:8000/books')
            .then(res => {
                setBook(res.data)
                console.log(res)
            })
            .catch(console.error)
        }
        getbook()
    },[]);
    console.log(book[1])
    const booklist = book.map(book=>{
        return (
            
            <Card>
           <div>
            <h2>{book.title}</h2>    
            <p> number of pages:{book.num_pages}</p>
            <p>puplish date: {book.publish_date}</p>
            </div>
            </Card>
            
        )

        
    })
 
    // function dowb(){
    //     <button>
    //     downloadbook
    //     <link to = {booklist.FileBook} target = "_blank" download></link>
    //     </button>
    // }
        return (
          
                <div className="container">
                <Searchbar />
                {booklist}
        </div>
       
      
    )
       
}  



export default Home
