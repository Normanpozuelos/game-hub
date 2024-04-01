import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SerchInput from "./SerchInput";

const NavBar = () => {
  return (
    <HStack padding="15px">
      <Image src={logo} boxSize="60px" />
      <SerchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
