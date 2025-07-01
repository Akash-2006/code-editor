import { useRef, useState } from "react";
import LanguageSupport from "./components/LanguageSupport";
import EditorComponent from "./components/Editor";
import OutputComponent from "./components/Outputcomponet";
import { supportedLanguages } from "./data";
import "./App.css";
const getIntialCode = (lang) => {
  const data = supportedLanguages.find((language) => {
    return language.id === lang;
  })?.defaultCode;
  return data;
};
function App() {
  const editorRef = useRef(null);
  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  const [language, _setLanguage] = useState([
    "javascript",
    "typescript",
    "python",
    "java",
    "csharp",
  ]);
  const [value, setValue] = useState(getIntialCode("javascript"));
  const [currentLanguage, setCurrentLanguage] = useState("javascript");

  const handleLanguageChange = (newLanguage) => {
    const initialCode = getIntialCode(newLanguage);
    setValue(initialCode);
    setCurrentLanguage(newLanguage);
  };
  return (
    <div className="App">
      <div className="input">
        <LanguageSupport
          language={language}
          handleLanguageChange={handleLanguageChange}
        />
        <EditorComponent
          handleEditorDidMount={handleEditorDidMount}
          currentLanguage={currentLanguage}
          value={value}
          setValue={setValue}
        />
      </div>
      <OutputComponent value={value} language={currentLanguage} />
    </div>
  );
}

export default App;
