import styles from "../styles/config.module.css";
import React, { useMemo, useState } from "react";
import { Count } from "../conponents/range/count";
import Link from "next/link";
import { css } from "@emotion/react";

export enum Sorting {
  ASC = "acs",
  DESC = "desc",
}

export type GameType = "A" | "9" | "19" | "50" | "99" | "999";

export interface QueryProps {
  count: number;
  type: GameType;
  sort: Sorting;
}

const count: number[] = [2, 3, 4, 5];
const type: GameType[] = ["A", "9", "19", "50", "99", "999"];

interface GameSetting {
  count: number;
  type: GameType;
  sorting: Sorting;
}

const initSetting: GameSetting = {
  count: 3,
  sorting: Sorting.ASC,
  type: "9",
};

export default function Home() {
  const [setting, setSetting] = useState<GameSetting>(initSetting);

  const gameQuery = useMemo(() => {
    return { count: setting.count, type: setting.type, sort: setting.sorting };
  }, [setting]);

  function countUpdate(current: string | number) {
    setSetting((prevState) => {
      return {
        ...prevState,
        count: +current,
      };
    });
  }

  function typeUpdate(current: string | number) {
    setSetting((prevState) => {
      return {
        ...prevState,
        type: current as GameType,
      };
    });
  }

  function sortingUpdate(newSorting: Sorting) {
    setSetting((prevState) => {
      return {
        ...prevState,
        sorting: newSorting,
      };
    });
  }

  return (
    <div
      css={css`
        background: #104987 url("/settings_bg.png") no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        gap: 10px;
      `}
    >
      <div
        css={css`
          background: #101f32;
          background: linear-gradient(199deg, #7f75f0 -40%, #101f32 100%);

          width: 700px;
          height: 660px;
          border-radius: 20px;
          padding: 20px;

          display: flex;
          justify-content: stretch;
          align-items: stretch;
        `}
      >
        <div
          css={css`
            background-color: white;
            box-shadow: 1px 1px 5px black;
            width: 100%;
            height: 100%;
            border-radius: 20px;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
          `}
        >
          <div>
            <div
              css={css`
                font-weight: 400;
                font-size: 32px;
                line-height: 44px;
              `}
            >
              Кол-во предметов
            </div>
            <Count
              items={count}
              onUpdate={countUpdate}
              current={initSetting.count}
            />
          </div>
          <div style={{ width: "500px" }}>
            <div
              css={css`
                font-weight: 400;
                font-size: 32px;
                line-height: 44px;
              `}
            >
              Значения
            </div>
            <Count
              items={type}
              onUpdate={typeUpdate}
              current={initSetting.type}
            />
          </div>
          <div
            css={css`
              display: flex;
              gap: 32px;
            `}
          >
            <div
              className={`${styles.button} ${
                setting.sorting === Sorting.ASC && styles.active
              }`}
              onClick={() => sortingUpdate(Sorting.ASC)}
            >
              По возрастанию
            </div>
            <div
              className={`${styles.button} ${
                setting.sorting === Sorting.DESC && styles.active
              }`}
              onClick={() => sortingUpdate(Sorting.DESC)}
            >
              По убыванию
            </div>
          </div>

          <Link
            css={css`
              background: #38df7a;
              box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
              border-radius: 20px;

              width: 260px;
              height: 60px;

              font-weight: 400;
              font-size: 32px;
              line-height: 60px;

              color: white;
              text-align: center;

              &:hover {
                background: #2bd600;
              }
            `}
            href={{ pathname: "game", query: gameQuery }}
            className={styles.buttonStart}
          >
            Играть
          </Link>
        </div>
      </div>
    </div>
  );
}
