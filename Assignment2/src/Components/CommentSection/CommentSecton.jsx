import './CommentSection.css';

const CommentSecton = (Comments) => {
  return (
    <div className='grid'>
        {Comments.Comments.map((item, index)=>{
            return <div key={index}>
                <p>{item.content}</p>
                <p>by {item.author}</p>
            </div>
        })}
    </div>
  )
}

export default CommentSecton;