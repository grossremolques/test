import Auth from "@utils/Auth";
import "@styles/main.css";
import "@styles/main.scss";
import renderRoute from "@utils/Routes";
const API_KEY = process.env.API_KEY;
const CLIENT_ID = process.env.CLIENT_ID;

const main = async () => {
  try {
    let response = await Auth(API_KEY, CLIENT_ID);
    if (response) {
      await renderRoute()
    }
  } catch (e) {
    console.log(e);
  }
};
window.addEventListener("load", main);
window.addEventListener("hashchange", renderRoute);
