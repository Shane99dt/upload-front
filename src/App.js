import Wrapper from "./components/Wrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Info from "./pages/Info";
import { UserContextProvider } from "./context/User";
import Login from "./pages/Login";
import Home from "./pages/Home";

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
