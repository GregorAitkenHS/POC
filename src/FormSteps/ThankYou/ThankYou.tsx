import "../ThankYou/ThankYou.scss";
import BoxLinkWithImage from "../../Components/BoxLinkWithImage/BoxLinkWithImage";

export default function ThankYou() {
  return (
    <>
      <div className="thankyou">
        <h1>Your Claim has been made!</h1>
        <h2>Where to now?</h2>
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
    </>
  );
}
