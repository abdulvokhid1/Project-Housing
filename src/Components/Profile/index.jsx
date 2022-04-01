import React from "react";
import {
  Change_Wrapper,
  Contact,
  Contact_Table,
  Container,
  Email_Wrapper,
  First_Container,
  Input_Wrapper,
  Last_Word,
  Photo_Table,
  Pro_Word,
  Second_Container,
  Small_Word,
  Table_Wrapper,
  Word_Wrapper,
  Wrapper,
  Social,
  Name_Input,
  Email_Input,
  Mob_Input,
  Last_Input,
  Phone_Input,
  Skype_Input,
  Media_Input,
  Twitter,
} from "./style";

export const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <Word_Wrapper>
          <Pro_Word>My Profile</Pro_Word>
          <Small_Word>Ready to jump back in?</Small_Word>
        </Word_Wrapper>
        <Table_Wrapper>
          <Contact_Table>
            <Contact>Contact Information</Contact>
            <First_Container>
              <Input_Wrapper>
                <Name_Input placeholder="Fisrt Name" type="text" />
                <Email_Input placeholder="Email" type="email" />
                <Mob_Input placeholder="Mobile" type="text" />
              </Input_Wrapper>{" "}
              <Email_Wrapper>
                <Last_Input placeholder="Last Name" type="text" />
                <Phone_Input placeholder="Phone" type="email" />
                <Skype_Input placeholder="Skype" type="text" />
              </Email_Wrapper>
            </First_Container>
            <Social>Social Media</Social>
            <Second_Container>
              <Media_Input>
                <input placeholder="Facebook Url" type="text" />
                <input placeholder="Linkedin Url" type="text" />
                <input placeholder="Pinterest Url" type="text" />
              </Media_Input>
              <Twitter>
                <input placeholder="Twitter Url" type="text" />
                <input placeholder="Instagram Url" type="text" />
                <input placeholder="Website Url (without http)" type="text" />
              </Twitter>
            </Second_Container>
          </Contact_Table>
          <Photo_Table>Hi there</Photo_Table>
        </Table_Wrapper>
        <Change_Wrapper></Change_Wrapper>
        <Last_Word>
          Copyright © 2021 CreativeLayers. All Right Reserved.
        </Last_Word>
      </Wrapper>
    </Container>
  );
};

export default Profile;
