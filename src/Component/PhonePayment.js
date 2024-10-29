import React, { useState } from 'react';
import './PaymentApp.css';

const PaymentApp = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    accountNumber: '',
    ifscCode: '',
    accountType: '',
    name: '',
    dob: '',
    aadhaarNumber: '',
    panCard: '',
    pin: '',
  });

  const [balance, setBalance] = useState(10000); // Sample initial balance

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment details submitted successfully!');
    // Simulate a payment operation here
  };

  const checkBalance = () => {
    setBalance(2000)
    alert(`Your account balance is: ₹${balance}`);
  };

  return (
    <div className="PaymentApp">
      <h1>Payment Method</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Email Address:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Account Number:</label>
          <input type="text" name="accountNumber" value={formData.accountNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>IFSC Code:</label>
          <input type="text" name="ifscCode" value={formData.ifscCode} onChange={handleChange} required />
        </div>
        <div>
          <label>Account Type:</label>
          <select name="accountType" value={formData.accountType} onChange={handleChange} required>
            <option value="">Select Account Type</option>
            <option value="Savings">Savings</option>
            <option value="Current">Current</option>
          </select>
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div>
          <label>Aadhaar Number:</label>
          <input type="text" name="aadhaarNumber" value={formData.aadhaarNumber} onChange={handleChange} required />
        </div>
        <div>
          <label>PAN Card:</label>
          <input type="text" name="panCard" value={formData.panCard} onChange={handleChange} required />
        </div>
        <div>
          <label>PIN/Password:</label>
          <input type="password" name="pin" value={formData.pin} onChange={handleChange} required />
        </div>
        <div>
        <button type="submit">Submit Payment Details</button>
        </div>
      </form>
      <div>
      <button onClick={checkBalance}>Check Account Balance</button>
      </div>
    </div>
  );
};

export default PaymentApp;
