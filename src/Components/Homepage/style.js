import styled from "styled-components";
import landing from "../Assets/images/landing.png";

const Container = styled.div`
  width: 100%;
  height: 1500px;
  position: absolute;
  position: sticky;
  position: absolute;
`;

const Mapping = styled.div`
  display: flex;
  /* flex-direction: column; */
  border: 1px solid black;
  width: 100%;
  height: 600px;
`;
const Good = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
  width: 100%;
  margin-right: 100px;
  margin-left: 100px;
`;
const Well = styled.div`
  display: flex;
  flex-direction: column;
`;

const Search = styled.div`
  width: 100%;
  height: 700px;
  /* background: ${`url(${landing})`}; */
  /* background-repeat: no-repeat; */
  /* background-size: 100% 100%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 22px 5px 0 225px; */
  background-color: #7a8691;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${landing});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Centerdiv = styled.div`
  /* border: 1px solid red; */
  width: 700px;
  height: 400px;
  justify-content: center;
  /* background: red; */
  position: relative;
  left: 410px;
`;
const Middle = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  margin: auto;
`;
const Middlebig = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 76px;
  text-align: center;
  color: #ffffff;
`;
const Buymap = styled.div`
  display: flex;
  margin-left: 260px;
`;
const Buy = styled.p`
  display: flex;
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin: 10px 10px;
  color: #ffffff;
`;
const Button = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
  border: 1px solid black;
  height: 70px;
  display: flex;
`;
const Type = styled.div`
  border: 1px solid blue;
  width: 190px;
`;
const Propertytype = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  text-transform: uppercase;
  color: #0d263b;
`;
const Property = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
`;

const Location = styled.div`
  border: 1px solid blue;
  width: 190px;
`;
const Locationtype = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  text-transform: uppercase;
  color: #0d263b;
`;
const Locationall = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
`;

const Searchword = styled.div`
  border: 1px solid blue;
  width: 190px;
`;
const Searchtype = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  text-transform: uppercase;
  color: #0d263b;
`;
const Searchenter = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
`;
const Discover = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  text-align: center;
  color: #0d263b;
`;
const Smallone = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #696969;
  text-align: center;
`;
const Carding = styled.div`
  border: 1px solid red;
  width: 300px;
  height: 400px;
`;
const Card_Img = styled.div`
  border: 1px solid black;
  height: 180px;
  width: 300px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${landing});
`;
const Featured = styled.button`
  background: #0061df;
  border-radius: 3px;
  color: white;
  border: none;
  width: 80px;
  height: 30px;
  margin-left: 10px;
  margin-top: 10px;
`;
const Sale = styled.button`
  background: #0d263b;
  border-radius: 3px;
  color: white;
  border: none;
  width: 80px;
  height: 30px;
  margin-left: 120px;
`;
const Circle = styled.img`
  border-radius: 18px;
  width: 30px;
  height: 30px;
  margin-top: 125px;
  margin-left: 260px;
`;
const Card_City = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 200px;
  margin-top: 15px;
`;
const Address = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
`;
const Describe = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #0d263b;
`;
export {
  Describe,
  Address,
  Card_City,
  Circle,
  Featured,
  Sale,
  Card_Img,
  Carding,
  Well,
  Good,
  Mapping,
  Discover,
  Smallone,
  Property,
  Propertytype,
  Searchtype,
  Searchenter,
  Locationall,
  Locationtype,
  Type,
  Location,
  Searchword,
  Button,
  Buy,
  Buymap,
  Middlebig,
  Centerdiv,
  Middle,
  Container,
  Search,
};
