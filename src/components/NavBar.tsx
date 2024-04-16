import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SerchInput from "./SerchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding="15px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>

      <SerchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
