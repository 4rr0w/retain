"use client";

import React from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Table from "./components/table";
import CustomCard from "./components/customcard";
import FilterCard from "./components/filtercard";
import ImageCard from "./components/imagecard";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        height: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Sidebar />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: "15px",
          overflowY: "auto",
          overflowX: "hidden",
          height: "100vh",
        }}
      >
        <Header />
        <div style={{ flex: 1, overflowY: "auto", width: "100%" }}>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
