import React from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles,
} from "@material-ui/core/styles";
import clsx from "clsx";
import Check from "@material-ui/icons/Check";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import { StepIconProps } from "@material-ui/core/StepIcon";
import FormStep1 from "../../FormSteps/FormStep1/FormStep1";
import FormStep2 from "../../FormSteps/FormStep2/FormStep2";
import FormStep3 from "../../FormSteps/FormStep3/FormStep3";
import FormStep0 from "../../FormSteps/FormStep0/FormStep0";
import ThankYou from "../../FormSteps/ThankYou/ThankYou";

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#ff520b",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#ff520b",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#ff520b",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "#ff520b",
    zIndex: 1,
    fontSize: 18,
  },
});
function QontoStepIcon(props: StepIconProps) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

function getSteps() {
  return [
    "Before You Start",
    "Claim Details",
    "Upload Reciepts",
    "Payment & Authorisation",
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return (
        <>
          <div className="container">
            <FormStep0 />
          </div>
        </>
      );
    case 1:
      return (
        <>
          <div className="container">
            <FormStep1 />
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div className="container">
            {" "}
            <FormStep2 />
          </div>
        </>
      );
    case 3:
      return (
        <>
          <div className="container">
            {" "}
            <FormStep3 />
          </div>
        </>
      );

    default:
      return (
        <>
          <div className="container">
            <FormStep0 />
          </div>
        </>
      );
  }
}

export default function QuotePagination() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <ThankYou />
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <>
            <div className="formsection">
              {getStepContent(activeStep)}
              <div className="buttons">
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
