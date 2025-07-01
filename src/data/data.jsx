export const supportedLanguages = [
  {
    name: "JavaScript",
    id: "javascript",
    extension: ".js",
    defaultCode: `console.log("Hello from JavaScript");`,
  },
  {
    name: "TypeScript",
    id: "typescript",
    extension: ".ts",
    defaultCode: `const greet: string = "Hello TypeScript";\nconsole.log(greet);`,
  },
  {
    name: "Python",
    id: "python",
    extension: ".py",
    defaultCode: `print("Hello from Python")`,
  },
  {
    name: "Java",
    id: "java",
    extension: ".java",
    defaultCode: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello from Java");\n  }\n}`,
  },
  {
    name: "csharp",
    id: "csharp",
    extension: ".cs",
    defaultCode: `using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello from CSharp");\n  }\n}`,
  },
];
