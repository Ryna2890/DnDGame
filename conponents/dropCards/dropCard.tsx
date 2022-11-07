import { css } from "@emotion/react";
import React, { FC } from "react";
import { DCards } from "../../pages/game";

interface DropProps {
  item: DCards;
  onDropHandler: (e: React.DragEvent<HTMLDivElement>, id: DCards) => void;
}

export const DropCard: FC<DropProps> = ({ item, onDropHandler }) => {
  const dropEmptyCardStyle = css`
    width: 136px;
    height: 136px;
    background: rgba(0, 0, 0, 0.06);
    box-shadow: inset 0 4px 25px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    color: rgba(0, 0, 0, 0.06);
  `;

  return (
    <div
      onDragOver={(event) => {
        event.preventDefault();
      }}
      onDrop={(event) => {
        onDropHandler(event, item);
      }}
      id={item.id.toString()}
      css={dropEmptyCardStyle}
    >
      {item.id}
    </div>
  );
};
