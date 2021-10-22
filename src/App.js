import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import AllQuotes from './pages/AllQuotes';
import NewQuotes from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetails from './pages/QuoteDetails';

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path='/'>
                    <Redirect to='/quotes' />
                </Route>
                <Route exact path='/quotes' component={AllQuotes} />
                <Route path='/quotes/:quoteId' component={QuoteDetails} />
                <Route path='/new-quote' component={NewQuotes} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Layout>
    );
};

export default App;
