import axios from 'axios';

const server = process.env.REACT_APP_API_URL;

export const getUserData = async (id) => {
  try {
    console.log(`http://192.168.0.71:8000/api/feed/detail/1`); 
    const response = await axios.get(`http://192.168.0.71:8000/api/feed/detail/1`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postContent = async (data) => {
  try {
    console.log("Server URL:", server);  // 환경 변수를 로깅하여 확인
    console.log(data); 
    console.log(data.id); 
    console.log(`http://192.168.0.71:3s000/api/feed/make?userId=${data.id}`); 
    const response = await axios.post(`http://192.168.0.5:8000/api/feed/make`, data);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
