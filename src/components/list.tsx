/*
 * @Description  : 购物车列表
 * @Author       : huyanyan
 * @Date         : 2021-07-06 15:25:26
 */
import * as React from "react";
import { useState, useEffect } from "react";
import { IpProps, ItemProps } from "./listType";

const CartList = (props: IpProps) => {
  let item: ItemProps = props.item;
  console.log(props.item);
  useEffect(() => {
    console.log(props.item);
  }, []);
  return (
    <div className="cart-list">
      <input type="checkbox" />
      <span className="cart-name">{item.name}</span>
      <span className="cart-price">{item.price}</span>
    </div>
  );
};

export default CartList;
