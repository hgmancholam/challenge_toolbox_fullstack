import { createContext, useState, useEffect } from "react";
import {
  GetListFiles,
  GetFileContent,
  GetAllFilesData,
} from "../service/techstak-api";

export const FilesContext = createContext({
  files: [],
});

export const FilesProvider = ({ children }) => {
  const [loadingFileContent, setLoadingFileContent] = useState(false);
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState("");
  const [currentFileContent, setCurrentFileContent] = useState([]);
  const [allFilesData, setAllFilesData] = useState([]);

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

  const getRawData = () => {
    setLoadingFileContent(true);
    const serviceResponse = GetAllFilesData(setAllFilesData);
    serviceResponse.then(() => setLoadingFileContent(false));
    console.log(allFilesData);
  };

  const value = {
    files,
    currentFile,
    setFile,
    currentFileContent,
    loadingFileContent,
    allFilesData,
    getRawData,
  };

  return (
    <FilesContext.Provider value={value}>{children}</FilesContext.Provider>
  );
};
