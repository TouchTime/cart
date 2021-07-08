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
  const [checkAll, setcheckAll] = useState<number>(0);
  /**
   * 全选事件
   */
  const selectAll = (event) => {
    console.log(event);
  };
  return (
    <div>
      {list.map((item, index) => {
        return <CartList item={item} key={index} />;
      })}

      <div className="cart-list">
        <input
          type="checkbox"
          value={checkAll}
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
