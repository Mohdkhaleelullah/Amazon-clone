import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const [{basket}]=useStateValue();
    const navigate=useNavigate();

    return (
        <Container>
            <Inner>
            <Logo onClick={() => navigate("/")}>

                    <img src="./amazonlogo1.png" alt="Amazon Logo" />
                </Logo>
                <SearchBar>
                    <input type="text" placeholder="Search..." />
                    <SearchIcon onClick={() => navigate("/addproduct")}>
                        <img src="./search.png" alt="Search Icon" />
                    </SearchIcon>
                </SearchBar>
                <RightContainer>
                    <NavButtons>
                        <p>Hello</p>
                        <p>,Guest</p>
                    </NavButtons>
                    <NavButtons>
                        <p>Return</p>
                        <p>&Orders</p>
                    </NavButtons>
                    <BasketButton onClick={()=>navigate("/checkout")} >
                        <img src="./basket.png" alt="Basket" />
                        <p>{basket.length}</p>
                    </BasketButton>
                </RightContainer>
            </Inner>
            <MobileSearchBar>
                <input type="text" placeholder="Search..." />
                <SearchIcon>
                    <img src="./search.png" alt="Search Icon" />
                </SearchIcon>
            </MobileSearchBar>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #131921;
    @media only screen and (max-width:767px){
        height:120px;
        flex-direction:column;
    }
`;

const Logo = styled.div`
    margin-left: 20px;
    cursor: pointer;

    img {
        width: 100px;
        margin-top: 20px;
    }
`;

const Inner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const SearchBar = styled.div`
    height: 35px;
    flex: 1;
    margin: 20px 10px;
    display: flex;
    align-items: center;

    input {
        flex: 1;
        height: 100%;
        border: none;
        border-radius: 5px 0px 0px 5px;
        margin-left:20px;

        &::placeholder {
            padding-left: 10px;
        }
    }
    @media only screen and (max-width:767px){
        justify-content:space-between;
    }
`;

const SearchIcon = styled.div`
    border-radius: 0px 5px 5px 0px;
    background-color: #febd69;
    height: 100%;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 22px;
    }
`;

const RightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: fit-content;
    height: 100%;
    padding: 5px 15px;
`;

const NavButtons = styled.div`
    color: #fff;
    margin-top: 5px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    margin-right: 15px;

    p {
        &:nth-child(1) {
            font-size: 12px;
        }

        &:nth-child(2) {
            font-size: 14px;
            font-weight: 600;
        }
    }
`;

const BasketButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        width: 30px;
        margin-right: 10px;
    }

    p {
        color: #fff;
        font-weight: 500;
    }
`;

const MobileSearchBar = styled.div`
    height: 35px;
    width:90%;
    margin: 20px 10px;
    display: flex;
    align-items: center;
    padding:10%;

    input {
        flex: 1;
        height: 100%;
        border: none;
        border-radius: 5px 0px 0px 5px;

        &::placeholder {
            padding-left: 10px;
        }
    }
    @media only screen and (min-width:768px){
        display:none;
    }
`;

export default Navbar;
