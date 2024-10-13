import { FC, useState } from "react";
import { UserInfo } from '@vkontakte/vk-bridge';
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import "@vkontakte/vkui/dist/vkui.css";

import {
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  Header,
  Button,
  Group,
  Div,
  NavIdProps,
  SplitLayout,  // Импорт компонента
  SplitCol,
  Epic,
} from '@vkontakte/vkui';

import "./Article.css"


export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Article: FC<HomeProps> = ({ id, fetchedUser }) => {
  console.log(fetchedUser?.id);
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        Что это?
      </PanelHeader>
      <Placeholder>
        <div className="article-container">
          <div className="header">
            <h1>А что делать-то?</h1>
          </div>
          <div className="description">
            <p>
              Это Барс — символ университета, а еще твой помощник, который
              познакомит тебя с культурой ИТМО. <br /> Пока что он больше похож
              на котенка-невдупленыша, но с твоей помощью он превратится в
              гигачада.
            </p>
          </div>
          <h2>Все просто:</h2>
          <div className="instructions">
            <ul>
              <li>Выполняй задания от направлений be ИТМО;</li>
              <li>Заполняй шкалу прогресса;</li>
              <li>Развивай персонажа;</li>
              <li>Зарабатывай баллы и крутые ачивки;</li>
              <li>Обменивай баллы на мерч ИТМО.</li>
            </ul>
          </div>
        </div>
      </Placeholder>
    </Panel>
  );
};
