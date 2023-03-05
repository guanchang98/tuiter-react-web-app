import React from "react";
const PostListItem = (
    {
        post = {
            "avatar":"avatar-elon-musk.jpeg",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "23h",
            "tweetContent": "Amazing show about @Inspiration4x mission!",
            "image": "../../images/twitter-elon-musk.jpeg",
            "commentCount": "4.2K",
            "retweetCount": "3.5K",
            "likeCount": "37.5K"
        }
    }
) => {
    return (
        <div className="row border-bottom mb-3">
            <div className="col-1">
                <img className="w-100 rounded-circle" src={`../images/${post.avatar}`}/>
            </div>
            <div className="col-11">
                <div className="row">
                    <div className="col-11">
                        <b className="fg-white">{post.userName} </b>
                        <i className="bi bi-check-circle-fill"></i>
                        <span> @{post.handle} · {post.time}</span>
                    </div>
                    <div className="col-1">
                        <i className="bi bi-three-dots"></i>
                    </div>
                </div>
                <div className="mb-2">
                    {post.tweetContent}
                </div>
                    <img className="rounded-3 w-100 mb-3" src={`../images/${post.image}`}/>
                <div className="row mb-3">
                    <div className="col-3">
                        <i className="bi bi-chat"></i>
                        <span className="m-lg-2">{post.commentCount}</span>
                    </div>
                    <div className="col-3">
                        <i className="bi bi-arrow-down-up"></i>
                        <span className="m-lg-2">{post.retweetCount}</span>
                    </div>
                    <div className="col-3">
                        <i className="bi bi-heart"></i>
                        <span className="m-lg-2">{post.likeCount}</span>
                    </div>
                    <div className="col-3">
                        <i className="bi bi-arrow-bar-up"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostListItem;