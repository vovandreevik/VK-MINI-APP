import { FC, useState } from "react";
import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Div,
  NavIdProps,
  SplitLayout,
  SplitCol,
  Epic,


} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

//мое
import coins from "../assets/coins.png";
import beITMO from "../assets/beITMO.png";
import tasks from "../assets/tasks.png";
import article from "../assets/article.png";
import ITMOshop from "../assets/ITMOshop.png";
import Bars from "../assets/Bars.png";

import "./styles.css"

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ id, fetchedUser }) => {
  //const { photo_200, city, first_name, last_name} = { ...fetchedUser };
  const routeNavigator = useRouteNavigator();
  console.log(fetchedUser?.id);

  //пример запроса
  const handleSubmit = () => {
    const loginData = 123;
    fetch("http://localhost:8000/login/", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        console.log(loginData);
      });
  };

  //counter
  
  const [count, setCount] = useState(0); // Состояние для счётчика
  const [isPressed, setIsPressed] = useState(false); // Состояние для отслеживания нажатия


  // Функция для увеличения счётчика
  const handleTap = () => {
    setCount(count + 1);
    setIsPressed(true); // Картинка опускается при нажатии

    // Возвращаем картинку в исходное состояние через 200 мс
    setTimeout(() => {
      setIsPressed(false);
    }, 100);
  };

  return (
    <SplitLayout>
      <SplitCol>
        <Panel id={id}>
          <PanelHeader>Главная</PanelHeader>
          <Group>
            <div className="container">
              <div className="header">
                <div className="coins">
                  <img src={coins} alt="coins" />
                  <span>150</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" />
                </div>
              </div>
              <div className="character-section">
                <div className="character-section">
                  <div className="character-name">Невдупленыш</div>
                  <div className="counter">Счётчик тапов: {count}</div>
                  <img
                    src={Bars}
                    alt="Bars"
                    className={`Bars ${
                      isPressed ? "pressed" : ""
                    }`} /* Добавляем класс при нажатии */
                    onClick={handleTap} /* Событие нажатия на картинку */
                    style={{
                      cursor: "pointer",
                      transition: "transform 0.1s ease",
                    }} /* Анимация плавного перехода */
                  />
                </div>
              </div>
              <div className="icons">
                <img src={beITMO} alt="beITMO" className="icon" onClick={() => routeNavigator.push("article")}
/>
                <img src={tasks} alt="tasks" className="icon" />
                <img src={article} alt="article" className="icon" />
                <img src={ITMOshop} alt="ITMOshop" className="icon" />
              </div>
              {/* <Button onClick={() => handleSubmit()}>А что делать-то?</Button> */}
            </div>
          </Group>
        </Panel>
      </SplitCol>
    </SplitLayout>
  );
};
