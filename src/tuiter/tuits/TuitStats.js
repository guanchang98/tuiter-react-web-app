import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col">
                <i className="bi bi-chat"></i>
                <span className="m-lg-2">{tuit.replies}</span>
            </div>
            <div className="col">
                <i className="bi bi-arrow-down-up"></i>
                <span className="m-lg-2">{tuit.retuits}</span>
            </div>
            <div className="col">
                <a onClick={() => dispatch(updateTuitThunk(
                    {
                        ...tuit,
                        likes: tuit.likes + 1,
                    }
                ))}>
                    <i className="bi bi-heart-fill me-2 text-danger"></i>
                </a>
                <span className="m-lg-2">{tuit.likes}</span>
            </div>
            <div className="col">
                <a onClick={() => dispatch(updateTuitThunk(
                    {
                        ...tuit,
                        dislikes: tuit.dislikes + 1,
                    }
                ))}>
                    <i className="bi bi-hand-thumbs-down-fill"></i>
                </a>
                <span className="m-lg-2">{tuit.dislikes}</span>
            </div>
            <div className="col">
                <i className="bi bi-arrow-bar-up"></i>
            </div>
        </div>
    )
}

export default TuitStats;