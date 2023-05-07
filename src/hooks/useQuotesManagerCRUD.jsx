import { useState, useEffect } from 'react';
import { GetQuotes } from "../helpers/GetQuotes"
import { CreateQuote } from '../helpers/CreateQuote';
import { DeleteQuote } from '../helpers/DeleteQuote';
import { UpdateQuote } from '../helpers/UpdateQuote';


export const useQuotesManagerCRUD = (language) => {
    const [quotes, setQuotes] = useState([]);

    const getRetrievedQuotes = async() => {
        if (language) {
            const retrievedQuotes = await GetQuotes(language);
            setQuotes(retrievedQuotes);
        }
    }

    const createNewQuote = async (newQuote) => {
        try {
            const createdQuote = await CreateQuote(newQuote);
            console.log(createdQuote)
            getRetrievedQuotes();
            return createdQuote;
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    const deleteQuote = async (id) => {
        try {
            await DeleteQuote(id);
            getRetrievedQuotes();
        } catch (error) {
            console.log(error);
        }
    }

    const updateQuote = async (id, quote) => {
        try {
            
            await UpdateQuote(id, quote);
            getRetrievedQuotes();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRetrievedQuotes();
    }, [language]);

    return {
        quotes,
        createNewQuote,
        deleteQuote,
        updateQuote
    };
}