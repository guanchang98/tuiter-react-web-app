import {createSlice} from "@reduxjs/toolkit";
import userProfile from "../profile/user-profile.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: userProfile,
    reducers: {
        saveProfile(state, action) {
            state.unshift({
                ...action.payload,
                _id: (new Date()).getTime(),
            })
        }
    }
})


export const {saveProfile} = profileSlice.actions;
export default profileSlice.reducer;