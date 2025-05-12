import React, { useState } from "react"
import InstallShaowdriverJS from "./installation/install"
import ConfigCode from "./config/config"
import BrowserAPI from "./browser/browser"
import LocatorsAPI from "./locators/locators"
import ElementAPI from "./element/element"
import MochaFramework from "./framework/mocha"
import ShadowReporter from "./reporters/shadow-reporters"
import ShadowdriverJSLogs from "./shadowdriver-logs/shadowdriverjs_logs"
import ShadowdriverTestDebug from "./test-debug/test_debug"
import WaitUntil from "./waitUntil/waitUntil"

export default function PanelComponent_V1() {
  const [selectedItem, setSelectedItem] = useState("Installation")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const availableStuff = [
    { link: "Installation" },
    { link: "shadowdriverJS Config" },
    { link: "Browser API" },
    { link: "Locators" },
    { link: "Element API" },
    { link: "waitUntil" },
    { link: "Framework" },
    { link: "Reporter (HTML)" },
    { link: "Logging Options" },
    { link: "Debug Test" },
  ]

  const handleItemClick = (link) => {
    setSelectedItem(link)
    if (window.innerWidth < 992) {
      setIsSidebarOpen(false)
    }
  }

  const panelSwitcher = (panel) => {
    switch (panel) {
      case "Installation":
        return <InstallShaowdriverJS />
      case "shadowdriverJS Config":
        return <ConfigCode />
      case "Browser API":
        return <BrowserAPI />
      case "Locators":
        return <LocatorsAPI />
      case "Element API":
        return <ElementAPI />
      case "Framework":
        return <MochaFramework />
      case "Reporter (HTML)":
        return <ShadowReporter />
      case "Logging Options":
        return <ShadowdriverJSLogs />
      case "Debug Test":
        return <ShadowdriverTestDebug />
      case "waitUntil":
        return <WaitUntil />
      default:
        return <InstallShaowdriverJS />
    }
  }

  return (
    <div className="container-fluid p-0" style={{ backgroundColor: "#1a1a1a" }}>
      {/* Mobile Menu Toggle */}
      <div
        className="d-lg-none p-3 border-bottom"
        style={{ backgroundColor: "#242424", borderColor: "#333 !important" }}
      >
        <button
          className="btn d-flex align-items-center gap-2 w-100 text-white-50"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{
            textAlign: "left",
            border: "none",
          }}
        >
          <i className="fas fa-bars"></i>
          <span>Docs</span>
        </button>
      </div>

      <div className="row g-0">
        {/* Sidebar */}
        <aside
          className={`col-lg-3 col-xl-2 border-end ${
            isSidebarOpen ? "d-block" : "d-none"
          } d-lg-block`}
          style={{
            backgroundColor: "#242424",
            borderColor: "#333 !important",
            position: "sticky",
            top: "64px",
            height: "calc(100vh - 64px)",
            overflowY: "auto",
          }}
        >
          <div className="py-3">
            <div className="px-3 mb-3">
              <h6 className="text-uppercase text-white fw-bold small">
                API Documentation
              </h6>
            </div>
            <div className="nav flex-column">
              {availableStuff.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleItemClick(item.link)}
                  className={`nav-link border-0 bg-transparent text-start px-3 py-2 ${
                    selectedItem === item.link
                      ? "text-primary fw-medium"
                      : "text-white-50"
                  }`}
                  style={{
                    fontSize: "0.95rem",
                    transition: "all 0.2s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#2d2d2d")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  {item.link}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className="col-lg-9 col-xl-10"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          <div className="container-fluid p-4 p-lg-5">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                {/* Title Section */}
                <div className="mb-5">
                  <h1 className="display-6 fw-bold mb-3 text-white">
                    {selectedItem}
                  </h1>
                  <div className="text-white-50">
                    Welcome to the {selectedItem} documentation section. Here
                    you'll find detailed information about using this feature in
                    shadowdriverJS.
                  </div>
                </div>

                {/* Content Section */}
                <div className="content-section text-white-50">
                  {panelSwitcher(selectedItem)}
                </div>

                {/* Navigation Footer */}
                <footer
                  className="border-top mt-5 pt-4"
                  style={{ borderColor: "#333 !important" }}
                >
                  <div className="row">
                    {availableStuff.findIndex(
                      (item) => item.link === selectedItem
                    ) > 0 && (
                      <div className="col-6">
                        <button
                          className="btn btn-link text-decoration-none p-0"
                          onClick={() => {
                            const currentIndex = availableStuff.findIndex(
                              (item) => item.link === selectedItem
                            )
                            handleItemClick(
                              availableStuff[currentIndex - 1].link
                            )
                          }}
                        >
                          <small className="text-muted d-block">Previous</small>
                          <span className="text-primary">
                            <i className="fas fa-arrow-left me-2"></i>
                            {
                              availableStuff[
                                availableStuff.findIndex(
                                  (item) => item.link === selectedItem
                                ) - 1
                              ].link
                            }
                          </span>
                        </button>
                      </div>
                    )}
                    {availableStuff.findIndex(
                      (item) => item.link === selectedItem
                    ) <
                      availableStuff.length - 1 && (
                      <div className="col-6 text-end">
                        <button
                          className="btn btn-link text-decoration-none p-0"
                          onClick={() => {
                            const currentIndex = availableStuff.findIndex(
                              (item) => item.link === selectedItem
                            )
                            handleItemClick(
                              availableStuff[currentIndex + 1].link
                            )
                          }}
                        >
                          <small className="text-muted d-block">Next</small>
                          <span className="text-primary">
                            {
                              availableStuff[
                                availableStuff.findIndex(
                                  (item) => item.link === selectedItem
                                ) + 1
                              ].link
                            }
                            <i className="fas fa-arrow-right ms-2"></i>
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
