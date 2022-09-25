import classes from "./MainNavigation.module.css"
import {Link} from "react-router-dom";

function MainNavigation(){
    return(
        <header className={classes.header}>
            <nav className={classes.logo}>
                <Link to="/">Parkster</Link>
            </nav>
            <nav>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/newparkingspot">New spot</Link>
                    </li>
                </ul>
            </nav>
        </header>

    );
}

export default MainNavigation;