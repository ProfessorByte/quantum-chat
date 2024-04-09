import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Chats } from "./pages/Chats";
import "tailwindcss/tailwind.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Chats />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
