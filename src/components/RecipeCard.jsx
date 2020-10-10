import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { CTX } from "../services/Store";

const RecipeCard = ({
  category,
  description,
  id,
  image,
  label,
  name,
  price
}) => {
  const history = useHistory();
  const { state } = useContext(CTX);
  return (
    <CardWrapper onClick={() => history.push(`/recipe/${id}`)}>
      <RecipeImg src={image} alt="recipe-img" />
      <RecipeDetailWrapper>
        <RecipeName>{name}</RecipeName>
        <div className="h-x"></div>
        <RecipeCategory>{category}</RecipeCategory>
        <div className="h-x"></div>
        <RecipeDescription>{description}</RecipeDescription>
        <div className="h-x"></div>
        <label>{label}</label>
        <div className="h-x"></div>
        <div style={{ textAlign: "end" }}>
          {state.boughtRecipes.includes(id) ? (
            <RecipeNoPrice>Already Bought.</RecipeNoPrice>
          ) : (
            <RecipePrice>$ {price}</RecipePrice>
          )}
        </div>
      </RecipeDetailWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 0px 16px -2px #eeeeee;
  cursor: pointer;
`;

const RecipeImg = styled.img`
  height: 160px;
  width: auto;
  object-fit: cover;
`;

const RecipeDetailWrapper = styled.div`
  padding: 12px;
`;

const RecipeName = styled.label`
  font-size: 18px;
  font-weight: bold;
`;

const RecipeCategory = styled.label`
  font-size: 14px;
  color: #8a8a8a;
`;

const RecipeDescription = styled.label`
  font-size: 16px;
`;

const RecipePrice = styled.label`
  font-size: 16px;
  color: red;
  font-weight: bold;
`;

const RecipeNoPrice = styled(RecipePrice)`
  color: green;
`;

export default RecipeCard;
