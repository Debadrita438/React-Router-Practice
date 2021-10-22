import QuoteList from '../components/Quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Test A', text: 'Learning React is fun!' },
    { id: 'q2', author: 'Test B', text: 'Learning React is great!' }
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
