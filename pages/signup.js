import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/SignUp.module.css";

function SignUp() {
  return (
    <>
      {/* navbar */}
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
        {/* navbar right side */}
        <div className={styles.options}>
          <p>Already have an account?</p>
          <Link href="/">
            <button style={{ cursor: "pointer" }} className={styles.nav_btn}>
              SignIn
            </button>
          </Link>
        </div>
      </nav>
      <div className={styles.mainBg}>
        <div className={styles.picCont}>
          <div className={styles.pic}>
            <Image src="/Login-picture1.svg" alt="" width="770" height="600" />
          </div>
        </div>
        {/* Form Container */}
        <div className={styles.formCont}>
          {/* Form Header */}
          <h1
            style={{
              background:
                "linear-gradient(180deg, #000000 47.92%, rgba(255, 255, 255, 0) 100%), linear-gradient(270deg, #D963E2 0%, #444C64 100%)",
              fontSize: "30px",
            }}
          >
            SIGN-UP
          </h1>
          <form className={styles.form} action="/api/form" method="post">
            <label
              style={{ fontSize:"15px", fontWeight: "800" }}
              htmlFor="first"
            >
              First Name
            </label>
            <br />
            <input
              className={styles.input}
              type="text"
              id="first"
              placeholder="Enter First Name"
              name="first"
              required
            />
            <br />
            <label
              style={{ fontSize:"15px", fontWeight: "800" }}
              htmlFor="last"
            >
              Last Name
            </label>
            <br />
            <input
              className={styles.input}
              type="text"
              id="text"
              placeholder="Last Name"
              name="last"
              required
            />
            <br />
            <label
              style={{ fontSize:"15px", fontWeight: "800" }}
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
              style={{ fontSize:"15px", fontWeight: "800" }}
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
              placeholder="Password"
              required
            />
            <br />
            <label
              style={{ fontSize:"15px", fontWeight: "800" }}
              htmlFor="cpwd"
            >
              Confirm Password
            </label>
            <br />
            <input
              className={styles.input}
              type="password"
              id="cpwd"
              name="cpwd"
              placeholder="Confirm Password"
              required
            />
            <br />
            <p style={{ margin: "0 auto" }}>
              I accept the
              <span style={{ cursor: "pointer", color: "red" }}>
                {" "}
                Terms & Conditions
              </span>
            </p>
            <br />
            <button
              style={{ cursor: "pointer" }}
              className={styles.signBtn}
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
