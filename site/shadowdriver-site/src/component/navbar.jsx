import { useEffect, useState } from "react";
import TemporaryCountdown from "./temp/countdown";

export default function NavBar() {
  const [release, setRelease] = useState(false)
  function handleRelease() {
    const today = new Date();
    const month = today.getMonth();
    const date = today.getDate();
    const year = today.getFullYear();
    const fulldate = `${month}/${date}/${year}`
    if (fulldate === '12/10/2024') {
      setRelease(true)
    }
    setRelease(false)
  }

  useEffect(() => {
    handleRelease();
  }, [])

  return (
    <>
      {
        !release ? (
          <>
            <TemporaryCountdown />

          </>
        ) : (
          <>
            <div>
              <nav
                className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow"
                style={{
                  background: "linear-gradient(90deg, #1c1f24, #343a40)",
                  padding: "10px 20px",
                }}
              >
                <div className="container">
                  <a
                    href="/"
                    className="navbar-brand d-flex align-items-center text-primary fw-bold"
                    style={{
                      fontSize: "1.5rem",
                      letterSpacing: "0.5px",
                      textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    ShadowdriverJS <span className="text-danger ms-2 fw-bold">v2.0.1</span>
                  </a>
                </div>
              </nav>
            </div>
          </>
        )
      }
    </>

  );
}