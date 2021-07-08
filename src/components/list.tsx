/*
 * @Description  : 购物车列表
 * @Author       : huyanyan
 * @Date         : 2021-07-06 15:25:26
 */
import * as React from "react";
import { useState, useEffect, useContext, useRef, useMemo } from "react";
import { IpProps, ItemProps, ChoosePProps } from "./listType";
import { CartContext } from "../pages/cart/cartConext";

const CartList = (props: IpProps) => {
  // const { checkAll, setCheckAll } = useContext(CartContext);
  const [, setBox] = useState({});
  const itemRef = useRef(props.item);

  /**
   * 复选框勾选事件
   */
  const chooseItem = () => {
    itemRef.current.isChecked = !itemRef.current.isChecked;
    setBox(itemRef.current.isChecked);
    props.chooseBox(itemRef.current, props.index);
  };

  useMemo(() => {
    if (props.checkAll) {
      itemRef.current.isChecked = props.checkAll;
    } else {
    }
    setBox(itemRef.current.isChecked);
  }, [props.checkAll]);

  return (
    <div className="cart-list">
      <input
        type="checkbox"
        checked={itemRef.current.isChecked}
        onChange={() => chooseItem()}
      />
      <span className="cart-name">{itemRef.current.name}</span>
      <span className="cart-price">{itemRef.current.price}</span>
    </div>
  );
};

export default CartList;
