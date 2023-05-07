export const CreateQuote = async(newQuote) => {
    try {
        const url = 'http://localhost:5000/api/quotes';
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newQuote),
        });
        const data = await response.json();
        return data.quote;
      } catch (error) {
        console.log(error);
        return error;
      }
}