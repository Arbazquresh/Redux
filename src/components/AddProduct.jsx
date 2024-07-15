import React, { useState } from "react";
import { Grid, Button, TextField, Card, CardContent } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [prod, setProd] = useState("");

  const handleSubmit = () => {
    const type = "ADD_PROD";
    const payload = prod;
    const action = { type, payload };
    dispatch(action);
    navigate("/addproduct");
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <TextField
              onChange={(e) => setProd(e.target.value)}
              variant="outlined"
              fullWidth
              label="Enter Name.."
            />
          </Grid>

          <Grid item xs={4}>
            <Button
              sx={{ height: 55 }}
              onClick={handleSubmit}
              variant="contained"
              fullWidth
              color="secondary"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
