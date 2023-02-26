type HelloProps = {
  name?: string;
  lang?: "ki" | "fr" | "en";
};

export function Hello({ name, lang }: HelloProps) {
  let content;

  switch (lang) {
    case "ki":
      content = `Amahoro, ${name}`;
      break;
    case "fr":
      content = `Salut, ${name}`;
      break;
    default:
      content = `Hello, ${name || "World"}`;
      break;
  }

  return <h1>{content}</h1>;
}
