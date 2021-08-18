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
      <SideText title="Claim Details">
        <p>
          It’s important that you complete every part of this section correctly
          or your claim payment may be delayed.
        </p>
        <p>
          If you haven’t already done so, please read your membership plan to
          understand what benefits you are entitled to
        </p>
        <ul>
          <li>
            Please note, we are unable to pay benefit for treatments in advance
            or for treatments which took place more than 12 months ago.
          </li>
          <li>
            Please indicate who you are claiming for. If the person you’re
            claiming for isn’t listed, then please contact our Customer Care
            Team on 01270 588555
          </li>
        </ul>
      </SideText>

      <div className="SideForm">
        <form className={classes.root} autoComplete="on">
          <TextField
            required
            id="outlined-basic"
            label="Benefit"
            variant="outlined"
            defaultValue="Health Screening"
          />
          <TextField
            required
            id="outlined-basic"
            label="Reciept Value"
            variant="outlined"
            defaultValue="00.00"
          />
          <TextField
            required
            id="date"
            label="Date of Treatment"
            type="date"
            defaultValue="00-00-00"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            id="outlined-basic"
            label="Medical Reason For Treatment"
            variant="outlined"
            defaultValue="Example"
          />
        </form>
      </div>
    </>
  );
}
