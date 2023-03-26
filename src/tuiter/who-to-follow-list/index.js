import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector(state => state.who);
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Who to follow</h3>
            </li>
            <li className="list-group-item">
                {whoArray.map(who =>
                    <WhoToFollowListItem
                        key={who._id}
                        who={who}/>
                )}

            </li>
        </ul>
    )
}

export default WhoToFollowList;