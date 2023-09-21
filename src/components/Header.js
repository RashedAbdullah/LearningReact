
const Header = () => {
  return (
    <div className="Header">

      <div className="logoAndName">
        <div className="logoCircle"><p><a href="#">R</a></p></div>
        <p>Rashed Abdullah</p>
      </div>

      <div className="icons">
        <p>Find me:</p>
        <p><a target="_blank" href="https://github.com/RashedAbdullah"><i className="fa-brands fa-github"></i></a></p>
        <p className="lastFind"><a href="https://www.facebook.com/Rashed4Abdullah"><i className="fa-brands fa-facebook"></i></a></p>
        <div className="darkDiv border-start"><p><a href="#"><i className="fa-solid fa-moon"></i></a></p></div>
      </div>

    </div>
  )
}

export default Header;