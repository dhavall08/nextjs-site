import Link from 'next/link';
import { useState } from 'react';
import cl from 'classnames';
import { useRouter } from 'next/router';

const menus = [
  { text: 'Home', path: '/' },
  { text: 'Pricing', path: '/pricing' },
  {
    text: 'Other',
    subMenus: [
      { text: 'Page 1', path: '/page1' },
      { text: 'Page 2', path: '/page2' },
      { text: 'Divider', divider: true },
      { text: 'Page 3', path: '/page3' },
    ],
  },
  { text: 'Disabled', path: '/disabled', disabled: true },
];

function Header() {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
    setShowDropdown(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Navbar</a>
        </Link>
        <button
          type="button"
          className={cl('navbar-toggler', { collapsed: !open })}
          aria-controls="navbarSupportedContent"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={cl('collapse navbar-collapse', {
            show: open,
          })}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menus.map((menu) => (
              <li
                key={menu.text}
                className={cl('nav-item', { dropdown: menu.subMenus })}
              >
                {!menu.subMenus ? (
                  <Link href={menu.path}>
                    <a
                      className={cl('nav-link', {
                        active: pathname === menu.path,
                        disabled: menu.disabled,
                      })}
                      aria-current="page"
                    >
                      {menu.text}
                    </a>
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      className={cl('btn nav-link dropdown-toggle', {
                        show: showDropdown,
                      })}
                      onClick={() => setShowDropdown((prev) => !prev)}
                      id={`navbarDropdown${menu.text}`}
                      aria-expanded={showDropdown}
                    >
                      Dropdown
                    </button>
                    <ul
                      className={cl('dropdown-menu', { show: showDropdown })}
                      aria-labelledby={`navbarDropdown${menu.text}`}
                    >
                      {menu?.subMenus.map((subMenu) => (
                        <li key={subMenu.text}>
                          {subMenu.divider ? (
                            <hr className="dropdown-divider" />
                          ) : (
                            <Link href={subMenu.path}>
                              <a
                                className={cl('dropdown-item', {
                                  // active: pathname === subMenu.path,
                                })}
                                aria-current="page"
                              >
                                {subMenu.text}
                              </a>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
