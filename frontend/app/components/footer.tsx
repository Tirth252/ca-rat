import Link from "next/link";
import React from "react";
import Image from "next/image";

const _footer: React.FC = () => {
  const firstCol = [
    "CA’ART Quality",
    "CA’ART Quality",
    "Privacy Policy",
    "Teams & Service",
  ];
  const secCol = [
    "FAQ",
    "Call Now : 800 222 1111",
    "Shipping & Delivery",
    "Return Policy",
  ];

  const socials = [
    { src: "/icons/instagram.png", action: "#" },
    { src: "/icons/facebook.png", action: "#" },
    { src: "/icons/twitter.png", action: "#" },
  ];

  const payments = [
    { src: "/icons/visa.png", action: "#" },
    { src: "/icons/mastercard.png", action: "#" },
  ];
  return (
    <>
      <div
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          display: "flex",
          height: 291,
          width: "100%",
          flexDirection: "row",
          backgroundColor: "#001E38",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#FFFFFF",
        }}
      >
        <div
          className="flex flex-col"
          style={{
            width: "25%",
          }}
        ></div>
        <div
          style={{
            width: "25%",
            paddingLeft: 150,
            backgroundColor: "#001E38",
            color: "#FFFFFF",
          }}
        >
          <h2
            style={{
              backgroundColor: "#001E38",
              color: "#FFFFFF",
              fontSize: 16,
            }}
          >
            OUR COMPANY
          </h2>
          <div
            className="flex flex-col"
            style={{
              backgroundColor: "#001E38",
              color: "#FFFFFF",
              paddingTop: 10,
              fontSize: 14,
            }}
          >
            {firstCol.map((item) => (
              <a
                href="#"
                style={{
                  backgroundColor: "#001E38",
                  color: "#FFFFFF",
                }}
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div
          style={{
            width: "25%",
            paddingLeft: 50,
            backgroundColor: "#001E38",
            color: "#FFFFFF",
            top: 100,
          }}
        >
          <h2
            style={{
              backgroundColor: "#001E38",
              color: "#FFFFFF",
              fontSize: 16,
            }}
          >
            CUSTOMER CARE
          </h2>
          <div
            className="flex flex-col"
            style={{
              backgroundColor: "#001E38",
              color: "#FFFFFF",
              paddingTop: 10,
              fontSize: 14,
            }}
          >
            {secCol.map((item) => (
              <a
                href="#"
                style={{
                  backgroundColor: "#001E38",
                  color: "#FFFFFF",
                }}
                key={item}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div
          style={{
            width: "25%",
            marginTop: 40,
          }}
        >
          <h2
            style={{
              backgroundColor: "#001E38",
              color: "#FFFFFF",
              fontSize: 16,
            }}
          >
            FOLLOW US
          </h2>

          <div
            className="flex flex-row"
            style={{
              backgroundColor: "#001E38",
              paddingTop: 10,
            }}
          >
            {socials.map((button, index) => (
              <Link
                href={button.action}
                key={index}
                style={{
                  backgroundColor: "#001E38",
                  paddingRight: 20,
                  height: 40,
                }}
              >
                <Image
                  src={button.src}
                  width={40}
                  height={40}
                  alt={button.action}
                  style={{
                    backgroundColor: "#001E38",
                  }}
                ></Image>
              </Link>
            ))}
          </div>
          <div
            className="flex flex-row"
            style={{
              backgroundColor: "#001E38",
              paddingTop: 40,
            }}
          >
            {payments.map((button, index) => (
              <Link
                href={button.action}
                key={index}
                style={{
                  backgroundColor: "#001E38",
                  paddingRight: 20,
                  height: 40,
                }}
              >
                <Image
                  src={button.src}
                  width={30}
                  height={30}
                  alt={button.action}
                  style={{
                    backgroundColor: "#001E38",
                  }}
                ></Image>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <p
        style={{
          position: "fixed",
          right: 50,
          bottom: 20,
          fontSize: 14,
          backgroundColor: "#001E38",
          color: "#FFFFFF",
        }}
      >
        © 2024 CA’ART.
      </p>
    </>
  );
};
export default _footer;
