import React from 'react';
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div>
      <h1>404 error: Page Not Found</h1>
      <Link to="/">Click to go back to Home page</Link>
    </div>
  );
}

export default NotFound;