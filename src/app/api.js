import axios from "axios";

const pistonVersions = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
};
export const fetchOutput = async (language, code) => {
  const lang = language.toLowerCase();
  const version = pistonVersions[lang];

  if (!version || version === "not_supported") {
    return { run: { stdout: `❌ ${lang} not supported`, stderr: "", code: 1 } };
  }

  try {
    const response = await axios.post(
      "https://emkc.org/api/v2/piston/execute",
      {
        language: lang,
        version,
        files: [
          {
            name: `main.${lang === "cpp" ? "cpp" : lang}`,
            content: code,
          },
        ],
        stdin: "",
        args: [],
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching output:", error);
    throw error;
  }
};
