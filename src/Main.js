import './Main.scss';
import { useContext } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import HomePage from './pages/home_page/home_page'
import AcceptSignOut from './accept_SignOut'
import { AppContext } from './App'

function Main() {
  const { isAdmin } = useContext(AppContext);

  function handleSignOut() {
    const overLay = document.querySelector("#overlay")
    overLay.style.display = "flex"
    const acceptTable = document.querySelector(".accept-signout")
    acceptTable.style.display = "flex"
  }

  return (
    <div className="body-app">
      <div className="main-body">
        <AcceptSignOut />
        {/* <!-- side-bar --> */}
        <div className="side-bar">
          <ul className="nav-bar">
            <li>
              <NavLink id="Home" className="list-item" to="/">
                <img
                  className="icon"
                  src={require("./assets/nav-bar-icons/home.svg").default}
                  alt=""
                />
                <span>Trang chủ</span>
              </NavLink>
            </li>
            {(!isAdmin) || <li>
              <NavLink id="Reader" className="list-item" to="/Reader" >
                <img
                  className="icon"
                  src={require("./assets/nav-bar-icons/author.svg").default}
                  alt=""
                />
                <span>Độc giả</span>
              </NavLink>
            </li>}
            {(!isAdmin) || <li>
              <NavLink id="Storage" className="list-item" to="/Storage" >
                <img
                  className="icon"
                  src={require("./assets/nav-bar-icons/store.svg").default}
                  alt=""
                />
                <span>Kho sách</span>
              </NavLink>
            </li>}
            <li>
              <NavLink id="Service" className="list-item" to="/Service" >
                <img
                  className="icon"
                  src={require("./assets/nav-bar-icons/service.svg").default}
                  alt=""
                />
                <span>Dịch vụ</span>
              </NavLink>
            </li>
            {(!isAdmin) || <li>
              <NavLink id="Statistics" className="list-item" to="/Statistics" >
                <img
                  className="icon"
                  src={require("./assets/nav-bar-icons/statistic.svg").default}
                  alt=""
                />
                <span>Thống kê</span>
              </NavLink>
            </li>}
            {(!isAdmin) || <li>
              <NavLink id="Setting" className="list-item" to="/Setting" >
                <img
                  className="icon"
                  src={require("./assets/nav-bar-icons/setting.svg").default}
                  alt=""
                />
                <span>Tùy chỉnh</span >
              </NavLink>
            </li>}
          </ul>
          <div className="account">
            <NavLink className="list-item" to="/Account">
              <span>Tài khoản</span>
              <img
                className="icon"
                src={require("./assets/nav-bar-icons/account.svg").default}
                alt=""
              />
            </NavLink>
          </div>
          <div className="sign-out-tab">
            <div onClick={handleSignOut} className="sign-out" >Đăng xuất</div>
          </div>
        </div>
        <Routes>
          {/* HomePage */}
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
        <div id="overlay"></div>
      </div>
    </div>
  );
}
export default Main;
