import { Grid, Card, CardContent, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const getApi = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  const handleAdd = (item) => {
    const type = "ADD_CART";
    const payload = item;
    const action = { type, payload };
    dispatch(action);
  };

  const handleDetail = (item) => {
    const type = "P_DETAIL"; // step 1  reducer aur configstore  k bad Redux k bad ye step follow kare.
    const payload = item; //step 2
    const action = { type, payload }; //step 3
    dispatch(action); //step 4
    navigate("/productdetails");
  };
  return (
    <div>
      <Grid container spacing={2}>
        {data.map((item) => {
          return (
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <img
                    onClick={() => handleDetail(item)}
                    src={item.image}
                    alt=""
                    style={{ width: 250, height: 250 }}
                  />
                  <h1>{item.price}</h1>
                  <h3>{item.title.slice(0, 20) + "...."}</h3>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() => handleAdd(item)}
                  >
                    Add To Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
