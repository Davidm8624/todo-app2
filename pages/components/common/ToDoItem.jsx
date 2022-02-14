import { Message } from "semantic-ui-react";

const ToDoItem = ({ todoObject }) => {
  const users = [
    "sixty",
    "nine",
    "69",
    "jo",
    "joo",
    "jooo",
    "joooo",
    "joh",
    "bil",
    "bill",
  ];

  const { userId, title, completed} = todoObject;

  return (
    <Message
      content={title}
      color={completed ? "green" : "red"}
      header={users[userId - 1]}
      icon={{
        name: completed ? "check square outline" : "square outline",
      }}
    />
  );
};

export default ToDoItem;
