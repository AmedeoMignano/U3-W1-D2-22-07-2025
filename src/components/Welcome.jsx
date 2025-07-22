// importo l'alert
import Alert from "react-bootstrap/Alert";
// creiamo la funzione per il componente

const Welcome = function () {
  return (
    <div>
      <Alert variant="primary">Welcome!</Alert>
      <h3 className="text-center text-primary mb-4">
        Benvenuti nel BookShop più fornito di sempre
      </h3>
    </div>
  );
};
// esportiamo di default
export default Welcome;
