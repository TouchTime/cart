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
  const [style, setStyle] = useState({
    width: 0,
    height: 0,
    clientX: 0,
    clientY: 0,
  });
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
    console.log("handleMouseDown", event);
    let styleItem = {
      ...style,
      clientX: event.clientX,
      clientY: event.clientY,
    };

    setStyle(styleItem);
  };
  const handleMouseMove = (event: any) => {
    console.log(style);
    if (style.clientX === 0 && style.clientY === 0) {
      return;
    }
    // console.log("handleMouseMove", event);
    let styleItem = {
      ...style,
      width: Math.abs(Number(event.clientX) - Number(style.clientX)),
      height: Math.abs(Number(event.clientY) - Number(style.clientY)),
      clientX: 0,
      clientY: 0,
    };

    setStyle(styleItem);
  };
  const handleMouseUp = (event: any) => {
    console.log("handleMouseUp", event);
  };

  const startClick = (item: ItemProps, event: any) => {
    // console.log("startClick", item, event);
  };
  return (
    <div
      onMouseDown={(event) => handleMouseDown(event)}
      onMouseMove={(event) => handleMouseMove(event)}
      // onMouseUp={(event) => handleMouseUp(event)}
    >
      {list &&
        list.map((item: ItemProps, index: number) => {
          return (
            <div
              className="cart-list"
              key={index}
              onClick={(event) => startClick(item, event)}
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
      <div
        className="box"
        style={{ width: style.width + "px", height: style.height + "px" }}
      ></div>
    </div>
  );
};

export default CartList;
