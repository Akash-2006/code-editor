import { Editor } from "@monaco-editor/react";
export default function EditorComponent({
  handleEditorDidMount,
  currentLanguage,
  value,
  setValue,
}) {
  return (
    <div className="editor-wrapper">
      <div class="editor-header">
        <span class="editor-title">Code Editor</span>
        <span class="editor-language">{currentLanguage}</span>
      </div>
      <Editor
        onMount={handleEditorDidMount}
        width={"50vw"}
        height="90vh"
        language={currentLanguage}
        defaultValue="// some comment"
        theme="vs-dark"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        options={{
          fontSize: 14,
          fontFamily: 'Monaco, Menlo, "Courier New", monospace',
          lineHeight: 1.6,
          minimap: { enabled: true },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          wordWrap: "on",
          lineNumbers: "on",
          glyphMargin: true,
          folding: true,
          lineDecorationsWidth: 20,
          lineNumbersMinChars: 3,
          renderWhitespace: "selection",
          cursorBlinking: "smooth",
          cursorSmoothCaretAnimation: true,
          smoothScrolling: true,
        }}
      />
    </div>
  );
}
