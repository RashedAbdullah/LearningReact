import './NewsArticle.css';
const NewsArticle = (newsInfo) => {

    

  return (
    <div className='articleMainDiv'>
        {
            newsInfo.newsInfo.map((item,index)=>{
                const {title, author, publicationDate, content} = item;
                return <div key={index}>
                    <h4>{title}</h4>
                    <h5>by: {author}</h5>
                    <h5>{publicationDate}</h5>
                    <p>{content}</p>
                </div>
            })
        }
    </div>
  )
}

export default NewsArticle;