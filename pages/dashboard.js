import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import lstyles from "../styles/LeftPane.module.css";
import rstyles from "../styles/RightPart.module.css";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";

// Dashboard
function Dashboard() {
  //Tracking which item in left pane is clicked
  const [clickedItem, setClickedItem] = useState(0);

  //Details Static
  const [state, setState] = useState({
    firstname: "Debasis",
    lastname: "Chakraborty",
    email: "dc@gmail.com",
    contact: "123456789",
    gender: "Male",
    linkedin: "linkedin.com/in/username",
    twitter: "twitter.com/to/username",
    facebook: "facebook.com/to/username",
  });

  return (
    //Left Pane
    <div className={lstyles.boxCont}>
      <div className={lstyles.cont}>
        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image src="/Logo.png" alt="" width="150" height="120" />
        </div>
        {/* List of Tabs */}
        <div className={lstyles.listCont}>
          <div className={lstyles.collapse}>
            <Image src="/Activity.png" alt="" width="25" height="25" />
            <button
              // Function to activate the right pane for particular tab
              onClick={(e) => {
                e.preventDefault();
                setClickedItem(0);
              }}
              className={lstyles.btn}
            >
              Home
            </button>
          </div>
          <div className={lstyles.collapse}>
            <Image src="/Work.png" alt="" width="25" height="25" />
            <button
              className={lstyles.btn}
              onClick={(e) => {
                e.preventDefault();
                setClickedItem(1);
              }}
            >
              Projects
            </button>
          </div>
          <div className={lstyles.collapse}>
            <Image src="/Bag 2.png" alt="" width="25" height="25" />
            <button
              className={lstyles.btn}
              onClick={(e) => {
                e.preventDefault();
                setClickedItem(2);
              }}
            >
              Business
            </button>
          </div>
          <div className={lstyles.collapse}>
            <Image src="/Bag 2.png" alt="" width="25" height="25" />
            <button
              className={lstyles.btn}
              onClick={(e) => {
                e.preventDefault();
                setClickedItem(3);
              }}
            >
              Organisational Units
            </button>
          </div>
          <div className={lstyles.collapse}>
            <Image src="/Chat.png" alt="" width="25" height="25" />
            <button
              onClick={(e) => {
                e.preventDefault();
                setClickedItem(4);
              }}
              className={lstyles.btn}
            >
              Chat
            </button>
          </div>
          <div className={lstyles.collapse}>
            <Image src="/Setting.png" alt="" width="25" height="25" />
            <button
              onClick={(e) => {
                e.preventDefault();
                setClickedItem(5);
              }}
              className={lstyles.btn}
            >
              Settings
            </button>
          </div>
        </div>
        {/* Left Pane Footer */}
        <div className={lstyles.footer}>
          {/* Details of user */}
          <div className={lstyles.detailsCont}>
            {/* Display Picture */}
            <div className={lstyles.dp}>
              <Image src="/Avatar.png" alt="" width="50" height="50" />
            </div>
            <div
              className={lstyles.details}
              onClick={(e) => {
                e.preventDefault();
                setClickedItem(6);
              }}
            >
              {/* Name and Desig */}
              <div className={lstyles.name}>Debasis Chakraborty</div>
              <div className={lstyles.desig}>CEO</div>
            </div>
          </div>
          {/* Logout */}
          <div className={lstyles.logout}>
            <div className={lstyles.icon}>
              <Image src="/Logout.png" alt="" width="28" height="28" />
            </div>
            <div className={lstyles.logoutText}>Logout</div>
          </div>
        </div>
      </div>
      {/* Right Pane */}
      {/* ClickedItem shows only the right pane for required left pane tab */}

      {/* Home */}
      {clickedItem === 0 ? (
        <div className={rstyles.cont}>
          {/* header */}
          <div className={rstyles.header}>
            <div className={rstyles.name}>
              <h1>Hi, Debasis</h1>
              <h1>Welcome Back</h1>
            </div>
            {/* right side navbar */}
            <div className={rstyles.right}>
              <FormControl
                sx={{
                  m: 1,
                  width: "17vw",
                  height: "30px",
                  backgroundColor: "#242731",
                  borderRadius: "50px",
                  color: "white",
                }}
                variant="filled"
              >
                <InputLabel
                  sx={{ color: "white" }}
                  shrink={true}
                  htmlFor="outlined-adornment-search"
                >
                  Search
                </InputLabel>
                <OutlinedInput
                  sx={{ height: "30px", borderRadius: "50px" }}
                  id="outlined-adornment-search"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <SearchIcon style={{ color: "white" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Search"
                />
              </FormControl>
              {/* notification bell */}
              <div style={{ marginTop: "18px", marginLeft: "5vw" }}>
                <Image src="/notification.svg" alt="" height="70" width="70" />
              </div>
            </div>
          </div>
          {/* body */}
          <div className={rstyles.body}>
            {/* main pic */}
            <div className={rstyles.imgHome}>
              <Image src="/Home-pic.svg" alt="" width="500" height="500" />
            </div>
            {/* message box */}
            <div className={rstyles.messages}>
              <div className={rstyles.msg}>
                <div style={{ marginTop: "25px" }}>
                  <Image
                    style={{ height: "2px" }}
                    src="/Chat2.png"
                    alt=""
                    height="30"
                    width="25"
                  />
                </div>
                <h1 style={{ marginLeft: "-5vw", color: "white" }}>Messages</h1>
              </div>
              <div className={rstyles.msgbody}>
                <div className={rstyles.msginbody}>
                  {/* contacts with msgs */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : // Projects
      clickedItem === 1 ? (
        <>
          <div className={rstyles.cont}>
            {/* header */}
            <div className={rstyles.header}>
              <div className={rstyles.name}>
                <h1>Projects</h1>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  marginRight: "6.5vw",
                }}
                className={rstyles.right}
              >
                <FormControl
                  sx={{
                    m: 1,
                    width: "17vw",
                    height: "30px",
                    backgroundColor: "#242731",
                    borderRadius: "50px",
                    color: "white",
                  }}
                  variant="filled"
                >
                  <InputLabel
                    sx={{ color: "white" }}
                    shrink={true}
                    htmlFor="outlined-adornment-search"
                  >
                    Search
                  </InputLabel>
                  <OutlinedInput
                    sx={{ height: "30px", borderRadius: "50px" }}
                    id="outlined-adornment-search"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <SearchIcon style={{ color: "white" }} />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Search"
                  />
                </FormControl>
                <div style={{ marginTop: "18px", marginLeft: "5vw" }}>
                  <Image
                    src="/notification.svg"
                    alt=""
                    height="70"
                    width="70"
                  />
                </div>
              </div>
            </div>
            {/* Body */}
            <div className={rstyles.body2}>
              <div className={rstyles.outerbox2}>
                {/* Grid of Projects */}
                <div className={rstyles.grid}>
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : // Businesses
      clickedItem === 2 ? (
        <>
          <div className={rstyles.cont}>
            {/* Header */}
            <div className={rstyles.header}>
              <div className={rstyles.name}>
                <h1>Businesses</h1>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  marginRight: "6.5vw",
                }}
                className={rstyles.right}
              >
                <FormControl
                  sx={{
                    m: 1,
                    width: "17vw",
                    height: "30px",
                    backgroundColor: "#242731",
                    borderRadius: "50px",
                    color: "white",
                  }}
                  variant="filled"
                >
                  <InputLabel
                    sx={{ color: "white" }}
                    shrink={true}
                    htmlFor="outlined-adornment-search"
                  >
                    Search
                  </InputLabel>
                  <OutlinedInput
                    sx={{ height: "30px", borderRadius: "50px" }}
                    id="outlined-adornment-search"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <SearchIcon style={{ color: "white" }} />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Search"
                  />
                </FormControl>
                <div style={{ marginTop: "18px", marginLeft: "5vw" }}>
                  <Image
                    src="/notification.svg"
                    alt=""
                    height="70"
                    width="70"
                  />
                </div>
              </div>
            </div>
            {/* Body */}
            <div className={rstyles.body2}>
              <div className={rstyles.outerbox2}>
                {/* Grid of businesses */}
                <div className={rstyles.grid}>
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : // Organisational Units
      clickedItem === 3 ? (
        <>
          <div className={rstyles.cont}>
            {/* header */}
            <div className={rstyles.header}>
              <div className={rstyles.name}>
                <h1>Organisational Units</h1>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  marginRight: "6.5vw",
                }}
                className={rstyles.right}
              >
                <FormControl
                  sx={{
                    m: 1,
                    width: "17vw",
                    height: "30px",
                    backgroundColor: "#242731",
                    borderRadius: "50px",
                    color: "white",
                  }}
                  variant="filled"
                >
                  <InputLabel
                    sx={{ color: "white" }}
                    shrink={true}
                    htmlFor="outlined-adornment-search"
                  >
                    Search
                  </InputLabel>
                  <OutlinedInput
                    sx={{ height: "30px", borderRadius: "50px" }}
                    id="outlined-adornment-search"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <SearchIcon style={{ color: "white" }} />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Search"
                  />
                </FormControl>
                <div style={{ marginTop: "18px", marginLeft: "5vw" }}>
                  <Image
                    src="/notification.svg"
                    alt=""
                    height="70"
                    width="70"
                  />
                </div>
              </div>
            </div>
            {/* Body */}
            <div className={rstyles.body2}>
              <div className={rstyles.outerbox2}>
                {/* Grid of Organisational Units */}
                <div className={rstyles.grid}>
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                  <Image src="/Group 4.png" alt="" width="250" height="200" />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : // Profile
      clickedItem==4?(
        <>
        <div className={rstyles.cont}>
            {/* header */}
            <div className={rstyles.header}>
              <div className={rstyles.name}>
                <h1>Chat</h1>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  marginRight: "6.5vw",
                }}
                className={rstyles.right}
              >
                <FormControl
                  sx={{
                    m: 1,
                    width: "17vw",
                    height: "30px",
                    backgroundColor: "#242731",
                    borderRadius: "50px",
                    color: "white",
                  }}
                  variant="filled"
                >
                  <InputLabel
                    sx={{ color: "white" }}
                    shrink={true}
                    htmlFor="outlined-adornment-search"
                  >
                    Search
                  </InputLabel>
                  <OutlinedInput
                    sx={{ height: "30px", borderRadius: "50px" }}
                    id="outlined-adornment-search"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <SearchIcon style={{ color: "white" }} />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Search"
                  />
                </FormControl>
                <div style={{ marginTop: "18px", marginLeft: "5vw" }}>
                  <Image
                    src="/notification.svg"
                    alt=""
                    height="70"
                    width="70"
                  />
                </div>
              </div>
            </div>
            {/* Body */}
            </div>
        </>

      ):
      clickedItem==5?(
        <>
        <div className={rstyles.cont}>
            {/* header */}
            <div className={rstyles.header}>
              <div className={rstyles.name}>
                <h1>Settings</h1>
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  marginRight: "6.5vw",
                }}
                className={rstyles.right}
              >
                <FormControl
                  sx={{
                    m: 1,
                    width: "17vw",
                    height: "30px",
                    backgroundColor: "#242731",
                    borderRadius: "50px",
                    color: "white",
                  }}
                  variant="filled"
                >
                  <InputLabel
                    sx={{ color: "white" }}
                    shrink={true}
                    htmlFor="outlined-adornment-search"
                  >
                    Search
                  </InputLabel>
                  <OutlinedInput
                    sx={{ height: "30px", borderRadius: "50px" }}
                    id="outlined-adornment-search"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <SearchIcon style={{ color: "white" }} />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Search"
                  />
                </FormControl>
                <div style={{ marginTop: "18px", marginLeft: "5vw" }}>
                  <Image
                    src="/notification.svg"
                    alt=""
                    height="70"
                    width="70"
                  />
                </div>
              </div>
            </div>
            {/* Body */}
            </div>
        </>

      ):
      clickedItem === 6 ? (
        <div className={rstyles.cont}>
          {/* header */}
          <div className={rstyles.header}>
            <div
              style={{ position: "absolute", right: "0", marginRight: "6.5vw" }}
              className={rstyles.right}
            >
              <FormControl
                sx={{
                  m: 1,
                  width: "17vw",
                  height: "30px",
                  backgroundColor: "#242731",
                  borderRadius: "50px",
                  color: "white",
                }}
                variant="filled"
              >
                <InputLabel
                  sx={{ color: "white" }}
                  shrink={true}
                  htmlFor="outlined-adornment-search"
                >
                  Search
                </InputLabel>
                <OutlinedInput
                  sx={{ height: "30px", borderRadius: "50px" }}
                  id="outlined-adornment-search"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <SearchIcon style={{ color: "white" }} />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Search"
                />
              </FormControl>
              <div style={{ marginTop: "18px", marginLeft: "5vw" }}>
                <Image src="/notification.svg" alt="" height="70" width="70" />
              </div>
            </div>
          </div>
          {/* body */}
          <div className={rstyles.outBox}>
            <div className={rstyles.outerBox}>
              <div className={rstyles.innerBox}>
                {/* left part of box */}
                <div className={rstyles.leftDetails}>
                  {/* DP */}
                  <div className={rstyles.dpPic}>
                    <Image src="/Avatar.png" alt="" width="180" height="180" />
                  </div>
                  {/* Name and Desig */}
                  <div className={rstyles.names}>
                    <div className={lstyles.name}>Debasis Chakraborty</div>
                    <div className={lstyles.desig}>CEO</div>
                  </div>
                  {/* Edit Button */}
                  <div className={rstyles.edit}>
                    <button className={rstyles.editBtn}>Edit</button>
                  </div>
                  {/* Icons */}
                  <div className={rstyles.icons}>
                    <div className={rstyles.projects}>
                      <Image src="/Project.svg" alt="" width="50" height="50" />
                      <h3 style={{ textAlign: "center" }}>0</h3>
                    </div>
                    <div className={rstyles.collab}>
                      <Image src="/Collab.svg" alt="" width="50" height="50" />
                      <h3 style={{ textAlign: "center" }}>0</h3>
                    </div>
                    <div className={rstyles.work}>
                      <Image src="/Work.svg" alt="" width="50" height="50" />
                      <h3 style={{ textAlign: "center" }}>0</h3>
                    </div>
                  </div>
                </div>
                {/* Right Side of box */}
                <div className={rstyles.infoRight}>
                  {/* Personal Details */}
                  <div className={rstyles.personal}>
                    {/* heading */}
                    <div className={rstyles.heading}>
                      <h2>Personal Details</h2>
                    </div>
                    {/* Form */}
                    <form className={rstyles.formDtls}>
                      {/* First Name */}
                      <field className={rstyles.ftext}>
                        <label className={rstyles.flabel} htmlFor="firstName">
                          First name
                        </label>
                        <input
                          className={rstyles.finput}
                          type="text"
                          id="firstName"
                          value={state.firstname}
                          onChange={(e) =>
                            setState({ firstname: e.target.value })
                          }
                        />
                      </field>
                      {/* Last Name */}
                      <field className={rstyles.ftext}>
                        <label className={rstyles.flabel} htmlFor="lastName">
                          Last name
                        </label>
                        <input
                          className={rstyles.finput}
                          type="text"
                          id="lastName"
                          value={state.lastname}
                          onChange={(e) =>
                            setState({ lastname: e.target.value })
                          }
                        />
                      </field>
                      {/* Email */}
                      <field className={rstyles.ftext}>
                        <label className={rstyles.flabel} htmlFor="email">
                          Email
                        </label>
                        <input
                          className={rstyles.finput}
                          type="email"
                          id="email"
                          value={state.email}
                          onChange={(e) => setState({ email: e.target.value })}
                        />
                      </field>
                      {/* Contact */}
                      <field className={rstyles.ftext}>
                        <label className={rstyles.flabel} htmlFor="contact">
                          Contact
                        </label>
                        <input
                          className={rstyles.finput}
                          type="number"
                          id="contact"
                          value={state.contact}
                          onChange={(e) =>
                            setState({ contact: e.target.value })
                          }
                        />
                      </field>
                      {/* Gender */}
                      <field className={rstyles.ftext}>
                        <label className={rstyles.flabel} htmlFor="gender">
                          Gender
                        </label>
                        <select
                          className={rstyles.finput}
                          id="gender"
                          name="gender"
                        >
                          <option className={rstyles.gender} value="Male">
                            Male
                          </option>
                          <option className={rstyles.gender} value="Female">
                            Female
                          </option>
                          <option className={rstyles.gender} value="Other">
                            Other
                          </option>
                          <option
                            className={rstyles.gender}
                            value="Prefer Not to say"
                          >
                            Prefer Not to say
                          </option>
                        </select>
                      </field>
                    </form>
                  </div>
                  {/* Social Details */}
                  <div className={rstyles.social}>
                    {/* heading */}
                    <div className={rstyles.heading}>
                      <h2>Social Details</h2>
                    </div>
                    {/* Form */}
                    <form className={rstyles.formDtls}>
                      {/* LinkedIn */}
                      <field className={rstyles.ftext}>
                        <label className={rstyles.flabel} htmlFor="linkedin">
                          LinkedIn
                        </label>
                        <input
                          className={rstyles.finput}
                          type="text"
                          id="linkedin"
                          value={state.linkedin}
                          onChange={(e) =>
                            setState({ linkedin: e.target.value })
                          }
                        />
                      </field>
                      {/* Twitter */}
                      <field className={rstyles.ftext}>
                        <label className={rstyles.flabel} htmlFor="twitter">
                          Twitter
                        </label>
                        <input
                          className={rstyles.finput}
                          type="text"
                          id="twitter"
                          value={state.twitter}
                          onChange={(e) =>
                            setState({ twitter: e.target.value })
                          }
                        />
                      </field>
                      {/* Facebook */}
                      <field className={rstyles.ftext}>
                        <label className={rstyles.flabel} htmlFor="facebook">
                          Facebook
                        </label>
                        <input
                          className={rstyles.finput}
                          type="text"
                          id="facebook"
                          value={state.facebook}
                          onChange={(e) =>
                            setState({ facebook: e.target.value })
                          }
                        />
                      </field>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        0
      )}
    </div>
  );
}

export default Dashboard;
