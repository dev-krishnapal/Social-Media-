const Nav = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark navBar"
      style={{ width: "280px" }}
    >
      {" "}
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        {" "}
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>{" "}
        <span className="fs-4">Sidebar</span>{" "}
      </a>{" "}
      <hr />{" "}
      <ul className="nav nav-pills flex-column mb-auto">
        {" "}
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Home");
          }}
        >
          {" "}
          <a
            href="#"
            className={`nav-link text-white ${selectedTab === "Home" && "active"}`}
            aria-current="page"
          >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>{" "}
        </li>{" "}
        <li
          onClick={() => {
            setSelectedTab("CreatePost");
          }}
        >
          {" "}
          <a
            href="#"
            className={`nav-link text-white ${selectedTab === "CreatePost" && "active"}`}
          >
            {" "}
            <svg
              className="bi pe-none me-2"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <use xlinkHref="#speedometer2"></use>
            </svg>
            CreatePost
          </a>{" "}
        </li>{" "}
      </ul>{" "}
      <div className="dropdown">
        {" "}
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {" "}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1seYkPYTXeprg-ycMfBvOpxtMqRg08j772w&shttps://i.pinimg.com/736x/be/c2/4c/bec24c3ea4c910fc06afae2e6f361249.jpg"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />{" "}
          <strong>modi</strong>{" "}
        </a>{" "}
        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
          {" "}
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>{" "}
          <li>
            <hr className="dropdown-divider" />
          </li>{" "}
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default Nav;
