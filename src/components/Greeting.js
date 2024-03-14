import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ShowGreeting.css';
import { fetchGreeting } from '../redux/greetings/greetingsSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.greetings.isLoading);
  const error = useSelector((state) => state.greetings.error);
  const greeting = useSelector((state) => state.greetings.greeting);

  const handleRefresh = () => {
    dispatch(fetchGreeting());
  };

  return (
    <div className="greeting-container">
      <h1 className="greeting-title">Random Greeting</h1>
      <p className="greeting-message">
        <strong>You can see greetings in different languages:</strong>
        <br />
        <br />
        <span>{greeting}</span>
      </p>
      <div className="button-container">
        <button className="refresh-button" onClick={handleRefresh} disabled={isLoading} type="button">
          {' '}
          {/* Add type="button" */}
          {isLoading ? 'Refreshing...' : 'Refresh'}
        </button>
        {error && <p className="error-message">Something went wrong!</p>}
      </div>
    </div>
  );
};

export default Greeting;
