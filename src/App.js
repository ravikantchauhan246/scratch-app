import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function App() {
  return (
    <div
      style={{ backgroundColor: "#121212", minHeight: "100vh" }}
      className="font-sans text-white"
    >
      <AppBar position="static" sx={{ backgroundColor: "#111827" }}> {/* gray-700 */}
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="https://res.cloudinary.com/dwthsc5jw/image/upload/t_done/i9hkdgedwtxlitsynfel.jpg" alt="Scratch Logo" />
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="h-screen overflow-hidden flex flex-row pt-2">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-gray-800 border-t border-r border-gray-700 rounded-tr-xl mr-2">
          <Sidebar /> <MidArea />
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-gray-800 border-t border-l border-gray-700 rounded-tl-xl ml-2">
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}
