import React from "react";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";


const TuitItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@space",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="w-100 rounded-circle" src={`../images/${post.image}`}/>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-11">
                            <b className="fg-white">{post.userName} </b>
                            <i className="bi bi-check-circle-fill"></i>
                            <span> {post.handle} · {post.time}</span>
                        </div>
                        <div className="col-1">
                            <i className="bi bi-x-lg float-end"
                               onClick={() => deleteTuitHandler(post._id)}></i>
                        </div>
                    </div>
                    {post.tuit}
                    <div className="mb-3">
                        {post.tweetContent}
                    </div>
                    <TuitStats stats={post}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;