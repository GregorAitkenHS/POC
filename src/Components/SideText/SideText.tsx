import "./SideText.scss";

interface TextDetails {
  title: string;
  children: any;
}

export default function SideText(props: TextDetails) {
  return (
    <>
      <div className="SideText">
        <div className="SideText-title">
          <h2>{props.title}</h2>
        </div>
        <div className="SideText-intro">{props.children}</div>
      </div>
    </>
  );
}
