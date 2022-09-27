import Image from "next/image";
import * as React from "react";
import { useState } from "react";
import lstyles from "../styles/LeftPane.module.css";
import rstyles from "../styles/RightPart.module.css";
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function List(props) {
  return (
    <div className={lstyles.col}>
      {props.arr.map((title) => {
        return (
          <div className={lstyles.colDiv} key={title}>
            <Image src="/Document.png" alt="" width="13" height="13" />
            {title}
            <Image src="/Path Copy1.png" alt="" width="6" height="8" />
          </div>
        );
      })}
      <div className={lstyles.add}>
        <Image src="/Plus.png" alt="" width="13" height="13" /> Add {props.add}
        <Image src="/Path Copy1.png" alt="" width="6" height="8" />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFilledInput-root": {
      background: "black",
      borderRadius: "50px",
      width: "300px",
      height: "50px",
    },
    floatingLabelFocusStyle: {
      color: "white",
    },
  },
}));

function LeftPane() {
  // const classes = useStyles();
  const [isProOpen, setIsProOpen] = useState(false);
  const [isBusOpen, setIsBusOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(0);
  // const projects = ["Project 1", "Project 2", "Project 3"];
  // const businesses = ["Business 1", "Business 2", "Business 3"];
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
    <div className={lstyles.boxCont}>
      <div className={lstyles.cont}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image src="/Logo.png" alt="" width="150" height="120" />
        </div>
        <div className={lstyles.listCont}>
          <div className={lstyles.collapse}>
            <Image src="/Activity.png" alt="" width="25" height="25" />
            <button
              onClick={(e) => {
                e.preventDefault();
                setClickedItem(0);
                setIsProOpen(false);
                setIsBusOpen(false);
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
                setIsProOpen(!isProOpen);
                setIsBusOpen(false);
              }}
            >
              Projects
            </button>
            {/* <Image src="/Path Copy.png" alt="" width="13" height="8" /> */}
          </div>
          {/* {isProOpen && <List add="Project" arr={projects} />} */}
          <div className={lstyles.collapse}>
            <Image src="/Bag 2.png" alt="" width="25" height="25" />
            <button
              className={lstyles.btn}
              onClick={(e) => {
                e.preventDefault();
                setClickedItem(2);
                setIsBusOpen(!isBusOpen);
                setIsProOpen(false);
              }}
            >
              Business
            </button>
            {/* <Image src="/Path Copy.png" alt="" width="13" height="8" /> */}
          </div>
          <div className={lstyles.collapse}>
            <Image src="/Bag 2.png" alt="" width="25" height="25" />
            <button
              className={lstyles.btn}
              onClick={(e) => {
                e.preventDefault();
                setClickedItem(3);
                setIsBusOpen(!isBusOpen);
                setIsProOpen(false);
              }}
            >
              Organisational Units
            </button>
            {/* <Image src="/Path Copy.png" alt="" width="13" height="8" /> */}
          </div>

          {/* {isBusOpen && <List add="Business" arr={businesses} />} */}
          <div className={lstyles.collapse}>
            <Image src="/Chat.png" alt="" width="25" height="25" />
            <button
              onClick={(e) => {
                e.preventDefault();
                setClickedItem(4);
                setIsProOpen(false);
                setIsBusOpen(false);
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
                setIsProOpen(false);
                setIsBusOpen(false);
              }}
              className={lstyles.btn}
            >
              Settings
            </button>
          </div>
        </div>
        <div className={lstyles.footer}>
          <div className={lstyles.detailsCont}>
            <div className={lstyles.dp}>
              <Image src="/Avatar.png" alt="" width="50" height="50" />
            </div>
            <div
              className={lstyles.details}
              onClick={(e) => {
                e.preventDefault();
                setClickedItem(6);
                setIsProOpen(false);
                setIsBusOpen(false);
              }}
            >
              <div className={lstyles.name}>Debasis Chakraborty</div>
              <div className={lstyles.desig}>CEO</div>
            </div>
          </div>
          <div className={lstyles.logout}>
            <div className={lstyles.icon}>
              <Image src="/Logout.png" alt="" width="28" height="28" />
            </div>
            <div className={lstyles.logoutText}>Logout</div>
          </div>
        </div>
      </div>
      {clickedItem === 0 ? (
        <div className={rstyles.cont}>
          <div className={rstyles.header}>
            <div className={rstyles.name}>
              <h1>Hi, Debasis</h1>
              <h1>Welcome Back</h1>
            </div>
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
              <div style={{ marginTop: "18px", marginLeft: "5vw" }}>
                <Image src="/notification.svg" alt="" height="70" width="70" />
              </div>
            </div>
          </div>
          <div className={rstyles.body}>
            <div className={rstyles.imgHome}>
              <Image src="/Home-pic.svg" alt="" width="500" height="500" />
            </div>
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
      ) : clickedItem === 1 ? (
        <>
          <div className={rstyles.cont}>
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
            <div className={rstyles.body2}>
              <div className={rstyles.outerbox2}>
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
      ) : clickedItem === 2 ? (
        <>
          <div className={rstyles.cont}>
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
            <div className={rstyles.body2}>
              <div className={rstyles.outerbox2}>
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
      ) : clickedItem === 3 ? (
        <>
          <div className={rstyles.cont}>
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
            <div className={rstyles.body2}>
              <div className={rstyles.outerbox2}>
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
      ) : clickedItem === 6 ? (
        <div className={rstyles.cont}>
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
          <div className={rstyles.outBox}>
            <div className={rstyles.outerBox}>
              <div className={rstyles.innerBox}>
                <div className={rstyles.leftDetails}>
                  <div className={rstyles.dpPic}>
                    <Image src="/Avatar.png" alt="" width="180" height="180" />
                  </div>
                  <div className={rstyles.names}>
                    <div className={lstyles.name}>Debasis Chakraborty</div>
                    <div className={lstyles.desig}>CEO</div>
                  </div>
                  <div className={rstyles.edit}>
                    <button className={rstyles.editBtn}>Edit</button>
                  </div>
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
                <div className={rstyles.infoRight}>
                  <div className={rstyles.personal}>
                    <div className={rstyles.heading}>
                      <h2>Personal Details</h2>
                    </div>
                    <form className={rstyles.formDtls}>
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
                  <div className={rstyles.social}>
                    <div className={rstyles.heading}>
                      <h2>Social Details</h2>
                    </div>
                    <form className={rstyles.formDtls}>
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

export default LeftPane;
