import "./Navbar.css"
import "./Link"
import Link from "./Link"

function Navbar(){
    return (
        <ul>
            <li>
                <Link>
                    <p>Figlio del componente link</p>
                </Link>
            </li>
            <li>
                <Link></Link>
            </li>
            <li>
                <Link></Link>
            </li>
            <li>
                <Link></Link>
            </li>
        </ul>
    )
}

export default Navbar