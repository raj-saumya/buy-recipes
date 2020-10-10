import React, { useState, useContext } from "react";
import styled from "styled-components";
import { CTX } from "../services/Store";
import { useParams } from "react-router-dom";

const PaymentCard = ({ handlePaymentStatus }) => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [viewOTP, setOTPView] = useState(false);
  const [otp, setOTP] = useState("");

  const { state } = useContext(CTX);
  const { id } = useParams();

  return (
    <PaymentCardWrapper>
      <PaymentGatewayLabel>Dummy Payment Gateway</PaymentGatewayLabel>
      <div className="h-3x"></div>
      <InputWrapper>
        <InputLabel>Name on Card</InputLabel>
        <div className="h-x"></div>
        <Input
          type="text"
          placeholder="John Doe"
          value={cardName}
          onChange={e => setCardName(e.target.value)}
        />
      </InputWrapper>
      <div className="h-2x"></div>
      <InputWrapper>
        <InputLabel>Card Number</InputLabel>
        <div className="h-x"></div>
        <Input
          type="number"
          placeholder="XXXX XXXX XXXX"
          value={cardNumber}
          onChange={e => setCardNumber(e.target.value)}
        />
      </InputWrapper>
      <div className="h-2x"></div>
      <FlexHorizontal>
        <InputWrapper>
          <InputLabel>Card Expiry</InputLabel>
          <div className="h-x"></div>
          <Input
            type="text"
            value={cardExpiry}
            onChange={e => setCardExpiry(e.target.value)}
          />
        </InputWrapper>
        <div className="w-2x"></div>
        <InputWrapper>
          <InputLabel>CVV</InputLabel>
          <div className="h-x"></div>
          <Input
            type="number"
            value={cardCVV}
            onChange={e => setCardCVV(e.target.value)}
          />
        </InputWrapper>
      </FlexHorizontal>
      <div className="h-2x"></div>
      {viewOTP && (
        <InputWrapper>
          <InputLabel>Enter OTP</InputLabel>
          <div className="h-x"></div>
          <Input
            type="number"
            value={otp}
            onChange={e => setOTP(e.target.value)}
          />
        </InputWrapper>
      )}
      <div className="h-2x"></div>
      {!viewOTP ? (
        <Button onClick={() => setOTPView(!viewOTP)}>Proceed</Button>
      ) : (
        <Button
          onClick={() => {
            otp === "123456"
              ? handlePaymentStatus("success")
              : handlePaymentStatus("failure");
          }}
        >
          Pay &nbsp; ${state.recipesList[id].price}
        </Button>
      )}
    </PaymentCardWrapper>
  );
};

const PaymentCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 8px;
  padding: 40px 24px;
  box-shadow: 0 2px 24px -4px #d4e3ea;
`;

const PaymentGatewayLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  color: #0165fe;
`;

const InputWrapper = styled.div`
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  padding: 8px;
`;

const InputLabel = styled.label`
  font-size: 12px;
  color: #8a8a8a;
`;

const Input = styled.input`
  font-size: 16px;
  border: none;
  text-decoration: none;
  outline: none;
  padding: 0 0;
  flex: 1;
  background: none;
  width: 100%;
`;

const FlexHorizontal = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 12px 0;
  border: none;
  border-radius: 4px;
  background: #0165fe;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

export default PaymentCard;
