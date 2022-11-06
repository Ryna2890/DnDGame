import React, { useCallback, useEffect, useState } from "react";
import { DndGame } from "../conponents/DnDGame/dndGame";
import { useRouter } from "next/router";
import {
  changeRange,
  getRandomLettersInRange,
  getRandomNumbersInRange,
  styleChange,
} from "../shared/utilils";
import { gameStyle, GameStyle } from "../shared/gameStyle";
import Win from "../conponents/win/win";
import { QueryProps } from "./index";

export type ElementID = string | number;

export interface DCards {
  id: ElementID;
  state: boolean;
  style?: string;
}

const Game = () => {
  const [cardList, setCardList] = useState<DCards[]>();
  const [sortCard, setSortCard] = useState<DCards[]>([]);

  const [currentCard, setCurrentCart] = useState<ElementID>();

  const [styleSettings, setCurrenSettings] = useState<GameStyle>();
  const [isWin, setIsWin] = useState<boolean>(false);

  const router = useRouter();
  const { count, type, sort } = router.query as unknown as QueryProps;

  const onStart = (item: number | string) => {
    setCurrentCart(item);
  };

  const handlerDragDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>, item: DCards) => {
      event.preventDefault();

      if (item.id === currentCard) {
        setCardList((prevState) =>
          prevState?.filter((item) => item.id !== currentCard)
        );

        setSortCard((prevState) => {
          const newArray = [...prevState];
          return newArray.map((card) =>
            card.id === item.id
              ? {
                  ...card,
                  state: !card.state,
                }
              : card
          );
        });
      }
    },
    [currentCard]
  );

  useEffect(() => {
    const currentStyle = styleChange(gameStyle);
    setCurrenSettings(currentStyle);
  }, [setCurrenSettings]);

  useEffect(() => {
    const minMax = changeRange(type);
    const cardList =
      type === "A"
        ? getRandomLettersInRange(count)
        : getRandomNumbersInRange(minMax.min, minMax.max, count);

    const styledCardList = cardList.map((item, index) => ({
      id: item,
      state: false,
      style: styleSettings?.itemImage[index],
    }));

    const sortedList: DCards[] = [...styledCardList].sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });

    const list: DCards[] =
      sort === "acs" ? sortedList : [...sortedList].reverse();

    setCardList(styledCardList);
    setSortCard(list);
  }, [count, type, sort, styleSettings]);

  useEffect(() => {
    const isWin = sortCard.every((el) => el.state);

    if (sortCard.length && isWin) {
      setIsWin(true);
    }
  }, [sortCard]);

  return (
    <>
      <DndGame
        sort={sort}
        setting={styleSettings}
        dragCards={cardList}
        dropCards={sortCard}
        onDropHandler={handlerDragDrop}
        startHandler={onStart}
      />
      {isWin && <Win />}
    </>
  );
};
export default Game;
