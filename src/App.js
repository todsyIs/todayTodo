import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Todo from "./pages/Todo/Todo";
import ProjectInfo from "./pages/ProjectInfo/ProjectInfo";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/today" element={<Todo />} />
        <Route path="/about" element={<ProjectInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
