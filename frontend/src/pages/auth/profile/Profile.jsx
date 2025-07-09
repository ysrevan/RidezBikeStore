import React from 'react'
import { useSelector } from 'react-redux'
import './Profile.css' 

const Profile = () => {
  const { user } = useSelector((state) => state.user)

  if (!user) {
    return <p>Please login</p>
  }

  return (
    <div className="profile-container">
      <h1 className='profile'>Profile</h1>
      <div className="profile-header">
      <img
  src={user.image ? `${import.meta.env.VITE_SERVER_URL}/${user.image}` : "https://via.placeholder.com/150"}
  alt="Profil şəkli"
  className="profile-photo"
/>

        <div className="profile-info">
          <p><strong>Name:</strong> {user.name || "Ad mövcud deyil"}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
