import React from 'react';
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import { useStateValue } from '../StateProvider';

function Card({id,image, price, title, rating }) {

    const [{basket},dispatch]=useStateValue();
    const addToBasket=(e)=>{
        e.preventDefault();
        dispatch({//sends data to reducer
            type:'ADD_TO_BASKET',
            item:{
                id,
                title,
                image,
                rating,
                price,
            }

        })
    }

    return (
        <Container>
            <Image>
                <img src={image} alt="" />
            </Image>
            <Description>
                <h5>{title}</h5>
                <Rating name="half-rating-read" defaultValue={rating} value={rating} precision={0.5} readOnly />
                <p>${price}</p>
                <button onClick={addToBasket}>Add to Cart</button>
            </Description>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    z-index: 10;
`;

const Image = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    flex: 0.3;

    img {
        width: 80%;
        height: 200px;
    }
`;

const Description = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex: 0.7;

    h5 {
        font-size: 15px;
        font-weight: 600;
    }

    p {
        font-weight: 600;
    }

    button {
        width: 100%;
        height: 33px;
        background-color: #fa8900;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
`;

export default Card;
