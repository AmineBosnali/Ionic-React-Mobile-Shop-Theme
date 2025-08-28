import React, { useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonTextarea,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { star, starOutline } from "ionicons/icons";
import { Button } from "../button/Button";

interface Comment {
  rating: number;
  text: string;
  date: string;
}

const CommentOne: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const handleSendComment = () => {
    const newComment: Comment = {
      rating,
      text: comment,
      date: new Date().toLocaleDateString(),
    };
    setComments([...comments, newComment]);
    setRating(0);
    setComment("");
  };

  return (
    <>
      <IonCard className="cardThree">
        <IonCardContent>
          <div className="ratingLarge">
            {[1, 2, 3, 4, 5].map((starNumber) => (
              <IonIcon
                key={starNumber}
                icon={starNumber <= rating ? star : starOutline}
                className="starIconMain"
                onClick={() => handleRating(starNumber)}
              />
            ))}
          </div>
          <IonTextarea
            placeholder="Write your comment..."
            value={comment}
            onIonInput={(e) => setComment(e.detail.value!)}
            maxlength={150}
            className="commentTextarea"
          />
          <div className="charCount">{comment.length}/150</div>
          <Button color="default" onClick={handleSendComment} label="Send" />
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardContent>
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <IonItem key={index}>
                <IonLabel>
                  <div className="rating">
                    {[1, 2, 3, 4, 5].map((starNumber) => (
                      <IonIcon
                        key={starNumber}
                        icon={starNumber <= comment.rating ? star : starOutline}
                        className="starIcon"
                      />
                    ))}
                  </div>
                  <p className="commentText">{comment.text}</p>
                  <p className="commentDate">{comment.date}</p>
                </IonLabel>
              </IonItem>
            ))
          ) : (
            <IonLabel>No comments yet.</IonLabel>
          )}
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default CommentOne;