export const fetchFAQ = async (question: string): Promise<string> => {
  try {
    const response = await fetch(`/api/faq?q=${encodeURIComponent(question)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return data || "";
    //todo: add check for if verb already exists in queue
    // Verbet finns redan i kön.
  } catch (error) {
    console.error("Kunde inte hämta FAQ: ", error);
    return "Ett fel uppstod vid hämtning.";
  }
};
