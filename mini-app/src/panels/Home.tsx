import "@vkontakte/vkui/dist/vkui.css";
import { FC, useState, useEffect } from "react";
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
import Bars1 from "../assets/Bars1.png"; // Изображение для 1-го уровня
import Bars2 from "../assets/Bars2.png"; // Изображение для 2-го уровня

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

  const MAX_COUNT = 200;
  const levelThreshold = MAX_COUNT; // Максимальное значение для прогресс-бара
  
  // Функция для увеличения счётчика
  const handleTap = () => {
    if (count < MAX_COUNT) {
      setCount(count + 1);
      setIsPressed(true);
    }
    setTimeout(() => {
      setIsPressed(false);
    }, 100);
  };

  interface UserData {
    id: number;
    levelNumber: number;
    levelText: string;
    countOfMoney: number;
    countOfExp: number;
  }

  const isSecondLevel = count >= levelThreshold;
  const BarsImage = isSecondLevel ? Bars2 : Bars1;
  const characterName = isSecondLevel ? "Гигачад" : "Невдупленыш"; // Меняем имя персонажа
  const [userData, setUserData] = useState<UserData | null>(null);

  // Вычисляем ширину прогресс-бара в процентах
  const progressWidth = (count / MAX_COUNT) * 100;

  const fetchUserData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/user", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: fetchedUser?.id }), // Отправляем id пользователя
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response from backend:", data);

      setCount(data.user.countOfExp); // Используем setCount для обновления состояния
      setUserData(data); // Сохраняем данные пользователя
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    if (fetchedUser?.id) {
      fetchUserData(); // Выполняем асинхронный запрос только если id существует
    }
  }, [fetchedUser?.id]);

  const sendUserDataOnUnload = async () => {
    if (!userData) return;
    try {
      const response = await fetch("http://localhost:8000/api/user/update", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: fetchedUser?.id,
          levelNumber: 1,
          levelText: "Гигачад",
          countOfMoney: 123, // Исправлено на число
          countOfExp: count, // Отправляем текущее значение count
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      console.log("User data sent on page unload");
    } catch (error) {
      console.error("There was a problem with the unload fetch operation:", error);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      sendUserDataOnUnload(); // Вызываем асинхронную функцию для отправки данных
      event.returnValue = "";
    };

    // Добавляем слушатель события
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Убираем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [userData]);

  const handleTasksClick = () => {
    sendUserDataOnUnload(); // Обновляем данные пользователя
    routeNavigator.push("tasks");
  };

  const handleShopClick = () => {
    sendUserDataOnUnload(); // Обновляем данные пользователя
    routeNavigator.push("shop");
  };

  return (
    <SplitLayout>
      <SplitCol>
        <Panel id={id}>
          <PanelHeader>Главная</PanelHeader>
          <Group>
            <div className="home-container">
              <CoinsProgressBar coins={150} progressWidth={progressWidth} />
              <div className="character-section">
                <div className="character-name">{characterName}</div>
                <img
                  src={BarsImage}
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
                  onClick={handleTasksClick}
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
                  onClick={handleShopClick}
                />
              </div>
            </div>
          </Group>
        </Panel>
      </SplitCol>
    </SplitLayout>
  );
};
