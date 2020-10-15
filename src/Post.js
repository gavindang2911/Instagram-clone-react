import React, { useEffect, useState } from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import { db } from './firebase';
import firebase from 'firebase';



function Post({ postId, user, username, caption, imageUrl}) {
    const [comments, setComments] = useState([]); 
    const [comment, setComment] = useState('');

    useEffect(() => {
        let unsubcribe;
        if (postId) {
            unsubcribe = db
             .collection("posts")
             .doc(postId)
             .collection("comments")
             .orderBy('timestamp', 'desc')
             .onSnapshot((snapshot) => {
                setComments(snapshot.docs.map((doc) => doc.data()));
             });
        }
        
        return () => {
            unsubcribe();
        };
      }, [postId]);

    const postComment = (event) => {
        event.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment('');
    }

    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src="/static/images/avatar/1/png"
                />
                <h3>{username}</h3>

            </div>

            {/* header = ava + username */}
            
            <img className="post__image" src={imageUrl} alt=""></img>
            {/* image */}

            <h4 className="post__text"><strong>{username}: </strong>{caption}</h4>
            {/* username+caption */}

            <div className="post__comments">
                {
                    comments.map((comment) => (
                     <p>
                         <strong>{comment.username}: </strong>{comment.text}
                     </p>
                    ))
                }
            </div>
            
            {user && (
                <form className="post__commentBox">
                    <input 
                        className = "post__input"
                        placeholder="Add a comment ..."
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />

                    <button
                        className="post__button"
                        disabled={!comment}
                        type="submit"
                        onClick={postComment}
                    >
                        Post
                    </button>
                </form>
            )}
        </div>
    )
}

export default Post
