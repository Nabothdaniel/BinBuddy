import React, { useState } from 'react';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: 'Software developer with a passion for coding and learning new technologies.',
    profilePicture: null, // You can store the image URL here
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({
      ...updatedProfile,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setUpdatedProfile({
      ...updatedProfile,
      profilePicture: URL.createObjectURL(e.target.files[0]), // Preview image
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProfile(updatedProfile); // Save the updated profile
    setIsEditing(false); // Exit editing mode
  };

  return (
    <section className="bg-white p-6 rounded-xl shadow-md my-10 max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-green-700">Profile</h2>
        <button
          onClick={() => setIsEditing((prev) => !prev)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="profilePicture" className="block text-gray-700 mb-2">
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            onChange={handleFileChange}
            disabled={!isEditing}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-2"
          />
          {updatedProfile.profilePicture && (
            <img
              src={updatedProfile.profilePicture}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full object-cover"
            />
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={updatedProfile.name}
            onChange={handleInputChange}
            disabled={!isEditing}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={updatedProfile.email}
            onChange={handleInputChange}
            disabled={!isEditing}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bio" className="block text-gray-700 mb-2">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={updatedProfile.bio}
            onChange={handleInputChange}
            disabled={!isEditing}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            rows="4"
          />
        </div>

        {isEditing && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Save Changes
            </button>
          </div>
        )}
      </form>
    </section>
  );
};

export default Profile;
