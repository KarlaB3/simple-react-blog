import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CreateBlog from './components/CreateBlog'
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
