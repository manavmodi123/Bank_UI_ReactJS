import React, { useEffect } from 'react';
import "./Dashboard.css";
import Sidebar from './component/DasboardComponents/Sidebar';
import Header from './component/DasboardComponents/Header';
import CreditCard from './component/DasboardComponents/CreditCard';
import RecentTransaction from './component/DasboardComponents/RecentTransaction';
import Activity from './component/DasboardComponents/Activity';
import PieChart from './component/DasboardComponents/PieChart';
import Invoice from './component/DasboardComponents/Invoice';
import BalanceHistory from './component/DasboardComponents/BalanceHistory';

const Dashboard = ({ blur, setBlur }) => {
  useEffect(() => {
    const containers = document.querySelectorAll('.container-style');
    containers.forEach(container => {
      container.style.filter = blur ? 'blur(8px)' : 'none';
    });
  }, [blur]);

  return (
    <div className='dashboard'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='header'>
        <Header blur = {blur} setBlur = {setBlur} />
      </div>
      <div className='main-container'>
        <div className='card-container'>
          <div className='credit-container container-style'>
            <div className='card-title'>
              <h1 >My Cards</h1>
              <p style={{ fontSize: "16px", marginRight: "35px" }}>See All</p>
            </div>
            <CreditCard />
          </div>
          <div className="transaction-container container-style">
            <div className='transaction-title'>
              <h1>Recent Transaction</h1>
              <p style={{ fontSize: "16px", marginTop: "5px", }}>See All</p>
            </div>
            <RecentTransaction />
          </div>
        </div>
        <div className='activity-container'>
          <div className='week-activity-container container-style'>
            <h1>Weekly Activity</h1>
            <Activity />
          </div>
          <div className='expense-container container-style'>
            <div className='expense'>
              <h1>Expense Statistics</h1>
              <PieChart />
            </div>
          </div>
        </div>
        <div className='last-container'>
          <div className="invoice-container container-style">
            <div className='transaction-title'>
              <h1>Invoices Sent</h1>
            </div>
            <Invoice />
          </div>
          <div className='balance-history container-style'>
            <div className='history-title'>
              <h2>Balance History</h2>
            </div>
            <BalanceHistory />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
