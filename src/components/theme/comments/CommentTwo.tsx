import React, { useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonTextarea,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { Button } from "../button/Button";

interface TextAreaOnlyComment {
  text: string;
  date: string;
}

const CommentTwo: React.FC = () => {
  const [textAreaComment, setTextAreaComment] = useState("");
  const [textAreaOnlyComments, setTextAreaOnlyComments] = useState<TextAreaOnlyComment[]>([]);

  const handleSendTextAreaOnlyComment = () => {
    const newComment: TextAreaOnlyComment = {
      text: textAreaComment,
      date: new Date().toLocaleDateString(),
    };
    setTextAreaOnlyComments([...textAreaOnlyComments, newComment]);
    setTextAreaComment("");
  };

  return (
      <>
        <IonCard className="cardThree">
          <IonCardContent>
            <IonTextarea
              placeholder="Write your comment..."
              value={textAreaComment}
              onIonInput={(e) => setTextAreaComment(e.detail.value!)}
              maxlength={150}
              className="commentTextarea"
            />
            <div className="charCount">{textAreaComment.length}/150</div>
            <Button onClick={handleSendTextAreaOnlyComment} label="Send" />
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            {textAreaOnlyComments.length > 0 ? (
              textAreaOnlyComments.map((comment, index) => (
                <IonItem key={index}>
                  <IonLabel>
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

export default CommentTwo;