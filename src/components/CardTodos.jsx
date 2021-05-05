import React from "react";
import {} from "./CardTodosStyle";
import {
  Container,
  ContentBottom,
  Text,
  ProgressBar,
  Logo,
} from "./CardTodosStyle";
import { Menu, Dropdown, message } from "antd";
import Dot from "../asset/Dot.svg";
import Edit from "../asset/Edit.svg";
import Trash from "../asset/Trash.svg";
import Move from "../asset/Move.svg";
import Plus from "../asset/Plus.svg";
const CardTodos = ({ todo }) => {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">
        <Logo src={Move} style={{ marginRight: "20px" }} />
        <span>Move Right</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Logo src={Edit} style={{ marginRight: "20px" }} />
        <span>Edit</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Logo src={Trash} style={{ marginRight: "20px" }} />
        <span>Delete</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <Container>
      <Text>{todo.desc}</Text>
      <ContentBottom>
        <ProgressBar percent={todo.progress} />
        <Dropdown overlay={menu}>
          <Logo
            src={Dot}
            className="ant-dropdown-link"
            onClick={(e) => e.preventDefault()}
          />
        </Dropdown>
      </ContentBottom>
    </Container>
  );
};

export default CardTodos;
