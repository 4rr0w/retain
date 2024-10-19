import { ElectricBolt, ElectricBoltOutlined, Image, Photo, PhotoOutlined, Settings, Thunderstorm } from "@mui/icons-material";
import React from "react";

const Sidebar = () => {

    return (
        <div style={{
            backgroundColor: "#000",
            height: "100vh",
            width: "60px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "40px 10px",
            boxSizing: "border-box",
        }}>
            <img src="/assets/retainiq_logo.jpeg" width="40px" />

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                flexGrow: 1, 
                marginTop: "30px",
                marginBottom: "20px",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "25px",
                }}>
                    <ElectricBoltOutlined sx={{ color: "white" }} fontSize="medium" />
                    <PhotoOutlined sx={{ color: "white" }} fontSize="medium"  />
                </div>
                <Settings sx={{ color: "white", fontSize: 25 }} fontSize="large" />
            </div>
        </div>
    );
};

export default Sidebar;
