/*
 * @Description  : 购物车-使用useReducer
 * @Author       : huyanyan
 * @Date         : 2021-07-06 15:08:13
 */
import React, { useState } from "react";
import CartList from "../../components/list";
import { ItemProps, ChoosePProps } from "../../components/listType";
import { CartContext } from "./cartConext";
// import { useMethodReducer } from "../../components/useMethodReducer";
import "../../assets/main.css";

const Cart = () => {
  /**
   * 列表数据
   */
  const [list, setList] = useState<Array<ItemProps>>([
    {
      name: "西瓜",
      price: 12,
      isChecked: false,
    },
    {
      name: "芒果",
      price: 12,
      isChecked: false,
    },
    {
      name: "哈密瓜",
      price: 12,
      isChecked: false,
    },
  ]);
  /**
   * 总金额
   */
  const [totalPrice, setTotalPrice] = useState(0);
  /**
   * 全选状态 false:未选中  true：选中
   */
  const [checkedAll, setcheckedAll] = useState(false);
  /**
   * 全选事件
   */
  const selectAll = (event: ChoosePProps) => {
    setcheckedAll(event.target.checked);
  };

  return (
    <div>
      <CartContext.Provider value={{ setcheckedAll, setList, setTotalPrice }}>
        <CartList checkedAll={checkedAll} list={list} totalPrice={totalPrice} />
        <div className="cart-list">
          <input
            type="checkbox"
            checked={checkedAll}
            onChange={(event) => selectAll(event)}
          />
          <span className="cart-name">全选</span>
          <span className="cart-name">总金额： {totalPrice}</span>
          <div className="cart-count">结算</div>
        </div>
      </CartContext.Provider>
    </div>
  );
};

export default Cart;
