export const UpdateQuote = async (id, updatedQuote) => {
    try {
        const url = `http://localhost:5000/api/quotes/${id}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedQuote),
      });
      await response.json();

    } catch (error) {
      console.log(error);
    }
  };
  