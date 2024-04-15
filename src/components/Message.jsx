import { AiAvatar } from "../assets/AiAvatar";
import { UserAvatar } from "../assets/UserAvatar";
import { Avatar } from "./Avatar";
import Markdown from "react-markdown";
import PropTypes from "prop-types";

export const Message = ({ sender, message }) => {
  const avatar = sender === "bot" ? <AiAvatar /> : <UserAvatar />;

  return (
    <div
      className={`text-gray-100 ${
        sender === "bot" ? "bg-[#444654]" : "bg-[#343541]"
      }`}
    >
      <article className="flex max-w-3xl gap-4 p-6 m-auto">
        <Avatar>{avatar}</Avatar>
        <div className="min-h-[20px] flex flex-1 flex-col items-start gap-4">
          <div className="w-full break-words prose-invert">
            <Markdown>{message}</Markdown>
          </div>
        </div>
      </article>
    </div>
  );
};

Message.propTypes = {
  sender: PropTypes.oneOf(["bot", "user"]).isRequired,
  message: PropTypes.string.isRequired,
};
