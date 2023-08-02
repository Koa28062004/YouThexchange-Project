import React from 'react';
import Header from './Header';
import GoalBox from './GoalBox';
import Footer from './SDGs_Footer';
import "./SDGs.css";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <GoalBox
          goalNumber="1"
          goalImage="Covers/cover-01.jpg"
          iconImage="Pictures/E_SDG_Icons-01.png"
          goalTitle="Goal 1"
          goalDescription="End poverty in all its forms everywhere."
          targets="7"
          events="83"
          publications="48"
          actions="1363"
        />
        {/* Repeat GoalBox for other goals */}
      </div>
      <Footer />
    </div>
  );
};

export default Main;
