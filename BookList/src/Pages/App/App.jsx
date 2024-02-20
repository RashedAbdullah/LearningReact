import '../../Pages/Index.css'
import React, { useState, useEffect } from "react";
import BookRow from './../../Components/BookRow';
import { localStorageData } from './../Utils/Storage';

const App = () => {
	// main array of objects state || books state || books array of objects
	const [books, setBooks] = useState(localStorageData());

	// input field states:
	const [title, setTitle] = useState("");
	const [author, setAothor] = useState("");
	const [isbn, setIsbn] = useState("");
	const [pubYear, setPubYear] = useState("");

	// clear input:
	const clearInput = ()=>{
		setTitle("");
		setAothor("");
		setIsbn("");
		setPubYear("");
	}
	// form submit event
	const handleSubmit = (e)=>{
    e.preventDefault();
    const book = {
      title,
      author,
      isbn,
      pubYear
    }
    setBooks([...books, book]);
    clearInput();
  }

	// delete book from LS
	const deleteBook = (isbn)=>{
		const filteredbooks = books.filter((book, index)=> book.isbn !== isbn);
		setBooks(filteredbooks);
	}

	// saving data to local storage
	useEffect(()=>{
		localStorage.setItem("Books", JSON.stringify(books));
	},[books]);
	
	return (
		<div className="wrapper">
			<h1>BookList App</h1>
			<p>Add and view your books using local storage</p>
			<div className="main">
				<div className="form-container">
					<form
			className="form-group"
            onSubmit={handleSubmit}
					>
						<label>Title</label>
						<input
			type="text"
			className="form-control"
			required
			value={title}
			onChange={(event)=>setTitle(event.target.value)}
						></input>
						<br></br>
						<label>Author</label>
						<input
			type="text"
			className="form-control"
			required
							value={author}
              onChange={(event)=>setAothor(event.target.value)}
						></input>
						<br></br>
						<label>ISBN#</label>
						<input
							type="text"
							className="form-control"
							required
              value={isbn}
              onChange={(event)=>setIsbn(event.target.value)}
						></input>
						<br></br>
						<label>Published Year</label>
						<input
							type="text"
							className="form-control"
							required
              value={pubYear}
              onChange={(event)=>setPubYear(event.target.value)}
						></input>
						<br></br>
						<button
							type="submit"
							className="btn btn-success btn-md"
						>
							ADD
						</button>
					</form>
				</div>

				<div className="view-container">
						{
							books.length > 0 ?
							<>
							<div className="table-responsive">
								<table className="table">
                  					<thead>
										<tr>
											<th>ISBN#</th>
											<th>Title</th>
											<th>Author</th>
											<th>Published Year</th>
											<th>Delete</th>
										</tr>
									</thead>
									<tbody>
									{
										books.map(book=>(
											<BookRow key={book.isbn} book={book} deleteBook={deleteBook}/>
										))
									}
									</tbody>
								</table>
							</div>
							<button
								className="btn btn-danger btn-md"
								onClick={()=>setBooks([])}>
								Remove All
							</button>
						</>
						:
						<div>No book added yet!</div>
							
						}
			
				</div>
			</div>
		</div>
	);
};

export default App;
