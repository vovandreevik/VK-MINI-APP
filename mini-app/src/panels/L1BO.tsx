import { FC, useState } from "react";
import {
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  Input,
  Button,
} from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import "@vkontakte/vkui/dist/vkui.css";
import { UserInfo } from "@vkontakte/vk-bridge";

import beopen from "../assets/be open.svg";
import image12 from "../assets/image 12.svg";
import vector from "../assets/Vector.svg";
import money150 from "../assets/money150.svg";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const L1BO: FC<HomeProps> = ({ id, fetchedUser }) => {
  const routeNavigator = useRouteNavigator();

  // Состояние для отслеживания кода, введённого пользователем
  const [codeWord, setCodeWord] = useState<string>("");
  // Состояние для отслеживания, ввел ли пользователь правильный код
  const [isCodeCorrect, setIsCodeCorrect] = useState<boolean>(false);

  // Обработчик изменения ввода
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeWord(e.target.value);
  };

  // Обработчик отправки формы
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (codeWord === "Поликек52") {
      setIsCodeCorrect(true);
      alert("Поздравляем! Вы получили 150 коинов!");
      // Здесь может быть логика для начисления коинов пользователю
    } else {
      alert("Неправильное кодовое слово. Попробуйте снова.");
    }
  };

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        Библиотека
      </PanelHeader>
      <Placeholder>
        <>
          <header>
            <div>
              <div className="image-container">
                <img src={vector} alt="vector" />
                <img src={beopen} alt="beopen" />
              </div>
            </div>
          </header>
          <div className="container">
            <div className="title">
              <h1>Тссс!</h1>
            </div>
            <div className="text">
              <div className="text-h">
                <h2>Библиотека</h2>
              </div>
              <div className="text-p">
                <p>
                  Читателям доступны книги из библиотечного фонда Университета
                  ИТМО, а также электронных библиотек ЛитРес, Альпина, ЭБС
                  “Лань”, iBooks, Cambridge University Press и других
                </p>
              </div>
            </div>
            <div className="vkpo">
              <div className="vkpo-div">
                <h2>Напиши кодовое слово, которое узнал от сотрудника</h2>
              </div>
              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    placeholder="Введите кодовое слово"
                    value={codeWord}
                    onChange={handleInputChange}
                    required
                    disabled={isCodeCorrect} // Блокируем ввод после успешного ввода кода
                  />
                  <div className="money150">
                    <img className="moneyimg" src={money150} alt="money150" />
                  </div>
                  <Button
                    className="submit"
                    type="submit"
                    disabled={isCodeCorrect}
                  >
                    {isCodeCorrect ? "Награда получена" : "Отправить"}
                  </Button>
                </form>
                <div className="image-don">
                  <img src={image12} alt="image12" />
                </div>
              </div>
            </div>
          </div>
        </>
      </Placeholder>
    </Panel>
  );
};
