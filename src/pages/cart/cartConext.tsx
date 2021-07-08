/*
 * @Description  : context公共数据
 * @Author       : huyanyan
 * @Date         : 2021-07-08 11:04:08
 */
import * as React from "react";

export const CartContext = React.createContext({
  checkAll: 0,
  setCheckAll: (item: any) => {
    return item;
  },
});
