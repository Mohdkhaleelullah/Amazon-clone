import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Card from './Card';
import axios from '../Axios';

function Home({}) {

    const [products, setProducts]=useState('');
    //data from database
    useEffect(()=>{
        const fetchdata = async()=>{
            const data = await axios.get('/product/get');
            setProducts(data);
        };
        fetchdata();
    },[]);//empty array for dependency whenever the page is refreshed we have to run useeffect 

    return (
        <Container>
            <Navbar />
            <Banner>
                <img src="./banner.png" alt="Desktop Banner" />
                <img src="./mobilebanner.png" alt="Mobile Banner" />
            </Banner>
            <Main>
                {
                    products && products?.data.map(

                        (product)=>(<Card
                                        id={product._id}
                                        image={product.imageUrl}
                                        price={product.price}
                                        rating={product.rating}
                                        title={product.title}
                                        />
                        )
                    )
                }
                
                
            </Main>
        </Container>
    );
}

const Banner = styled.div`
    width: 100%;

    img {
        width: 100%;
        -webkit-mask-image: linear-gradient(
            to bottom, 
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0.95),
            rgba(0, 0, 0, 0.85),
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.55),
            rgba(0, 0, 0, 0)
        );
    }

    img:nth-child(2) {
        display: none;
    }

    @media only screen and (max-width: 768px) {
        img:nth-child(1) {
            display: none;
        }
        
        img:nth-child(2) {
            display: block;
            -webkit-mask-image:none;
        }
    }`
;
const Main=styled.div`
    display:grid;
    place-items:center;
    justify-content:center;
    width:100%;

    grid-auto-rows:420px;
    grid-template-columns:repeat(4, 280px);
    grid-gap:20px;

    @media only screen and (max-width:767px){
        grid-template-column:repeat(2, 50%);
        grid-gap:0;
    }

        @media only screen and (min-width:767px) and (max-width:1200px){
        grid-template-column:repeat(3, 30%);
        grid-gap:0;
    }
    @media only screen and (min-width:767px){
    margin-top:-130px;
    padding:10px 0px;
    }`

;

const Container = styled.div`
    background-color:rgb(234, 237, 237)`
;

export default Home;