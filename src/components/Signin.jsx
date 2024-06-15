// import React, { useState } from 'react'
// import "../styles/Signin.css"
// import google from "../assets/google.png"
// import todobot from "../assets/google2.png"
// import {useNavigate } from 'react-router-dom'
// import { signInWithPopup } from 'firebase/auth'
// import { auth, provider } from './firebase'



// function Signin() {

//   const [redirect,setRedirect] =useState(false)
//   const navigate = useNavigate()


//     const handleClick = () => {

//       signInWithPopup(auth , provider).then(()=>{
//         setRedirect(true)
//       })

//     }



//   return (
//     <div className='background-container'>
//       <video autoPlay muted loop className="background-video">
//         <source src={"b3.mp4"} type="video/mp4" />
      
//         <div className='signdiv' >
//             <h1 >Sign-In</h1>
//             <img className='todobot' src={todobot}/>
//             <button onClick={handleClick} >
//                 <img  src= {google} alt="" className='google' />
//                 Continue with Google
//             </button>
//         </div>
//         {redirect?navigate("/home"):console.log("error")}
        
//         </video>
//     </div>
//   )
// }

// export default Signin






import React, { useState } from 'react';
import "../styles/Signin.css";
import google from "../assets/google.png";
import todobot from "../assets/google2.png";
import { useNavigate } from 'react-router-dom';
import { inMemoryPersistence, signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import video from '../assets/bg-org.mp4'
import sound from '../assets/sound.mp3'
function Signin() {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        setRedirect(true);
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  };

  return (
    <div className='background-container'>
      <video autoPlay muted loop className="background-video">
        <source src={video} type="video/mp4" />
        </video>
        <audio autoPlay loop>
          <source src={sound} type="audio/mp3" />
          
        </audio>
    
      <div className='signdiv'>
        <p className='signinp'>TaskTrove</p>
        <img className='todobot' src={todobot} alt="todobot logo"/>
        <p className='signinp'>Start your fun!</p>
        <button onClick={handleClick}>
          <img src={google} alt="Google logo" className='google' />
          Continue to sign-in
        </button>
      </div>
      {redirect ? navigate("/home") : null}
      
    </div>
  );
}

export default Signin;
