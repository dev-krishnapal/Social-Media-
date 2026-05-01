import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";
import CreatePost from "../Component/CreatePost";
import PostList from "../Component/PostList";
import PostListProvider from "../Store/post-store-list";
import { useContext, useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  // const { postList } = useContext(PostList);

  return (
    <>
      <PostListProvider>
        <div className="containers">
          <Nav selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Nav>
          <div className="mainContainer">
            <Header></Header>

            {/* {selectedTab === "Home" ? (
              <PostList></PostList>
            ) : (
              <CreatePost></CreatePost>
            )} */}

            <Outlet></Outlet>

            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
