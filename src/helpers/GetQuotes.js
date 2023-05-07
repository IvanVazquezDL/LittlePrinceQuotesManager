export const GetQuotes = async (language) => {
    const url = `http://localhost:5000/api/quotes?lang=${language}`;
    const resp = await fetch(url);
    const { quotes } = await resp.json();
    
    return quotes;
}