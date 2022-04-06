import React from "react";
import {
  Adding_Wrapper,
  Additional_Div,
  Add_Word,
  All_Wrapper,
  Area,
  Bath,
  Beds,
  Built,
  Contact_Div,
  Container,
  Description,
  Dimension,
  First_Div,
  First_Input,
  Garage,
  Information,
  Label,
  L_area,
  Material,
  New_Word,
  Prefix,
  Price_Div,
  Price_Word,
  PropId,
  Room,
  Second_Div,
  Status,
  Third_Div,
  Title,
  Twelve,
  Type,
  Type_Wrapper,
  Under,
  Word_Addition,
  Second_Input,
  Suffix,
  Third_Input,
  Fourth_Input,
  Location_Div,
  Word_Loc,
  Input_one,
  Input_two,
  Region,
  Map_Input,
  MapCard,
  LastLine,
  Line_One,
  Line_Two,
  Media_Div,
  Media,
  Feature,
  ImageMap,
  ImgOne,
  ImgTwo,
  ImgThree,
  File,
  Galery,
  NextFile,
  Attachment,
  Pdf_Div,
  Firstone,
  Testone,
  Secondone,
  Testwo,
  Uploading,
} from "./style";
import landing from "../Assets/images/landing.png";
import house from "../Assets/images/house.png";
export const Addproperty = () => {
  return (
    <Container>
      <Adding_Wrapper>
        <Add_Word>Add New Property</Add_Word>
        <New_Word>Ready to jump back in?</New_Word>
      </Adding_Wrapper>
      <Contact_Div>
        <Information>Contact Information</Information>
        <Type_Wrapper>
          <Title type="text" placeholder="Property Title" />
          <Type type="text" placeholder="Type" />
        </Type_Wrapper>
        <Description>Property Description</Description>
        <Under type="text" />
      </Contact_Div>
      <Additional_Div>
        <Word_Addition>Additional</Word_Addition>
        <All_Wrapper>
          <First_Div>
            <PropId type="text" placeholder="Property ID" />
            <Label type="text" placeholder="Label" />
            <Beds type="text" placeholder="Beds" />
            <Built type="text" placeholder="Year Built" />
            <L_area type="text" placeholder="Lot Area (sqft)" />
          </First_Div>
          <Second_Div>
            <Twelve type="text" placeholder="12" />
            <Material type="text" placeholder="Material" />
            <Bath type="text" placeholder="Bath" />
            <Area type="text" placeholder="Home Area (sqft)" />
          </Second_Div>
          <Third_Div>
            <Status type="text" placeholder="Status" />
            <Room type="text" placeholder="Rooms" />
            <Garage type="text" placeholder="Garages" />
            <Dimension type="text" placeholder="Lot Dimensions" />
          </Third_Div>
        </All_Wrapper>
      </Additional_Div>
      <Price_Div>
        <Price_Word>Price</Price_Word>
        <Prefix>
          <First_Input type="text" placeholder="Price(S)" />
          <Second_Input type="text" placeholder="Price Prefix" />
        </Prefix>
        <Suffix>
          <Third_Input type="text" placeholder="Price Suffix" />
          <Fourth_Input type="text" placeholder="Price Custom" />
        </Suffix>
      </Price_Div>
      <Location_Div>
        <Word_Loc>Location</Word_Loc>
        <Region>
          <Input_one type="text" placeholder="Regions" />
          <Input_two type="text" placeholder="Friendly Address" />
        </Region>
        <Map_Input type="text" placeholder="Map Location" />
        <MapCard />
        <LastLine>
          <Line_One type="text" placeholder="Latitude" />
          <Line_Two type="text" placeholder="Longitute" />
        </LastLine>
      </Location_Div>
      <Media_Div>
        <Media>Media</Media>
        <Feature>Featured Image</Feature>
        <ImageMap>
          <ImgOne src={landing} />
          <ImgTwo src={house} />
          <ImgThree src={landing} />
        </ImageMap>
        <File>UPLOAD FILES</File>
        <div>
          <Galery>Galery</Galery>
          <NextFile>UPLOAD FILES</NextFile>
        </div>
        <Attachment>Attachment</Attachment>
        <Pdf_Div>
          <Firstone />
          <Testone>test_property.pdf</Testone>
          <Secondone />
          <Testwo>test_property.pdf</Testwo>
        </Pdf_Div>
        <Uploading>UPLOAD FILES</Uploading>
      </Media_Div>
    </Container>
  );
};

export default Addproperty;
