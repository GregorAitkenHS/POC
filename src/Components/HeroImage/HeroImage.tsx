import "./HeroImage.scss";

interface HeroImageProps {
  title: string;
  subTitle?: string;
  img: string;
  link?: string;
  linkTitle?: string;
}
 
export default function HeroImage(props: HeroImageProps) {
  return (
    <>
      <div className="HeroWrapper">
        <div className="HeroWrapper_left">
          <div className="container">
            <div className="HeroWrapper-title">
              <h2>{props.title}</h2>
              {props.subTitle ? (
                <>
                  <h4>{props.subTitle}</h4>{" "}
                </>
              ) : null}
              {props.link ? (
                <>
                  <a className="Button" href={props.link}>
                  {props.linkTitle}
                  </a>
                </>
              ) : null}
            </div>
          </div>
        </div>
        <div
          className="HeroWrapper_right"
          style={{ backgroundImage: `url(${props.img})` }}
        >
        </div>
      </div>
    </>
  );
}
