import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Lab</Link> |
            <Link to="/">Assignment6</Link> |
            <Link to="/a7">Assignment7</Link> |
            <Link to="/tuiter">Tuiter</Link>
        </div>
    )
}

export default Nav;