import "./about.css";
// import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://avatars.githubusercontent.com/u/41282717?v=4"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am a software developer passionate about building an interesting 
          product that solves real problems.
        </p>
        <p className="a-desc">
         I hold a BSc from Delta State University, Abraka Nigeria, with over
         1 year of experience in software development. Working in a team is 
         something I value a lot as I get an opportunity to learn from my 
         teammates and also share my knowledge with them. It gives me an avenue 
         to mix with like minds and leverage human resources.
        </p>
        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
