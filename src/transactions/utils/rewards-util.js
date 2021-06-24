export const rewardCriteria = (currencyValue) => {
    if (currencyValue > 100) {
        return 50 + 2 * (currencyValue - 100);
    } else if (currencyValue > 50 && currencyValue <= 100) {
        return currencyValue - 50;
    }
    return 0;
};

export const rewardsValue = (records, field) => {
    return records.reduce((accumulator, currentValue) => accumulator + rewardCriteria(currentValue[field]), 0)
} 