import "./App.css";

// importo bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav />
      <main className="flex-grow-1">
        <Welcome />
        <AllTheBooks />
      </main>

      <MyFooter />
    </>
  );
}

export default App;
