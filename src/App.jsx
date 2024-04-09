import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Chats } from "./pages/Chats";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </BrowserRouter>
  );
};
