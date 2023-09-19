import "./index.css";

const HomeSection = () => {
  return (
    <div>
    
      <div className="t_C">
         <h1>Free shipping on all orders, T&C apply</h1>
      </div>

      <div className="flex justify-between nav">

        <div className="nav-logo">
          <h3>Logeos</h3>
        </div>

        <div className="nav-middle">
          <ul>
            <li>
              <a>Male</a>
            </li>
            <li>
              <a>Women</a>
            </li>
          </ul>
        </div>

        <div className="nav-last">
          <ul>
            <li>
              {" "}
              <a>Account</a>
            </li>
            <li>
              {" "}
              <a>WishList [0]</a>
            </li>
            <li>
              <a>Bag [0]</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default HomeSection;
