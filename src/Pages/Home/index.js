import {Intro,AboutUs,HowItWorks,GetStarted,Footer} from '../../sections'


const Home = (props) => {
    console.log(props.location)
    return (
        <div className="home">
          <Intro />
          <AboutUs />
          <HowItWorks />
          <GetStarted />
          <Footer />
        </div>
      );
}

export default Home;
