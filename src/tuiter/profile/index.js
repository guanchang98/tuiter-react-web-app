import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import './index.css';

const ProfileComponent = () => {
    const userProfile = useSelector(state => state.profile)[0];
    const {
        bannerPicture,
        bio,
        dateJoined,
        dateOfBirth,
        firstName,
        followersCount,
        followingCount,
        handle,
        lastName,
        location,
        profilePicture,
        website,
    } = userProfile;
    return (
        <div className="row">
            <img src={bannerPicture} className="w-100 mb-3" height="240"/>
            <div className="col-9 float-start">
                <img src={profilePicture} className="w-25 pos-absolute"/>
            </div>
            <div className="col-3 mb-4">
                <Link className="btn btn-primary rounded-3 float-end" to="../edit-profile">
                    Edit Profile
                </Link>
            </div>
            <div>
                <div className="mt-3">
                    <h2>{firstName} {lastName}</h2>
                </div>
                <div className="mb-3 text-secondary">
                    {handle}
                </div>
                <p>
                    {bio}
                </p>
                <div className="row mb-3">
                    <div className="col-3">
                        <i className="bi bi-geo-alt text-secondary"></i>
                        <span className="text-secondary"> {location} </span>
                    </div>
                    <div className="col-4">
                        <i className="bi bi-balloon text-secondary"></i>
                        <span className="text-secondary"> Born on {dateOfBirth} </span>
                    </div>
                    <div className="col-3">
                        <i className="bi bi-calendar3 text-secondary"></i>
                        <span className="text-secondary"> Joined {dateJoined} </span>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-3">
                        <b>{followingCount} </b>
                        <span className="text-secondary">Following</span>
                    </div>
                    <div className="col-3">
                        <b> {followersCount} </b>
                        <span className="text-secondary">Followers</span>
                    </div>
                </div>
                <div>
                    <span>Website: </span>
                    <a href={website}>
                         {website}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;