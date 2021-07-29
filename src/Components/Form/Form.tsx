import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import "./Form.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '10px auto',
      width: '100%',
    },
  },
}));
const title = [
    {
      value: 'Mr',
      label: 'Mr',
    },
    {
      value: 'Mrs',
      label: 'Mrs',
    },
    {
      value: 'Miss',
      label: 'Miss',
    },
    {
      value: 'Dr',
      label: 'Dr',
    },
  ];
export default function Form() {
    
      
  const classes = useStyles();
  const [yourtitle, setTitle] = React.useState('Mr');

  const handleChange = (event: any) => {
    setTitle(event.target.value);
};

  return (
    <form className={classes.root}  autoComplete="on">
              <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={yourtitle}
          onChange={handleChange}
          helperText="Please select your title"
        >
          {title.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      <TextField required id="outlined-basic" label="First Name" variant="outlined" />
      <TextField required id="outlined-basic" label="Last Name" variant="outlined" />
    </form>
  );
}
