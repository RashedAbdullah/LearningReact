import React from 'react'
import { MdDelete } from "react-icons/md";
const BookRow = ({book, deleteBook}) => {
    const {title, author, isbn, pubYear} = book;
  return (
        <tr>
            <td>{isbn}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{pubYear}</td>
            <td onClick={()=>console.log(deleteBook(isbn))} className='delete-btn text-danger'><MdDelete /></td>
        </tr>
  )
}

export default BookRow;