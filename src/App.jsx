// import './App.css';
// import Home from './pages/Home';
// import Photo from './pages/Photo';
// import Song from './pages/Song';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';

// function App() {
//   return (
//     <>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/photo" element={<Photo />} />
//           <Route path="/song" element={<Song />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
import './App.css';
import Home from './pages/Home';
import Photo from './pages/Photo';
import Song from './pages/Song';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Celebration from './pages/Celebration';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photo" element={<Photo />} />
          <Route path="/song" element={<Song />} />
          <Route path="/celebration" element={<Celebration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
