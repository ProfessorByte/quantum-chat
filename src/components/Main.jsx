import { ChatBubbleIcon } from "../assets/Icons";
import { Message } from "./Message";
import PropTypes from "prop-types";

export const Main = ({ currentConversation }) => {
  return (
    <div className="h-full overflow-hidden">
      <main className="md:pl-64 h-full overflow-auto">
        {currentConversation ? (
          currentConversation.sortedConversation.map((message) => (
            <Message
              key={message.timestamp}
              sender={message.type}
              message={message.message}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-center gap-2 p-3 mt-6 text-gray-100">
            <ChatBubbleIcon />
            <span>Ninguna conversación seleccionada</span>
          </div>
        )}
        <div className="flex-shrink-0 w-full h-32" />
      </main>
    </div>
  );
};

Main.propTypes = {
  currentConversation: PropTypes.object,
};
