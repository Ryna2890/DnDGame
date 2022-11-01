import { css } from "@emotion/react";

export const ConfigScreen = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 980px;
        height: 810px;
        background-image: url("/BgConfigscreen.svg");
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 699px;
          height: 660px;
          background: linear-gradient(
            198.7deg,
            #7f75f0 -40.02%,
            #101f32 96.22%);
             border-radius: 40px;
          );
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: center;
            width: 679px;
            height: 640px;
            background-color: #ffffff;
            border-radius: 40px;
          `}
        >
          <span
            css={css`
              font-family: "Helvetica", sans-serif;
              font-style: normal;
              font-weight: 400;
              font-size: 32px;
              line-height: 44px;
              color: #423f45;
            `}
          >
            Кол-во предметов
          </span>
          <div css={css``}></div>
        </div>
      </div>
    </div>
  );
};
