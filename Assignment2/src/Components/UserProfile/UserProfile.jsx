import './User.css';

const UserProfile = (UserDetails) => {
  return (
    <div className="userStyle">
        {
        UserDetails.UserDetails.map((user, index)=>{
            return <div key={index}>
                <img src={user.avatar} alt="" />
                <h4>Name: {user.name}</h4>
                <h5>Bio: {user.bio}</h5>
            </div>
        })
        }
    </div>
  )
}

export default UserProfile;