import Wrapper from "./components/Wrapper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Info from "./pages/Info";
import { UserContextProvider } from "./context/User";

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </UserContextProvider>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
