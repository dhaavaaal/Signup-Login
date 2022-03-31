import React from "react";
import { useSelector } from "react-redux";
import styles from "./HoverCard.module.css";
import image from "../../images/prac-08.png";

const HoverCard = (props) => {
  const userInput = useSelector((state) => state.users);

  return (
    <div className={styles["usercard-container"]}>
      <div className={styles["usercard-inner"]}>
        {/* <div className={styles["fill-background-top"]}></div> */}
        <div className={styles["user-data"]}>
          <img
            src={image}
            alt="user-profile"
            className={styles["user-image"]}
          />
          <div className={styles["user-name"]}>
            <h2>{userInput.name}</h2>
            <p>{userInput.email}</p>
            <h4>{userInput.phonenumber}</h4>
          </div>
        </div>
        <div className={styles["fill-background-bottom"]}>
          <button className={styles["logout-button"]}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
