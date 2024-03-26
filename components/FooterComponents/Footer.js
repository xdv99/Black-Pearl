import Logo from "../Logo";
import DeveloperTile from "./DeveloperTile";

function Footer() {
  return (
    <div>
      <div className="bg-[#C0434B] py-2">
        <div className="container mx-auto flex justify-between">
          <Logo />
          <img
            className="w-36 inline-block p-2 px-4 bg-white bg-opacity-80 rounded-full"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          />
        </div>
      </div>
      {/* Developer Card */}
      <div className="container mx-auto h-28 space-y-2">
        <h3 className="text-xl text-white font-bold my-2">Developed by</h3>
        <DeveloperTile
          name="Dawood A. Alkawaz"
          github="https://github.com/xdv99"
          linkdin="https://www.linkedin.com/in/dv9/"
        />
      </div>
    </div>
  );
}

export default Footer;
