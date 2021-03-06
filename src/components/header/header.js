function Header(){
    return (
        <header className="s-header">
  <div className="header-logo">
    <a className="site-logo" href="index.html">
      <img src="images/logo.svg" alt="Homepage" />
    </a>
  </div>{" "}
  
  <nav className="header-nav">
    <a href="#0" className="header-nav__close" title="close">
      <span>Close</span>
    </a>
    <h3>Navigate to</h3>
    <div className="header-nav__content">
      <ul className="header-nav__list">
        <li>
          <a className="smoothscroll" href="#home" title="home">
            Home
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#about" title="about">
            About
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#services" title="services">
            Services
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#works" title="works">
            Works
          </a>
        </li>
        <li>
          <a className="smoothscroll" href="#contact" title="contact">
            Contact
          </a>
        </li>
      </ul>
      <p>
        Perspiciatis hic praesentium nesciunt. Et neque a dolorum{" "}
        <a href="#0">voluptatem</a> porro iusto sequi veritatis libero enim.
        Iusto id suscipit veritatis neque reprehenderit.
      </p>
      <ul className="header-nav__social">
        <li>
          <a href="#0">
            <i className="fab fa-facebook" />
          </a>
        </li>
        <li>
          <a href="#0">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="#0">
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          <a href="#0">
            <i className="fab fa-behance" />
          </a>
        </li>
        <li>
          <a href="#0">
            <i className="fab fa-dribbble" />
          </a>
        </li>
      </ul>
    </div>{" "}
    
  </nav>{" "}

  <a className="header-menu-toggle" href="#0">
    <span className="header-menu-icon" />
  </a>
</header>

    )
}

export default Header;