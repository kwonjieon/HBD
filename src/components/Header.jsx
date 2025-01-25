// import { Link } from 'react-router-dom';

// export default function Header() {
//   return (
//     <div>
//       <Link to="/">Home</Link>
//       <Link to="/photo">Photo</Link>
//       <Link to="/song">Song</Link>
//     </div>
//   );
// }
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="py-4 mb-4">
      <nav className="flex justify-center space-x-4">
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/photo" className="btn">
          Photo
        </Link>
        <Link to="/song" className="btn">
          Song
        </Link>
        <Link to="/celebration" className="btn">
          축하영상
        </Link>
      </nav>
    </header>
  );
}
