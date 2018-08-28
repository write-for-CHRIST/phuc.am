import axios from "axios";

const host = "http://192.168.2.164:4000";

const getGospel = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${host}/gospel`)
      .then(gospelData => {
        resolve(gospelData.data);
      })
      .catch(err => console.error("Xin loi, tui khong the lay data!"));
  });
};

export {getGospel}