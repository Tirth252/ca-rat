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
    <div>
      <div style={{ position: "absolute", top: 20, left: 20 }}>
        <Link href="/contact">
          <a style={{ marginRight: 10 }}>
            <Button label="Contact Us" onClick={() => {}} />
          </a>
        </Link>
        <Link href="/services">
          <a>
            <Button label="Services" onClick={() => {}} />
          </a>
        </Link>
      </div>
      <div>
        <IconButtonGroup buttons={buttons} />
      </div>
    </div>
  );
};

export default HomePage;
