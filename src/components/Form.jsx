import PropTypes from 'prop-types';
import { useState, useEffect } from "react";

export const Form = ({createNewQuote, quoteToBeUpdated, updateQuote, setQuoteToBeUpdated}) => {
    const [language, setLanguage] = useState("");
    const [chapter, setChapter] = useState("");
    const [quote, setQuote] = useState("");

    useEffect(() => {
        if (quoteToBeUpdated) {
          setLanguage(quoteToBeUpdated.language);
          setChapter(Number(quoteToBeUpdated.chapter));
          setQuote(quoteToBeUpdated.quote);
        }
      }, [quoteToBeUpdated]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submit

        console.log({
            language,
            chapter,
            quote
        })

        if (quoteToBeUpdated) {
            updateQuote(
                quoteToBeUpdated.id,
                { language,
                chapter,
                quote
                }
            );
            setQuoteToBeUpdated("");
        } else {
            createNewQuote({
                language,
                chapter,
                quote
            });
        }
        setLanguage("");
        setChapter("");
        setQuote("");
      };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="language">Language:</label>
            <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            >
            <option value="">--Please choose an option--</option>
            <option value="EN">English</option>
            <option value="ES">Spanish</option>
            <option value="FR">French</option>
            </select>
            <br />

            <label htmlFor="chapter">Chapter:</label>
            <select
                id="chapter"
                value={chapter}
                onChange={(e) => setChapter(e.target.value)}
            >
            <option value="">--Please choose an option--</option>
            {Array.from({ length: 28 }, (_, i) => (
            <option key={i} value={i}>
                {i}
            </option>
            ))}
        </select>
        <br />
        <label htmlFor="quote">Quote:</label>
        <input
            type="text"
            id="quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>

        </form>
    );
}

Form.propTypes = {
    createNewQuote: PropTypes.func.isRequired
}