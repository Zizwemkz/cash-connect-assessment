import React, { useState } from "react";

function PalindromePage() {
  const [palindromeInput, setPalindromeInput] = useState("");
  const [palindromeResult, setPalindromeResult] = useState(null);

  const checkPalindrome = async () => {
    const response = await fetch("https://localhost:44343/api/palindrome", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ statement: palindromeInput })
    });
    const result = await response.json();
    setPalindromeResult(result);
  };

  return (
    <div className="container">
      <h2>Palindrome Checker</h2>
      <input
        type="text"
        placeholder="Enter text..."
        value={palindromeInput}
        onChange={(e) => setPalindromeInput(e.target.value)}
      />
      <button onClick={checkPalindrome}>Check</button>

      {palindromeResult && (
        <div className="result">
          <p><b>Input:</b> {palindromeResult.statement}</p>
          <p><b>Normalized:</b> {palindromeResult.normalized}</p>
          <p><b>Is Palindrome:</b> {palindromeResult.isPalindrome ? "✅ Yes" : "❌ No"}</p>
        </div>
      )}
    </div>
  );
}

export default PalindromePage;
