import { useHistory } from 'react-router';
import QuoteForm from '../components/Quotes/QuoteForm';

const NewQuotes = () => {
    const history = useHistory();

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);

        history.push('/quotes');
    };

    return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuotes;
