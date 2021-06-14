import axios from 'axios'
import React , {useState} from 'react'


// function Deletebook() {
//     const [id,setid]=useState()
//     const [bookid,setbookid]= useState({})
    

//     const handleInput =(e)=>{
//     setid(id: e.target.value)
//     }
    
    
// function  handlesubmit(){

//         axios.delete(`http://localhost:8000/books/${id}`)
//         .then(delete)=>{}
//         .then(Response=>{ 
//             setbookid =(Response.data)
//             console.log(Response)
           
//          })
        
//      }
//     return (
//         <div>
//             <form>
//             <lable>
//                 delete by id 
//             </lable>
//             <input type="number"  onChange={handleInput} value={id} placeholder= "id number"/>
//             </form>
//             <button onClic={handlesubmit}>delete</button>
//         </div>
//     )
// }
export default class PersonList extends React.Component {
    state = {
      id: '',
    }
  
    handleChange = event => {
      this.setState({ id: event.target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      axios.delete(`http://localhost:8000/books/${this.state.id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Book ID:
              <input type="text" name="id" onChange={this.handleChange} />
            </label>
            <button type="submit">Delete</button>
          </form>
        </div>
      )
    }
  }


// export default Deletebook
