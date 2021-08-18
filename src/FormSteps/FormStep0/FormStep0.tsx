import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import SideText from "../../Components/SideText/SideText";
import React from "react";

import "../Form.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: "10px auto",
      width: "100%",
    },
  },
}));

export default function FormStep1() {
  const classes = useStyles();

  return (
    <>
      <SideText title="Before you start">
        <p>
          It’s currently taking 2 working days to process claims and a further
          3-5 working days for the payment to reach your bank account. But given
          the circumstances, please bear with us if it takes a little longer to
          reach you. If you want to claim for Maternity or Hospital benefits
          ONLY, then please either post these to us or follow these simple
          steps:
        </p>

        <ul>
          <li>
            Scan your Maternity and/or your Hospital claim form(s) and attach to
            an email
          </li>
          <li>Type ‘PAPER CLAIMS’ in the subject line of the email</li>
          <li>Send your email to paperclaims@healthshield.co.uk</li>
          <li>
            Receipt based claims must be submitted in the Members' Area and will
            not be accepted via email.
          </li>
        </ul>
      </SideText>

      <div className="SideForm">
        <form className={classes.root} autoComplete="on">
          <TextField
            required
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            defaultValue="Mr Test Member"
          />
          <TextField
            required
            id="outlined-basic"
            label="Date of Birth"
            variant="outlined"
            defaultValue="01/01/1990"
          />
          <TextField
            required
            id="outlined-basic"
            label="Telephone Number"
            variant="outlined"
            defaultValue="01253 734999"
          />
          <TextField
            required
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            defaultValue="healthshield@healthshield.co.uk"
          />
        </form>
      </div>
    </>
  );
}
