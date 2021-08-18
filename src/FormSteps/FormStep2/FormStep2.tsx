import TextField from "@material-ui/core/TextField";
import SideText from "../../Components/SideText/SideText";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import "../Form.scss";

export default function FormStep2() {
  return (
    <>
      <SideText title="Upload Reciepts">
        <p>
          Types of files acceptable are GIF, JPG, JPEG, PNG, TIF, TIFF, BMP and
          PDF with a maximum size of 6000KB (6MB).
        </p>
        <p>
          When uploading your receipt please ensure that the image is the
          correct way around for easy reading.
        </p>
        <p>
          Before uploading your receipts please make sure you view our receipt
          requirements document and make sure the following details are
          included:
        </p>
        <ul>
          <li>
            Your name or the name of the person you are making a claim for
          </li>
          <li>The practitioner's details including their official stamp</li>
          <li>The date and payment amounts</li>
          <li>Details of the treatment, goods or service</li>
          <li>A list of any sundry items purchased</li>
        </ul>
        <p>
          Your claims payment will be delayed if any of these details are
          missing.
        </p>
      </SideText>

      <div className="SideForm">
        <form className="upload" autoComplete="on">
          <div className="SideForm_upload-svg">
            <CloudUploadIcon />
            <h2>Drag & Drop your file here</h2>
          </div>
          <TextField name="upload-photo" type="file" />
        </form>
      </div>
    </>
  );
}
