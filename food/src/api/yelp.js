import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer xqiDHN_i3-LYy1bbRI-SEV-jiPhDnzY7cZ8DF5Xj1awS12aWjAX0OiRiS3j8429thFnmBktjonO9yhSSQwqAj8YPvB5r-EirYphHy3FRTIWE8dPiGZeCOfKzAmTYXnYx'
    }
});