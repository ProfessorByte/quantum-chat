import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "./services/database";

export const App = () => {
  const [chatsData, setChatsData] = useState([]);

  useEffect(() => {
    const unsuscribeChats = onSnapshot(collection(db, "Chat"), (snapshot) => {
      const chats = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setChatsData(chats);
    });

    return () => {
      unsuscribeChats();
    };
  }, []);

  return (
    <div>
      {chatsData.map((chat) => (
        <div key={chat.id}>{chat.id}</div>
      ))}
    </div>
  );
};
