import styled from "styled-components";
import bigicon from "../Assets/icons/bigicon.png";

const Container = styled.div`
  height: 1220px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
`;
const Wrapper = styled.div`
  background: grey;
  height: 200px;
  display: flex;
  flex-direction: column;
`;
const Account = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  text-align: center;
  color: #ffffff;
`;
const Accountsmall = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;
const Registerpage = styled.div`
  display: flex;
  /* border: 1px solid black; */
  height: 600px;
`;
const Signinpage = styled.div`
  height: 400px;
  width: 500px;
  border: 1px solid red;
  flex: 1;
  margin-left: 225px;
  margin-right: 15px;
  margin-top: 30px;
  padding: 20px 20px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;
// const Wrappersign = styled.div`
//   /* margin-top: 50px; */
//   border: 1px solid black;
//   height: 290px;
//   /* padding: 10px 10px; */
//   /* margin: 10px 10px; */
//   display: flex;
//   flex-direction: column;
// `;
const Signword = styled.div`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #0d263b;
`;
const Divinput = styled.div`
  width: 100%;
  margin-top: 40px;
`;
const Loginword = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  color: #0d263b;
`;
const Inputword = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid #e6e9ec;
  height: 20px;
  margin: 5px 0;
  outline: none;
`;
const Divregister = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;
const Passwordword = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid #e6e9ec;
  height: 20px;
  margin: 5px 0;
  outline: none;
  width: 100%;
`;
const Divremember = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Rememberme = styled.div`
  display: flex;
  align-items: center;
`;
const Iconpasword = styled.img``;
const Wordme = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 38px;
  color: #696969;
  margin-left: 12px;
`;
const Forgot = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-decoration-line: underline;
  color: #0061df;
`;
const Divbutton = styled.button`
  color: white;
  background: #0061df;
  border-radius: 3px;
  width: 100%;
  height: 45px;
  border: none;
  cursor: pointer;
`;
const Username = styled.div`
  height: 100px;
  margin-left: 30px;
  margin-top: 30px;
`;
const Agensy = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: #696969;
`;
const Demo = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: #696969;
`;
const Registrationpage = styled.div`
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 500px;
  border: 1px solid red;
  flex: 1;
  margin-right: 225px;
  margin-left: 15px;
  margin-top: 30px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;
const Littlebar = styled.div`
  /* margin: 30px; */
`;
const Loginput = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid #e6e9ec;
  height: 33px;
  margin: 5px 0;
  outline: none;
  width: 100%;
`;
const Nameinput = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid #e6e9ec;
  height: 33px;
  margin: 5px 0;
  outline: none;
`;
const Lastinput = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid #e6e9ec;
  height: 33px;
  margin: 5px 0;
  outline: none;
`;
const Emailinput = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid #e6e9ec;
  height: 33px;
  margin: 5px 0;
  outline: none;
`;
const Userinput = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid #e6e9ec;
  height: 33px;
  margin: 5px 0;
  outline: none;
`;
const Passinput = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid #e6e9ec;
  height: 33px;
  margin: 5px 0;
  outline: none;
`;
const Repassinput = styled.input`
  border: none;
  width: 100%;
  border-bottom: 1px solid #e6e9ec;
  height: 33px;
  margin: 5px 0;
  outline: none;
`;
const Regbutton = styled.button`
  color: white;
  background: #0d263b;
  border-radius: 3px;
  width: 100%;
  height: 45px;
  border: none;
  margin-top: 50px;
`;
const Wordreg = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #0d263b;
`;
const Contactbar = styled.div`
  height: 420px;
  border: 1px solid red;
  background: #0d263b;
  display: flex;
  padding: 30px 30px;
`;

const Bigicon = styled.div`
  height: 350px;
  border: 1px solid black;
  width: 290px;
  /* margin-left: 50px;
  margin-top: 43px; */
  background: ${`url(${bigicon})`};
  background-size: cover;
`;
const Webbar = styled.div`
  border: 1px solid red;
  height: 230px;
  width: 200px;
  margin-left: 70px;
  margin-top: 30px;
`;
const Contactus = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;
const Addressone = styled.div`
  display: flex;
  align-items: center;
`;
const Iconaddress = styled.img`
  width: 30px;
  height: 20px;
`;
const Street = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  /* font-weight: 400; */
  font-size: 1px;
  line-height: 26px;
  margin-left: 30px;
  color: #ffffff;
`;
const Addresstwo = styled.div`
  display: flex;
  align-items: center;
`;
const Iconaddresstwo = styled.img`
  width: 23px;
  height: 13px;
`;
const Streetwo = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  /* font-weight: 400; */
  font-size: 1px;
  line-height: 26px;
  margin-left: 30px;
  color: #ffffff;
`;
const Addressthree = styled.div`
  display: flex;
  align-items: center;
`;
const Iconaddressthree = styled.img`
  width: 22px;
  height: 12px;
`;
const Streethree = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  /* font-weight: 400; */
  font-size: 1px;
  line-height: 26px;
  margin-left: 30px;
  color: #ffffff;
`;
const Website = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Face = styled.img`
  margin-left: 15px;
  margin-right: 15px;
`;
const Insta = styled.img`
  margin-left: 15px;
  margin-right: 15px;
`;
const Twit = styled.img`
  margin-left: 15px;
  margin-right: 15px;
`;
const Intime = styled.img`
  margin-left: 15px;
  margin-right: 15px;
`;
const Discover = styled.div`
  border: 1px solid red;
  width: 200px;
  height: 250px;
  align-items: center;
  text-align: center;
  margin-top: 30px;
  margin-left: 50px;
`;
const Discoverword = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;
const Chicago = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
  color: #ffffff;
`;
const Los = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;

  color: #ffffff;
`;
const Miami = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
  color: #ffffff;
`;
const New = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 40px;
  color: #ffffff;
`;
export {
  Los,
  Miami,
  New,
  Chicago,
  Discoverword,
  Discover,
  Face,
  Insta,
  Twit,
  Intime,
  Website,
  Addressthree,
  Iconaddressthree,
  Streethree,
  Addresstwo,
  Iconaddresstwo,
  Streetwo,
  Addressone,
  Iconaddress,
  Street,
  Littlebar,
  Loginput,
  Regbutton,
  Nameinput,
  Lastinput,
  Userinput,
  Emailinput,
  Passinput,
  Repassinput,
  Wordreg,
  Demo,
  Agensy,
  Username,
  Divbutton,
  Wordme,
  Iconpasword,
  Forgot,
  Rememberme,
  Divremember,
  Passwordword,
  Divregister,
  Loginword,
  Divinput,
  Inputword,
  Signword,
  // Wrapperregister,
  Contactus,
  Webbar,
  Bigicon,
  Contactbar,
  Signinpage,
  Registrationpage,
  Registerpage,
  Container,
  Wrapper,
  Account,
  Accountsmall,
};
