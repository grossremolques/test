import Header from "@templates/Header";
import Inicio from "../pages/Inicio";
import Operaciones from "../pages/Operaciones";
import Instructivos from "../pages/Instructivos";
const routes = {
  "/": Inicio,
  "/operaciones": Operaciones,
  "/instructivos": Instructivos,
  /*'/about': About */
};

const renderRoute = async () => {
  try {
    const header = null || document.getElementById("header");
    header.innerHTML = Header();
    const content = null || document.getElementById("content");
    let hash = getHash();
    let route = resolveRoutes(hash);
    let render = routes[route];
    content.innerHTML = render(); //Esto es nuevo!!!!!
  } catch (e) {
    console.log(e);
  }
};
const getHash = () => {
    return location.hash.slice().toLocaleLowerCase().split("/")[1] || "/";
  };
  //resolveRoutes
  const resolveRoutes = (hash) => {
    if (hash.length <= 3) {
      let validHash = hash === "/" ? hash : "/:id";
      return validHash;
    }
    return `/${hash}`;
  };

export default renderRoute