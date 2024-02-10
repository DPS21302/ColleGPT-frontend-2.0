/* eslint-disable no-loop-func */
import React, { useEffect, useState } from "react";
import profilepic from "./images/60111.png";
import handledarkmode from "./handledarkmode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Darshit from "./Darshit";
import Divya from "./Divya";
import Mayank from "./Mayank";

const data = [
  {
    image:
      "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697348820/qkswpmr6tnzuiqnfqxtu.png",
    reviewer: "Gaurav",
    content: `The X-notes section comes as a saviour for those deep learners while the cheat-sheets could help in last second revision. The games for enhancing typing and focus, the courses for students to study in a subjective manner, all in all this is the perfect spot for "everything of TECH". The overall layout and color scheme of the website looks quite catchy and stylish. More power to the developers of this amazing platform.`,
  },
  {
    image:
      "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697348767/yqvnwr4ae1wd2fjb8xnx.jpg",
    reviewer: "Anusha Shripati",
    content: ` ColleGPT is an remarkable app for college learning and
    exploration. It offers a seamless platform for accessing study
    materials and provides regular updates that have proven to be
    invaluable in preparing for my college exams. The exclusive
    notes available on this app are a game-changer, making complex
    subjects easy to understand. With CollegePT, I've found a
    trusted companion in my educational journey.`,
  },
  {
    image:
      "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697376989/jnn5jjpqay2x81nynom4.jpg",
    reviewer: "Kandarp",
    content: ` Collegpt is a valuable resource for college students, offering
    simplified notes and event updates. Their cheatsheets and
    detailed roadmaps are incredibly helpful, and the supportive
    student community enhances the learning experience. The
    user-friendly website makes it easy to navigate. It's like
    having a knowledgeable study buddy in the digital world, making
    your college journey more enjoyable.`,
  },
  {
    image:
      "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1698734994/v2ydemrh9bbb1gbczeac.jpg",
    reviewer: "Mit Patel",
    content: `  This Site is most helpful for not only the college exam study
    notes but also for the real time current trends ongoing in
    todays world.Also,would would highly recommend this website to
    all the people whom i know,really it has helped me a lot.. Let's
    Give It A Try!! And lastly,,i would like to thank all the
    devloper team to design a user friendly website.`,
  },
  {
    image:
      "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697375081/fyxl35wnkjobvmt4kyo6.jpg",
    reviewer: "Yashvi Vithalani",
    content: ` This website has been my saviour and its really helpful in the
    last moments of exams whether it be any language, cheatsheets or
    detailed notes At the time of exams, All I can see in everyone's
    hands is the collegegpt material And That's enough to show how
    great and helpful this website is to the students 😍`,
  },
  {
    image:
      "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697365096/rne8savrfhd1zmuhfkuv.jpg",
    reviewer: "Kartik Katharotiya",
    content: `This collegpt is helpful for college student.Collegpt's material
    is very simple way to understand.`,
  },
  {
    image:
      "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1698733076/xcxmbp78qpdvqc5pnk1f.jpg",
    reviewer: "Dirghanshu",
    content: ` A great initiative and platform for college students ...provided
    cheat sheets and material is really good though .`,
  },
  {
    image:
      "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1698916264/uhsudhbtuw1pia9auoah.jpg",
    reviewer: "Dhyey",
    content: `Keep it up 🔥🔥🔥🔥`,
  },
  {
    image:
      "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1698735315/lltw61x65kcznsznxviw.jpg",
    reviewer: "Hiranshi",
    content: ` This website is very helpful and attractive.I appriciate your
    hardwork.This notes will be very heplful in the final exama. pls
    upload the remaining notes as soon as possible.`,
  },
  {
    image: profilepic,
    reviewer: "Vihar Talaviya",
    content: ` Your website is great but sometimes it takes some time to launch
    and needs some responsive changes, if you do this it will be the
    best website where students can find work related to them.
    Otherwise the website has nice animations. The website looks
    amazing. Good job guys.`,
  },
  {
    image:
      "http://res.cloudinary.com/dkyrtfk1u/image/upload/v1697463347/tijod8wmuwycp8ut4zyb.jpg",
    reviewer: "Juhi Gajjar",
    content: ` A great resource for college students! Websites like ColleGPT,
    which offer notes, cheat sheets, and event updates, can be
    incredibly valuable for both exam preparation and overall
    learning. These resources can help students grasp complex
    subjects more effectively and stay informed about important
    events related to their academic journey. I am really happy and
    thankful to them for making such a great platform`,
  },
];

const About = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    handledarkmode();
  }, []);

  const handleStarClick = (clickedRating) => {
    setRating(clickedRating); // Update the rating when a star is clicked
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api-collegpt.vercel.app/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ feedback, rating }),
      });

      if (response.ok) {
        setFeedback("");
        setRating(0);
        toast.dark("Feedback submitted successfully", {
          className: "custom-toast",
        });
      } else {
        toast.error("Error submitting feedback");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    document.querySelectorAll(".box").forEach((box) => {
      box.addEventListener("click", () => {
        box.classList.toggle("expanded");
      });
    });
  };

  return (
    <>
      <div className="dev">
        <section class="about">
          <div class="row">
            <div class="content">
              <h3>why us?</h3>
              <p>
                ColleGPT - Get Prepared Together! With the intention of learning
                and growing together, our team has built this platform, to
                revolutionize your academic journey by providing engaging
                resources and supportive community. Our passionate team is
                dedicated to helping you learn, grow, and succeed together. Join
                us!
              </p>
            </div>
          </div>

          <h3 className="heading">Our Team</h3>
          <div class="box-container">
            <Darshit />
            <Divya />
            <Mayank />
          </div>
        </section>
        <section class="reviews">
          <h1 class="heading">student's reviews</h1>

          <div class="box-container">
            {data.map((ele, index) => {
              return (
                <div class="card-container">
                  <div class="card">
                    <div class="front-content flex gap-4">
                      <img
                        src={ele.image}
                        height={40}
                        width={50}
                        className=" rounded-full"
                        alt="Reviwer"
                      />
                      <div className="flex-col">
                        <h3 className="text-3xl text-white mb-1">
                          {" "}
                          {ele.reviewer}{" "}
                        </h3>
                        <div class="stars text-[#E7A03C] text-2xl ">
                          <i class="fas fa-star "></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <div class="content">
                      <p class="heading">Review</p>
                      <p className="text-xl">{ele.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* ===============================================Review Now========================================================================================== */}

          <section class="comments">
            <h1 class="heading">review now</h1>

            <form className="add-comment" onSubmit={handleSubmit}>
              <textarea
                name="feedback_box"
                placeholder="Enter your review"
                required
                maxLength="1000"
                cols="30"
                rows="10"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              ></textarea>

              <div className="star-rating">
                {[1, 2, 3, 4, 5].map((value) => (
                  <i
                    key={value}
                    className={`star${value} ${
                      value <= rating ? "fas" : "far"
                    } fa-star`}
                    onClick={() => handleStarClick(value)}
                  ></i>
                ))}
              </div>
              <input
                type="submit"
                value="Submit"
                className="inline-btn"
                name="add_comment"
              />
            </form>
          </section>
        </section>
      </div>
    </>
  );
};

export default About;
