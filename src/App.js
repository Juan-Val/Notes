import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { SignIn } from "./components/auth/SignIn";
import { Login } from "./components/auth/Login";
import { Home } from "./components/Home";
import { store } from "./store/store";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <div className="min-h-[90vh] transition-all ease-in-out delay-500">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
