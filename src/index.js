import Auth from "./utils/Auth";
import './styles/main.css'
import './styles/main.scss'
const API_KEY = 'AIzaSyCh6G3Hz-nINlEsHN6Cfuc9Czc6hWKEe3A';
const CLIENT_ID = '501659433282-1c9fa8baja97dqbcp6qoqd5c6drnvaks.apps.googleusercontent.com'
const main = async () => {
    try {
      let response = await Auth(API_KEY, CLIENT_ID);
      if(response) {
          let email = await getEmail();
          console.log(email)
      }
    } catch (e) {
      console.log(e);
    }
  };
  async function getEmail() {
    try {
      let response = await gapi.client.gmail.users.getProfile({
        userId: "me",
      });
      return response.result.emailAddress;
    } catch (e) {
      console.log(e);
    }
  }
  window.addEventListener("load", main);