import React, {useState} from "react";

const TuitStats = ({stats}) => {
    const [liked, setLiked] = useState(stats.liked);
    const [count, setCount] = useState(stats.likes);
    const likeHandler = () => {
        if (liked) {
            setCount(count - 1);
        } else {
            setCount(count + 1);
        }
        setLiked(!liked);
        console.log(liked, count);
    }

    return (
        <div className="row">
            <div className="col-3">
                <i className="bi bi-chat"></i>
                <span className="m-lg-2">{stats.replies}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-arrow-down-up"></i>
                <span className="m-lg-2">{stats.retuits}</span>
            </div>
            {
                !liked &&
                <div className="col-3">
                    <a onClick={() => likeHandler()}>
                        <i className="bi bi-heart"></i>
                    </a>

                    <span className="m-lg-2">{count}</span>
                </div>
            }
            {
                liked && <div className="col-3">
                <a onClick={() => likeHandler()}>
                    <i className="bi bi-heart-fill text-danger"></i>
                </a>
                    <span className="m-lg-2">{count}</span>
                </div>
            }
            <div className="col-3">
                <i className="bi bi-arrow-bar-up"></i>
            </div>
        </div>
    )
}

export default TuitStats;