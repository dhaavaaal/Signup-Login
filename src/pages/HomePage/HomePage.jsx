import styles from "./HomePage.module.css";
import React from "react";
import HoverCard from "../../components/HoverCard/HoverCard";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <HoverCard />
    </div>
  );
};

export default HomePage;
