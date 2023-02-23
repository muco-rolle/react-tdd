type HelloProps = {
  name?: string;
  lang?: "ki" | "fr" | "en";
};

export function Hello({ name, lang }: HelloProps) {
  let content;
  if (lang === "ki") {
    content = `Amahoro, ${name || "World"}`;
  } else {
    content = `Hello, ${name || "World"}`;
  }
  return <h1>{content}</h1>;
}
