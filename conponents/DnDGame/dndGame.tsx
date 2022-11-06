import React, { FC } from "react";
import { DragCard } from "../dragCard/dragCard";
import { CardsBoard } from "../cardsBoad/cardsBoard";
import { css } from "@emotion/react";
import { DCards, ElementID } from "../../pages/game";
import { GameStyle } from "../../shared/gameStyle";
import { Sorting } from "../../pages";

interface DGProps {
  sort: Sorting;
  setting?: GameStyle;
  dragCards?: DCards[];
  dropCards: DCards[];
  onDropHandler: (e: React.DragEvent<HTMLDivElement>, id: DCards) => void;
  startHandler: (id: ElementID) => void;
}

export const DndGame: FC<DGProps> = ({
  setting,
  dragCards,
  dropCards,
  onDropHandler,
  startHandler,
  sort,
}) => {
  return (
    <div
      css={css`
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url(${setting?.screenBg});
        background-size: cover;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 890px;
          gap: 24px;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: flex-start;
            justify-content: space-evenly;
            width: 890px;
            height: 223px;
          `}
        >
          {dragCards?.map((item, index) => (
            <DragCard
              item={item}
              index={index}
              key={item.id}
              startHandler={startHandler}
            />
          ))}
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            align-self: flex-start;
            width: 350px;
            height: 68px;
            background-image: url("./arrow.svg");
            background-repeat: no-repeat;
            background-size: contain;
            font-weight: 400;
            font-size: 36px;
            line-height: 44px;
            color: #ffffff;
            text-shadow: 2px 0 #242546, -2px 0 #242546, 0 2px #242546,
              0 -2px #242546, 1px 1px #242546, -1px -1px #242546,
              1px -1px #242546, -1px 1px #242546;
          `}
        >
          {sort === "acs" ? "По возрастанию" : "По убыванию"}
        </div>
        <CardsBoard
          onDropHandler={onDropHandler}
          setting={setting}
          cards={dropCards}
        />
      </div>
    </div>
  );
};
