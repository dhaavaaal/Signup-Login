import styles from "./HomePage.module.css";
import React from "react";
import HoverCard from "../HoverCard/HoverCard";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      {/* HomePage */}
      <HoverCard />
    </div>
  );
};

export default HomePage;
