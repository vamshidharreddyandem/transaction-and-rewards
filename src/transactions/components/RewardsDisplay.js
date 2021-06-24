import React from 'react';
import Typography from '@material-ui/core/Typography';

import { rewardsValue } from '../utils/rewards-util';

const RewardsDisplay = ({ records }) => {
    return (
        <Typography variant="h5">{`Rewards: ${rewardsValue(records, 'transactionValue')}`}</Typography>
    )
}

export default RewardsDisplay;