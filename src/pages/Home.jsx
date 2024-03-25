import React, { useContext } from "react";
import Card from "../Components/Card";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome, <span>{user.firstName}</span>
        </h1>
        <p className="mt-2 text-lg text-gray-600">{user.role}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Card 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          title="Card 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Card
          title="Card 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
};

export default Home;
