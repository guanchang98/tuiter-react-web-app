import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {saveProfile} from "../reducers/profile-reducer";
import {useDispatch} from "react-redux";

const EditProfileComponent = () => {
    const userProfile = useSelector(state => state.profile)[0];
    const dispatch = useDispatch();
    const saveProfileHandler = () => {
        const newProfile = {
            ...userProfile,
            firstName: fName,
            lastName: lName,
            location: loc,
            bio: bi,
            website: web,
            dateOfBirth: dob,
        }
        dispatch(saveProfile(newProfile));
    }
    const {
        bannerPicture,
        bio,
        dateOfBirth,
        firstName,
        lastName,
        location,
        profilePicture,
        website,
    } = userProfile;
    const [fName, setFName] = useState(firstName);
    const [lName, setLName] = useState(lastName);
    const [bi, setBi] = useState(bio);
    const [loc, setLoc] = useState(location);
    const [dob, setDob] = useState(dateOfBirth);
    const [web, setWeb] = useState(website);
    return (
        <div className="modal-dialog" id="edit-profile-modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
                        <Link to="../profile" type="button" className="btn-close" data-mdb-dismiss="modal"
                              aria-label="Close"></Link>
                    </div>
                    <div className="modal-body mt-3">
                        <div className="row">
                            <img src={bannerPicture} className="w-100 mb-3" height="240"/>
                            <div className="col-9 float-start mb-4">
                                <img src={profilePicture} className="w-25 pos-absolute"/>
                            </div>
                            <div className="form mt-4">
                                <div className="form-group row mb-3">
                                    <div className="col-6">
                                        <label htmlFor="profileFirstName">First Name</label>
                                        <input type="text" className="form-control" id="profileFirstName"
                                               placeholder="First Name" value={fName}
                                               onChange={(event) => setFName(event.target.value)}/>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="profileLastName">Last Name</label>
                                        <input type="text" className="form-control" id="profileLastName"
                                               placeholder="Last Name" value={lName}
                                               onChange={(event) => setLName(event.target.value)}/>
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="profileBio">Bio</label>
                                    <textarea rows="3" className="form-control" id="profileBio"
                                              placeholder="Bio" value={bi}
                                              onChange={(event) => setBi(event.target.value)}/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="profileLocation">Location</label>
                                    <input className="form-control" id="profileLocation"
                                           placeholder="Location" value={loc}
                                           onChange={(event) => setLoc(event.target.value)}/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="profileWebsite">Website</label>
                                    <input className="form-control" id="profileWebsite"
                                           placeholder="Website" value={web}
                                           onChange={(event) => setWeb(event.target.value)}/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="profileBirthDate">Date of Birth</label>
                                    <input type="date" className="form-control" id="profileBirthDate"
                                           placeholder="Date of Birth" value={dob}
                                           onChange={(event) => setDob(event.target.value)}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <Link to="../profile" type="button" className="btn btn-primary" onClick={saveProfileHandler}>Save</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfileComponent;