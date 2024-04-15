import {
  HistoryIcon,
  LogOutIcon,
  MenuIcon,
  MessageIcon,
  SpinnerIcon,
} from "../assets/Icons";
import PropTypes from "prop-types";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

export const Aside = ({
  chats,
  isLoading,
  currentConversation,
  setCurrentConversation,
}) => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const { user, logout } = useAuth();

  const isSelected = (conversation) =>
    currentConversation?.phoneNumber === conversation.phoneNumber;

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center pt-1 pl-1 text-gray-200 bg-gray-800 border-b border-white/20 sm:pl-3 md:hidden">
        <button
          type="button"
          onClick={() => setOpenSidebar(!openSidebar)}
          className="-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white"
        >
          <span className="sr-only">Abrir barra lateral</span>
          <MenuIcon />
        </button>
      </div>

      <aside
        className={`fixed z-10 flex flex-col w-64 bg-[#202123] md:h-full transition md:transition-none md:translate-x-0 h-[calc(100%-2.25rem)] ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col flex-1 h-full p-2 space-y-1">
          <div className="flex-col flex-1 overflow-y-auto border-b border-white/20">
            <div className="flex flex-col gap-2 text-sm text-gray-100">
              {isLoading ? (
                <div className="mx-auto mt-6">
                  <SpinnerIcon />
                </div>
              ) : chats.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center gap-2 p-3 mt-6 text-gray-100">
                  <HistoryIcon />
                  <span>Historial vacío</span>
                </div>
              ) : (
                chats.map((conversation) => (
                  <button
                    key={conversation.phoneNumber}
                    type="button"
                    onClick={() => setCurrentConversation(conversation)}
                    className={`relative flex items-center gap-3 p-3 break-all rounded-md cursor-pointer hover:text-green-500 ${
                      isSelected(conversation) ? "bg-gray-600" : "bg-gray-800"
                    }`}
                  >
                    <MessageIcon />
                    <div className="relative flex-1 overflow-hidden break-all text-start text-ellipsis max-h-9">
                      {conversation.name ? (
                        <>
                          <div>{conversation.name}</div>
                          <div className="text-xs text-gray-400">
                            +{conversation.phoneNumber}
                          </div>
                        </>
                      ) : (
                        conversation.phoneNumber
                      )}
                      <div
                        className={`absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l ${
                          isSelected(conversation)
                            ? "from-gray-600"
                            : "from-gray-800"
                        }`}
                      />
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
          <div className="flex items-center justify-center p-3 text-sm text-gray-200">
            {user?.email}
          </div>
          <button
            type="button"
            className="flex items-center justify-center gap-3 p-3 text-sm text-red-500 transition-colors duration-200 rounded-md cursor-pointer hover:bg-gray-500/10"
            onClick={() => logout()}
          >
            Cerrar sesión
            <LogOutIcon />
          </button>
        </nav>
      </aside>
    </>
  );
};

Aside.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  currentConversation: PropTypes.object,
  setCurrentConversation: PropTypes.func.isRequired,
};
