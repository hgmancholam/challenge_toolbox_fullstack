import { Routes, Route } from "react-router-dom";

import ListFiles from "./components/list-files/list-files.component";
import FileContent from "./components/file-content/file-content.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import AllFiles from "./components/all-files/all-files.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="listFiles" element={<ListFiles />} />
        <Route path="fileContent" element={<FileContent />} />
        <Route path="allFiles" element={<AllFiles />} />
      </Route>
    </Routes>
  );
};

export default App;
