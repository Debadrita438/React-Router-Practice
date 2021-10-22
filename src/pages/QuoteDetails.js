import { Fragment, useEffect } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';

import Comments from '../components/Comments/Comments';
import HighlightedQuote from '../components/Quotes/HighLightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useFetch from '../hooks/use-fetch';
import { getSingleQuote } from '../lib/api';

const QuoteDetails = () => {
    const params = useParams();
    const match = useRouteMatch();
    const { quoteId } = params;
    const { sendRequest, data: loadedQuote, status, error } = useFetch(getSingleQuote, true);

    useEffect(
        () => {
            sendRequest(quoteId);
        },
        [ sendRequest, quoteId ]
    );

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p className='centered'>{error}</p>;
    }

    if (!loadedQuote.text) {
        return <p>No Quote found!</p>;
    }

    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route exact path={match.path}>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`} component={Comments} />
        </Fragment>
    );
};

export default QuoteDetails;
