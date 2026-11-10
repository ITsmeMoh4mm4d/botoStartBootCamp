import React from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

const MainTab = ({ index }) => {
  switch (index) {
    case 1:
      return <Tab1 />;
    case 2:
      return <Tab2 />;
    case 3:
      return <Tab3 />;
    case 4:
      return <Tab4 />;
  }
};

export default MainTab;
