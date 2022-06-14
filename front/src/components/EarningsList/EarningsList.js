import React from "react"
import "./EarningsList.css"
import { FaSortAmountDownAlt, FaFilter } from "react-icons/fa"

function EarningsList() {
  return (
    <div className="earningsListContainer">
      <div className="earningsListHeader">
        <h2>All earnings</h2>

        <div>
          <div className="earningsListSort">
            <FaSortAmountDownAlt className="earningsListIcon" />
            <p>Sort</p>
          </div>

          <div className="earningsListFilter">
            <FaFilter className="earningsListIcon" />
            <p>Filter</p>
          </div>
        </div>
      </div>

      <div className="earningsListTitle">
        <p className="earningDetails">Earning Details</p>
        <p className="earningDate">Date</p>
        <p className="earningEdit">Edit</p>
      </div>
    </div>
  )
}

export default EarningsList
