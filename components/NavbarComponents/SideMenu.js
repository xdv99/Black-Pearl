import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import SearchBox from "./SearchBox";
import NavButtons from "./NavButtons";

function SideMenu({ isOpen, toggleClose }) {
  return (
    <div
      className={
        isOpen
          ? "fixed bg-black bg-opacity-80 h-svh max-w-sm top-0 right-0 md:hidden px-12 z-10 border-l-4 border-l-[#C0434B]"
          : "hidden"
      }
    >
      {/* Close Buttons */}
      <FontAwesomeIcon
        icon={faXmark}
        size="2x"
        className="absolute top-4 right-4 cursor-pointer text-white hover:text-[#C0434B]"
        onClick={toggleClose}
      />
      <div className="h-full flex flex-col mt-8 space-y-16">
        <div className="bg-white self-center p-10 rounded-full w-2/3">
          <img src="/logo.png" />
        </div>
        <SearchBox isSideMenu={true} />
        <NavButtons isSideMenu={true} />
      </div>
    </div>
  );
}

export default SideMenu;
