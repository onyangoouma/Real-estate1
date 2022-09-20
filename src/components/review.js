import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './review.css';

function Review() {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  function handleChange(e) {
    e.preventDefault();

    
  }
  return (
    <div>
     
      <div className="review">
       
        <form onSubmit={handleChange}>
            <h2>Leave a Review</h2>
            <label htmlFor="rating">Rating</label>
            <input
              type="text" 
              placeholder="house"
              id="rating"
              name="rating"
              autoComplete="off"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />

            <label htmlFor="comment">Comment</label>
            <input className="comment"
              type="text"
              placeholder="comment"
              id="comment"
              name="rating"
              autoComplete="off"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button type="submit" className="btn-view-1">
              Submit
            </button>
          </form>
        
      </div>
    </div>
  );
}

export default Review;