import { Card } from "@mui/material";
import React from "react";

const CustomCard = ({ content, height, width }) => {
  return (
    <Card
      variant="outlined"
      style={{
        outline: "1px dashed silver",
        background: "white",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: height ?? "auto",
        width: width ?? "auto",
        boxSizing: "border-box",
        margin: "5px",
      }}
    >
      {content}
    </Card>
  );
};

export default CustomCard;
