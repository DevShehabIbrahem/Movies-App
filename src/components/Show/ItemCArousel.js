import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";

function ItemCArousel(props) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        outsideChevron
        leftChevron={<button>{"<"}</button>}
        rightChevron={<button>{">"}</button>}
        chevronWidth={chevronWidth}
      >
        {props.children}
      </ItemsCarousel>
    </div>
  );
}

export default ItemCArousel;
