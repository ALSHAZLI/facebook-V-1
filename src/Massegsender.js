import { Avatar } from '@material-ui/core';
import React, {useState}from 'react';
import './Massegsender.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase';
import 'firebase/firestore';
import '@firebase/firestore';
import 'firebase/auth';
import firebase from 'firebase';

function Massegsender() {
const [{ user }, dispatch] = useStateValue();
const [ input, setInput] = useState("");
const [ imageUrl, setImageUrl] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('posts').add({
        
        image: imageUrl,
        message: input,
        profilePic: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user.displayName,
      })

    setInput('');
    setImageUrl('');
};
    return (
        <div className="Massegsender">
            <div className="Massegsender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="Massegsender__input" placeholder={`what is in your mind, ${user.displayName} ?`}></input>
                    <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}  placeholder="img url is optional"></input>
                    <button onClick={handleSubmit} type="submit">
                    window submit
                </button>
                </form>
            </div>
            <div className="Massegsender__bottom">
                <div className="Massegsender__option">
                    <VideocamIcon style={{color: "red"}}/>
                    <h3>live video</h3>
                </div>
                <div className="Massegsender__option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h3>photo/video</h3>
                </div>
                <div className="Massegsender__option">
                    <InsertEmoticonIcon style={{color: "orange"}}/>
                    <h3>feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
};

export default Massegsender;
