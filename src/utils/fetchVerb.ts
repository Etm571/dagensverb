const fetchVerb = async () => {
  try {
    const response = await fetch('/api/verb');
    if (response.ok) {
      const data = await response.json();
      const verb = data.verb;
      return verb;

    } else {
      console.error('Failed to fetch verb:', response.status);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export { fetchVerb };
