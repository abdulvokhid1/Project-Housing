import styled from "styled-components";
import { ReactComponent as bigmap } from "../Assets/images/bigmap.svg";
import { ReactComponent as pdf } from "../Assets/icons/pdf.svg";
const Container = styled.div`
  width: 100%;
  border: 1px solid black;
  height: 2930px;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
`;

const Adding_Wrapper = styled.div`
  /* border: 1px solid black; */
  margin-left: 50px;
  margin-top: 60px;
  width: 350px;
`;
const Add_Word = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;

  /* Color / 2 */

  color: #0d263b;
`;
const New_Word = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  margin-top: -30px;
`;
const Contact_Div = styled.div`
  margin-left: 50px;
  height: 300px;
  width: 1160px;
  margin-top: 60px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
`;
const Information = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #0d263b;
  margin-left: 30px;
`;
const Type_Wrapper = styled.div`
  display: flex;
  margin-left: 30px;
  justify-content: space-between;
  margin-top: 45px;
`;
const Title = styled.input`
  width: 530px;
  border: none;
  outline: none;
  border-bottom: 1px solid #e6e9ec;
`;
const Type = styled.input`
  width: 530px;
  border: none;
  outline: none;
  border-bottom: 1px solid #e6e9ec;
  margin-right: 30px;
`;
const Description = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height */

  /* Text / Color */

  color: #696969;
  margin-left: 30px;
  margin-top: 40px;
`;
const Under = styled.input`
  width: 1100px;
  border: none;
  outline: none;
  border-bottom: 1px solid #e6e9ec;
  margin-left: 30px;
  margin-top: 60px;
`;
const Additional_Div = styled.div`
  margin-left: 50px;
  height: 300px;
  width: 1160px;
  margin-top: 30px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`;
const Word_Addition = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-left: 30px;
  color: #0d263b;
`;
const All_Wrapper = styled.div`
  display: flex;
`;
const First_Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const PropId = styled.input`
  border: none;
  outline: none;
  width: 340px;
  margin-top: 15px;
  margin-left: 30px;
  border-bottom: 1px solid #e6e9ec;
`;
const Label = styled.input`
  border: none;
  width: 340px;
  margin-top: 20px;
  outline: none;
  margin-left: 30px;
  border-bottom: 1px solid #e6e9ec;
`;
const Beds = styled.input`
  border: none;
  width: 340px;
  margin-top: 20px;
  outline: none;
  margin-left: 30px;
  border-bottom: 1px solid #e6e9ec;
`;
const Built = styled.input`
  border: none;
  width: 340px;
  margin-top: 20px;
  outline: none;
  margin-left: 30px;
  border-bottom: 1px solid #e6e9ec;
`;
const L_area = styled.input`
  border: none;
  width: 340px;
  margin-top: 20px;
  outline: none;
  margin-left: 30px;
  border-bottom: 1px solid #e6e9ec;
`;

const Second_Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Twelve = styled.input`
  border: none;
  outline: none;
  margin-left: 30px;
  width: 340px;
  margin-top: 20px;
  border-bottom: 1px solid #e6e9ec;
`;
const Material = styled.input`
  border: none;
  outline: none;
  width: 340px;
  margin-top: 20px;
  margin-left: 30px;
  border-bottom: 1px solid #e6e9ec;
`;
const Bath = styled.input`
  border: none;
  outline: none;
  width: 340px;
  margin-top: 20px;
  margin-left: 30px;
  border-bottom: 1px solid #e6e9ec;
`;
const Area = styled.input`
  border: none;
  outline: none;
  width: 340px;
  margin-top: 20px;
  margin-left: 30px;
  border-bottom: 1px solid #e6e9ec;
`;
const Third_Div = styled.div`
  display: flex;
  flex-direction: column;
`;
const Status = styled.input`
  border: none;
  outline: none;
  width: 340px;
  margin-top: 20px;
  margin-left: 30px;
  border-bottom: 1px solid #e6e9ec;
`;
const Room = styled.input`
  border: none;
  outline: none;
  width: 340px;
  margin-top: 20px;
  margin-left: 30px;
  border-bottom: 1px solid #e6e9ec;
`;
const Garage = styled.input`
  border: none;
  outline: none;
  width: 340px;
  margin-top: 20px;
  margin-left: 30px;
  border-bottom: 1px solid #e6e9ec;
`;
const Dimension = styled.input`
  border: none;
  outline: none;
  margin-left: 30px;
  width: 340px;
  margin-top: 20px;
  border-bottom: 1px solid #e6e9ec;
`;
const Price_Div = styled.div`
  margin-left: 50px;
  height: 200px;
  width: 1160px;
  margin-top: 30px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`;
const Price_Word = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #0d263b;
  margin-left: 30px;
`;
const Prefix = styled.div`
  justify-content: space-between;
  display: flex;
  margin-left: 30px;
`;
const First_Input = styled.input`
  border: none;
  outline: none;
  width: 520px;
  margin-top: 20px;
  border-bottom: 1px solid #e6e9ec;
`;
const Second_Input = styled.input`
  border: none;
  outline: none;
  width: 520px;
  margin-top: 20px;
  margin-right: 35px;
  border-bottom: 1px solid #e6e9ec;
`;
const Suffix = styled.div`
  justify-content: space-between;
  display: flex;
  margin-left: 30px;
  margin-top: 30px;
`;
const Third_Input = styled.input`
  border: none;
  outline: none;
  width: 520px;
  margin-top: 20px;
  border-bottom: 1px solid #e6e9ec;
`;
const Fourth_Input = styled.input`
  border: none;
  outline: none;
  width: 520px;
  margin-top: 20px;
  margin-right: 35px;
  border-bottom: 1px solid #e6e9ec;
`;
const Location_Div = styled.div`
  margin-left: 50px;
  height: 670px;
  width: 1160px;
  margin-top: 30px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`;
const Word_Loc = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #0d263b;
  margin-left: 30px;
`;
const Region = styled.div`
  display: flex;
  margin-left: 30px;
`;
const Input_one = styled.input`
  border: none;
  outline: none;
  width: 525px;
  margin-top: 20px;
  margin-right: 35px;
  border-bottom: 1px solid #e6e9ec;
`;
const Input_two = styled.input`
  border: none;
  outline: none;
  width: 525px;
  margin-top: 20px;
  margin-right: 35px;
  border-bottom: 1px solid #e6e9ec;
`;
const Map_Input = styled.input`
  border: none;
  outline: none;
  width: 1090px;
  margin-top: 20px;
  margin-right: 35px;
  border-bottom: 1px solid #e6e9ec;
  margin-top: 30px;
  margin-left: 30px;
`;
const MapCard = styled(bigmap)`
  width: 1095px;
  height: 400px;
  margin-left: 30px;
  margin-top: 30px;
`;
const LastLine = styled.div`
  display: flex;
  margin-left: 30px;
  margin-top: 10px;
`;
const Line_One = styled.input`
  border: none;
  outline: none;
  width: 525px;
  margin-top: 20px;
  margin-right: 35px;
  border-bottom: 1px solid #e6e9ec;
`;
const Line_Two = styled.input`
  border: none;
  outline: none;
  width: 525px;
  margin-top: 20px;
  margin-right: 35px;
  border-bottom: 1px solid #e6e9ec;
`;
const Media_Div = styled.div`
  margin-left: 50px;
  height: 730px;
  width: 1160px;
  margin-top: 30px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`;
const Media = styled.p`
  margin-left: 30px;
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #0d263b;
`;
const Feature = styled.p`
  margin-left: 30px;
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #0d263b;
`;
const ImageMap = styled.div`
  display: flex;
  margin-left: 30px;
`;
const ImgOne = styled.img`
  width: 130px;
  height: 100px;
`;
const ImgTwo = styled.img`
  width: 130px;
  height: 100px;
  margin-left: 20px;
`;
const ImgThree = styled.img`
  width: 130px;
  height: 100px;
  margin-left: 20px;
`;
const File = styled.button`
  margin-left: 30px;
  background: #ffffff;
  color: #0061df;
  border: 1px solid #0061df;
  box-sizing: border-box;
  border-radius: 3px;
  width: 130px;
  height: 45px;
  margin-top: 30px;
`;
const Galery = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  margin-left: 30px;
  color: #0d263b;
  margin-top: 30px;
`;
const NextFile = styled.button`
  margin-left: 30px;
  background: #ffffff;
  color: #0061df;
  border: 1px solid #0061df;
  box-sizing: border-box;
  border-radius: 3px;
  width: 130px;
  height: 45px;
`;
const Attachment = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  margin-left: 30px;
  color: #0d263b;
  margin-top: 30px;
`;
const Pdf_Div = styled.div`
  display: flex;
  margin-left: 30px;
  align-items: center;
`;
const Firstone = styled(pdf)``;
const Testone = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: #696969;
`;
const Testwo = styled.p`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
`;
const Secondone = styled(pdf)`
  margin-left: 30px;
`;
const Uploading = styled.button`
  margin-left: 30px;
  background: #ffffff;
  color: #0061df;
  border: 1px solid #0061df;
  box-sizing: border-box;
  border-radius: 3px;
  width: 130px;
  height: 45px;
  margin-top: 20px;
`;
export {
  Uploading,
  Pdf_Div,
  Firstone,
  Secondone,
  Testone,
  Testwo,
  Attachment,
  Galery,
  NextFile,
  File,
  ImgOne,
  ImgThree,
  ImgTwo,
  Feature,
  ImageMap,
  Media,
  Media_Div,
  LastLine,
  Line_One,
  Line_Two,
  MapCard,
  Map_Input,
  Input_one,
  Input_two,
  Region,
  Word_Loc,
  Location_Div,
  Third_Input,
  Fourth_Input,
  Prefix,
  Suffix,
  First_Input,
  Second_Input,
  Price_Word,
  Price_Div,
  L_area,
  All_Wrapper,
  Third_Div,
  Status,
  Room,
  Garage,
  Dimension,
  Second_Div,
  Twelve,
  Material,
  Bath,
  Area,
  First_Div,
  PropId,
  Label,
  Beds,
  Built,
  Word_Addition,
  Additional_Div,
  Under,
  Description,
  Type_Wrapper,
  Title,
  Type,
  Information,
  Contact_Div,
  Container,
  Add_Word,
  Adding_Wrapper,
  New_Word,
};
