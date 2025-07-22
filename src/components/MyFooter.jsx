// creiamo la funzione per la creazione del footer per la pagina
import * as Icon from "react-bootstrap-icons";
const MyFooter = function () {
  return (
    <footer className="bg-primary text-center text-light mt-5 py-3">
      <p>Bookshop - {new Date().getFullYear()}</p>
      <div>
        <button className="bg-transparent border-0">
          <Icon.Instagram color="white" className="h4" />
        </button>
        <button className="bg-transparent border-0">
          <Icon.Facebook color="white" className="h4" />
        </button>
        <button className="bg-transparent border-0">
          <Icon.TwitterX color="white" className="h4" />
        </button>
      </div>
    </footer>
  );
};
// esportiamo il footer in default

export default MyFooter;
