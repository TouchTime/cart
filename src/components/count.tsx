/*
 * @Description  : 计数按钮
 * @Author       : huyanyan
 * @Date         : 2021-07-05 16:35:40
 */
import React, { useState, useMemo, useRef } from "react";

const Count = (props: { count: number }) => {
  // 保存跨周期渲染值
  const num = useRef(0);

  const [, setCount] = useState(0);

  useMemo(() => {
    num.current = 0;
  }, [props.count]);

  const setNum = (nums: number) => {
    num.current = nums + 1;
    setCount(num.current);
  };

  let result: unknown;
  if (typeof result === "number") {
    result.toFixed(); // 此处 hover result 提示类型是 number，不会提示错误
  }

  return (
    <div>
      <button type="button" onClick={() => setNum(num.current)}>
        count is: {num.current}
      </button>
    </div>
  );
};

export default Count;
