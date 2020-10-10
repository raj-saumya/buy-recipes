import React, { useState } from "react";
import styled from "styled-components";
import PaymentCard from "./PaymentCard";
import PaymentSuccess from "./PaymentSuccess";
import PaymentFailure from "./PaymentFailure";

const PaymentGateway = () => {
  const [paymentStatus, setPaymentStatus] = useState("");

  return (
    <PaymentGatewayWrapper>
      {(() => {
        switch (paymentStatus) {
          case "success":
            return <PaymentSuccess handlePaymentStatus={setPaymentStatus} />;
          case "failure":
            return <PaymentFailure handlePaymentStatus={setPaymentStatus} />;
          default:
            return <PaymentCard handlePaymentStatus={setPaymentStatus} />;
        }
      })()}
    </PaymentGatewayWrapper>
  );
};

const PaymentGatewayWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8ecfa;
`;

export default PaymentGateway;
