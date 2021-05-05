import React, { useState } from "react";
import Plus from "./asset/Plus.svg";
import { Col, Row, Modal, Button } from "antd";
import "antd/dist/antd.css";
import CardTodos from "./components/CardTodos";
import ModalForm from "./components/ModalForm";
import { CardContainer, Create, ButtonGreen } from "./AppStyle";
function App() {
  const [todos, setTodos] = useState([
    {
      title: "Group task 1",
      desc: "Re-designed the zero-g doggie bags. No more spills!",
      progress: "80",
    },
    {
      title: "Group task 1",
      desc: "Re-designed the zero-g doggie bags. No more spills!",
      progress: "80",
    },
    {
      title: "Group task 1",
      desc: "Re-designed the zero-g doggie bags. No more spills!",
      progress: "80",
    },
    {
      title: "Group task 1",
      desc: "Re-designed the zero-g doggie bags. No more spills!",
      progress: "80",
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Row gutter={16}>
        {todos.map((todo, index) => (
          <Col xs={24} sm={16} md={12} lg={6}>
            <CardContainer title={todo.title} bordered={false}>
              <CardTodos todo={todo} key={index} />
              <Create
                style={{ marginRight: "10px" }}
                src={Plus}
                onClick={showModal}
              />
              <span>New task</span>
              <Modal
                title="Basic Modal"
                visible={isModalVisible}
                footer={[
                  <Button key="back" onClick={handleCancel}>
                    Return
                  </Button>,
                  <ButtonGreen key="submit">Submit</ButtonGreen>,
                ]}
              >
                <ModalForm addTodo={addTodo} />
              </Modal>
            </CardContainer>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default App;
