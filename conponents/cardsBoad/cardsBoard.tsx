import React, { FC } from "react";
import { css } from "@emotion/react";
import { DropCard } from "../dropCards/dropCard";
import { DCards } from "../../pages/game";
import { GameStyle } from "../../shared/gameStyle";

interface CBProps {
  setting?: GameStyle;
  cards: DCards[];
  onDropHandler: (e: React.DragEvent<HTMLDivElement>, id: DCards) => void;
}

export const CardsBoard: FC<CBProps> = ({ setting, cards, onDropHandler }) => {
  return (
    <div
      css={css`
        width: 890px;
        height: 224px;
        background-image: url(${setting?.gameBoardBg});
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
      `}
    >
      {cards.map((item) => {
        return item.state ? (
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: center;
              width: 136px;
              height: 136px;
              background-image: url(${item.style});
              background-repeat: no-repeat;
              background-size: contain;
              font-family: "Calibri", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 56px;
              line-height: 68px;
              color: #ffffff;
              text-shadow: 2px 0 #242546, -2px 0 #242546, 0 2px #242546,
                0 -2px #242546, 1px 1px #242546, -1px -1px #242546,
                1px -1px #242546, -1px 1px #242546;
            `}
          >
            {item.id}
          </div>
        ) : (
          <DropCard item={item} key={item.id} onDropHandler={onDropHandler} />
        );
      })}
    </div>
  );
};
