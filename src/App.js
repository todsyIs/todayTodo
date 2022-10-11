import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Todo from "./pages/Todo/Todo";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/today" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
