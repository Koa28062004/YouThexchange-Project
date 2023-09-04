import React from "react";
import Header from "./SDGs_Header/SDGs_Header";
import GoalBox from "./SDGs_GoalBox/SDGs_GoalBox";
import Footer from "../Footer/Footer";
import SpecialBox from "./SDGs_SpecialBox/SDGs_SpecialBox";
import "./SDGs.css";

const Main = () => {
  const goals = [
    {
      goalNumber: "1",
      goalDescription: "End poverty in all its forms everywhere.",
      targets: "7",
      events: "83",
      publications: "48",
      actions: "1363",
      // link: "/Project2",
    },
    {
      goalNumber: "2",
      goalDescription:
        "End hunger, achieve food security and improved nutrition and promote sustainable agriculture.",
      targets: "8",
      events: "70",
      publications: "16",
      actions: "1308",
      // link: "/Project2",
    },
    {
      goalNumber: "3",
      goalDescription: "Ensure healthy lives and promote well-being for all at all ages.",
      targets: "13",
      events: "32",
      publications: "46",
      actions: "1227",
      // link: "/Project3",
    },
    {
        goalNumber: "4",
        goalDescription: "Ensure inclusive ad equitable quality aducation and promote lifelong learning opportunities for all.",
        targets: "10",
        events: "37",
        publications: "37",
        actions: "1715",
        // link: "/Project4",
    },
    {
        goalNumber: "5",
        goalDescription: "Achieve gender equality and empower all women and girls.",
        targets: "9",
        events: "58",
        publications: "45",
        actions: "1552",
        link: "/Project2",
    },
    {
        goalNumber: "6",
        goalDescription: "Ensure availability and sustainable management of water and sanitation for all.",
        targets: "8",
        events: "269",
        publications: "35",
        actions: "1757",
        // link: "/Project6",
    },
    {
        goalNumber: "7",
        goalDescription: "Ensure access to affordable, reliable, sustainable and modern energy for all.",
        targets: "5",
        events: "58",
        publications: "4",
        actions: "990",
        // link: "/Project7",
    },
    {
        goalNumber: "8",
        goalDescription: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all.",
        targets: "12",
        events: "77",
        publications: "47",
        actions: "1807",
        // link: "/Project8",
    },
    {
        goalNumber: "9",
        goalDescription: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.",
        targets: "8",
        events: "82",
        publications: "16",
        actions: "976",
        link: "/Project4",
    },
    {
        goalNumber: "10",
        goalDescription: "Reduce inequality within and among countries.",
        targets: "10",
        events: "60",
        publications: "13",
        actions: "925",
        // link: "/Project10",
    },
    {
        goalNumber: "11",
        goalDescription: "Make cities and human settlements inclusive, safe, resilient and sustainable.",
        targets: "10",
        events: "84",
        publications: "19",
        actions: "1177",
        link: "/Project3",
    },
    {
        goalNumber: "12",
        goalDescription: "Ensure sustainable comsumption and production patterns.",
        targets: "11",
        events: "27",
        publications: "15",
        actions: "1514",
        link: "/Project1",
    },
    {
        goalNumber: "13",
        goalDescription: "Take urgent action to combat climate change and its impacts.",
        targets: "5",
        events: "37",
        publications: "35",
        actions: "2025",
        // link: "/Project13",
    },
    {
        goalNumber: "14",
        goalDescription: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development.",
        targets: "10",
        events: "76",
        publications: "40",
        actions: "2802",
        // link: "/Project14",
    },
    {
        goalNumber: "15",
        goalDescription: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss.",
        targets: "12",
        events: "30",
        publications: "33",
        actions: "1249",
        // link: "/Project15",
    },
    {
        goalNumber: "16",
        goalDescription: "Promote peaceful and inclusive sosieties for sustainable development, provide access to justice for all and build effective, accountable and inclusive at all levels.",
        targets: "12",
        events: "28",
        publications: "13",
        actions: "991",
        // link: "/Project16",
    },
    {
        goalNumber: "17",
        goalDescription: "Strengthen the means of implementation and revitalize the Gobal Partnership for Sustainable Development.",
        targets: "19",
        events: "208",
        publications: "73",
        actions: "2085",
        // link: "/Project17",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container">
        {goals.map((goal) => (
          <GoalBox
            key={goal.goalNumber}
            goalNumber={goal.goalNumber}
            goalDescription={goal.goalDescription}
            targets={goal.targets}
            events={goal.events}
            publications={goal.publications}
            actions={goal.actions}
            link={goal.link}
          />
        ))}
        <SpecialBox />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
