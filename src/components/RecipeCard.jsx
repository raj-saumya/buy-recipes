import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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
        <RecipePrice>{price}</RecipePrice>
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
  box-shadow: 0px 0px 16px -2px #c1c1c1;
  cursor: pointer;
`;

const RecipeImg = styled.img`
  height: 200px;
  width: auto;
  object-fit: cover;
`;

const RecipeDetailWrapper = styled.div`
  padding: 12px;
`;

const RecipeName = styled.label`
  font-size: 18px;
`;

const RecipeCategory = styled.label`
  font-size: 14px;
`;

const RecipeDescription = styled.label`
  font-size: 16px;
`;

const RecipePrice = styled.label`
  font-size: 16px;
  color: red;
`;

export default RecipeCard;
