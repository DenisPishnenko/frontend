import React from "react";
import Header from "../../components/Header/Header";
import MainCard from "../../components/MainCard/MainCard";
const testNews = [
  { id: 1, title: "First news", content: "News content 1", tag: "first" },
  { id: 2, title: "Second news", content: "News content 2", tag: "second" },
  { id: 3, title: "Third news", content: "News content 3", tag: "third" },
  { id: 4, title: "Fourth news", content: "News content 4", tag: "fourth" },
];

const MainPage = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <MainCard news={testNews} />
      </div>
    </>
  );
};

export default MainPage;
