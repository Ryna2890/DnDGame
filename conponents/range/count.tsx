import { FC, useCallback, useEffect, useState } from "react";
import styles from "./range.module.css";

export interface RangeProps {
  items?: string[] | number[];
  current?: string | number;
  onUpdate: (current: string | number) => void;
}

export const Count: FC<RangeProps> = ({ items, onUpdate, current }) => {
  if (!items) {
    return null;
  }

  const [val, setVal] = useState<string | number>();

  useEffect(() => {
    if (current) {
      setVal(current);
    }
  }, [current]);

  const getStyle = useCallback(
    (item: string | number): string => {
      return item === val
        ? `${styles.common} ${styles.selected}`
        : `${styles.common} ${styles.base}`;
    },
    [val]
  );

  const handleSelect = useCallback(
    (item: string | number) => {
      setVal(item);
      onUpdate(item);
    },
    [setVal, onUpdate]
  );

  return (
    <div className={styles.wrapper}>
      {items.map((el) => {
        return (
          <div
            key={el}
            className={getStyle(el)}
            onClick={() => handleSelect(el)}
          >
            <div>{el}</div>
            <span></span>
          </div>
        );
      })}
    </div>
  );
};
