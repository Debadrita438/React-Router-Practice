import { Link, Route, useParams } from 'react-router-dom';

import Comments from '../components/Comments/Comments';
import HighlightedQuote from '../components/Quotes/HighLightedQuote';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Test A', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Test B', text: 'Learning React is great!' }
];

const QuoteDetails = () => {
    const params = useParams();
    
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

    if(!quote) {
        return <p>No Quote found!</p>
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route exact path={`/quotes/${params.quoteId}`}>
                <div className='centered'>
                    <Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path= {`/quotes/${params.quoteId}/comments`} component={Comments} />
        </>
    );
};

export default QuoteDetails;
