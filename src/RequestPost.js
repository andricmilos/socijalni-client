import axios from 'axios'

export default function requestPost(url, json, signature) {


  axios.get(
    url + json,
    { withCredentials: true },
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    }
  ).then(response => {
    if (signature == "signup" && response.data == "Uspesno") {
      window.location.href = "/login";
    }
    else if (signature == "Grupe") {
      alert(response.data);
      window.location.href = "/groups";
    }
    else {
      alert(response.data);
    }
  })
    .catch(error => {
      alert(error);
    }
    )
}
