import React, { useState } from "react";
import {token} from "../../../declarations/token";
import {Principal} from "@dfinity/principal";

function Transfer() {
  const [recipientId, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [isDisable, setDisable] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [isHidden, setHidden] = useState(true);
  
  async function handleClick() {
    setHidden(false);
    setDisable(true);
    const recipient = Principal.fromText(recipientId);
    const amountToTransfer = Number(amount);
    const result= await token.transfer(recipient, amountToTransfer);
    setFeedback(result)
    setDisable(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e) => setRecipient(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" 
          onClick={handleClick}
          disabled={isDisable} >
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
