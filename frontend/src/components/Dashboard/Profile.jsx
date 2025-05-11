import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, updateProfile } from 'firebase/auth';
import { doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';
import { IoCamera } from 'react-icons/io5';

const gradientOptions = [
  "bg-gradient-to-r from-green-400 via-blue-500 to-green-600",
  "bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600",
  "bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500",
  "bg-gradient-to-r from-yellow-400 via-green-500 to-blue-600",
  "bg-gradient-to-r from-blue-400 via-teal-500 to-blue-600",
];

const auth = getAuth();
const storage = getStorage();
const db = getFirestore();

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    profilePicture: null,
    headerGradient: gradientOptions[0],  // Default gradient banner
  });
  const [updatedProfile, setUpdatedProfile] = useState(profile);

  useEffect(() => {
    const checkUserStatus = async () => {
      if (auth && auth.currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
          if (!userDoc.exists()) {
            setProfile({
              name: 'New User',
              email: auth.currentUser.email || '',
              bio: '',
              profilePicture: auth.currentUser.photoURL || null,
              headerGradient: gradientOptions[0],  // Default gradient banner
            });
            setUpdatedProfile({
              name: 'New User',
              email: auth.currentUser.email || '',
              bio: '',
              profilePicture: auth.currentUser.photoURL || null,
              headerGradient: gradientOptions[0],
            });
          } else {
            const userData = userDoc.data();
            setProfile({
              name: userData.name || auth.currentUser.displayName || 'New User',
              email: userData.email || auth.currentUser.email || '',
              bio: userData.bio || '',
              profilePicture: userData.profilePicture || auth.currentUser.photoURL || null,
              headerGradient: userData.headerGradient || gradientOptions[0],
            });
            setUpdatedProfile({
              name: userData.name || auth.currentUser.displayName || 'New User',
              email: userData.email || auth.currentUser.email || '',
              bio: userData.bio || '',
              profilePicture: userData.profilePicture || auth.currentUser.photoURL || null,
              headerGradient: userData.headerGradient || gradientOptions[0],
            });
          }
        } catch (error) {
          console.error("Error checking user status:", error);
        }
      }
    };
    checkUserStatus();
  }, [auth, db]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({
      ...updatedProfile,
      [name]: value,
    });
  };
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Show preview immediately
    const previewURL = URL.createObjectURL(file);
    setUpdatedProfile((prev) => ({
      ...prev,
      profilePicture: previewURL,
    }));
  
    try {
      if (storage && auth && auth.currentUser) {
        const storageRef = ref(storage, `profile_pictures/${auth.currentUser.uid}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
  
        // Update again with Firebase URL
        setUpdatedProfile((prev) => ({
          ...prev,
          profilePicture: downloadURL,
        }));
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const handleGradientChange = (gradient) => {
    setUpdatedProfile({
      ...updatedProfile,
      headerGradient: gradient,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (auth && auth.currentUser) {
        // Update profile in Firebase Auth
        await updateProfile(auth.currentUser, {
          displayName: updatedProfile.name,
          photoURL: updatedProfile.profilePicture,
        });

        // Save profile data in Firebase Firestore
        await updateDoc(doc(db, "users", auth.currentUser.uid), {
          name: updatedProfile.name,
          email: updatedProfile.email,
          bio: updatedProfile.bio,
          profilePicture: updatedProfile.profilePicture,
          headerGradient: updatedProfile.headerGradient,
        });
      }
      setProfile(updatedProfile);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto justify-center">
      <div className="bg-white p-3 rounded-3xl w-full">
        <div className="text-center p-4 pt-6 pb-0">
          <h2 className="text-2xl font-bold">Profile</h2>
        </div>
        <div className={`h-28 rounded-t-lg mt-4 relative ${profile.headerGradient}`}>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-white">
                {updatedProfile.profilePicture ? (
                  <img
                    src={updatedProfile.profilePicture}
                    alt={updatedProfile.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    {updatedProfile.name.charAt(0)}
                  </div>
                )}
              </div>
              <button
                className="absolute bottom-0 right-0 bg-white rounded-full p-1 border border-gray-200"
                onClick={() => document.getElementById('profilePictureUpload').click()}
              >
                <IoCamera className="h-6 w-6" />
              </button>
              <input
                type="file"
                id="profilePictureUpload"
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <form onSubmit={handleSubmit} className="space-y-4 px-4">
            <input
              type="text"
              name="name"
              value={updatedProfile.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full rounded-lg border px-3 py-2"
              required
            />
            <input
              type="email"
              name="email"
              value={updatedProfile.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full rounded-lg border px-3 py-2"
              required
            />
            <textarea
              name="bio"
              value={updatedProfile.bio}
              onChange={handleInputChange}
              placeholder="Bio"
              className="w-full rounded-lg border px-3 py-2"
              rows={3}
            />
            <div>
              <h3 className="text-lg font-semibold mb-3">Choose Profile Banner</h3>
              <div className="grid grid-cols-2 gap-2">
                {gradientOptions.map((gradient, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`${gradient} h-20 rounded-lg ${
                      updatedProfile.headerGradient === gradient ? 'ring-2 ring-blue-500' : ''
                    }`}
                    onClick={() => handleGradientChange(gradient)}
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-800 hover:bg-green-600 hover:duration-250 cursor-pointer text-white rounded-full py-3 mt-2"
            >
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
