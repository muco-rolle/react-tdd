type HelloProps = {
  name?: string;
};

export function Hello({ name }: HelloProps) {
  return <h1>Hello, {name || "World"}</h1>;
}
