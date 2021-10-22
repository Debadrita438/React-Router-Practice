import { useEffect } from 'react';
import QuoteList from '../components/Quotes/QuoteList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useFetch from '../hooks/use-fetch';
import { getAllQuotes } from '../lib/api';

import NoQuotesFound from '../components/Quotes/NoQuotesFound';

const AllQuotes = () => {
    const { sendRequest, status, data: loadedQuotes, error } = useFetch(getAllQuotes, true);

    useEffect(
        () => {
            sendRequest();
        },
        [ sendRequest ]
    );

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p className='centered focused'>{error}</p>;
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />;
    }

    return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
