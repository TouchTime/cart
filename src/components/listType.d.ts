/*
 * @Description  : ts定义
 * @Author       : huyanyan
 * @Date         : 2021-07-06 16:00:41
 */
export interface ItemProps {
  name: string;
  isChecked: boolean;
  price: number;
}


export interface IpProps {
  list: Array<ItemProps>;
  checkAll: boolean
  totalPrice: number
}

export interface ChoosePProps {
  target: {
     checked: boolean 
  } 
}