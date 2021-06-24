import React from 'react';
import MonthSelection from './components/MonthSelection';
import TransactionsTable from './components/TransactionsTable';
import RewardsDisplay from './components/RewardsDisplay';

import { LAST_THREE_MONTHS_DATA } from './data/sample-data';

const TransactionsPage = () => {
    const [month, setMonth] = React.useState('');

    const filterRecords = (records) => {
        if (!!month) {
            return records.filter(record => {
                const recordMonth = new Date(record.date).getMonth() + 1;
                return recordMonth === month;
            });
        }
        return [];
    };

    return (
        <>
            <MonthSelection month={month} onMonthChange={(event) => {
                setMonth(event.target.value);
            }} />
            <RewardsDisplay records={filterRecords(LAST_THREE_MONTHS_DATA)}/>
            <TransactionsTable month={month} records={filterRecords(LAST_THREE_MONTHS_DATA)}/>
        </>
    )
}

export default TransactionsPage;