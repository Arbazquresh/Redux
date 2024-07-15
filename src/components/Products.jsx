import React, { useState, useEffect } from "react";
import { Grid, CardContent, Card } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Products = () => {
  const [data, setData] = useState([]);
  const selProds = useSelector((state) => state.productReducer.filtProd);

  useEffect(() => {
    setData(selProds);
  }, [selProds]);
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {data.map((item) => {
            return (
              <Grid item xs={12}>
                <h2>{item}</h2>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};
