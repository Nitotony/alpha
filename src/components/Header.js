import img from './LOGO.png'

const Header=()=>{
    return (
      <div className="header">
        <div className="Logo">
          <img
            src={img}
            alt="lol"
          />
        </div>
        <div className="Nav">
          <ul className="Main">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>

            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Header;