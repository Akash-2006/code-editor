export default function LanguageSupport({ language, handleLanguageChange }) {
  return (
    <div className="language-support">
      <h2>Language Support</h2>
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        defaultValue={language[0]}
      >
        {language.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  );
}
