import React from 'react';

// Object that's going responsable for moving information from Blog Post Provider to BlogList (nested child)
const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    return (
        <BlogContext.Provider value={'hi there'}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;