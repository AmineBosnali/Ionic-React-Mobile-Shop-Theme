import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  IonContent,
  IonItem,
  IonLabel,
  IonAvatar,
  IonText,
  IonInput,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { sendSharp, image, closeCircle, arrowBack } from "ionicons/icons";
/* Components */
import { Button } from "../components/theme/button/Button";

interface Message {
  id: number;
  user: string;
  text: string;
  time: string;
  avatar: string;
  file?: string | null;
}

const Chats: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      user: "User 1",
      text: "Hello! How are you?",
      time: "10:00 AM",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      file: null,
    },
    {
      id: 2,
      user: "You",
      text: "I'm good, thank you! How about you?",
      time: "10:02 AM",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      file: null,
    },
    {
      id: 3,
      user: "User 1",
      text: "I'm doing well, thanks!",
      time: "10:05 AM",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      file: null,
    },
    {
      id: 4,
      user: "You",
      text: "That's great to hear!",
      time: "10:10 AM",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      file: null,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "" && !selectedFile) return;
    const nextId = messages.length + 1;
    const newMessages = [
      ...messages,
      {
        id: nextId,
        user: "You",
        text: newMessage,
        time: new Date().toLocaleTimeString(),
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
        file: selectedFile ? URL.createObjectURL(selectedFile) : null,
      },
    ];
    const autoResponse = {
      id: nextId + 1,
      user: "User 1",
      text: "I didn't understand what you mean, could you please rephrase?",
      time: new Date().toLocaleTimeString(),
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      file: null,
    };

    setMessages([...newMessages, autoResponse]);
    setNewMessage("");
    setSelectedFile(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLIonInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonIcon
            className="backIconChat"
            size="small"
            icon={arrowBack}
            onClick={() => history.goBack()}
          />
          <IonTitle className="titleChat">IonShop</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="messagesContainer">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${
                message.user === "You" ? "sent" : "received"
              }`}
            >
              <div
                className={`messageItem ${
                  message.user === "You" ? "right" : "left"
                }`}
              >
                {message.user !== "You" && (
                  <IonAvatar
                    className="avatar"
                    slot={message.user === "You" ? "end" : "start"}
                  >
                    <img
                      src={message.avatar}
                      alt={`Avatar of ${message.user}`}
                    />
                  </IonAvatar>
                )}

                <IonLabel className="messageLabel">
                  {message.file && (
                    <div className="messageFile">
                      {message.file.endsWith(".mp4") ? (
                        <video controls>
                          <source src={message.file} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img src={message.file} alt="uploaded file" />
                      )}
                    </div>
                  )}
                  <p className="messageText">{message.text}</p>
                  <IonText color="medium" className="messageTime">
                    <p>{message.time}</p>
                  </IonText>
                </IonLabel>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
      </IonContent>
      <div className="inputContainer">
        {selectedFile && (
          <div className="filePreview">
            {selectedFile.type.startsWith("image/") ? (
              <img src={URL.createObjectURL(selectedFile)} alt="preview" />
            ) : (
              <video controls>
                <source
                  src={URL.createObjectURL(selectedFile)}
                  type={selectedFile.type}
                />
                Your browser does not support the video tag.
              </video>
            )}
            <IonIcon
              className="removeFile"
              size="large"
              icon={closeCircle}
              onClick={handleRemoveFile}
            />
          </div>
        )}
        <IonItem lines="none">
          <input
            type="file"
            accept="image/*,video/*"
            style={{ display: "none" }}
            id="fileInput"
            onChange={handleFileChange}
          />
          <IonIcon
            className="addPhoto"
            size="large"
            onClick={() => document.getElementById("fileInput")!.click()}
            icon={image}
          />
          <IonInput
            value={newMessage}
            placeholder="Type a message"
            onIonChange={(e) => setNewMessage(e.detail.value!)}
            onKeyDown={handleKeyDown}
          ></IonInput>
          <Button
            onClick={handleSendMessage}
            id="sendButton"
            color="default"
            icon={<IonIcon size="small" icon={sendSharp}></IonIcon>}
          />
        </IonItem>
      </div>
    </>
  );
};

export default Chats;
