// components/IconButtonGroup.tsx

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IconButton {
  icon: IconDefinition;
  action: string;
}

interface IconButtonGroupProps {
  buttons: IconButton[];
}

const IconButtonGroup: React.FC<IconButtonGroupProps> = ({ buttons }) => {
  return (
    <div className="flex item-center">
      <div className="flex items-center space-x-6">
        {buttons.map((button, index) => (
          <Link href={button.action} key={index}>
            <a className="text-white hover:text-gray-300">
              <FontAwesomeIcon icon={button.icon} size="lg" />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IconButtonGroup;
