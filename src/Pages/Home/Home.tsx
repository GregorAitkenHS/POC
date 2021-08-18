import HeroImage from "../../Components/HeroImage/HeroImage";
import BoxLinkWithImage from "../../Components/BoxLinkWithImage/BoxLinkWithImage";
import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <HeroImage
        title="Lorem ipsum dolor"
        subTitle="Sed ut perspiciatis unde omnis"
        img="https://www.healthshield.co.uk/media/1272/header9.png"
        link="/claim"
        linkTitle="Button Title"
      />
      <div className="container Home_options">
        <h2>Welcome to your Health Shield Members’ Area</h2>
        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        <div className="BoxSection container">
          <BoxLinkWithImage
            title="Cover & Claims"
            link="/claim"
            img="https://membersdev.healthshield.co.uk/memberMP/themes/images/icons/MembershipPlan.png"
          />
          <BoxLinkWithImage
            title="Make a Claim"
            link="/claim"
            img="https://membersdev.healthshield.co.uk/memberMP/themes/images/icons/KeyFacts.png"
          />
          <BoxLinkWithImage
            title="My Wellness"
            link="/claim"
            img="https://membersdev.healthshield.co.uk/memberMP/themes/images/icons/Profile.png"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
