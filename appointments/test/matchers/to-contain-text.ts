type Received = {
  textContent: string;
};

export function toContainText(received: Received, expectedText: string) {
  return { pass: received.textContent?.includes(expectedText) };
}
