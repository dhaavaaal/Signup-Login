import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./UserDetailsCard.module.css";
import { onLogOut } from "../../redux/actions";
import { useNavigate } from "react-router";

const HoverCard = () => {
  const { avatar, name, email, isLoggedIn, phonenumber } = useSelector(
    (state) => state.users
  );
  console.table(avatar, name, email, isLoggedIn, phonenumber);
  // const user = useSelector((state) => state.users);
  // console.table(user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className={styles["usercard-container"]}>
      <div className={styles["usercard-inner"]}>
        <div className={styles["fill-background-top"]}></div>
        <div className={styles["user-data"]}>
          <img
            src={avatar}
            alt="user-profile"
            className={styles["user-image"]}
          />
          <div className={styles["user-name"]}>
            <h2>{name}</h2>
            <p>{email}</p>
            <h4>{phonenumber}</h4>
          </div>
        </div>
        <div className={styles["fill-background-bottom"]}>
          <button
            className={styles["logout-button"]}
            onClick={() => {
              dispatch(onLogOut());
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
