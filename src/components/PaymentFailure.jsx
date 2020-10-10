import React from "react";
import styled from "styled-components";
import FailureIcon from "../assets/failure.svg";

const PaymentFailure = () => {
  return (
    <FailureWrapper>
      <Icon src={FailureIcon} alt="failure"></Icon>
      <div className="h-2x"></div>
      <StatusLabel>Payment Failed</StatusLabel>
    </FailureWrapper>
  );
};

const FailureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: #fff;
  padding: 40px;
  box-shadow: 0 2px 24px -4px #d4e3ea;
`;

const Icon = styled.img`
  height: 64px;
  width: auto;
`;

const StatusLabel = styled.label`
  font-size: 40px;
  font-weight: bold;
`;

export default PaymentFailure;
