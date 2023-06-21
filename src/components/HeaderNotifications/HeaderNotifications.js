import React from 'react';
import './HeaderNotifications.css';
const HeaderNotifications = ({
  icon,
  button,
  h4,
  p,
  dropdown,
  footerP,
  email,
}) => {
  return (
    <div className="header-notification p-6">
      <header>
        <img src={icon} alt="bell icon" />
        {button ? (
          <button>{button}</button>
        ) : (
          <input type="checkbox" checked />
        )}
      </header>
      <main>
        {h4 ? (
          <h4 className="my-5">{h4}</h4>
        ) : (
          <p className="mt-10 pt-7 mb-4">{p}</p>
        )}
        {email ? (
          <input type="email" placeholder={email} />
        ) : (
          <select>
            <option>{dropdown}</option>
          </select>
        )}
        {footerP ? <p>{footerP}</p> : ''}
      </main>
    </div>
  );
};

export default HeaderNotifications;
