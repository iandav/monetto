import React from "react";
// Styles
import "../styles/component-styles/TransactionCard.css"
// Icons

function TransactionCard({description, type, value}) {
    return (
        <div className="transactionCardContainer">
            <p className="transactionCardDescription">{description}</p>
            <p className={type == "income" ? "transactionCardValue income": "transactionCardValue expense"}>${value}</p>
        </div>
    );
}

export default TransactionCard;