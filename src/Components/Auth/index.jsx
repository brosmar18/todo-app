import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Auth = ({ capability, children }) => {
  const { can } = useContext(AuthContext);

  if (capability && !can(capability)) {
    return null; 
  }

  return <>{children}</>; 
};

const ToDoList = () => {
  const { can } = useContext(AuthContext);


  return (
    <Auth capability="read">
      {/* List Component */}
    </Auth>
  );
};

export default ToDoList;
