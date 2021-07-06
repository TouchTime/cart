/*
 * @Description  : 购物车
 * @Author       : huyanyan
 * @Date         : 2021-07-06 15:08:13
 */
import React, { useState, useRef } from "react";
import CartList from "../../components/list";
import { ItemProps } from "../../components/listType";
import "../../assets/main.css";

const Cart = () => {
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

  const [totalPrice, setTotalPrice] = useState<number>(0);

  console.log(list);

  return (
    <div>
      {list.map((item, index) => {
        return <CartList item={item} key={index} />;
      })}

      <div className="cart-list">
        <input type="checkbox" />
        <span className="cart-name">总金额： {totalPrice}</span>
        <div className="cart-count">结算</div>
      </div>
    </div>
  );
};

export default Cart;
