import React, { useEffect } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, Grid, Rating } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BoltIcon from "@mui/icons-material/Bolt";

export const ProductDetails = () => {
  const selectdata = useSelector((state) => state.pdetailsreducer.details);
  const navigate = useNavigate();
  useEffect(() => {
    if (selectdata.length === 0) {
      navigate("/productlist");
    }
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <img
            src={selectdata.image}
            style={{ width: 400, height: 400 }}
            alt=""
          />
          <Button
            sx={{ height: 55, width: 120, margin: 5 }}
            variant="contained"
            fullWidth
            // startIcon={<ShoppingCartIcon />}
          >
            ADD CART
          </Button>
          <Button
            sx={{ height: 55, width: 120 }}
            variant="contained"
            color="warning"
            fullWidth
            // startIcon={<BoltIcon />}
          >
            BUY
          </Button>
        </Grid>
        <Grid item xs={7}>
          <p>{selectdata.title}</p>
          <h1> Rs.{selectdata.price}</h1>
          <p>{selectdata.description}</p>
        </Grid>
      </Grid>
    </div>
  );
};
