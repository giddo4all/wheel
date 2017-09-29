import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "background": "url(https://www.toptal.com/designers/subtlepatterns/patterns/doodles.png)",
        "fontFamily": "Verdana",
        "backgroundAttachment": "fixed",
        "backgroundPosition": "center"
    },
    "<!--                blink": {
        "WebkitAnimation": "blink .75s linear infinite",
        "MozAnimation": "blink .75s linear infinite",
        "MsAnimation": "blink .75s linear infinite",
        "OAnimation": "blink .75s linear infinite",
        "animation": "blink .75s linear infinite"
    },
    "-->        body": {
        "marginTop": 50,
        "marginRight": 50,
        "marginBottom": 50,
        "marginLeft": 50,
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50
    },
    "spinner": {
        "position": "relative",
        "top": 5,
        "left": 5,
        "maxWidth": 500,
        "width": 500,
        "height": 500,
        "zIndex": 0
    },
    "pointer": {
        "position": "absolute",
        "top": 160,
        "right": 2,
        "backgroundColor": "red",
        "zIndex": -2,
        "font": "50px arial, sans-serif",
        "textAlign": "left"
    },
    "piechart": {
        "display": "block",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "position": "relative",
        "maxWidth": 400,
        "zIndex": -1
    },
    "yelpform": {
        "display": "block",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "position": "absolute",
        "top": 80,
        "left": 60,
        "align": "center",
        "border": "1px solid gray",
        "borderRadius": 10,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "background": "rgba(27, 26, 26, 0.22)"
    },
    "mannualLoad": {
        "display": "block",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "position": "absolute",
        "top": 80,
        "right": 50,
        "align": "center",
        "border": "1px solid gray",
        "borderRadius": 10,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "background": "rgba(27, 26, 26, 0.22)"
    },
    "choice": {
        "backgroundColor": "rgba(128, 128, 128, 0.61) !important",
        "font": "50px arial, sans-serif",
        "textAlign": "center",
        "marginTop": 20
    },
    "spinit": {
        "backgroundColor": "rgba(128, 128, 128, 0.61) !important",
        "font": "50px arial, sans-serif",
        "textAlign": "center",
        "marginTop": 20
    },
    "demo": {
        "background": "#ececec",
        "marginTop": 40,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "lineHeight": 10,
        "visibility": "hidden"
    },
    "debug": {
        "display": "block",
        "position": "absolute",
        "top": 1,
        "left": 1,
        "background": "rgba(128, 128, 128, 0.27)",
        "color": "white",
        "border": "1px solid gray",
        "borderRadius": 10,
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontSize": 21,
        "fontFamily": "Verdana"
    },
    "input": {
        "width": "90%"
    },
    "title": {
        "position": "relative",
        "textAlign": "center",
        "top": 0,
        "marginTop": -116
    },
    "svg": {
        "display": "block",
        "font": "12.5em 'Montserrat'",
        "fontWeight": "bold",
        "width": 960,
        "height": 130,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "text-copy": {
        "fill": "none",
        "stroke": "white",
        "strokeDasharray": "6% 29%",
        "strokeWidth": 5,
        "strokeDashoffset": "0%",
        "animation": "stroke-offset 5.5s infinite linear"
    },
    "text-copy:nth-child(1)": {
        "stroke": "black",
        "animationDelay": -1
    },
    "text-copy:nth-child(2)": {
        "stroke": "white",
        "animationDelay": "-2s"
    },
    "text-copy:nth-child(3)": {
        "stroke": "red",
        "animationDelay": "-3s"
    },
    "text-copy:nth-child(4)": {
        "stroke": "#a00505",
        "animationDelay": "-4s"
    },
    "text-copy:nth-child(5)": {
        "stroke": "red",
        "animationDelay": "-5s"
    }
});