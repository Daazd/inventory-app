let apiURL;

if (process.env.NODE_ENV === 'development') {
  apiURL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
} else {
  apiURL = 'http://ec2-52-13-110-10.us-west-2.compute.amazonaws.com/api';
}

export default apiURL;
