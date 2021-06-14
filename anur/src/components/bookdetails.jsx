import React from 'react'

function bookdetails() {
    return (
        <div>
            <label > add a book 
           <button>
               <link to= './Addbook.jsx'/>
           </button>
           </label>

           <label > delete a book
           <button>
               <link to= './deletebook.jsx'/>
           </button>
           </label>
        </div>
    )
}

export default bookdetails
