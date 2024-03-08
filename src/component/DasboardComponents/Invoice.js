import React from 'react'
import "./Invoice.css";
import apple from "../images/apple.svg";
import user from "../images/user.svg";
import playst from "../images/playstation.svg";
const Invoice = () => {

    const transactionDetails = [
        {
            id : 1,
            transactionImg : apple,
            title : "Apple Store",
            duration : "5h",
            amount : "850"
        },
        {
            id : 2,
            transactionImg : user,
            title : "Manav Modi",
            duration : "2 days",
            amount : "850"
        },
        {
            id : 2,
            transactionImg : playst,
            title : "Playstation",
            duration : "5 days",
            amount : "850"
        },
        {
            id : 3,
            transactionImg : user,
            title : "Manav Modi",
            duration : "10 days",
            amount : "4532"
        }
    ]

  return (
    <div className='recent-invoice'>

    {transactionDetails.map((item) => (
        <div key={item.id} className='transaction-card'>
        <div className='invoice-img'>
            <img src= {item.transactionImg} alt='deposited card' />
        </div>
        <div className='invoice-details'>
            <h3>{item.title}</h3>
            <p>{item.duration} ago</p>
        </div>
        <div className='invoice-amount'>
        <p>${item.amount}</p>


</div>

      </div>
    ))}
    
      
    </div>
  )
}

export default Invoice
