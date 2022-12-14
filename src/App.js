
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Friends from './Components/Friends/Friends';
import Header from './Components/Header/Header';
import Error from './Components/Error/Error';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route  path="/" element={<Home></Home>}></Route>
        <Route  path="/about" element={<About></About>}></Route>
        <Route  path="/contact" element={<Contact></Contact>}></Route>
        <Route  path="/friends" element={<Friends></Friends>}></Route>        
        <Route path="friend/:details" element={<FriendDetails></FriendDetails>}></Route>
        <Route path="/posts" element={<Posts></Posts>}>
          <Route path=":postId" element={<PostDetails></PostDetails>}></Route>
        </Route>
        <Route  path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
