import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";

let container: HTMLDivElement;

export const initializeReactContainer = () => {
  container = document.createElement("div");
  document.body.replaceChildren(container);
};

export const render = (component: ReactNode) => {
  return act(() => {
    return createRoot(container).render(component);
  });
};

export const click = (element: HTMLButtonElement) => {
  return act(() => element.click());
};

export const test = {
  group: describe,
};
