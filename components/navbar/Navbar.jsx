import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.bgDark}`}>
      <div className="container">
        <a className={`navbar-brand ${styles.brand}`} href="/">
          <img src="/logo.png" alt="Logo" width="450" className={styles.brand} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <button
              type="button"
              className={`btn btn-lg ${styles.btnWarning}`}
            >
              เข้าสู่ระบบ
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
