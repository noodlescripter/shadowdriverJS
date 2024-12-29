import { useState } from "react";
import InstallShaowdriverJS from "./installation/install";
import ConfigCode from "./config/config";
import BrowserAPI from "./browser/browser";
import LocatorsAPI from "./locators/locators";
import ElementAPI from "./element/element";
import MochaFramework from "./framework/mocha";
import ShadowReporter from "./reporters/shadow-reporters";
import ShadowdriverJSLogs from "./shadowdriver-logs/shadowdriverjs_logs";

export default function PanelComponent({ children }) {
  const [selectItem, setSelectedItem] = useState("Installation");

  const availableStuff = [
    { link: "Installation" },
    { link: "shadowdriverJS Config" },
    { link: "Browser API" },
    { link: "Locators" },
    { link: "Element API" },
    { link: "Framework" },
    { link: "Reporter (HTML)" },
    { link: "Logging Options" },
  ];

  function handleActive(item) {
    setSelectedItem(item);
  }

  return (
    <div
      className="d-flex"
      style={{
        height: "100vh", // Full viewport height
        background: "linear-gradient(135deg, #1c1f24, #2d3138)", // Consistent solid background color
      }}
    >
      {/* Sidebar */}
      <aside
        className="text-light shadow-lg"
        style={{
          width: "370px", // Sidebar width
          background: "linear-gradient(135deg, #1c1f24, #2d3138)", // Gradient background
          borderRight: "1px solid rgba(255, 255, 255, 0.1)", // Subtle border
          position: "fixed", // Fixed positioning to float
          left: "20px", // Distance from the left edge
          top: "calc(50% - 470px)", // Vertically centered between nav and footer (half of height = 450px)
          height: "900px", // Updated height to make it larger
          padding: "20px", // Internal spacing
          borderRadius: "12px", // Rounded corners for modern design
          boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.5)", // Floating shadow effect
          overflowY: "auto", // Scrollable if content exceeds height
          zIndex: 1000, // Ensures it floats above other elements
        }}
      >
        <h5
          className="text-success mb-4 fw-bold"
          style={{
            fontSize: "1.25rem",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.8)",
            textAlign: "center",
          }}
        >
          API References
        </h5>
        <nav className="nav flex-column">
          <div className="list-group">
            {availableStuff.map((item, index) => (
              <button
                key={index}
                className={`btn border-0 text-start list-group-item list-group-item-action fw-bold ${
                  selectItem === item.link
                    ? "bg-gradient text-light shadow"
                    : "bg-transparent text-secondary"
                }`}
                style={{
                  padding: "14px 18px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease, background 0.3s ease",
                  background:
                    selectItem === item.link
                      ? "linear-gradient(135deg, #007bff, #0056b3)"
                      : "transparent",
                  color: selectItem === item.link ? "#fff" : "#a8a8a8",
                  boxShadow:
                    selectItem === item.link
                      ? "0 4px 8px rgba(0, 123, 255, 0.3)"
                      : "none",
                }}
                onClick={() => handleActive(item.link)}
              >
                {item.link}
              </button>
            ))}
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main
        className="flex-fill p-4"
        style={{
          marginLeft: "400px", // Space for the sidebar
          color: "#e4e4e4",
          backgroundColor: "linear-gradient(135deg, #1c1f24, #2d3138)", // Matches background color
          overflowY: "auto", // Main content scrolls if necessary
        }}
      >
        {selectItem === "Installation" && <InstallShaowdriverJS />}
        {selectItem === "shadowdriverJS Config" && <ConfigCode />}
        {selectItem === "Browser API" && <BrowserAPI />}
        {selectItem === "Locators" && <LocatorsAPI />}
        {selectItem === "Element API" && <ElementAPI />}
        {selectItem === "Framework" && <MochaFramework />}
        {selectItem === "Reporter (HTML)" && <ShadowReporter />}
        {selectItem === "Logging Options" && <ShadowdriverJSLogs />}
      </main>
    </div>
  );
}