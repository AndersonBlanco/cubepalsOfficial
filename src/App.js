import "./App.css";
import fade from "./App.css";

//import * as AsyncStorage from "@react-native-async-storage/async-storage";
import SvgComp from "./SvgBricks";

import React from "react";
import { useState, useEffect, useRef } from "react";

import Modal from "react-modal";
import { motion } from "framer-motion";
import introGif1 from "./Gifs/gif1.gif";
import introGif2 from "./Gifs/gif2.gif";

import cube1 from "./Imgs/cube1.png";
import cube2 from "./Imgs/cube2.png";
import cube3 from "./Imgs/cube3.png";
import cube4 from "./Imgs/cube4.png";
import cube5 from "./Imgs/cube5.png";

import ImgTitle from "./Imgs/titleHeader.png";
import ImgBackground from "./Imgs/background.png";
import BackgroundPart1 from "./Imgs/BackgroundPart1.png";
import BackgroundPart2 from "./Imgs/BackgroundPart2.png";
import BackgroundGradient1 from "./Imgs/backgroundGradient1.png";
//import ScrollAnimation from "react-animate-on-scroll";

//import {Switch, Route, Redirect } from "react-route-dom";
//import {HashLink, NavHashLink } from "react-router-hash-link";
//import { setTarget } from "framer-motion/types/render/utils/setters";

//import { ImageBackground } from "react-native";

// const pixel = require("http://fonts.cdnfonts.com/css/sf-pixelate");

//import { View, Image, StyleSheet } from 'react-native';

function App() {
  const headerRef = useRef(null);
  const sect2Ref = useRef(null);
  const sect3Ref = useRef(null);
  const faqRef = useRef(null);
  const creditsRef = useRef();

  const goTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth"
    });
  };

  const height = window.innerHeight,
    width = window.innerWidth;

  const header = document.getElementById("header");

  const h = height.toString(),
    w = width.toString();

  // const sect2 = document.getElementById("sect2"),
  // sect3 = document.getElementById("sect3");

  const body = document.body;
  //body.style.height = height + "px";
  // body.style.width = width + "px";

  function Dimensions(dimension, percentage) {
    return dimension * (percentage / 100);
  }

  const Hub = ({ title, imgSrc, description, backC }) => {
    return (
      <a
        style={{
          textDecoration: "none",
          color: "black",
          cursor: "pointer"
        }}
        href="https://opensea.io/collection/cube-pals"
      >
        <div
          // href = "https://opensea.io/collection/cube-pals"

          id="hubContainer"
          style={{
            backgroundColor: "white",
            borderRadius: "5vh",
            padding: "5vh",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "fit-content",
            textAlign: "center",
            margin: "5vh",
            cursor: "pointer"
          }}
        >
          <h2
            id="hubTitle"
            style={{
              fontSize: "5vh",
              alignSelf: "center"
            }}
          >
            {title}
          </h2>

          <img
            id="imgDisplay"
            src={imgSrc}
            style={{
              height: "25vh",
              borderRadius: "2vh"
            }}
          />
        </div>
      </a>
    );
  };

  const Menu = () => {
    return (
      <nav className="menuNav">
        <ul className="menuNav_ul">
          <li>FQA</li>
          <li>Check us out in Open Sea</li>
        </ul>
      </nav>
    );
  };

  const SMenu = () => {
    let styles = {
      main: {
        cursor: "pointer",

        display: "inline",
        borderRight: ".4vh solid white",
        paddingRight: "2vh",
        paddingLeft: "2vh"
      },

      mainT: {
        cursor: "pointer",

        display: "inline",
        borderRight: ".4vh solid white",
        paddingRight: "2vh",
        paddingLeft: "2vh",
        textShadow: "0vh 1vh 1vh black"
      },

      credits: {
        cursor: "pointer",
        margin: "1vh",
        display: "inline"
      }
    };

    return (
      <ul
        style={{
          listStyle: "none",
          fontSize: "3.1vh",
          gridColumnStart: 2,
          gridColumnEnd: 2,
          flexDirection: "row",
          display: "inline",
          marginTop: "-2vh",
          marginBottom: "10vh"
        }}
      >
        <li className="item" style={styles.main} onClick={() => goTo(sect2Ref)}>
          Market
        </li>

        <li className="item" style={styles.main} onClick={() => goTo(sect3Ref)}>
          TimeLine
        </li>
        <li className="item" style={styles.main} onClick={() => goTo(faqRef)}>
          FAQ
        </li>
        <li
          className="item"
          style={styles.credits}
          onClick={() => goTo(creditsRef)}
        >
          Credits
        </li>
      </ul>
    );
  };

  //Animations:
  const [disp, setDisp] = useState("none");
  const [toggle, setToggle] = useState(false);

  const [v1, setV1] = useState(false),
    [v2, setV2] = useState(false),
    [v3, setV3] = useState(false),
    [v4, setV4] = useState(false),
    [v5, setV5] = useState(false);

  const [open, SetOpen] = useState(false);

  const [paddingV1, setPaddingV1] = useState(false);

  return (
    <div className="App">
      <div
        className="header"
        id="header"
        ref={headerRef}
        style={{
          fontFamily: "'SF Pixelate', sans-serif"
        }}
      >
        <SMenu />

        <img
          src={cube4}
          style={{
            height: "15vh",
            transform: "rotateZ(-25deg) skew(10deg)",
            gridColumnStart: 1,
            gridCOlumnEnd: 1,
            gridRowStart: 3,
            gridRowEnd: 3,
            borderRadius: "10%",
            boxShadow: "0vh 0vh 5vh 1vh black"
          }}
        />

        <img
          src={cube2}
          style={{
            height: "15vh",
            alignSelf: "10px 10px",
            borderRadius: "10%",
            transformOrigin: "center",
            gridColumnStart: 1,
            gridCOlumnEnd: 1,
            gridRowStart: 2,
            gridRowEnd: 2,
            transform: "rotateZ(20deg)",
            boxShadow: "0vh 0vh 5vh 1vh black"
          }}
        />

        <img
          src={ImgTitle}
          style={{
            alignSelf: "center",
            height: "25vh",
            marginBottom: "50%",
            gridColumnStart: 2,
            gridCOlumnEnd: 2,
            transform: "rotateZ(0deg) skew(-14deg)",
            gridRowStart: 3,
            gridRowEnd: 3
          }}
        />

        <h3
          className="headerTextTitle"
          style={{
            fontFamily: "'SF Pixelate', sans-serif"
          }}
        >
          Pinky promise?
        </h3>

        <img
          src={cube3}
          style={{
            transform: "rotateY(180deg) rotateZ(15deg)",
            height: "20vh",
            gridColumnStart: 3,
            gridCOlumnEnd: 3,
            gridRowStart: 2,
            gridRowEnd: 2,
            boxShadow: "0vh 0vh 5vh 1vh black",
            borderRadius: "10%"
          }}
        />
      </div>

      <div
        ref={sect2Ref}
        className="sect2"
        id="sect2"
        style={{
          height: "fit-content",
          fontFamily: "'SF Pixelate', sans-serif",
          padding: "2vh"
        }}
      >
        <h1
          style={{
            fontSize: "7vh",
            color: "white"
          }}
        >
          Market
        </h1>

        <div
          style={{
            display: "block",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              display: "inline-grid",
              gridTemplateColumns: "auto auto ",
              gridGap: "5vh"
            }}
          >
            <h2
              style={{
                fontSize: "5.5vh",
                color: "white",
                textAlign: "left",
                alignSelf: "left",

                padding: "20vh"
              }}
            >
              {" "}
              Collect different styles, explore, and stay cool{" "}
            </h2>

            <Hub
              title="Click to see more"
              imgSrc={introGif1}
              description={"Collect different styles, explore, and stay cool"}
            />
          </div>

          {"\n"}

          <div
            style={{
              display: "inline-grid",
              gridTemplateColumns: "auto auto ",
              gridGap: "5vh"
            }}
          >
            <h2
              style={{
                fontSize: "5.5vh",
                color: "white",
                textAlign: "left",
                alignSelf: "left",

                padding: "20vh"
              }}
            >
              {" "}
              Trade, exchange, sell, and enjoy{" "}
            </h2>
            <Hub title="Click to see more" imgSrc={introGif1} />
          </div>
        </div>
      </div>

      <div
        ref={sect3Ref}
        className="sect3"
        id="sect3"
        onScroll={() => alert("wGEFGVQWAERFGYUH")}
      >
        <div
          style={{
            flex: 1,
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridTemplateRows: "auto auto auto auto auto"
          }}
        >
          <button onClick={() => SetOpen(!open)}>CLose</button>

          <h3
            style={{
              fontSize: "5vh",
              color: "white",
              gridRowStart: 1,
              gridRowEnd: 1,
              gridColumnStart: 2,
              gridCOlumnEnd: 2
            }}
          >
            Road Map
          </h3>

          <div
            style={{
              fontSize: "3vh",
              color: "white",

              padding: "1vh",
              paddingRight: "10vh",
              paddingLeft: "10vh",
              borderLeft: "7px solid black",
              gridColumnStart: 2,
              gridClumnEnd: 2,
              gridRowStart: 2,
              gridRowEnd: 5,
              height: "fit-content",
              marginRight: "25vh",
              marginLeft: "25vh"
            }}
          >
            <p
              onMouseEnter={() => {
                const self = document.getElementById("rMP1");

                //setPaddingV1(!paddingV1);
              }}
              onMouseOut={() => {
                // setPaddingV1(!paddingV1)
              }}
              style={styles.rMPP}
              id="rMP1"
              className="rMP1"
              style={{
                cursor: "crosshair",
                marginLeft: "5vh",
                margin: "5vh",
                padding: "1vh",
                backgroundColor: "white",
                borderBottom: "1vh solid black",
                gridColumnStart: 2,
                gridColumnEnd: 2,
                gridRowStart: 2,
                gridRowEnd: 2,
                color: "black",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "2vh",
                boxShadow: "0vh 2vh 2vh black"
              }}
            >
              <h2 style={styles.perct}>0%</h2>
              Originating from the pixel world, CubePals! A new form of
              pixelated characters. Your best friends.. The public mint will
              happen in OpenSea
              <h1 style={{ padding: "2vh" }}></h1>
            </p>

            <b />
            <b />

            <p style={styles.rMPP} className="rMPP">
              <h2 style={{}}>25%</h2>
              Once over 60% of CubePals have been bought the creation of Tools
              and Weapons for The Battle Arena will begin Weapons and Tools will
              be used in The Battle Arena for the Battles that will take place
              there
              <h1 style={{ padding: "2vh" }}></h1>
            </p>

            <p className="rMPP" style={styles.rMPP}>
              <h2 style={styles.perct}>50%</h2>
              They will also be usable in the Trade Centers and Lounge, but only
              as a cosmetic
              <h1 style={{ padding: "2vh" }}></h1>
            </p>

            <b />
            <b />

            <p style={styles.rMPP} className="rMPP">
              <h2 style={styles.perct}>100%</h2>
              The Battle Arena will be released for CubePal owners at last!!
              <h1 style={{ padding: "2vh" }}></h1>
            </p>

            <b />
            <b />

            <p style={styles.rMPP} className="rMPP">
              <h2
                variants={{
                  up: { y: 100 },
                  down: { y: -100 }
                }}
                className="FUTURE"
                id="FUTURE"
                style={styles.perct}
                style={{}}
              >
                FUTURE
              </h2>
              We will release several extensions such as.. cube-coin, mini-game,
              and merchandise
              <h1 style={{ padding: "2vh" }}></h1>
            </p>
          </div>
        </div>
      </div>

      <div className="sect4" ref={faqRef}>
        <h1
          style={{
            float: "left",

            marginTop: "-10vh"
          }}
        >
          FAQ
        </h1>

        <ul
          style={{
            listStylePosition: "outside",
            color: "white",
            cursor: "pointer",
            listStyle: "none",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <motion.li
            id="this1"
            animate={{
              padding: v1 ? "5vh" : "5vh",
              height: v1 ? "30vh" : "18vh"
            }}
            style={styles.items}
            onClick={() => {
              console.log("A");
              const q1A = document.getElementById("q1A");

              setToggle(!toggle);

              setV1(!v1);
            }}
          >
            {" "}
            How many cubepals are going to be release?
            <motion.div
              animate={{ opacity: v1 ? 1 : 0, display: v1 ? "block" : "none" }}
              style={{
                opacity: 0,
                marginTop: "5vh",
                color: "blue",
                display: "none"
              }}
              className="q1A"
              id="q1A"
            >
              There will be 9,000 released!
            </motion.div>
          </motion.li>

          <motion.li
            animate={{ height: v3 ? "fit-content" : "fit-content" }}
            onClick={() => setV3(!v3)}
            style={styles.items}
          >
            {" "}
            What is a cubepal?
            <motion.div
              animate={{ opacity: v3 ? 1 : 0, display: v3 ? "block" : "none" }}
              style={{ opacity: 0, marginTop: "5vh", display: "none" }}
              className="q1A"
              id="q1A"
            >
              {" "}
              A digital asset that will grant unique experiences and private
              gatherings!
            </motion.div>
          </motion.li>

          <motion.li
            animate={{ height: v4 ? "fit-content" : "fit-content" }}
            onClick={() => setV4(!v4)}
            style={styles.items}
          >
            {" "}
            What are the cube rarities?
            <motion.div
              animate={{ opacity: v4 ? 1 : 0, display: v4 ? "block" : "none" }}
              style={{ opacity: 0, marginTop: "5vh", display: "none" }}
              className="q1A"
              id="q1A"
            >
              {" "}
              You will be able to trade cubepals and assets with other users
            </motion.div>
          </motion.li>

          <motion.li
            onClick={() => goTo(creditsRef)}
            animate={{ height: v5 ? "fit-content" : "fit-content" }}
            //onClick = {() =>  setV5(!v5)}
            style={styles.items}
          >
            {" "}
            Who are the creators?
            <motion.div
              animate={{ opacity: v5 ? 1 : 0, display: v5 ? "block" : "none" }}
              style={{ opacity: 0, marginTop: "5vh", display: "none" }}
              className="q1A"
              id="q1A"
            >
              {" "}
            </motion.div>
          </motion.li>
        </ul>
      </div>

      <div className="credits" ref={creditsRef}>
        <h1>Credits To:</h1>

        <div
          style={{
            gridTemplateColumns: "auto auto auto",
            gridTemplateRows: "auto auto",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            padding: "1vh"
          }}
        >
          <div
            className="credits-artist"
            style={{
              gridColumnStart: 1,
              gridColumnEnd: 1
            }}
          >
            <h2>Artist</h2>
            <h4>Esteban Cubidez</h4>
          </div>

          <div
            className="credits-Administrator"
            style={{
              gridColumnStart: 2,
              gridColumnEnd: 2
            }}
          >
            <h2>Administrator</h2>
            <h4>..Cubidez</h4>
          </div>

          <div
            className="credits-Programmer"
            style={{
              gridColumnStart: 3,
              gridColumnEnd: 3,
              gridRowStart: 1
            }}
          >
            <h2>Programmer</h2>
            <h4>Anderson D. Blanco</h4>
          </div>
        </div>
      </div>

      <div className="footer" id="footer"></div>
    </div>
  );
}

const styles = {
  title: {
    fontSize: "10vh",
    fontWeight: 150
  },

  t1: {
    fontSize: "2vh",
    color: "white",
    display: "inline-flex"
  },
  t2: {
    fontSize: "7vh",
    color: "white"
  },

  q1A: {
    height: "10vh",
    width: "5vh",
    backgroundColor: "black",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: "2vh"
  },

  items: {
    margin: "5vh",
    backgroundColor: "white",
    padding: "5vh",
    color: "black",
    borderRadius: "2vh",
    fontSize: "5vh",
    height: "fit-content",
    width: "fit-content",
    overflow: "hidden"
  },

  perct: {},

  rmPP: {
    marginLeft: "7vh",
    margin: "5vh",
    borderBottom: ".5vh solid black",
    color: "black",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "2vh",
    boxShadow: "0vh 2vh 2vh black",
    backgroundColor: "white",
    padding: "1vh"
  }
};

export default App;