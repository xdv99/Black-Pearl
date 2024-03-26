import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function DeveloperTile({ name, github, linkdin }) {
  return (
    <div className="flex justify-between w-80">
      <p className="text-lg font-semibold text-slate-500 hover:text-white">
        {name}
      </p>
      <div>
        <a href={github} target="_blank">
          <FontAwesomeIcon
            className="mr-2 text-slate-500 hover:text-white"
            icon={faGithub}
          />
        </a>
        <a href={linkdin} target="_blank">
          <FontAwesomeIcon
            className="mr-2 text-slate-500 hover:text-white"
            icon={faLinkedin}
          />
        </a>
      </div>
    </div>
  );
}

export default DeveloperTile;
