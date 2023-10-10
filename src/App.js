import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router,
  Route,
  Routes,
  // Route,
  Link
 } from "react-router-dom";


function App() {
  const user =true;
  return (
    
    
    <Router> 
    <TopBar />
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/write" element={<Write/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/post/postId" element={<Single/>}/>
        </Routes>
    </Router>
    

  );
}

export default App;
