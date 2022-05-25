import React from "react";
// Styles
import "../styles/component-styles/TransactionHistory.css"
// icons
import { IoMdAdd } from "react-icons/io"
import TransactionCard from "./TransactionCard";
// Components

function TransactionHistory() {
    return (
        <div className="transactionContainer">

            <div className="transactionHeaderContainer">
                <h2 className="transactionTitle">Transactions</h2>
                <a href="#" className="transactionViewAll">View all</a>
            </div>

            <div className="transactionNewContainer">
                <p>Create new transaction</p>
                <IoMdAdd className="transactionNewIcon"/>
            </div>

            <TransactionCard description="Job salary" type="income" value="43300.00"/>

            <TransactionCard description="Dinner at restaurant" type="expense" value="28.00" />

            <TransactionCard description="Investments" type="income" value="3412.00" />

        </div>
    );
}

export default TransactionHistory;