export function toContainText(received: Element, expectedText: string) {
  return { pass: received.textContent?.includes(expectedText) };
}
