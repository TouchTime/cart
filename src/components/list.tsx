/*
 * @Description  : 购物车列表
 * @Author       : huyanyan
 * @Date         : 2021-07-06 15:25:26
 */
import * as React from "react";
import { useState, useEffect, useContext, useRef, useMemo } from "react";
import { IpProps, ItemProps, ChoosePProps } from "./listType";
import { CartContext } from "../pages/cart/cartConext";

const CartList = ({ checkAll, list, totalPrice }: IpProps) => {
  /**
   * 共享数据 全选状态、列表数据
   */
  let { setCheckAll, setList, setTotalPrice } = useContext(CartContext);
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
    setCheckAll(count === list.length);
  };

  useMemo(() => {
    if (!list) {
      return;
    }
    let count = 0;
    list.forEach((item) => {
      if (item.isChecked) {
        count++;
      }
    });
    // 全选状态下，去掉一个勾选
    if (count + 1 === list.length && !checkAll) {
      return;
    }
    if ((count <= list.length && !checkAll) || checkAll) {
      // 金额初始化
      totalPrice = 0;
      // 状态变化
      list.forEach((item) => {
        item.isChecked = checkAll;
        if (checkAll) {
          totalPrice += item.price;
        }
      });
      setTotalPrice(totalPrice);
      setList([...list]);
    }
  }, [checkAll]);

  return (
    <div>
      {list &&
        list.map((item: ItemProps, index: number) => {
          return (
            <div className="cart-list" key={index}>
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
