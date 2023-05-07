export const DeleteQuote = async (id) => {
    if (!id) {
        throw new Error('Invalid id');
    }
    
    try {
        const url = `http://localhost:5000/api/quotes/${id}`;
        await fetch(url, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }
}