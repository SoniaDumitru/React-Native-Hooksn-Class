import React from 'react';

// Object that's going responsable for moving information from Blog Post Provider to BlogList (nested child)
const BlogContext = React.createContext();

const BlogProvider = ({ children }) => {
    return (
        <BlogContext.Provider>
            {children}
        </BlogContext.Provider>
    );
};
