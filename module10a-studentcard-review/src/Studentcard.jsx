//StudentCard.jsx, this is the file that displays a student's card with their name, major, image, bio
import { useState } from 'react';


//This function uses props for dynamic data and usestate() to handle show/hide bio

function StudentCard({ name, major, bio, image }) {
  const [showBio, setShowBio] = useState(false);

  //This function toggles the showBio state between true and false when the button is clicked
  const toggleBio = () => {
    setShowBio(!showBio);
  };

  //This is the main return statement renders the student profile card
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', margin: '20px auto', maxWidth: '400px', borderRadius: '10px', textAlign: 'center' }}>
      <img
        src={image}
        alt={`${name}'s profile`}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <h2>{name}</h2> 
      <h4>{major}</h4> 

      {/*Button that toggles the bio visibility*/}
      <button onClick={toggleBio}>
        {showBio ? 'Hide Bio' : 'Show Bio'}
      </button>
      {showBio && <p>{bio}</p>}
    </div>
  );
}

export default StudentCard;