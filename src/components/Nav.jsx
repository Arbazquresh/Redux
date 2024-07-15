import React from "react";
import { Badge, Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {useSelector } from "react-redux/es/hooks/useSelector";


export const Nav=()=>{
    const cartdata=useSelector((state)=> state.pcartreducer.cart)
    return(
<Grid container spacing={2}>
<Grid item xs={3}>
<Button variant="contained" color="secondary" fullWidth>Add</Button>
</Grid>

<Grid item xs={3}>
<Link to="addprod">
<Button  variant="contained" color="secondary" fullWidth>ADD PRODUCT</Button>
</Link>
</Grid>
<Grid item xs={3}>     
<Link to="addproduct">
<Button  variant="contained" color="secondary" fullWidth> PRODUCTS</Button>
</Link>
</Grid>

<Grid item xs={3}>     
<Link to="productlist">
<Button  variant="contained" color="secondary" fullWidth> PRODUCTS LIST</Button>
</Link>
</Grid>

<Grid item xs={3}>     
<Link to="productdetails">
<Button  variant="contained" color="secondary" fullWidth> PRODUCTS Details</Button>
</Link>
</Grid>

<Grid item xs={1}>     
<Link to="cart">
<Badge badgeContent={cartdata && cartdata.length}>
<ShoppingCartIcon/>
</Badge>
</Link>

</Grid>



</Grid>
    )
}