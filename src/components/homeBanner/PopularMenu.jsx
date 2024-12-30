import React, { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import MenueItem from "../menueItem/MenueItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="mb-12 gap-10">
      <SectionTitle
        heading={"From Our Menu"}
        subHeading={"Popular Items"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-4">
        {menu.map((item) => (
          <MenueItem key={item._id} item={item}></MenueItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
