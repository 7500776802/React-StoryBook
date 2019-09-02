import React from "react";
import { storiesOf } from "@storybook/react";
// import App from "./App";
import Grid from   "./components/zool/grid"
import Activity from "./components/zool/activity";
import Typography from "./components/zool/typography";
import Forms from "./components/zool/forms";
import  Alerts  from "./components/zool/Alerts";
// import Header from "../src/components/Navbar/Header"
import ButtonGroups from "../src/components/zool/buttonGroups"
storiesOf("Guidelines", module)
.add("Color", () => <Activity />)
.add("Grid", () => (
   < Grid/> 
))
.add("Typography",()=> (
  <Typography /> 
 ))
 .add("Forms",()=> (
   <Forms /> 
  ))
.add("ButtonGroups",()=> (
  <ButtonGroups/>

))
.add("Alerts",()=> (
  <Alerts/>
))
