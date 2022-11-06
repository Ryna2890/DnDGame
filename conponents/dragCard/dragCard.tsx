import { FC } from "react";
import { css } from "@emotion/react";
import { DCards } from "../../pages/game";

interface CProps {
  item: DCards;
  index: number;
  startHandler: (title: number | string) => void;
}

export const DragCard: FC<CProps> = ({ item, startHandler, index }) => {
  return (
    <div
      draggable={true}
      onDragStart={() => startHandler(item.id)}
      css={css`
        display: flex;
        align-self: ${index % 2 ? "flex-start" : "flex-end"};
        align-items: center;
        justify-content: center;
        width: 136px;
        height: 136px;
        background-image: url(${item.style});
        background-repeat: no-repeat;
        background-size: contain;
      `}
    >
      <div
        css={css`
          font-family: "Calibri", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 56px;
          line-height: 68px;
          color: #ffffff;
          text-shadow: 2px 0 #242546, -2px 0 #242546, 0 2px #242546,
            0 -2px #242546, 1px 1px #242546, -1px -1px #242546, 1px -1px #242546,
            -1px 1px #242546;
        `}
      >
        {item.id}
      </div>
    </div>
  );
};
