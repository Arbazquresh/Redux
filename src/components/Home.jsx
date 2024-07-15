import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();

  const handleCat = (cat) => {
    const type = "ADD_CAT";
    const payload = cat;
    const action = { type, payload };
    dispatch(action);
  };
  return (
    <div>
      <h1>Home Comp</h1>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleCat("Electronic")}
      >
        Electronic
      </Button>

      <Button
        variant="contained"
        color="success"
        onClick={() => handleCat("Kids")}
      >
        Kids
      </Button>
    </div>
  );
};
