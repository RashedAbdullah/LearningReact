
import './App.css'
import ProductCard from './Components/Products/ProductCard';
import UserProfile from './Components/UserProfile/UserProfile';
import NewsArticle from './Components/NewsArticle/NewsArticle';
import CommentSection from './Components/CommentSection/CommentSecton'


const ProductsInfo = [
  {
    id: 1,
    prductName: "Keyboard",
    price: "৳600",
    imgUrl: "https://picsum.photos/200"
  },
  {
    id: 2,
    prductName: "Monitor",
    price: "৳9090",
    imgUrl: "https://picsum.photos/seed/picsum/200/300"
  },
  {
    id: 3,
    prductName: "Mouse",
    price: "৳700",
    imgUrl: "https://picsum.photos/id/870/200/300?grayscale&blur=2"
  },
  {
    id: 4,
    prductName: "UPS",
    price: "৳7800",
    imgUrl: "https://picsum.photos/200/300?grayscale"
  },
  {
    id: 5,
    prductName: "Keyboard",
    price: "৳600",
    imgUrl: "https://picsum.photos/200"
  },
  {
    id: 6,
    prductName: "Monitor",
    price: "৳9090",
    imgUrl: "https://picsum.photos/200/300.jpg"
  },
  {
    id: 7,
    prductName: "Mouse",
    price: "৳700",
    imgUrl: "https://picsum.photos/id/870/200/300?grayscale&blur=2"
  },
  {
    id: 8,
    prductName: "UPS",
    price: "৳7800",
    imgUrl: "https://picsum.photos/200"
  },
  {
    id: 9,
    prductName: "Keyboard",
    price: "৳600",
    imgUrl: "https://picsum.photos/200"
  },
  {
    id: 10,
    prductName: "Monitor",
    price: "৳9090",
    imgUrl: "https://picsum.photos/seed/picsum/200/300"
  },
  {
    id: 11,
    prductName: "Mouse",
    price: "৳700",
    imgUrl: "https://picsum.photos/id/870/200/300?grayscale&blur=2"
  },
  {
    id: 12,
    prductName: "UPS",
    price: "৳7800",
    imgUrl: "https://picsum.photos/200"
  },
  {
    id: 13,
    prductName: "Keyboard",
    price: "৳600",
    imgUrl: "https://picsum.photos/200"
  },
  {
    id: 14,
    prductName: "Monitor",
    price: "৳9090",
    imgUrl: "https://picsum.photos/seed/picsum/200/300"
  },
  {
    id: 15,
    prductName: "Mouse",
    price: "৳700",
    imgUrl: "https://picsum.photos/id/870/200/300?grayscale&blur=2"
  },
  {
    id: 16,
    prductName: "UPS",
    price: "৳7800",
    imgUrl: "https://picsum.photos/200"
  },
  {
    id: 17,
    prductName: "Keyboard",
    price: "৳600",
    imgUrl: "https://picsum.photos/200"
  },
  {
    id: 18,
    prductName: "Monitor",
    price: "৳9090",
    imgUrl: "https://picsum.photos/seed/picsum/200/300"
  },
  {
    id: 19,
    prductName: "Mouse",
    price: "৳700",
    imgUrl: "https://picsum.photos/id/870/200/300?grayscale&blur=2"
  },
  {
    id: 20,
    prductName: "UPS",
    price: "৳7800",
    imgUrl: "https://picsum.photos/200"
  }
]

const UserDetails = [
  {
    name: "User 1",
    avatar: "https://picsum.photos/200",
    bio: "i'm a web developer"
  },
  {
    name: "User 2",
    avatar: "https://picsum.photos/200",
    bio: "i'm a web developer"
  },
  {
    name: "User 3",
    avatar: "https://picsum.photos/200",
    bio: "i'm a web developer"
  },
  {
    name: "User 4",
    avatar: "https://picsum.photos/200",
    bio: "i'm a web developer"
  },
  {
    name: "User 5",
    avatar: "https://picsum.photos/200",
    bio: "i'm a web developer"
  },
  {
    name: "User 6",
    avatar: "https://picsum.photos/200",
    bio: "i'm a web developer"
  },
  {
    name: "User 7",
    avatar: "https://picsum.photos/200",
    bio: "i'm a web developer"
  },
  {
    name: "User 8",
    avatar: "https://picsum.photos/200",
    bio: "i'm a web developer"
  }
]

const newsInfo = [
  {
    title: "Bangladesh’s ongoing political crisis is ‘high risk’ for fragile economy",
    author: "Faisal Mahmud",
    publicationDate: "15 Nov 2023",
    content: "Vegetable trader Afsar Uddin was distraught. He needed to pay nearly 50 percent more to bring a truck of vegetables to his shop in Karwan Bazar, the largest wholesale market for fresh produce in Bangladesh’s capital Dhaka."
  },
  {
    title: "ongoing political Bangladesh’s  crisis is ‘high risk’ for fragile economy",
    author: "Faisal Mahmud",
    publicationDate: "15 Nov 2023",
    content: " in Bangladesh’s capital Dhaka Vegetable trader Afsar Uddin was distraught. He needed to pay nearly 50 percent more to bring a truck of vegetables to his shop in Karwan Bazar, the largest wholesale market for fresh produce."
  },
  {
    title: "fragile economy Bangladesh’s ongoing political crisis is ‘high risk’ for ",
    author: "Faisal Mahmud",
    publicationDate: "15 Nov 2023",
    content: "Vegetable trader Afsar Uddin was distraught. He needed to pay nearly 50 percent more to bring a truck of vegetables to his shop in Karwan Bazar, the largest wholesale market for fresh produce in Bangladesh’s capital Dhaka."
  },
  {
    title: "Bangladesh’s ongoing political crisis is ‘high risk’ for fragile economy",
    author: "Faisal Mahmud",
    publicationDate: "15 Nov 2023",
    content: "Vegetable trader Afsar Uddin was distraught. He needed to pay nearly 50 percent more to bring a truck of vegetables to his shop in Karwan Bazar, the largest wholesale market for fresh produce in Bangladesh’s capital Dhaka."
  },
  {
    title: "Bangladesh’s ongoing political crisis is ‘high risk’ for fragile economy",
    author: "Faisal Mahmud",
    publicationDate: "15 Nov 2023",
    content: "Vegetable trader Afsar Uddin was distraught. He needed to pay nearly 50 percent more to bring a truck of vegetables to his shop in Karwan Bazar, the largest wholesale market for fresh produce in Bangladesh’s capital Dhaka."
  },
  {
    title: "Bangladesh’s ongoing political crisis is ‘high risk’ for fragile economy",
    author: "Faisal Mahmud",
    publicationDate: "15 Nov 2023",
    content: "Vegetable trader Afsar Uddin was distraught. He needed to pay nearly 50 percent more to bring a truck of vegetables to his shop in Karwan Bazar, the largest wholesale market for fresh produce in Bangladesh’s capital Dhaka."
  }
]

function App() {


  return (
    <div>
      <h2 style={{textAlign: "center", fontSize: "40px", marginTop: "40px"}}>User info</h2>
      <UserProfile UserDetails={UserDetails}/>
      <h2 style={{textAlign: "center", fontSize: "40px", marginTop: "40px"}}>Product Info</h2>
      <ProductCard ProductsInfo={ProductsInfo}/>

      <h2 style={{textAlign: "center", fontSize: "40px", marginTop: "40px"}}>News Article</h2>
      <NewsArticle newsInfo={newsInfo}/>
      <h2 style={{textAlign: "center", fontSize: "40px", marginTop: "40px"}}>Comment Section</h2>
      <CommentSection Comments={newsInfo}/>
    </div>
  )
}

export default App;
