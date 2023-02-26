const englishPrefix = "Hello, ";
const spanishPrefix = "Hola, ";
type Lang = "es";

export function hello(name?: string, lang?: Lang) {
  if (!name) {
    name = "World";
  }

  if (lang === "es") {
    return `${spanishPrefix}${name}`;
  }

  return `${englishPrefix}${name}`;
}
