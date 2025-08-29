export const fetchAIResponse = async (userMessage, context) => {
  // Replace with OpenAI or other LLM API
  return {
    text: `AI Reply to: "${userMessage}"`,
    interactive: { type: "button", label: "Do something", onClick: () => alert("Clicked!") }
  };
};
