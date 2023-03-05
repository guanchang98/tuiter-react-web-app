import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    console.log("pathName is: ",pathname);
    const paths = pathname.split('/');
    console.log("path is: ",paths);
    const active = paths[2];
    return (
        <div className="list-group mb-3">
            <a className="list-group-item list-group-item-action">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <a className={`list-group-item list-group-item-action
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'messages'?'active':''}`}>
                Messages
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'lists'?'active':''}`}>
                Lists
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'profile'?'active':''}`}>
                Profile
            </a>
            <a className={`list-group-item list-group-item-action
                    ${active === 'more'?'active':''}`}>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;