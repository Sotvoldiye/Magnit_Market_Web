import React from 'react'
import { useLocation } from 'react-router-dom';

function AllComent() {
      const location = useLocation();
      const comments = location.state?.comments || [];
    
      return (
        <div>
          {comments.map((comment, index) => (
            <div key={index}>
              <h4>{comment.reviewerName}</h4>
              <p>{comment.comment}</p>
            </div>
          ))}
        </div>
      );
    };
    
    


export default AllComent