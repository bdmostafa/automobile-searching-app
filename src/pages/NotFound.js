import React from 'react';
import NoMatch from '../components/NoMatch/NoMatch';

const NotFound = () => {
    document.title = "Not Found | Automobile Searching App"
    return (
        <div>
            <NoMatch />
        </div>
    );
};

export default NotFound;