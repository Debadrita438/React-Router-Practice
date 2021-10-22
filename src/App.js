import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuotes = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetails = React.lazy(() => import('./pages/QuoteDetails'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const AllQuotes = React.lazy(() => import('./pages/AllQuotes'));

const App = () => {
    return (
        <Layout>
            <Suspense
                fallback={
                    <div className='centered'>
                        <LoadingSpinner />
                    </div>
                }
            >
                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/quotes' />
                    </Route>
                    <Route exact path='/quotes' component={AllQuotes} />
                    <Route path='/quotes/:quoteId' component={QuoteDetails} />
                    <Route path='/new-quote' component={NewQuotes} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </Suspense>
        </Layout>
    );
};

export default App;
