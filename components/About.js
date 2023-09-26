import React from "react";
import "./css/About.css";
import img1 from "../../static/images/img1.png";
import img2 from "../../static/images/img2.png";
import img3 from "../../static/images/img3.png";
import img4 from "../../static/images/img4.png";
import img5 from "../../static/images/img5.png";

function About() {
  return (
    <div className="about" id="about">
      <div className="about-heading">
        <h2>About Us</h2>
      </div>
      <div className="about-content">
        <div className="AICTE">
          <p>
            AICTE has announced to establish IDEA (Idea Development, Evaluation
            &amp; Application) Lab in AICTE approved institutions, encouraging
            students for application of science, technology, engineering and
            mathematics (STEM) fundamentals towards enhanced hands-on
            experience, learning by doing and even product visualization. As a
            common facility embedded in the institution, the IDEA Lab will make
            engineering graduates more imaginative and creative, besides getting
            basic training in the 21st century skills.
          </p>
        </div>
        <div className="content-2" id="our-objective">
          <div className="img">
            <img src={img1} />
          </div>
          <div className="txt">
            <div className="txt-heading">
              <h2>Our Objective</h2>
            </div>
            <div className="txt-content">
              As the IDEA Lab is going to be a long-term intervention aiming to
              transform education imparted in the institution, the proposal must
              spell out a clear vision for the Lab, plan of implementation,
              mobilization of resources, strength and enthusiasm of faculty,
              utilization and expansion of facilities, etc. The alignment of
              activities with larger national goals/ missions/ initiatives or
              industrial requirements or serving disadvantaged sections of
              society etc. and commitment of resources for the same, will impart
              an edge for any proposal. Shortlisted proposals will be subjected
              to scrutiny by a panel of experts before sanctioning of the
              project by AICTE.
            </div>
          </div>
        </div>
        <div className="content-2" id="our-vision">
          <div className="img">
            <img src={img5} />
          </div>
          <div className="txt">
            <div className="txt-heading">
              <h2>Our Vision</h2>
            </div>
            <div className="txt-content">
              Our Institute is having its inherent multidisciplinary nature
              through its diverse streams and concurrent laboratory facilities
              and we strongly believe inception of the IDEA Lab would be an
              added feather to this endeavour through its wide spread 24x7
              facilities bridging the gap between conceptualization and product
              development in actual.The lab aligns with the principles of
              Industry 4.0 and NEP 2020, enabling experiential learning and
              integrating it into the curriculum. We plan to extend the lab's
              resources through on-premises infrastructure and emerging
              technologies. It will serve as a platform for multidisciplinary
              projects, vocational training, internships, and hands-on learning
              experiences forstudents and the larger community.
            </div>
          </div>
        </div>
        <div className="content-2" id="our-mission">
          <div className="img">
            <img src={img3} />
          </div>
          <div className="txt">
            <div className="txt-heading">
              <h2>Our Mission</h2>
            </div>
            <div className="txt-content">
              Our mission is to empower students with hands-on experiences,
              promote collaborative project-based learning, and enhance their
              readiness for the larger society. Through outreach initiatives,
              vocational training, and industry internships, we aim to create a
              dynamic ecosystem that nurtures creativity, innovation, and the
              development of real-world solutions.
            </div>
          </div>
        </div>

        <div className="content-2" id="about-jisce">
          <div className="img">
            <img src={img2} />
          </div>
          <div className="txt">
            <div className="txt-heading">
              <h2>About JISCE</h2>
            </div>
            <div className="txt-content">
              JIS College of Engineering (JISCE), Kolkata is recognised as one
              of the best Engineering colleges and was established in 2000. The
              college is a NAAC 'A' accredited institute and is affiliated to
              MAKAUT, Kolkata. The institute is ranked 12 amongst the top 50
              engineering institutes in India according to Times of India Survey
              2020. JISCE offers admission in various undergraduate,
              postgraduate and Diploma courses in the field of Engineering,
              Management and Hospitality such as BBA, BCA, B.Tech, M.Tech, MBA
              and BSc. Candidates are selected on the basis of previous academic
              record as well asthrough entrance exam scores.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
