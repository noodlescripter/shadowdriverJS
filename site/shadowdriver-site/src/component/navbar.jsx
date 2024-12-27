import { useEffect, useState } from "react"
import TemporaryCountdown from "./temp/countdown"

export default function NavBar() {
  const default_shadowdriver_version = "v1"
  const shadowdriverVersion = ["v1"];
  const [release, setRelease] = useState(false);
  const [version, setVersion] = useState(localStorage.getItem('apiVersion').replace("/", ""));

  function handleRelease() {
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();
    const year = today.getFullYear();
    const fulldate = `${month}/${date}/${year}`;

    if (fulldate === "12/10/2024") {
      setRelease(true);
    }
    setRelease(true);
  }

  useEffect(() => {
    sessionStorage.setItem("apiVersion", localStorage.getItem('apiVersion'));
  }, []);

  function handleVersion(event) {
    const version_local = event.target.getAttribute("data-version");
    setVersion(version_local);
    localStorage.setItem("apiVersion", `/${version_local}`);
  }
  
  useEffect(() => {
    handleRelease();
    setVersion(default_shadowdriver_version)
    localStorage.setItem("apiVersion", `/${default_shadowdriver_version}`);
  }, []);

  return (
    <>
      {release === false ? (
        <TemporaryCountdown />
      ) : (
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow"
          style={{
            background: "linear-gradient(90deg, #1c1f24, #343a40)",
            padding: "10px 20px",
          }}
        >
          <div className="container">
            {/* Left-aligned Brand */}
            <p
              href="/"
              className="navbar-brand d-flex align-items-center text-primary fw-bold"
              style={{
                fontSize: "1.5rem",
                letterSpacing: "0.5px",
                textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
              }}
            >
              <i
                className="fa-solid fa-robot text-warning"
                style={{ fontSize: "2.0rem" }}
              ></i>
              &nbsp; <a href="/" style={{
                textDecoration: "none",
              }}>shadowdriverJS</a>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle bg-transparent bg-black"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    border: "none",
                  }}
                >
                  <strong className="text-danger h5">{version}</strong>
                </button>
                <ul className="dropdown-menu">
                  {shadowdriverVersion.map((item, index) => (
                    <li
                      key={index}
                      className="dropdown-item"
                      data-version={item}
                      onClick={handleVersion}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Add the API Nav Item */}
              <a
                href={version + "/api"}
                className="nav-link text-warning ms-3"
                style={{ fontSize: "1.1rem" }}
              >
                API Docs
              </a>
            </p>
            {/* Right-aligned GitHub Icon */}
            <a
              href="https://github.com/noodlescripter/shadowdriverJS/"
              target="_blank"
              rel="noopener noreferrer"
              className="ms-auto text-white nav-link link-underline-opacity-0"
              style={{ fontSize: "2.0rem" }}
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </nav>
      )}
    </>
  );
}