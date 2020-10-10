import React from "react";
import styled from "styled-components";
import SuccessIcon from "../assets/tick.svg";

const PaymentSuccess = () => {
  return (
    <SuccessWrapper>
      <Icon src={SuccessIcon} alt="success"></Icon>
      <div className="h-2x"></div>
      <StatusLabel>Payment Success</StatusLabel>
    </SuccessWrapper>
  );
};

const SuccessWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #fff;
  padding: 40px;
  box-shadow: 0 2px 24px -4px #d4e3ea;
`;

const Icon = styled.img`
  height: 48px;
  width: auto;
`;

const StatusLabel = styled.label`
  font-size: 40px;
  font-weight: bold;
`;

export default PaymentSuccess;
