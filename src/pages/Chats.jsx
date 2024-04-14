import magnifier from "/img/magnifier.png";
import message from "/img/message.png";
import emptyHistory from "/img/emptyHistory.png";
import styles from "./Chats.module.css";
import { onSnapshot, collection } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "../services/database";

export const Chats = () => {
  const [search, setSearch] = useState("");
  const [loadingConversations, setLoadingConversations] = useState(true);
  const [conversations, setConversations] = useState([]);
  const [filteredConversations, setFilteredConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);

  useEffect(() => {
    const unsuscribe = onSnapshot(collection(db, "Chat"), (snapshot) => {
      setConversations(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setLoadingConversations(false);
    });

    return () => unsuscribe();
  }, []);

  const sortConversation = (conversation) => {
    let conversationSorted = [];
    let keys = Object.keys(conversation);
    keys.sort((a, b) => {
      if (a.split("_").length === 3 && b.split("_").length === 3) {
        const time1 = Number(a.split("_")[2]);
        const time2 = Number(b.split("_")[2]);
        if (time1 < time2) {
          return -1;
        } else if (time1 > time2) {
          return 1;
        } else {
          return 0;
        }
      }
      return 0;
    });

    keys.forEach((key) => {
      conversationSorted.push({
        key,
        type: key.split("_")[0],
        content: conversation[key],
      });
    });
    return conversationSorted;
  };

  useEffect(() => {
    setFilteredConversations(
      conversations.filter((conversation) => {
        const keys = Object.keys(conversation);
        let joinedValues = "";
        keys.forEach((key) => {
          joinedValues += conversation[key];
        });
        return joinedValues.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [conversations, search]);

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <div className={styles.upperSide}>
          <div className={styles.upperSideTop}>
            <span className={styles.brand}>Quantum Chat</span>
            <div className={styles.search}>
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <img src={magnifier} alt="Magnifier Icon" />
            </div>
            <div className={styles.conversations}>
              <span>Historial de conversaciones</span>
              {loadingConversations ? (
                <p>Cargando...</p>
              ) : conversations.length === 0 ? (
                <div className={styles.emptyHistoryLogo}>
                  <img src={emptyHistory} alt="Logo de historial" />
                  <p>Historial vacío</p>
                </div>
              ) : (
                filteredConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    type="button"
                    onClick={() => setCurrentConversation(conversation)}
                  >
                    <div className={styles.buttonMainContent}>
                      <img src={message} alt="Logo de un mensaje" />
                      {conversation.name || conversation.id}
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
        <div className={styles.lowerSide}></div>
      </div>
      <div className={styles.main}>
        <div className={styles.containerConversation}>
          {currentConversation ? (
            <div className={styles.conversation}>
              {sortConversation(currentConversation).map(
                (message, index) =>
                  (message.type === "user" || message.type === "bot") && (
                    <div
                      key={index}
                      className={
                        message.type === "user"
                          ? styles.userMessage
                          : styles.botMessage
                      }
                    >
                      {/* <p>{message.key}</p> */}
                      {message.content}
                    </div>
                  )
              )}
            </div>
          ) : (
            <div className={styles.emptyConversation}>
              <img src={emptyHistory} alt="Logo de historial" />
              <p>Selecciona una conversación para empezar</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
