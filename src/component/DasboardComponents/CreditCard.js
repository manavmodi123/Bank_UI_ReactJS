import React from 'react'
import "./CreditCard.css";
import chipImg from "../images/img_chip_card.png";
import cardImg from "../images/img_logo_card.svg";

const CreditCard = () => {

    const creditCard = [
        {
            id: 1,
            balance: 15679,
            name: "Manav Modi",
            validThrough: "12/24",
            creditCardNumber: "1234 5678 9012 3456"
        },
        {
            id: 2,
            balance: 3421,
            name: "Manav Modi",
            validThrough: "06/25",
            creditCardNumber: "4356 7012 8302 1267"
        },

    ]
    
    return (
        <div className='credit-cards'>
            {creditCard.map((card) => (
                <div key={card.id} className='card'>
                <div className='balance'>
                    <div className='balance-info'>
                        <p>Balance</p>
                        <h3>${card.balance}</h3>
                    </div>
                    <img src={chipImg} />
                </div>
                <div className='card-details'>
                    <div className='card-name'>
                        <p>CARD HOLDER</p>
                        <h3>{card.name}</h3>
                    </div>
                    <div className='card-validity'>
                        <p>VALID THRU</p>
                        <h3>{card.validThrough}</h3>
                    </div>
                </div>
                <div className='card-number'>
                <div className='balance-number'>
                    <div className=''>
                        <p>{card.creditCardNumber}</p>    
                    </div>
                    <img src={cardImg} />
                </div>
                </div>
                
            </div>
            ))}

            
        </div>
    )
}

export default CreditCard
