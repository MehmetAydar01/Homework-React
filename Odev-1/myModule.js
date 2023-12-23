import axios from 'axios';

const getData = async (userId) => {
  try {
    const { data: usersData } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const { data: postsData } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    return { ...usersData, posts: postsData };
  } catch (error) {
    console.log(error);
  }
};

export default getData;
