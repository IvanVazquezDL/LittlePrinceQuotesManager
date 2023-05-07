import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export const Table = ({ quotes, deleteQuote, handleUpdateQuote }) => {
    const headers = [...Object.keys(quotes[0]), 'actions'];

    const handleDeleteQuote = (id) => {
        console.log(id)
        deleteQuote(id)
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                    {
                        headers.map((header) => 
                            <th key={uuidv4()}>{header}</th>
                        )
                    }
                    </tr>
                </thead>
                <tbody>
                {
                    quotes.map(quote => (
                    <tr key={uuidv4()}>
                        {
                            headers.map((header) => 
                                header === 'actions' ? (
                                    <td key={uuidv4()}>
                                        <button onClick={() => handleUpdateQuote(quote)}>Update</button>
                                        <button onClick={() => handleDeleteQuote(quote.id)}>Delete</button> 
                                    </td>
                                ) : (
                                    <td key={uuidv4()}>{quote[header]}</td>
                                )
                            

                            )
                        }
                    </tr>
                    ))
                }
              </tbody>
            </table>
        </>
            )
}

Table.propTypes = {
    quotes: PropTypes.array,
    deleteQuote: PropTypes.func.isRequired,
    handleUpdateQuote: PropTypes.func.isRequired
}