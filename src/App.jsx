import "./App.css";

// importo bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// fantasy allora sarà la prop data alla nostra booklist
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList";
import SingleBook from "./components/SingleBook";
// importo la Booklist
function App() {
  return (
    <>
      <MyNav />
      <main className="flex-grow-1">
        <Welcome />
        <BookList books={fantasy} />
      </main>

      <MyFooter />
    </>
  );
}

export default App;
