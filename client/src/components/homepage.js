import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import Gita from "./gita";
import handledarkmode from "./handledarkmode";
import { FaXTwitter } from "react-icons/fa6";

const cardData = [
  {
    profileImage:
      "https://res.cloudinary.com/dkyrtfk1u/image/upload/v1690369698/i14t3seuzumapysauajm.jpg",
    name: "Mayank Yadav",
    role: "MERN Stack Developer",
    linkedIn: "https://www.linkedin.com/in/mayankyadav17/",
    instagram: "https://instagram.com/___mayank17___",
    twitter: "https://twitter.com/mayankyadav_17",
  },
  {
    profileImage:
      "https://res.cloudinary.com/dkyrtfk1u/image/upload/v1692452732/by2nz7yrqcfmnq2nlnu6.jpg",
    name: "Divya Kaurani",
    role: "Full-Stack Developer",
    linkedIn: "https://www.linkedin.com/in/divyakaurani/",
    instagram: "https://instagram.com/divya_kaurani20/",
    twitter: "https://twitter.com/d_kaurani61801",
  },
  {
    profileImage:
      "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697349373/sli9ffed1vdqegf1srip.jpg",
    name: "Darshit Sojitra",
    role: "Front-End Developer",
    linkedIn: "https://www.linkedin.com/in/darshit-sojitra/",
    instagram: "https://www.instagram.com/darshit_sojitraa/",
    twitter:
      "https://twitter.com/DarshitSojitraa?t=B7p7nOVhyLYfc-rmTeWx_g&s=09",
  },
];
const Home = () => {
  

  useEffect(() => {
    handledarkmode();
  }, []);
  useEffect(() => {
    const UP = "up";
    const DOWN = "down";

    const app = {
      sections: [],
      isAnimating: false,
      direction: null,
      viewportHeight: window.innerHeight,

      init() {
        this.sections.forEach((section) => {
          section.addEventListener("intersect", this.onIntersect);
        });

        document.addEventListener("wheel", this.onWheel);
        window.addEventListener("resize", this.onResize);
      },

      onIntersect(event) {
        if (
          !this.isAnimating &&
          event.isIntersecting &&
          event.target.offsetTop < this.viewportHeight
        ) {
          this.isAnimating = true;
          this.scrollTo(event.target);
        }
      },

      onWheel(event) {
        this.direction = event.deltaY < 0 ? UP : DOWN;

        if (this.isAnimating) {
          event.preventDefault();
        }
      },

      onResize() {
        this.viewportHeight = window.innerHeight;
      },

      scrollTo(target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      },
    };

    app.init();
  }, []);
  // Read the active tab index from localStorage on page load

  return (
    <div>
      <section class="home-grid">
        <section>
          <h1 class="heading">quick options</h1>

          <div class="box-container">
            <div class="notes-box">
              <h3 class="title-xclusive">Xclusive Notes🔥</h3>
              <p class="tutor">
                <i>
                  <b>
                    "Discover our Handwritten College Notes designed to help you
                    excel in your studies and ace your exams."
                  </b>
                </i>
              </p>

              <Link to="/courses">
                {" "}
                <button class="button-56 glowing" role="button">
                  X~Notes
                </button>{" "}
              </Link>
            </div>
            <div class="playground-box">
              <h3 class="title-xclusive">PlayGround🎮</h3>
              <p class="tutor">
                <i>
                  <b>"Where Tech Meets Play"</b>
                </i>
              </p>
              {/* <a href="teachers.html" class="inline-btn">get started</a> */}
              <Link to="/watchvideo/typefastio">
                {" "}
                <button class="button-56" role="button">
                  Key-Master🕹️
                </button>{" "}
                <br />{" "}
              </Link>
              <hr className="pacman" />
              <br />
              <Link to="/watchvideo/ztype">
                {" "}
                <button class="button-56" role="button">
                  Type-Blaster☄️
                </button>{" "}
              </Link>
            </div>
          </div>
        </section>

        <section>
          <div class="box-container">
            <div class="cheatsheet-box">
              <h3 class="title-xclusive">CheatSheets📋🎯</h3>
              <p class="likes">
                {" "}
                <i>
                  <b>"Unlocking Excellence: Your Rapid Technical Guide" </b>
                </i>
              </p>
              <div class="flex">
                <a href="/watchvideo/cs_html" target="_blank">
                  <i class="fab fa-html5"></i>
                  {/* <span>HTML</span> */}
                </a>
                <a href="/watchvideo/cs_css" target="_blank">
                  <i class="fab fa-css3"></i>
                  {/* <span>CSS</span> */}
                </a>
                <a href="/watchvideo/cs_js" target="_blank">
                  <i class="fab fa-js"></i>
                  {/* <span>JavaScript</span> */}
                </a>
                <a href="/watchvideo/cs_bootstrap" target="_blank">
                  <i class="fab fa-bootstrap"></i>
                  {/* <span>BootStrap</span> */}
                </a>
                <a href="/watchvideo/cs_gpt" target="_blank">
                  <i class="fab fa-react"></i>
                  {/* <span>React</span> */}
                </a>
                {/* <a href="/watchvideo/cs_gpt" target="_blank">
                <img src={chatgpt} alt=""></img> */}
                {/* <span>React</span> */}
                {/* </a> */}
                <a href="/watchvideo/cs_vscode" target="_blank">
                  <i class="fas fa-file-code"></i>
                  {/* <span>VS-Code</span> */}
                </a>

                <a href="/watchvideo/cs_python" target="_blank">
                  <i class="fa-brands fa-python"></i>
                  {/* <span>Windows</span> */}
                </a>
                <a href="/watchvideo/cs_web" target="_blank">
                  <i class="fa-solid fa-globe"></i>
                  {/* <span>Windows</span> */}
                </a>
                <a href="/watchvideo/cs_database" target="_blank">
                  <i class="fa-solid fa-database"></i>
                  {/* <span>Chrome</span> */}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="box-container">
            <div class="roadmap-box">
              <h3 class="title-xclusive">RoadMaps🚀📈</h3>
              <p class="likes">
                {" "}
                <i>
                  <b>"Guiding Your Journey Along the Technical Pathway"</b>{" "}
                </i>
              </p>
              <div class="flex">
                <Link to="/roadmap_frontend">
                  <div className="line"></div>
                  <i class="fab fa-html5"></i>
                  <i class="fab fa-css3"></i>
                  <i class="fab fa-js"></i>
                  <i class="fas fa-code"></i>
                  <div className="line"></div>
                  <span className="roadmap">Frontend Developer</span>
                </Link>
                <Link to="/roadmap_mern">
                  <div className="line"></div>
                  <i class="fa-solid fa-leaf"></i>
                  <i class="fa-regular fa-circle">
                    <div className="express">EX</div>
                  </i>
                  <i class="fab fa-react"></i>
                  <i class="fa-brands fa-node"></i>
                  <div className="line"></div>
                  <span className="roadmap">Mern Developer</span>
                </Link>
                <Link to="/roadmap_backend">
                  <div className="line"></div>
                  <i class="fa-brands fa-python"></i>
                  <i class="fa-brands fa-java"></i>
                  <i class="fa-brands fa-node"></i>
                  <i class="fas fa-gem"></i>
                  <div className="line"></div>
                  <span className="roadmap">Backend Developer</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div class="container">
       
        <div class="footer-main">
          {cardData.map((ele, index) => {
            return (
              <div class="profile-card" key={index}>
                <div class="footer-img">
                  <img src={ele.profileImage} />
                </div>
                <div class="caption">
                  <h3>{ele.name}</h3>
                  <p>{ele.role}</p>
                  <div class="social-links flex  items-center justify-center content-center">
                    <a href={ele.linkedIn} target="_blank">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href={ele.instagram} target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                    <a href={ele.twitter} target="_blank" rel="noreferrer">
                      <FaXTwitter />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
