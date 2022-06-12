import { Link} from "react-router-dom";
import "./styles.css"

export default function Navbar() {
   
    return (
        <nav className="nav">
            <Link to='/'>Home</Link> 
            <Link to='/about'>About</Link> 
            <Link to='/experience'>Experience</Link> 
            <Link to='/skills'>Skills</Link> 
            <Link to='/awards'>Awards</Link> 
        </nav>
    )
}