import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    }
}));

const MONTHS_SELECTION = [
    {
        value: 1,
        label: 'January'
    },
    {
        value: 2,
        label: 'February'
    },
    {
        value: 3,
        label: 'March'
    }
];

const MonthSelection = ({ month, onMonthChange }) => {
    const classes = useStyles();
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="month-select-label">Month</InputLabel>
                <Select
                    labelId="month-select-label"
                    id="month-select"
                    value={month}
                    onChange={onMonthChange}>
                    {MONTHS_SELECTION.map(month => <MenuItem key={month.value} value={month.value}>{month.label}</MenuItem>)}
                </Select>
                <FormHelperText>Select Month</FormHelperText>
            </FormControl>
        </div>
    );
}

export default MonthSelection;