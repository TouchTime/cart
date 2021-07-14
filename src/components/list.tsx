/*
 * @Description  : 购物车列表
 * @Author       : huyanyan
 * @Date         : 2021-07-06 15:25:26
 */
import * as React from "react";
import { useState, useEffect, useContext, useRef, useMemo } from "react";
import { IpProps, ItemProps, ChoosePProps } from "./listType";
import { CartContext } from "../pages/cart/cartConext";

const CartList = ({ checkedAll, list, totalPrice }: IpProps) => {
  /**
   * 共享数据
   */
  let { setcheckedAll, setList, setTotalPrice } = useContext(CartContext);
  /**
   * 复选框勾选事件
   */
  const chooseItem = (item: ItemProps, index: number) => {
    if (!list) {
      return;
    }
    item.isChecked = !item.isChecked;
    // 单个状态处理
    list[index] = item;
    setList([...list]);
    // 遍历整个状态
    let count = 0;
    totalPrice = 0;
    list.forEach((item) => {
      if (item.isChecked) {
        totalPrice += item.price;
        count++;
      }
    });
    setTotalPrice(totalPrice);
    setcheckedAll(count === list.length);
  };

  const handleMouseDown = (event: any) => {
    console.log(event);
  };
  const handleMouseMove = (event: any) => {
    console.log(event);
  };
  const handleMouseUp = (event: any) => {
    console.log(event);
  };
  return (
    <div>
      {list &&
        list.map((item: ItemProps, index: number) => {
          return (
            <div
              className="cart-list"
              key={index}
              onMouseDown={(event) => handleMouseDown(event)}
              onMouseMove={(event) => handleMouseMove(event)}
              onMouseUp={(event) => handleMouseUp(event)}
            >
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => chooseItem(item, index)}
              />
              <span className="cart-name">{item.name}</span>
              <span className="cart-price">{item.price}</span>
            </div>
          );
        })}
    </div>
  );
};

export default CartList;
