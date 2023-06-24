import React, { useState } from "react";

import "./App.css";

const MenuItem = ({ title, selected, onClick }) => {
  return (
    <button
      className={`menu-item ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const Content = ({ selectedItem }) => {
  const getContent = () => {
    switch (selectedItem) {
      case "home":
        return (
          <div>
            <h2>Welcome to My Home Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta doloremque eaque odio adipisci eligendi officiis, incidunt delectus temporibus excepturi ab?</p>
          </div>
        );
      case "contact":
        return (
          <div>
            <h2>Contact Information</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quasi nesciunt eum nostrum facilis. Debitis corrupti eaque, aspernatur mollitia temporibus placeat totam hic. Quidem iste numquam distinctio reiciendis tempora ullam tenetur hic nesciunt. Beatae, deserunt sint ab possimus fuga quam fugit alias voluptatum repudiandae. Voluptas porro ducimus reprehenderit labore officiis!</p>
          </div>
        );
      case "information":
        return (
          <div>
            <h2>Information Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias dolorum ullam explicabo laboriosam veritatis amet minima qui cumque beatae molestiae maiores aspernatur sint blanditiis expedita, sed voluptatum autem similique inventore, cum, nobis accusamus tempore temporibus! Iste adipisci labore, nesciunt, pariatur possimus aperiam eius molestias laboriosam quisquam, blanditiis quaerat ducimus. Quidem, veniam fugiat accusantium ipsam, molestias officiis quisquam vel necessitatibus deserunt, ab recusandae quo? Autem voluptatum quasi consectetur, deleniti voluptas nisi unde nihil culpa neque expedita asperiores, magni accusamus quaerat itaque inventore nam? Rerum mollitia reprehenderit consectetur nulla, sed atque cupiditate nostrum expedita, illo in, commodi quod. Impedit labore beatae, molestiae nostrum aperiam culpa quae et. Dolore dignissimos minima amet ducimus explicabo qui, possimus neque suscipit ut distinctio impedit, tempora unde iste rem dolor asperiores. Doloribus eum ipsam est provident qui nisi impedit corporis, soluta quas laborum vitae officia quibusdam ea officiis illum accusantium reprehenderit non exercitationem incidunt delectus? Quaerat, aperiam? Dolorum officiis enim, eum labore numquam aliquam deserunt et sapiente dolores tenetur quis quidem praesentium dolorem recusandae quod molestias atque doloremque officia vitae dignissimos! Totam quam at nostrum fugit possimus officia fugiat! Et debitis suscipit eaque sunt. Praesentium officiis optio excepturi rem aspernatur corrupti accusantium sit totam earum fuga! Quam dignissimos expedita maxime deleniti, unde quibusdam et in. Recusandae aperiam ea numquam magnam, voluptate ducimus voluptatem eum praesentium facere minima hic eaque quae quasi laudantium possimus suscipit repellat. Officia consequatur doloribus, consequuntur distinctio harum eum dolore optio ab error iure rem odio alias nulla accusamus ducimus porro inventore sequi! Commodi!</p>
          </div>
        );
      case "guide":
        return (
          <div>
            <h2>User Guide</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet provident enim reiciendis unde fugiat distinctio dolores suscipit accusantium, sint nam, rem eum! Illum cumque illo facilis placeat ab nihil error, vitae corporis porro, eum, recusandae ratione. Excepturi fugiat nemo quod sit, earum atque aspernatur impedit necessitatibus explicabo perspiciatis consectetur nesciunt ut et, aperiam neque temporibus hic a provident ipsam quidem nam accusantium! Autem ratione assumenda aut consectetur sapiente libero, esse mollitia. Ullam veniam voluptatem laborum alias vitae ipsam libero delectus nam. Neque, vero. Distinctio molestias a excepturi unde hic nostrum. Pariatur saepe repellendus aspernatur quasi numquam earum officia quia perspiciatis ut. Vitae aspernatur voluptate accusantium ab nulla nesciunt hic voluptatum consequatur laudantium. Amet animi ullam repudiandae sequi. Accusamus voluptatum inventore earum, corporis tempora neque natus. Mollitia enim sed eos earum delectus non dignissimos exercitationem laudantium tenetur numquam, consequatur deserunt. Obcaecati dicta dolorum quidem rem? Excepturi magnam tempora voluptas esse. Sapiente ad similique dolorum magni distinctio esse nam, necessitatibus, consequatur doloribus cumque, molestias culpa consectetur deserunt dolorem amet odio. Laboriosam accusantium voluptatem architecto quas ex sunt labore vel deleniti voluptate repellat, cupiditate incidunt! Dolor, neque. Obcaecati exercitationem et officia labore harum voluptate fugiat, fuga rem sapiente iure, quod deleniti dolor quia at tempore assumenda reprehenderit nobis deserunt eius ad voluptatem magni quis similique sequi. Voluptates, asperiores ullam illum dolores quo molestiae nesciunt? Nesciunt magnam labore commodi sapiente tenetur exercitationem neque sequi corporis quam natus, dolor consequatur cumque aliquam rem alias autem aut. Quasi consequatur excepturi ullam doloribus, modi delectus amet repudiandae totam nulla voluptates, ipsum, qui vero commodi at cumque accusantium. Fuga ratione sint fugiat necessitatibus quae maxime perspiciatis, distinctio fugit quisquam nostrum dignissimos id! Officia id temporibus nobis necessitatibus similique maxime, repellat sapiente voluptate fugiat! Quam fugiat sint ratione modi totam commodi distinctio at dolores suscipit dolor, sit corrupti mollitia molestiae laboriosam, necessitatibus magnam, minima debitis doloremque? Voluptatem ex quae commodi laboriosam, consectetur doloremque quo accusamus tempore ipsum fugiat tempora consequatur quia eos ipsa reprehenderit placeat, obcaecati voluptas sapiente harum quisquam eius veritatis! Ex laborum qui doloribus? Molestiae minus veniam quos iste aut eius dignissimos sunt dolorum autem aliquid? Earum illo mollitia, deleniti ab libero cupiditate velit magnam quidem nihil tempore vitae sit quos asperiores corporis sunt amet laboriosam modi, officiis totam temporibus cum placeat consectetur? Ex earum est eius! Qui dolorem maxime illo adipisci eaque! Ea doloribus nihil enim autem tempore praesentium repellendus odio itaque alias? Maiores, pariatur! Dicta quam eligendi ea expedita hic officiis rerum culpa? Porro provident, unde, tempore inventore nam repellendus asperiores perferendis, reprehenderit ratione quod facere eum cum tempora laborum magnam sequi libero odit! Eligendi nemo nesciunt consequuntur fugit quaerat id. Eligendi architecto itaque exercitationem doloremque magnam officia, eius nam temporibus dicta at maxime doloribus consectetur vel placeat ipsum odit! Blanditiis maiores, unde nihil repellat quasi dolore vel veritatis modi labore nam autem eaque molestiae voluptatum reprehenderit nobis, consequatur nemo accusamus doloremque, atque consectetur distinctio aliquid debitis facilis. Enim in nulla pariatur recusandae maiores! Atque, veritatis adipisci? Vero doloremque ex, id autem accusamus ut rerum.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`content ${selectedItem !== "home" ? "transparent" : ""}`}>
      {getContent()}
    </div>
  );
};

const App = () => {
  const [selectedItem, setSelectedItem] = useState("home");
  const [prevSelectedItem, setPrevSelectedItem] = useState("home");

  const handleMenuItemClick = (menuItem) => {
    setPrevSelectedItem(selectedItem);
    setSelectedItem(menuItem);
  };

  return (
    <div className="App">
      <div className="left-panel">
        <MenuItem
          title="Home"
          selected={selectedItem === "home"}
          onClick={() => handleMenuItemClick("home")}
        />
        <MenuItem
          title="Contact"
          selected={selectedItem === "contact"}
          onClick={() => handleMenuItemClick("contact")}
        />
        <MenuItem
          title="Information"
          selected={selectedItem === "information"}
          onClick={() => handleMenuItemClick("information")}
        />
        <MenuItem
          title="Guide"
          selected={selectedItem === "guide"}
          onClick={() => handleMenuItemClick("guide")}
        />
      </div>
      <Content
        selectedItem={selectedItem}
        prevSelectedItem={prevSelectedItem}
      />
    </div>
  );
};

export default App;
