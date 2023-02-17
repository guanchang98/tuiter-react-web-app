import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (
        `
            <ul class="list-group">
                <div class="list-group-item list-group-item-action"><b>Who to follow</b></div>
                ${who.map(who => {
                        return WhoToFollowListItem(who);
                    }).join('')
                }
           </ul>
        `
    )
}

export default WhoToFollowList;
