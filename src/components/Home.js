import Img1 from "../img/competition_1.jpg";
import Img2 from "../img/competition_2.jpg";
import Img3 from "../img/competition_3.jpg";
import Img4 from "../img/gft.png";

function HomeContent() {
  
  return (
    
    <section className="homeContainer generalContainer generalBackground">
      <Banner />
      <article className="homePresentation">
        <p className="academyHistory">
          The Z-Team was founded in 2000 by Mestres Zakaria ARHAB, Karim
          HAMLADJI, Mathias JARDIN, under the chairmanship of Mr Isshane AKIL.
          Z-team is an academy of Brazilian Jiu-Jitsu and Grappling, including a
          large number of high level teachers, national and international
          competitors, as well as a large number of students. The disciplines of
          Brazilian Jiu-jitsu and Grappling have been known for several decades,
          in particular through MMA (Mixed Martial Arts) from the 90's. <br />
          <br />
          These martial arts include phases of standing wrestling, but are
          mainly practiced on the ground. Brazilian Jiu-Jitsu is often compared
          to the game of chess, requiring as much intellectual, physical and
          strategic capacities. Whether you are a complete beginner,
          intermediate or confirmed, whether you want to practice mainly for
          leisure or to engage in competitions, all types of practitioners are
          represented within our academy, so don't hesitate and{" "}
          <a
            href="https://www.helloasso.com/associations/a-m-j-z-team-boulogne/adhesions/inscription-zteam-bjj-boulogne-2022-2023"
            target="_blank"
            rel="noopener noreferrer"
          >
            join us
          </a>
          !
        </p>
      </article>
      <article className="homeImages">
        <div className="homeImageContainer">
          <img className="homeImage" src={Img1} alt="alt" />
        </div>
        <div className="homeImageContainer">
          <img className="homeImage" src={Img2} alt="alt" />
        </div>
        <div className="homeImageContainer">
          <img className="homeImage" src={Img3} alt="alt" />
        </div>
        <div className="homeImageContainer min">
          <img className="homeImage" src={Img4} alt="alt" />
        </div>
      </article>
      <hr></hr>
      <h2 className="section-title">Dojo location :</h2>
      <article className="locationMap generalBackground">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.5446679947268!2d2.2319675148436358!3d48.82874861074875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67ae337c3835b%3A0x9b96390ef2591f3c!2sEspace%20Forum%20-%20Ville%20de%20Boulogne-Billancourt!5e0!3m2!1sfr!2sfr!4v1667857012555!5m2!1sfr!2sfr"
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dojo location"
        ></iframe>
      </article>
    </section>
  );
}

function Banner() {
  return (
    <section className="banner smooth-show">
      <h1 className="bannerTitle">Z-Team Academy</h1>
    </section>
  );
}

export default HomeContent;
