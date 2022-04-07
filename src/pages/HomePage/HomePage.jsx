import styles from "./HomePage.module.css";
import React from "react";
import UserDetailsCard from "../../components/UserDetailsCard/UserDetailsCard";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <UserDetailsCard />
    </div>
  );
};

export default HomePage;
