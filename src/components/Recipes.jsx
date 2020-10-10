import React, { useEffect, useContext } from "react";
import axios from "axios";
import { CTX } from "../services/Store";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";
import Header from "./Header";

const Recipes = () => {
  const { state, dispatch } = useContext(CTX);

  useEffect(() => {
    axios.get("http://starlord.hackerearth.com/recipe").then(resp => {
      dispatch({ type: "UPDATE_RECIPES", payload: resp.data });
    });
  }, []);

  return (
    <HomeWrapper>
      <Header />
      <RecipesGrid>
        {state.recipesList.map((d, i) => (
          <RecipeCard key={i} {...d} />
        ))}
      </RecipesGrid>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  background: #fff;
  padding: 8px;
`;

const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 40px;
  padding: 40px;
`;

export default Recipes;
