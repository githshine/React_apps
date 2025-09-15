import React from 'react';

const ErrorInfo = ({ errorInfo }) => {
  const { status, message } = errorInfo;
  return (
    <div>
      <h2>{status}</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorInfo;
