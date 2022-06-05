import React from "react"
import "./TransactionCard.css"

function TransactionCard({ description, type, value }) {
  return (
    <div className="transactionCardContainer">
      <p className="transactionCardDescription">{description}</p>
      <p
        className={
          type === "income"
            ? "transactionCardValue income"
            : "transactionCardValue expense"
        }
      >
        ${value}
      </p>
    </div>
  )
}

export default TransactionCard
