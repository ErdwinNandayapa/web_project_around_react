import headerLogo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Around" />
    </header>
  );
}

export default Header;
