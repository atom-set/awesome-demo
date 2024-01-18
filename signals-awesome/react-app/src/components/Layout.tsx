import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  const [pagePath, setPagePath] = useState(window.location.pathname);
  const testMenuItems = [
    // 联动
    {
      title: 'Home',
      href: '/home',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Counter',
      href: '/counter',
    },

    {
      title: 'Mall@Mobx'
    },
    {
      title: 'Mall Signal render',
      href: '/mall',
    },
  ];

  const handleClick = () => {
    setPagePath(window.location.pathname)
  };

  return (
    <div className='page'>
      {
        pagePath === '/' && <nav>
          <ul className="menu-list">
            {testMenuItems.map(({ href, title }) => (
              <li className='menu-item' key={title} onClick={handleClick}>
                <NavLink to={href!}>
                  <p className={'text-black'}>{title}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      }

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      {
        pagePath !== '/' && <a href="/" className="back">返回</a>
      }
    </div>
  );
}