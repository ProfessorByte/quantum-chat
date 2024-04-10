import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Chats } from "./pages/Chats";
import "tailwindcss/tailwind.css";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import { useAuth } from "./hooks/useAuth";

export const App = () => {
  const { user, loading } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute
              loading={loading}
              isForUser={true}
              user={user}
              redirectTo="/login"
            />
          }
        >
          <Route path="/" element={<Chats />} />
        </Route>
        <Route
          element={
            <ProtectedRoute loading={loading} isForUser={false} user={user} />
          }
        >
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<h1>Error 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
