import logoGrossWhite from '../assets/LOGO_WHITE.png'
const Header = () => {
    const view = `
      <div class="logo">
        <img src="${logoGrossWhite}" alt="logo">
      </div>
      <nav class="navbar">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="#/operaciones/">Operaciones</a></li>
          <li><a href="#/instructivos/">Instructivos</a></li>
          <li><a href="#/about/">About</a></li>
        </ul>
      </nav>
    `;
    return view;
}
export default Header