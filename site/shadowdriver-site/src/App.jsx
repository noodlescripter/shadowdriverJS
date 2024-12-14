import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import NavBar from './component/navbar'
import FooterComponent from './component/footer'
import MainSection from './component/other/mainSection'
import RowComponent from './component/other/row'
import ColumnComponent from './component/other/column'
import PanelComponent from './component/other/api/panels';
import NoMobileSupportedComponent from './component/mobile/not-supported/mobile_not_supported';

function App() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    document.body.classList.add('bg-dark', 'text-light');
    return () => {
      document.body.classList.remove('bg-dark', 'text-light');
    };
  }, []);
  useEffect(()=>{
    if(window.innerWidth < 768){
      setIsMobile(true)
    }
  }, [])

  const colCompInfo = [
    {
      title: "Fast and Reliable",
      text: "Blazing-fast execution with powerful capabilities to speed up your testing."
    },
    {
      title: "Extensive API",
      text: "Seamlessly integrates with WebDriver and expands functionality."
    },
    {
      title: "Community Support",
      text: "Backed by an active community for continuous improvements and support which does not exist yet!"
    },
  ]

  const whatOtheDevSays = [
    {
      text: "ShadowdriverJS is hands-down the best testing tool I've used. It’s fast, intuitive, and just works!",
      name: "- sooo322, Developer"
    },
    {
      text: "With ShadowdriverJS, we reduced our testing time by 50%. A game-changer!",
      name: "- Alex_R, Software Engineer"
    },
    {
      text: "The community support is fantastic, and the API is extremely flexible.",
      name: "- Rahul69, Software Dev Engineer in Test"
    },
  ]


  return (
    <div>
      <NavBar></NavBar>
      {isMobile ? (
        <>
          <NoMobileSupportedComponent></NoMobileSupportedComponent>
        </>
      ): null}
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <MainSection></MainSection>
                <RowComponent>
                  <h2 class="text-center text-success mb-4">Why Choose ShadowdriverJS?</h2>
                  {colCompInfo.map((item, index) => (
                    <ColumnComponent key={index} card_title={item.title} card_text={item.text}></ColumnComponent>
                  ))}
                </RowComponent>
                <RowComponent>
                  <h2 className='text-center text-success mb-4'>What user say</h2>
                  {whatOtheDevSays.map((item, index) => (
                    <ColumnComponent key={index} card_title={item.text} card_text={item.name}></ColumnComponent>
                  ))}
                </RowComponent>
                <div
                  id="get-started"
                  className="text-center py-5 mt-4"
                  style={{
                    background: "linear-gradient(to bottom, #1f1f1f, #343a40)",
                    color: "#fff",
                  }}
                >
                  <div className="container">
                    {/* Heading */}
                    <h2
                      className="text-white mb-4 fw-bold"
                      style={{
                        fontSize: "2.5rem",
                        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Ready to Get Started?
                    </h2>

                    {/* Subtext */}
                    <p
                      className="text-white-50 mb-4"
                      style={{
                        fontSize: "1.2rem",
                        lineHeight: "1.6",
                        maxWidth: "600px",
                        margin: "0 auto",
                      }}
                    >
                      Join thousands of Developers & QA using ShadowdriverJS to supercharge their testing workflows.
                    </p>

                    {/* Call-to-Action Button */}
                    <a
                        href='/api'
                        className="btn btn-dark btn-lg"
                        style={{
                          padding: "12px 30px",
                          fontSize: "1.2rem",
                          borderRadius: "8px",
                          background: "#212529",
                          color: "#fff",
                          boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
                          transition: "all 0.3s ease-in-out",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "#343a40";
                          e.target.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.5)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "#212529";
                          e.target.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
                        }}
                      >
                        Installation & Docs
                      </a>

                  </div>
                </div>
              </>
            }
          ></Route>
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route path='/api'
            element={
              <>
                <PanelComponent></PanelComponent>
              </>
            }
          ></Route>
        </Routes>
      </Router>
      <FooterComponent></FooterComponent>
    </div>
  );
}
export default App