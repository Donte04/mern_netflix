import "./navbar.scss";
import { ArrowDropDown, Search, Notifications } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    console.log(isScrolled);
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />
                    <Link to ="/" className="link">
                    <span>Homepage</span>
                    </Link>
                    <Link to ="/series" className="link">
                    <span>Series</span>
                    </Link>
                    <Link to ="/movies" className="link">
                    <span>Movies</span>
                    </Link>
                    <Link to ="/" className="link">
                    <span>New and Popular</span>
                    </Link>
                    <Link to ="/" className="link">
                    <span>My list</span>
                    </Link>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KIDS</span>
                    <Notifications className="icon"/>
                    <img 
                        src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQq7tk0559I6V-2JOzeZUVb9NBKmKbBGHy5tFraxB9jN-O9cBB595XlGhG9Ao2JK2aF3Q0ydLBYyFHSe0OFyThDRCqsrVt-bioHd.webp?r=852" 
                        alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar
