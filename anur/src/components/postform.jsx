import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Postform(props) {
const [Addbook, setAddbook] = useState();


const handleSubmit = (event) => {
    event.preventDefault();
    console.log('-------')
    const bookInfo = {
    title: event.target.title.value,
    num_page: event.target.num_page.value,
    publish_date: event.target.publish_date.value,
    FileBook: event.target.FileBook.value,
    
    };
    axios.post("http://localhost:8000/books/", bookInfo)
      .then((res) => {
          console.log(res)
        // setAddbook(res.data);
    //   window.location.replace("http://localhost:3000/");
    });
  };
  console.log('This is the best')
  return (
    <form className="CreateForm" onSubmit={handleSubmit}>
      {/* <label htmlFor="username">username:</label> */}
      <input
        name="title"
        placeholder="title"
        type="text"
      />
      <br />
      <input
        name="num_page"
        placeholder="num_page"
        type="text"
      />
      <br />
      <input
        name="publish_date"
        placeholder="publish_date"
        type="text"
      />
      <br />
      <input
        name="FileBook"
        placeholder="FileBook"
        type="file"
      />
    
      {/* <Link to={"/createskaters"}> */}
        <button type="submit"> submit</button>
      {/* </Link> */}
    </form>
  );
}
export default Postform