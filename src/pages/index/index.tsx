/*
 * @Description  : 首页
 * @Author       : huyanyan
 * @Date         : 2021-07-13 16:07:19
 */
import * as React from "react";
import { Button } from "antd";

export default () => {
  return (
    <div>
      <>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </>
      ,
    </div>
  );
};
