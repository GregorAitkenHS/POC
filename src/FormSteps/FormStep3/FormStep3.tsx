import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "../Form.scss";

export default function FormStep3() {
  return (
    <>
      <h2>Payment & Authorisation</h2>
      <p>
        Please check carefully that the account number and sort code shown below
        is the UK bank account you want the claims payment to be sent. If it’s
        incorrect then please use the previous buttons to return to the Check
        your Member Details screen to change it.
      </p>

      <form className="payment" autoComplete="on">
        <FormControlLabel
          value="end"
          control={<Checkbox color="secondary" />}
          label="I declare that all the information included is accurate, true and complete to the best of my knowledge and belief"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="secondary" />}
          label="I agree that Health Shield can confirm the details with the healthcare provider"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="secondary" />}
          label="	I understand that Health Shield may end my membership if my claim is found to be fraudulent"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="secondary" />}
          label="I understand that the benefit payment will be relevant to my entitlements as shown in the Membership Plan I hold with Health Shield"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="secondary" />}
          label="I understand that only the new contact details provided, including my UK bank account number, will now be used by Health Shield"
          labelPlacement="end"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox color="secondary" />}
          label="The total receipt value claimed is £22.00, for 1 claim item and using 1 receipt. Please note the amount paid may differ depending on your remaining benefit allowance"
          labelPlacement="end"
        />
      </form>
    </>
  );
}
