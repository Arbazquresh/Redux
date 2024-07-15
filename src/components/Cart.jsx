import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Button, CardContent, Grid, Card } from "@mui/material";

export const Cart = () => {
  const cartdata = useSelector((state) => state.pcartreducer.cart);

  // const handleClick = (index) => {
  //   const filt = cartdata.filter((elem, i) => index !== i);

  // };
  return (
    <Grid container spacing={2}>
      {cartdata.map((item) => {
        return (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={2}>
                    <img
                      src={item.image}
                      style={{ width: 100, height: 100 }}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <h2> Rs.{item.price}</h2>
                    <p>{item.title.slice(0, 20) + "..."}</p>
                  </Grid>
                  <Grid item xs={6}>
                    <h2> Rs.{item.description}</h2>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      // onClick={() => handleClick(index)}
                      fullWidth
                      variant="contained"
                      color="error"
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
