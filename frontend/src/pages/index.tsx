// pages/index.tsx

import React from "react";
import Link from "next/link";
import Button from "../components/Button";
import IconButtonGroup from "../components/IconButtonGroup";
import {
  faSearch,
  faUser,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const HomePage: React.FC = () => {
  const buttons = [
    { icon: faSearch, action: "/search" }, // Search button
    { icon: faUser, action: "/profile" }, // Profile button
    { icon: faShoppingBag, action: "/shopping" }, // Shopping bag button
  ];
  return (
    <div className="flex justify-between items-center">
      {/* Right section with IconButtonGroup */}
      <div>
        <IconButtonGroup buttons={buttons} />
      </div>
      {/* Left section with absolute positioned links/buttons */}
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 20, left: 20 }}>
          <Link href="/contact" passHref>
            <Button label="Contact Us" onClick={() => {}} />
          </Link>
          <Link href="/services" passHref>
            <Button label="Services" onClick={() => {}} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
