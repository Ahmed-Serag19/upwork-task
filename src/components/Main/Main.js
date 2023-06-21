import React from 'react';
import './Main.css';
import Cohorts from '../../images/Cohorts 1.png';
import Eye from '../../images/Eye.png';

const Main = () => {
  return (
    <main className="main mt-5">
      <div className="main-container">
        <div className="main-image-container">
          <img src={Cohorts} alt="showing whales cohorts" />
        </div>
        <div className="main-desc-container text-right mt-5">
          <img src={Eye} alt="eye icon" />
          <h4 className="mt-4">Watch what the whales are doing</h4>
          <p className="mt-4">
            All whales are not equal. Know exactly what the whales
            impacting YOUR portfolio are doing.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
