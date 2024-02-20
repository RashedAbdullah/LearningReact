import './ProductCard.css';
const ProductCard = (ProductsInfo) => {
    
    

  return (
    <div className='products'>
        {
        ProductsInfo.ProductsInfo.map(item=>{
           return <div key={item.id}>
            <img src={item.imgUrl} alt="random image" />
            <h4>Name: {item.prductName}</h4>
            <h5>Price: {item.price}</h5>
           </div>
        })
        }
    </div>
  )
}

export default ProductCard;