import "./BoxLinkWithImage.scss";

interface BoxLinkWithImageProps {
  title: string;
  subTitle?: string;
  img: string;
  link: string;
}

export default function BoxLinkWithImage(props: BoxLinkWithImageProps) {
  return (
    <>
      <div className="BLWI">
        <div className="BLWI_position">
          <a href={props.link}>
            {props.title}
            <img src={props.img} alt={props.title} />
            {props.subTitle}
          </a>
        </div>
      </div>
    </>
  );
}
