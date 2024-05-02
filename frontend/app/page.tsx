// pages/index.tsx

import React from "react";
import _footer from "./components/footer";
import _navbar from "./components/navbar";
const HomePage: React.FC = () => {
  return (
    <div
      className="flex justify-between items-center text-primary"
      style={{ width: "100%", height: 128, flexDirection: "column" }}
    >
      <_navbar></_navbar>
      <_footer></_footer>
    </div>
  );
};

export default HomePage;
