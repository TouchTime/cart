/*
 * @Description  : 购物车
 * @Author       : huyanyan
 * @Date         : 2021-07-06 15:08:13
 */
import React, { useState, useEffect, useRef } from "react";
import CartList from "../../components/list";
import { ItemProps, ChoosePProps } from "../../components/listType";
import { CartContext } from "./cartConext";
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
  const [totalPrice, setTotalPrice] = useState<number>(0);
  /**
   * 全选状态 0:未选中  1：选中
   */
  const [checkAll, setCheckAll] = useState<boolean>(false);
  /**
   * 全选事件
   */
  const selectAll = (event: ChoosePProps) => {
    setCheckAll(event.target.checked);
  };

  const chooseBox = (item: ItemProps, index: number) => {
    list[index] = item;
    let count = 0;
    list.forEach((item) => {
      if (item.isChecked) {
        count++;
      }
    });
    setCheckAll(count === list.length);
    setList(list);
  };
  return (
    <div>
      {list.map((item, index) => {
        return (
          <CartList
            item={item}
            key={index}
            checkAll={checkAll}
            chooseBox={chooseBox}
            index={index}
          />
        );
      })}

      <div className="cart-list">
        <input
          type="checkbox"
          checked={checkAll}
          onChange={(event) => selectAll(event)}
        />
        <span className="cart-name">全选</span>
        <span className="cart-name">总金额： {totalPrice}</span>
        <div className="cart-count">结算</div>
      </div>
    </div>
  );
};

export default Cart;
