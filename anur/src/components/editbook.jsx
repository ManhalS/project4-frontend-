import React from 'react'

function editbook() {

    return (
        <div>
            <h1> Edit book </h1>
       <input  placeholder="Name of the book" type="text" name="bookname"/><br />

       <input placeholder="number of pages"type ="text" name="number of pages"/><br />

       <input placeholder="puplish date"type= "text" name="puplish date"/><br />

       <input placeholder="pdffile" type ="file" name ="pdf file"/><br />

       <button>submit</button>
        </div>
    )
}

export default editbook
