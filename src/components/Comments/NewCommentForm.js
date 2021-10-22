import { useEffect, useRef } from 'react';

import useFetch from '../../hooks/use-fetch';
import { addComment } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) => {
    const commentTextRef = useRef();
    const { sendRequest, status, error } = useFetch(addComment);
    const { onAddedComment, quoteId } = props;

    useEffect(
        () => {
            if (status === 'completed' && !error) {
                onAddedComment();
            }
        },
        [ status, error, onAddedComment ]
    );

    const submitFormHandler = (event) => {
        event.preventDefault();
        const enteredText = commentTextRef.current.value;

        // optional: Could validate here
        sendRequest({ commentData: { text: enteredText }, quoteId });
    };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            {status === 'pending' && (
                <div className='centered'>
                    <LoadingSpinner />
                </div>
            )}
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor='comment'>Your Comment</label>
                <textarea id='comment' rows='5' ref={commentTextRef} />
            </div>
            <div className={classes.actions}>
                <button className='btn'>Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;
