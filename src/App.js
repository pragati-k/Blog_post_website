import "./App.css";
import BlogList from "./components/blogList";
import AddPost from "./components/addPost";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./components/blogDetails/blogDetails";
import { GlobalProvider } from "./context/GlobalState";
import EditPost from "./components/editPost";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="cointainer">
            <Routes>
              <Route exact path="/" element={<BlogList />} />
              <Route exact path="/addPost" element={<AddPost />} />
              <Route exact path="/blog/:id" element={<BlogDetails />} />
              <Route exact path="/editPost/:id" element={<EditPost />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
