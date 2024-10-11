import "./Footer.css";
import PropTypes from "prop-types";

function Footer() {
  return (
    <footer className="footer">
      <h4>
        Prueba tecnica de React ⚛️ <span>@2023</span>
      </h4>
      <h5>Shopping cart con useContext & useReducer</h5>
    </footer>
  );
}

export { Footer };

Footer.propTypes = {
  filters: PropTypes.object,
};
