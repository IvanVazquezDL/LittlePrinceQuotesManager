import { useState } from "react";
import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { useQuotesManagerCRUD } from "./hooks/useQuotesManagerCRUD"

export const QuotesManager = () => {
    const [quoteToBeUpdated, setQuoteToBeUpdated] = useState('');
    const { 
        quotes,
        createNewQuote,
        deleteQuote,
        updateQuote
    } = useQuotesManagerCRUD('EN');

    const handleUpdateQuote = (quote) => {
        setQuoteToBeUpdated(quote);
    }

    return(
        <>
            <h1>Little Prince Quotes Manager</h1>
            <Form createNewQuote = {createNewQuote} quoteToBeUpdated = {quoteToBeUpdated } updateQuote = {updateQuote} setQuoteToBeUpdated = {setQuoteToBeUpdated}/>
            {quotes.length > 0 && <Table quotes={quotes} deleteQuote = {deleteQuote} handleUpdateQuote = {handleUpdateQuote}/>}
            
        </>
    )
}