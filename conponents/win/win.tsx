import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Win = () => {
  return (
    <div
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: rgba(32, 21, 54, 0.6) 60%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-size: cover;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 641px;
          height: 500px;
          background: linear-gradient(
            180deg,
            #67df89 0%,
            rgba(141, 103, 223, 0) 100%
          );
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          border-radius: 40px;
        `}
      >
        <div
          css={css`
            width: 621px;
            height: 480px;
            background: radial-gradient(
              384.16% 384.16% at 50% 50%,
              #ffffff 12.29%,
              #aa92d2 21.15%
            );
            border-radius: 40px;
            position: relative;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 24px;
          `}
        >
          <div
            css={css`
              height: 166px;
              width: 515px;
              background-size: contain;
              background: url("./victory.svg") no-repeat;
            `}
          ></div>
          <div
            css={css`
              font-weight: 400;
              font-size: 40px;
              line-height: 51px;
              color: #5f40a1;
              text-align: center;
            `}
          >
            Молодец! Ты успешно справился с заданием!
          </div>
          <Link
            css={css`
              background: #2bd600;
              box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
              border-radius: 20px;

              width: 270px;
              height: 68px;

              font-weight: 400;
              font-size: 32px;
              line-height: 60px;

              color: white;
              text-align: center;

              &:hover {
                background: #2d9812;
              }
            `}
            href={{ pathname: "/" }}
          >
            Заново
          </Link>

          <div
            css={css`
              position: absolute;
              top: 120px;
              right: -80px;
              width: 163px;
              height: 156px;
              background-image: url("/star.svg");
              background-size: cover;
            `}
          ></div>
          <div
            css={css`
              position: absolute;
              bottom: -20px;
              left: -50px;
              width: 163px;
              height: 156px;
              background-image: url("/star.svg");
              background-size: cover;
            `}
          ></div>
          <div
            css={css`
              position: absolute;
              top: -26px;
              left: -34px;
              width: 100px;
              height: 100px;
              background-image: url("/star.svg");
              background-size: cover;
            `}
          ></div>
          <div
            css={css`
              position: absolute;
              right: -22px;
              bottom: -12px;
              width: 80px;
              height: 80px;
              background-image: url("/star.svg");
              background-size: cover;
            `}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default Win;
