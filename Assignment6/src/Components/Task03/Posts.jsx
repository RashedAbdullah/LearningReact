import './Posts.css'

const Posts = (props) => {
    const {id, title, body} =props.fullData
  return (
    <div className='singleBox'>
        <div>
            <p>id: {id}</p>
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
        </div>
    </div>
  )
}

export default Posts;