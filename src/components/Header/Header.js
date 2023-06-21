import React from 'react';
import Bell from '../../images/Bell.png';
import BellIcon from '../../images/bell-icon.png';
import BarChart from '../../images/bar-chart-2.png';
import Clock from '../../images/clock.png';
import './Header.css';

import HeaderNotifications from '../HeaderNotifications/HeaderNotifications';
const Header = () => {
  return (
    <header className="header mt8 ps-10 ms-5">
      <div className="header-items-container">
        <div className="header-desc">
          <img src={Bell} alt="bell icon" />
          <h4 className="text-white mt-3">
            Get notified when a highly correlated whale makes a move
          </h4>
          <p className="mt-3">
            Find out when a certain whale moves more than any preset
            amount on-chain or when a dormant whale you care about
            becomes active.
          </p>
        </div>
        <div className="notifications-container ms-10">
          <HeaderNotifications
            icon={BellIcon}
            button="Save"
            h4={"We'll be sending you notifications to you here"}
            email={'hello@gmail.com'}
          />
          <HeaderNotifications
            icon={BarChart}
            p={'Notify me when any wallets move more than'}
            dropdown={'$1,000.00'}
          />
          <HeaderNotifications
            icon={Clock}
            dropdown={' > 30 days'}
            p={'Notify me when any wallet dormant for'}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
