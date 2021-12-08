import React from "react"
import s from "../../css/Profile.module.css"
import ProfilePhoto from "./ProfilePhoto"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import Preloader from "../common/preloader/preloader"
import PostsContaine from "./Post/PostsContaine"
import ProfileFriendsContaine from "./ProfileFriends/ProfileFriendsContaine"

const ProfilePage = ({myUserId, userId, profile, updateProfile, status, updateStatus, updatePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileWrapper}>
            <div>
                <ProfilePhoto profileAvatar={profile.photos.large}
                              updatePhoto={updatePhoto}
                              myUserId={myUserId}
                              userId={userId}/>
                {!userId && <ProfileFriendsContaine/>}
            </div>
            <div>
                <ProfileInfo userId={userId}
                             myUserId={myUserId}
                             info={profile}
                             status={status}
                             updateProfile={updateProfile}
                             updateStatus={updateStatus}/>
                {!userId && <PostsContaine/>}
            </div>
        </div>
    )
}

export default ProfilePage