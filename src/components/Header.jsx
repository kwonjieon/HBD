import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/photo">Photo</Link>
      <Link to="/song">Song</Link>
    </div>
  );
}
