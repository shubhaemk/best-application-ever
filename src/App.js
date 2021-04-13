import RouteService from "./services/Route.service";
import NavbarComponent from "./components/NavbarComponent/Navbar.component";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <section>
        <NavbarComponent />
      </section>
      <section>
        <RouteService />
      </section>
    </div>
  );
}

export default App;
