import React, { useEffect, useState } from 'react';

const Profile=()=>{
    const [user,setUser]=useState(null);

    useEffect(()=>{
        const userId='';
        fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        // Handle successful user data retrieval
        setUser(data);
      });
  }, []);
  if(user ===null){
    return <p>Loading...</p>;
  }

  return (
    <div>
        <h2>Profile</h2>
        <p>Id:{user.id}</p>
        <p>Nmae:{user.name}</p>
        <p>Email:{user.email}</p>
    </div>
  );

    
};




 export default Profile;
