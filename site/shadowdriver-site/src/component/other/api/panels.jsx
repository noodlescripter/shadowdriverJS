import { useState } from "react";
import InstallShaowdriverJS from "./installation/install";
import ConfigCode from "./config/config";
import BrowserAPI from "./browser/browser";
import LocatorsAPI from "./locators/locators";
import ElementAPI from "./element/element";
import MochaFramework from "./framework/mocha";

export default function PanelComponent({ children }) {
  const [selectItem, setSelectedItem] = useState("Installation");

  const availableStuff = [
    {
      link: "Installation",
    },
    {
      link: "shadowdriverJS Config",
    },
    {
      link: "Browser API",
    },
    {
      link: "Locators"
    },
    {
      link: "Element API"
    },
    {
      link: "Framework"
    },
  ];

  function handleActive(item) {
    setSelectedItem(item);
  }

  return (
    <div className="d-flex" style={{ height: "100vh", background: "linear-gradient(to right, #232526, #414345)" }}>
      {/* Sidebar */}
      <aside
        className="text-light p-4 shadow-lg"
        style={{
          width: "260px",
          height: "100%",
          background: "#1c1f24",
          borderRight: "1px solid #444",
          position: "sticky",
          top: 0,
        }}
      >
        <h5 className="text-success mb-4 fw-bold">API References</h5>
        <nav className="nav flex-column">
          <div className="list-group">
            {availableStuff.map((item, index) => (
              <button
                key={index}
                className={`btn border-0 text-start list-group-item list-group-item-action fw-bold ${
                  selectItem === item.link
                    ? "bg-primary text-light shadow"
                    : "bg-transparent text-secondary"
                }`}
                style={{
                  padding: "12px 18px",
                  marginBottom: "8px",
                  borderRadius: "12px",
                  transition: "all 0.3s ease-in-out",
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
          overflowY: "auto",
          color: "#e4e4e4",
          background: "linear-gradient(to bottom, #2c2f33, #232526)",
          borderTopLeftRadius: "12px",
          borderBottomLeftRadius: "12px",
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        {selectItem === "Installation" && <InstallShaowdriverJS />}
        {selectItem === "shadowdriverJS Config" && <ConfigCode />}
        {selectItem === "Browser API" && <BrowserAPI />}
        {selectItem === "Locators" && <LocatorsAPI />}
        {selectItem === "Element API" && <ElementAPI />}
        {selectItem === "Framework" && <MochaFramework />}
      </main>
    </div>
  );
}