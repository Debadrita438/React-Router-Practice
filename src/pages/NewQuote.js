import { useEffect } from 'react';
import { useHistory } from 'react-router';

import QuoteForm from '../components/Quotes/QuoteForm';
import useFetch from '../hooks/use-fetch';
import { addQuote } from '../lib/api';

const NewQuotes = () => {
    const history = useHistory();
    const { sendRequest, status } = useFetch(addQuote);

    useEffect(
        () => {
            if (status === 'completed') {
                history.push('/quotes');
            }
        },
        [ history, status ]
    );

    const addQuoteHandler = (quoteData) => {
        sendRequest(quoteData);
    };

    return <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default NewQuotes;
