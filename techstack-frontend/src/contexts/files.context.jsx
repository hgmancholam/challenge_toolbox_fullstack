import { createContext, useState, useEffect } from "react";
import { GetListFiles, GetFileContent } from "../service/techstak-api";

export const FilesContext = createContext({
  files: [],
});

export const FilesProvider = ({ children }) => {
  const [loadingFileContent, setLoadingFileContent] = useState(false);
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState("");
  const [currentFileContent, setCurrentFileContent] = useState([]);

  useEffect(() => {
    GetListFiles(setFiles);
  }, []);

  const setFile = (filetoCheck) => {
    setCurrentFile(filetoCheck);
  };

  useEffect(() => {
    if (currentFile && currentFile.length > 0) {
      setLoadingFileContent(true);
      const newFileContent = GetFileContent(currentFile, setCurrentFileContent);
      newFileContent.then(() => setLoadingFileContent(false));
    }
  }, [currentFile]);

  const value = {
    files,
    currentFile,
    setFile,
    currentFileContent,
    loadingFileContent,
  };

  return (
    <FilesContext.Provider value={value}>{children}</FilesContext.Provider>
  );
};
