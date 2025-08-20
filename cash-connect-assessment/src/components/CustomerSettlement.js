import React, { useEffect, useState } from "react";

function CustomerSettlementPage() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [amount, setAmount] = useState("");
  const [settlementResult, setSettlementResult] = useState(null);

  // Fetch customers from backend
  useEffect(() => {
    fetch("https://localhost:44343/api/customers") // adjust backend URL if needed
      .then(res => res.json())
      .then(data => setCustomers(data))
      .catch(err => console.error("Error loading customers:", err));
  }, []);

  // Handle settlement
  const settleCustomer = async () => {
    if (!selectedCustomer || !amount) {
      alert("Please select a customer and enter an amount.");
      return;
    }

    const response = await fetch("https://localhost:44343/api/CustomerSettlement/settle", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        customerId: parseInt(selectedCustomer),
        amount: parseFloat(amount)
      })
    });

    const result = await response.json();
    setSettlementResult(result);
  };

  return (
    <div className="container">
      <h2>Customer Settlement</h2>

      {/* Customer Dropdown */}
      <label>Select Customer:</label>
      <select
        value={selectedCustomer}
        onChange={(e) => setSelectedCustomer(e.target.value)}
      >
        <option value="">-- Choose Customer --</option>
        {customers.map((c) => (
          <option key={c.customerId} value={c.customerId}>
             ({c.companyName}) - {c.name} {c.surName}
          </option>
        ))}
      </select>

      {/* Amount Input */}
      <label>Enter Amount:</label>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {/* Submit */}
      <button onClick={settleCustomer}>Settle</button>

      {/* Settlement Result */}
      {settlementResult && (
        <div className="result">
          <p><b>Status:</b> {settlementResult.success ? "✅ Success" : "❌ Failed"}</p>
          <p><b>Message:</b> {settlementResult.message}</p>
          {settlementResult.transactionFee !== undefined && (
            <p><b>Transaction Fee:</b> {settlementResult.transactionFee}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CustomerSettlementPage;
