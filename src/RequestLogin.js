import axios from 'axios'

export default function requestLogin(username, password) {


    axios.post('http://localhost:8080/login', {
        username: username,
        password: password
      },{
        "Access-Control-Allow-Origin": "*",
      })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
}
