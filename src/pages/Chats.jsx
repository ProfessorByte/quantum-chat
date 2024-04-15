import { collection, onSnapshot } from "firebase/firestore";
import { useReducer, useEffect } from "react";
import { db } from "../services/database";
import { Aside } from "../components/Aside";
import { Main } from "../components/Main";

const SET_CHATS = "SET_CHATS";
const SET_CURRENT_CHAT = "SET_CURRENT_CHAT";
const FILTER_CHATS = "FILTER_CHATS";

const initialState = {
  chats: [],
  filteredChats: [],
  isLoading: true,
  currentChat: null,
};

const contains = (chat, search) => {
  for (const key in chat) {
    const keyType = key.split("_")[0];
    if (
      (keyType === "user" ||
        keyType === "bot" ||
        key === "name" ||
        key === "phoneNumber") &&
      chat[key].toLowerCase().includes(search.trim().toLowerCase())
    ) {
      return true;
    }
  }
  return false;
};

const sortConversation = (conversation) => {
  let sortedConversation = [];
  for (const message in conversation) {
    const keySegments = message.split("_");
    if (keySegments[0] === "user") {
      sortedConversation.push({
        type: "user",
        message: conversation[message],
        timestamp: keySegments[2],
      });
    } else if (keySegments[0] === "bot") {
      sortedConversation.push({
        type: "bot",
        message: conversation[message],
        timestamp: keySegments[2],
      });
    }
  }

  sortedConversation.sort((a, b) => {
    if (a.timestamp < b.timestamp) {
      return -1;
    } else if (a.timestamp > b.timestamp) {
      return 1;
    } else {
      return 0;
    }
  });

  return {
    phoneNumber: conversation.phoneNumber,
    name: conversation.name,
    sortedConversation,
  };
};

const chatsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CHATS:
      return {
        ...state,
        chats: payload,
        filteredChats: payload,
        isLoading: false,
      };
    case SET_CURRENT_CHAT:
      return {
        ...state,
        currentChat: sortConversation(payload),
      };
    case FILTER_CHATS:
      return {
        ...state,
        filteredChats: state.chats.filter((chat) => contains(chat, payload)),
      };
    default:
      return state;
  }
};

export const Chats = () => {
  const [{ chats, filteredChats, isLoading, currentChat }, dispatch] =
    useReducer(chatsReducer, initialState);

  const setCurrentConversation = (conversation) => {
    dispatch({ type: SET_CURRENT_CHAT, payload: conversation });
  };

  useEffect(() => {
    const unsuscribe = onSnapshot(collection(db, "Chat"), (snapshot) => {
      const chats = snapshot.docs.map((doc) => ({
        phoneNumber: doc.id,
        ...doc.data(),
      }));
      dispatch({ type: SET_CHATS, payload: chats });
    });

    return () => unsuscribe();
  }, []);

  return (
    <div className="w-full h-screen bg-[#343541]">
      <Aside
        chats={filteredChats}
        isLoading={isLoading}
        currentConversation={currentChat}
        setCurrentConversation={setCurrentConversation}
      />
      <Main currentConversation={currentChat} />
    </div>
  );
};
