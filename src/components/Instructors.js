import { motion } from "framer-motion";

function Instructors() {
  return (
    <motion.section className="generalContainer"
    initial= {{opacity:0, transition: {duration: 0.1}}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
      <div className="generalBackground">
        <h2 className="section-title">Instructors</h2>
        <div className="instructors-flex">
          <div className="headInstructors">
            <div className="instructorCard">
              <div>
                <img
                  src={require("../img/instructor_1.jpg")}
                  className="instructorCard-img"
                  alt="A instructor card"
                />
              </div>
              <h3 className="instructorCard-name">KARIM HAMLADJI</h3>
              <div className="instructorCard-content">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here',
                </p>
              </div>
            </div>
            <div className="instructorCard">
              <div>
                <img
                  src={require("../img/instructor_2.jpg")}
                  className="instructorCard-img"
                  alt="A instructor card"
                />
              </div>
              <h3 className="instructorCard-name">ZAKARIA ARHAB</h3>
              <div className="instructorCard-content">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here',
                </p>
              </div>
            </div>
          </div>
          <div className="instructorCard">
            <div>
              <img
                src={require("../img/instructor_3.jpg")}
                className="instructorCard-img"
                alt="A instructor card"
              />
            </div>
            <h3 className="instructorCard-name">ILIES BARAFANE</h3>
            <div className="instructorCard-content">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here',
              </p>
            </div>
          </div>
          <div className="instructorCard">
            <div>
              <img
                src={require("../img/instructor_4.jpg")}
                className="instructorCard-img"
                alt="A instructor card"
              />
            </div>
            <h3 className="instructorCard-name">MEDHI MEDAOUI</h3>
            <div className="instructorCard-content">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here',
              </p>
            </div>
          </div>
          <div className="instructorCard">
            <div>
              <img
                src={require("../img/instructor_5.jpg")}
                className="instructorCard-img"
                alt="A instructor card"
              />
            </div>
            <h3 className="instructorCard-name">REDA HAMZAOUI</h3>
            <div className="instructorCard-content">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here',
              </p>
            </div>
          </div>
          <div className="instructorCard">
            <div>
              <img
                src={require("../img/instructor_6.jpg")}
                className="instructorCard-img"
                alt="A instructor card"
              />
            </div>
            <h3 className="instructorCard-name">MOHAMED HADI</h3>
            <div className="instructorCard-content">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here',
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Instructors;
