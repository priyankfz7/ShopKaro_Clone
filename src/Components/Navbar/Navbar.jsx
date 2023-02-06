import { useState, useEffect } from "react";
import { Nav, Aside } from "./Styled-Navbar";
import { listItems, data } from "./data";
import { allProducts } from "../../AllProducts";
import SearchInput from "../SearchInput"

import mall_logo from "./mall_logo.png";



import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeQuerry } from "../../Redux/actions/querry.actions";

export default function Navbar() {
  let count = 100;
  let name = "Rahul";
  let [index, setIndex] = useState(8);
  let [result, setResult] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (query) => {
    dispatch(changeQuerry(query))
    const q = query.split(" ").join("+");
    // console.log(1)
    //console.log(query)
    navigate(`/search?q=${q}`)





  }
  const mouseOver = (e) => {
    e.currentTarget.classList.add("height");
  };
  // console.log(name);

  const mouseOut = (e) => {
    e.currentTarget.classList.remove("height");
  };

  document.body.addEventListener("click", function (e) {
    let article = document.querySelector("#search-results");
    if (e.target.parentElement.id === "search-results") {
      article.style.visibility = "visible";
    } else {
      article.style.visibility = "hidden";
    }
    // console.log(e.target.parentElement);
  });

  useEffect(() => {
    document.querySelectorAll("li")[index].classList.add("li");
    return () => {
      document.querySelectorAll("li")[index].classList.remove("li");
    };
  });

  const inpHandler = (e) => {
    let article = document.querySelector("#search-results");
    let newArr = [];
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].name.toLowerCase().includes(e.target.value)) {
        newArr.push(allProducts[i]);
      }
    }
    if (newArr.length && e.target.value) {
      setResult(newArr);
      article.style.visibility = "visible";
    } else {
      article.style.visibility = "hidden";
    }
  };
  const modalClose = (e) => {
    e.target.parentElement.style.transform = "translateX(-100%)";
  };
  const modalOpen = () => {
    let ele = document.querySelector("#hidden-menu");
    ele.style.transform = "translateX(0)";
  };

  const submenuHandler = (e) => {
    if (e.target.classList.contains("main-para")) {
    }
    if (e.target.classList.contains("sub-para")) {
    }
  };
  return (
    <>
      {/* <FaAlignJustify id="hidden-menu-open" onClick={modalOpen} /> */}
      <Aside id="hidden-menu">
        <button onClick={modalClose}>X</button>
        <article>

          <Link to="/profile">
            <p id="">

              <h2>Hello User</h2>
            </p>
          </Link>
          <h3>Categories</h3>
          {listItems.map((i, index) => (
            <p className="main-para" onClick={submenuHandler} key={index}>
              {i}
              <img
                src="https://www.svgrepo.com/show/60060/down-arrow.svg"
                alt=""
              />
              {data[index].map((items, inde) => (
                <p className="sub-para" onClick={submenuHandler} key={inde}>
                  {items[0]}
                  <img
                    src="https://www.svgrepo.com/show/60060/down-arrow.svg"
                    alt=""
                  />
                  {items.map((item, ind) => (

                    <p className="sub-sub-para" key={ind}>
                      {ind !== 0 && item}
                    </p>

                  ))}
                </p>
              ))}
            </p>
          ))}
        </article>
      </Aside>
      <Nav>
        <section id="top">
          <Link to="/">
            <img src={mall_logo} width="100px" />
          </Link>


          <SearchInput />



          <a
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.paytmmall&hl=en_IN&gl=US"
            rel="noreferrer"
          >
            <p id="mobile">
              <img
                src="https://www.svgrepo.com/show/371405/mobile.svg"
                alt=""
              />
              Download App

            </p>
          </a>
          <p className="line">|</p>
          <a
            href="#"

            rel="noreferrer"
          >
            <p>Become a Supplier</p>
          </a>
          <p className="line">|</p>

          <p id="profile">
            <img
              src="https://www.svgrepo.com/show/284856/profile-user.svg"
              alt=""
            />
            <Link to="/login">Login/Sign Up</Link>



          </p>

          <Link to="/cart">
            <p id="cart">

              <svg
                id="cart"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-cart-check"
                viewBox="0 0 16 16"
              >
                <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />{" "}
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />{" "}
              </svg>
              Cart
            </p>
          </Link>

        </section>
        <section id="bottom" onMouseOver={mouseOver} onMouseOut={mouseOut}>
          <ul>
            {listItems.map((i, index) => (

              <li key={index} id={index} onMouseOver={() => setIndex(index)}>
                {i}
              </li>

            ))}
          </ul>
          <article onMouseOut={mouseOut}>
            {data[index].map((items, i) => (
              <div key={i}>
                {items.map((item, ind) => (

                  <p key={ind} className={ind === 0 ? "pink-para" : ""}>
                    <div onClick={() => handleClick(item)}>
                      {item}

                    </div>



                  </p>

                ))}
              </div>
            ))}
          </article>
        </section>
      </Nav>
    </>
  );
}
