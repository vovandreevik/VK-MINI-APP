import "@vkontakte/vkui/dist/vkui.css";

import { FC, useState } from "react";
import {
  Panel,
  PanelHeader,
  Group,
  SplitLayout,
  NavIdProps,
  SplitCol,
} from "@vkontakte/vkui";
import { UserInfo } from "@vkontakte/vk-bridge";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";

// Мое
import beITMO from "../assets/beITMO.png";
import tasks from "../assets/tasks.png";
import article from "../assets/article.png";
import ITMOshop from "../assets/ITMOshop.png";
import Bars from "../assets/Bars.png";

import "./Home.css";
import { CoinsProgressBar } from "../components/CoinsProgressBar";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ id, fetchedUser }) => {
  const routeNavigator = useRouteNavigator();
  console.log(fetchedUser?.id);

  // Состояние для счётчика
  const [count, setCount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);

  const MAX_COUNT = 10;
  const maxCounter = MAX_COUNT / 2; // Максимальное значение для прогресс-бара (установите на ваше усмотрение)

  // Функция для увеличения счётчика
  const handleTap = () => {
    if (count < maxCounter) {
      setCount(count + 1);
      setIsPressed(true);
    }

    setTimeout(() => {
      setIsPressed(false);
    }, 100);
  };

  // Вычисляем ширину прогресс-бара в процентах
  const progressWidth = (count / MAX_COUNT) * 100;

  return (
    <SplitLayout>
      <SplitCol>
        <Panel id={id}>
          <PanelHeader>Главная</PanelHeader>
          <Group>
            <div className="home-container">
              <CoinsProgressBar coins={150} progressWidth={progressWidth} />
              <div className="character-section">
                <div className="character-name">Невдупленыш</div>
                <img
                  src={Bars}
                  alt="Bars"
                  className={`Bars ${isPressed ? "pressed" : ""}`}
                  onClick={handleTap}
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.1s ease",
                  }}
                />
              </div>

              <div className="icons">
                <img
                  src={beITMO}
                  alt="beITMO"
                  className="icon"
                  onClick={() => routeNavigator.push("beITMO")}
                />
                <img
                  src={tasks}
                  alt="tasks"
                  className="icon"
                  onClick={() => routeNavigator.push("tasks")}
                />
                <img
                  src={article}
                  alt="article"
                  className="icon"
                  onClick={() => routeNavigator.push("article")}
                />
                <img
                  src={ITMOshop}
                  alt="ITMOshop"
                  className="icon"
                  onClick={() => routeNavigator.push("shop")}
                />
              </div>
            </div>
          </Group>
        </Panel>
      </SplitCol>
    </SplitLayout>
  );
};
