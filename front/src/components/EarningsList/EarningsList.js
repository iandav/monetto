import React from "react";
import { useEffect } from "react";
// Styles
import "./EarningsList.css"
// React icons
import { FaSortAmountDownAlt } from "react-icons/fa"
import { FaFilter } from "react-icons/fa"

function EarningsList() {

    /*
    const getEarnings = () => {
        fetch(`http://localhost:3000/api/earning/user/test`, {
          method: 'GET',
          credentials: 'include',
          headers: {'Content-Type': 'application/json'},
        })
        .then(response => response.json())
        .then(response => {
          console.log(response)
        })
      }
    
      useEffect(() => {
        getEarnings()
      },[])
    */

    return (

      <div className="earningsListContainer">

        <div className="earningsListHeader">
          <h2>All earnings</h2>
          
          <div>
            <div className="earningsListSort">
              <FaSortAmountDownAlt className="earningsListIcon"/>
              <p>Sort</p>
            </div>

            <div className="earningsListFilter">
              <FaFilter className="earningsListIcon"/>
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
    );
}

export default EarningsList;