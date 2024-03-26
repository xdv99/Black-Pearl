import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

function BurgerButton({ toggleMenu }) {
  return (
    <div className="md:hidden">
      <FontAwesomeIcon
        icon={faBurger}
        size="2x"
        className="text-white cursor-pointer hover:text-[#C0434B]"
        onClick={toggleMenu}
      />
    </div>
  );
}

export default BurgerButton;
