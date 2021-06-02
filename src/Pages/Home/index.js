import {Intro,AboutUs,HowItWorks,GetStarted} from '../../sections'


const Home = (props) => {
    console.log(props.location)
    return (
        <div className="home">
          <Intro />
          <AboutUs />
          <HowItWorks />
          <GetStarted />
        </div>
      );
}

export default Home;
