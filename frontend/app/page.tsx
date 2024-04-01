// pages/index.tsx

import React from "react";
import Link from "next/link";
import styles from "../app/components/styles/button.module.css";
import Image from "next/image";

const HomePage: React.FC = () => {
  const buttons = [
    { src: "/icons/search_icon.png", action: "/search" }, // Search button
    { src: "/icons/cart_icon.png", action: "/profile" }, // Profile button
    { src: "/icons/search_icon.png", action: "/shopping" }, // Shopping bag button
  ];
  const menu = [
    { action: "/highJewel", text: "HIGH JEWELRY" },
    { action: "/minimalJewel", text: "MINIMAL JEWELRY" },
    { action: "/mens", text: "MEN'S" },
    { action: "/diamondsAndGems", text: "DIAMONDS AND GEMSTONES" },
  ];
  return (
    <div
      className="flex justify-between items-center text-primary"
      style={{ width: "100%", height: 128, flexDirection: "column" }}
    >
      <div
        style={{
          display: "flex",
          height: 90,
          width: "100%",
          flexDirection: "row",
        }}
      >
        <div
          className="flex-start items-center"
          style={{ display: "flex", width: "30%", paddingLeft: 40 }}
        >
          <Link
            href="/contact"
            passHref
            className={styles["custom-button"]}
            style={{ fontSize: 21 }}
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            passHref
            className={styles["custom-button"]}
            style={{ fontSize: 21 }}
          >
            Services
          </Link>
        </div>
        <div className="items-center" style={{ display: "flex", width: "65%" }}>
          <Link
            href="/"
            style={{
              position: "absolute",

              left: "44%",
              marginRight: "-50%",
            }}
          >
            <Image
              src="/icons/caart_icon.png"
              width={258}
              height={109}
              alt="caart-icon"
            ></Image>
          </Link>
        </div>
        <div className="items-center" style={{ display: "flex", width: "5%" }}>
          {buttons.map((button, index) => (
            <Link
              href={button.action}
              key={index}
              className="hover:text-gray-300"
            >
              <Image
                src={button.src}
                width={35}
                height={37}
                alt={button.action}
              ></Image>
            </Link>
          ))}
        </div>
      </div>
      <div
        className="flex justify-between items-center text-primary"
        style={{
          height: 38,
          width: "100%",
          flexDirection: "row",
          paddingLeft: "20%",
          paddingRight: "20%  ",
          zIndex: 2,
        }}
      >
        {menu.map((ref, index) => (
          <Link href={ref.action} key={index} className=" hover:text-gray-300">
            {ref.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
