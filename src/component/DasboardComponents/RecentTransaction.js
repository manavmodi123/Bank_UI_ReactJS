import React from 'react'
import "./RecentTransaction.css";
import depositCard from "../images/deposit_card.svg";
import depositpaypal from "../images/deposit_paypal.svg";
import deposit from "../images/deposit.svg";
const RecentTransaction = () => {

    const transactionDetails = [
        {
            id : 1,
            transactionImg : depositCard,
            title : "Deposit from my Card",
            date : "28 January 2021",
            type : "Credit",
            amount : "850"
        },
        {
            id : 2,
            transactionImg : depositpaypal,
            title : "Deposit from PayPal",
            date : "19 January 2021",
            type : "Debit",
            amount : "850"
        },
        {
            id : 3,
            transactionImg : deposit,
            title : "Rajesh Modi",
            date : "28 January 2021",
            type : "Credit",
            amount : "4532"
        }
    ]

  return (
    <div className='recent-transaction'>

    {transactionDetails.map((item) => (
        <div key={item.id} className='transaction-card'>
        <div className='deposit-img'>
            <img src= {item.transactionImg} alt='deposited card' />
        </div>
        <div className='transaction-details'>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
        </div>
        <div className='transaction-amount'>
        <div className={`transaction-amount ${item.type === 'Credit' ? 'credit' : 'debit'}`}>
    <p>{item.type === 'Credit' ? `+$${item.amount}` : `-$${item.amount}`}</p>
</div>

</div>

      </div>
    ))}
    
      
    </div>
  )
}

export default RecentTransaction
