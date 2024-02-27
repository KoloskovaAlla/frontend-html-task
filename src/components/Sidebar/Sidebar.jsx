import './sidebar.scss';
import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';

import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas);

const routes = [
  { title: 'Home', icon: ['fas', 'fa-house'], path: '/' },
  { title: 'Sales', icon: ['fas', 'chart-line'], path: '/sales' },
  { title: 'Costs', icon: ['fas', 'chart-column'], path: '/costs' },
  { title: 'Payments', icon: ['fas', 'wallet'], path: '/payments' },
  { title: 'Finances', icon: ['fas', 'chart-pie'], path: '/finances' },
  { title: 'Messages', icon: ['fas', 'envelope'], path: '/messages' },
];

const bottomRoutes = [
  { title: 'Settings', icon: ['fas', 'sliders'], path: '/settings' },
  { title: 'Support', icon: ['fas', 'phone-volume'], path: '/support' },
];

const Sidebar = () => {
  const [isOpened, setIsOpened] = useState(true);
  const [activeItem, setActiveItem] = useState('/');

  const toggleSidebar = () => {
    setIsOpened(prevState => !prevState);
  };

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
    setActiveItem(path);
  };

  const containerClassnames = classnames('sidebar', { opened: isOpened });

  return (
    <div className={containerClassnames}>
      <div className={'sidebar-header'}>
        <img
          src={logo}
          alt="TensorFlow logo"
        />
        {isOpened && <span>TensorFlow</span>}
        <button onClick={toggleSidebar}>
          <FontAwesomeIcon icon={isOpened ? ['fas', 'angle-left'] : ['fas', 'angle-right']} />
        </button>
      </div>

      <div className={'sidebar-nav'}>
        {routes.map((route) => (
          <div
            className={classnames('item', { active: activeItem === route.path })}
            key={route.title}
            onClick={() => goToRoute(route.path)}
          >
            <FontAwesomeIcon icon={route.icon} />
            {isOpened && <span>{route.title}</span>}
          </div>
        ))}
      </div>

      <div className={'sidebar-footer'}>
        {bottomRoutes.map((route) => (
          <div
            className={classnames('item', { active: activeItem === route.path })}
            key={route.title}
            onClick={() => goToRoute(route.path)}
          >
            <FontAwesomeIcon icon={route.icon} />
            {isOpened && <span>{route.title}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;