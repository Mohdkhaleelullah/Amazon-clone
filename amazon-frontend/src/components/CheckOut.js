import React from "react";
import { useStateValue } from "../StateProvider";
import styled from "styled-components";
import Navbar from "./Navbar";
import { NumericFormat } from "react-number-format"; 
import { getBasketTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function CheckOut(){
    const [{ basket },dispatch] = useStateValue();
    const navigate = useNavigate();

    const removeFromBasket = (e, id) => {
        e.preventDefault();
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };
    return(
        <Container>
            <Navbar/>

            <Main>
                <ShoppingCart>
                    <h2>Shopping Cart</h2>
                    {basket?.map((product)=>(
                                            <Product>
                                            <Image>
                                                <img src={product.image} alt="" />
                                            </Image>
                                            <Description>
                                                <h4>{product.title}</h4>
                                                <p>$ {product.price}</p>
                                                <button onClick={(e) => removeFromBasket(e, product.id)}>Remove</button>
                                            </Description>
                                        </Product>
                    ))}

                </ShoppingCart>
                <Subtotal>
                    <NumericFormat renderText={(value)=>(
                        <>
                        <p>
                            Subtotal({basket.length} items):
                            <strong>{value}</strong>
                            <small>
                                <input type="checkbox" />
                                <span>This order contains a gift.</span>
                            </small>
                        </p>
                        </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType="text"
                    thousandSeparator={true}
                    prefix={"$"}
                    />
                <button onClick={() => navigate("/adress")}>Proceed to checkout</button>
                </Subtotal>
            </Main>
        </Container>
    )
}
const Container=styled.div`
    width:100%;

    height:fit-content;
    margin:auto;
    background-color:rgb(234,237,237);
    position:relative;
`;
const ShoppingCart=styled.div`
padding:15px;
flex:0.7;
background-color:#fff;
h2{
font-weight:500;
border-bottom:1px solid lightgrey;
padding-bottom:15px;
@media only screen(max-width:1200px){
flex:none;
}
}
`;
const Subtotal=styled.div`
flex:0.3;
background-color:#fff;
margin-left:15px;
height:200px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
p{
font-size:20px;
}
small{
display:flex;
align-items:center;
margin-top:10px;
span{
margin-left:10px;
}
}
button{
width:65%;
height:33px;
margin-top:20px;
background-color:#ffd814;
border:none;
outline:none;
border-radius:8px;
cursor:pointer;
}
@media only screen(max-width:1200px){
flex:none;
margin-top:20px;
`;
const Main=styled.div`
display:flex;
padding:15px;

@media only screen(max-width:1200px){
flex-direction:column;
}
`;
const Product=styled.div`
display:flex;
align-item:center;
`;
const Image=styled.div`
flex:0.3;
width:100%;
`;
const Description=styled.div`
flex:0.7;
h4{
font-weight:600;
font-size:18px;
}
p{
font-weight:600;
margin-top:10px;
}
button{
background-color:transparent;
color:#1384b4;
border:none;
outline:none;
margin-top:10px;
cursor:pointer;
&:{
text-decoration:underline;
}
}
`;

export default CheckOut;