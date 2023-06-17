import githubLogo from "../img/github-mark-white.svg";

function Footer() {
  return (
    <footer className="footer">
      <a className="github-link" href="https://github.com/Alan1234111">
        <img className="github-logo" src={githubLogo} /> GITHUB
      </a>
    </footer>
  );
}

export default Footer;
