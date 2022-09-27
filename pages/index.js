import Image from "next/image";
import React from "react";
import styles from "../styles/SignIn.module.css";

function SignIn() {
  return (
    <>
      <nav className={styles.nav}>
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
        <div className={styles.options}>
          <p>Dont have an account?</p>
          <button className={styles.nav_btn}>SignUp</button>
        </div>
      </nav>
      <div className={styles.mainBg}>
        <div className={styles.picConts}>
          <div className={styles.pic}>
            <Image src="/Login-picture1.svg" alt="" width="670" height="500" />
          </div>
        </div>

        <div className={styles.formCont}>
          <h1 style={{ fontSize: "50px" }}>SIGN-IN</h1>
          <form className={styles.form} action="/api/form" method="post">
            <label
              style={{ fontSize: "20px", fontWeight: "800" }}
              htmlFor="email"
            >
              Email
            </label>
            <br />
            <input
              className={styles.input}
              type="email"
              id="email"
              placeholder="Email Address..."
              name="email"
              required
            />
            <br />
            <label
              style={{ marginTop: "25px", fontSize: "20px", fontWeight: "800" }}
              htmlFor="pwd"
            >
              Password
            </label>
            <br />
            <input
              className={styles.input}
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Password..."
              required
            />
            <br />
            <button className={styles.signBtn} type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
