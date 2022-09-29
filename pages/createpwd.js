import Image from "next/image";
import React from "react";
import styles from "../styles/CreatePassword.module.css";

function CreatePassword() {
  return (
    <>
      {/* Navbar */}
      <nav className={styles.nav}>
        {/* Logo */}
        <div className={styles.logoCont}>
          <Image
            className={styles.logo}
            style={{ marginLeft: "20px" }}
            src="/Logo.png"
            alt=""
            width="130"
            height="100"
          />
        </div>
        {/* Right side of navbar */}
        <div className={styles.options}>
          <p>Dont have an account?</p>
          <button className={styles.nav_btn}>SignUp</button>
        </div>
      </nav>
      {/* body */}
      <div className={styles.mainBg}>
        {/* main pic */}
        <div className={styles.picConts}>
          <div className={styles.pic}>
            <Image src="/Login-picture1.svg" alt="" width="670" height="500" />
          </div>
        </div>
        {/* form */}
        <div className={styles.formCont}>
          <h1 style={{ fontSize: "50px" }}>Create New Password</h1>
          <form className={styles.form} action="/api/form" method="post">
            <label
              style={{ fontSize: "20px", fontWeight: "800" }}
              htmlFor="email"
            >
              Enter New Password
            </label>
            <br />
            <input
              className={styles.input}
              type="password"
              id="pwd"
              placeholder="New Password..."
              name="pwd"
              required
            />
            <br />
            <label
              style={{ marginTop: "25px", fontSize: "20px", fontWeight: "800" }}
              htmlFor="pwd"
            >
              Re-type Password
            </label>
            <br />
            <input
              className={styles.input}
              type="cpassword"
              id="cpwd"
              name="cpwd"
              placeholder="Confirm Password..."
              required
            />
            <br />
            <button className={styles.signBtn} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreatePassword;
