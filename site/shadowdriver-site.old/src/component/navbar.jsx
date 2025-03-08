import { useEffect, useState } from "react"
import TemporaryCountdown from "./temp/countdown"
import { EllipsisVertical, Bot } from "lucide-react"

export default function NavBar() {
  const default_shadowdriver_version = "v2.0.1"
  const [selectedVersion, setSelectedVersion] = useState(null)
  const shadowdriverVersion = ["v2.0.1", "v2.0.2"]
  const [release, setRelease] = useState(true) // intentionally set to true on 1/26/2025 to bypass the countdown timer since the it is not needed
  const [version, setVersion] = useState(
    ((key) => {
      key ? key.replace("/", "") : ""
    })(localStorage.getItem("apiVersion"))
  )
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  function handleRelease() {
    const today = new Date()
    const month = today.getMonth()
    const date = today.getDate()
    const year = today.getFullYear()
    const fulldate = `${month}/${date}/${year}`

    if (fulldate === "12/10/2024") {
      setRelease(true)
    }
    setRelease(true)
  }

  useEffect(() => {
    localStorage.setItem("apiVersion", localStorage.getItem("apiVersion"))
  }, [localStorage.getItem("apiVersion") !== null])

  // Set the API version
  function handleVersion(event) {
    const version_local = event.target.getAttribute("data-version")
    setVersion(version_local)
    localStorage.setItem("apiVersion", `/${version_local}`)
  }

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

  return (
    <>
      {release === false ? (
        <TemporaryCountdown />
      ) : (
        <nav
          className="navbar navbar-expand-lg navbar-dark sticky-top"
          style={{
            background: "linear-gradient(90deg, #1c1f24, #343a40)",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          <div className="container">
            {/* Brand and Logo Section */}
            <div className="d-flex align-items-center">
              {/* <i
                className="fa-solid fa-robot text-warning me-2"
                style={{ fontSize: "2rem" }}
              ></i> */}
              <Bot
                size={40}
                color="#f6fa00"
                strokeWidth={3}
                absoluteStrokeWidth
              />
              <p>&nbsp;</p>
              <a
                href="/"
                className="navbar-brand mb-0 text-primary fw-bold"
                style={{
                  fontSize: "1.3rem",
                  letterSpacing: "1.9px",
                  textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                  textDecoration: "none",
                }}
              >
                shadowdriverJS
              </a>
            </div>

            {/* Ellipsis Menu Button */}
            <button
              className="navbar-toggler border-0 p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded={!isNavCollapsed}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
              style={{
                boxShadow: "none",
                background: "transparent",
              }}
            >
              <EllipsisVertical
                className="text-white"
                size={24}
                style={{
                  transition: "opacity 0.2s ease-in-out",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              />
            </button>

            {/* Collapsible Content */}
            <div
              className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
              id="navbarContent"
            >
              <ul className="navbar-nav ms-auto align-items-center gap-3">
                {/* Version Dropdown */}
                <li className="nav-item dropdown">
                  <button
                    className="btn btn-link nav-link dropdown-toggle p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ textDecoration: "none" }}
                  >
                    <strong className="text-danger">
                      {/* {localStorage.getItem('selectedVersion') ? localStorage.getItem('selectedVersion') : default_shadowdriver_version} */}
                      {localStorage.getItem("apiVersion")
                        ? localStorage.getItem("apiVersion")
                        : default_shadowdriver_version}
                      {/* {version ? version : default_shadowdriver_version} */}
                    </strong>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    {shadowdriverVersion.map((item, index) => (
                      <li key={index}>
                        <button
                          className="dropdown-item"
                          data-version={item}
                          onClick={handleVersion}
                        >
                          {item}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* API Docs Link */}
                <li className="nav-item">
                  <a
                    href={localStorage.getItem("apiVersion") + "/api"}
                    className="nav-link text-warning"
                    style={{ fontSize: "1.0rem" }}
                  >
                    API
                  </a>
                </li>

                {/* GitHub Link */}
                <li className="nav-item">
                  <a
                    href="https://github.com/noodlescripter/shadowdriverJS/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link text-white transition-all"
                    style={{
                      fontSize: "1.8rem",
                      transition: "opacity 0.2s ease-in-out",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  )
}
