import React, {useState }from 'react';

// Object that's going responsable for moving information from Blog Post Provider to BlogList (nested child)
const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);
    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `BlogPost #${blogPosts.length + 1}`}]);
    };

    return (
        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;