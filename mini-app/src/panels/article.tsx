import { FC, useState } from "react";
import { UserInfo } from '@vkontakte/vk-bridge';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Div,
  NavIdProps,
  SplitLayout,  // Импорт компонента
  SplitCol,
  Epic,
} from '@vkontakte/vkui';

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Article: FC<HomeProps> = ({ id, fetchedUser }) => {
  console.log(fetchedUser?.id);

  return(
    <SplitLayout>  
      <SplitCol>
        <Panel>
          <div className="container">
            <div className="header">
              <h1>А что делать то?</h1>
              <img src="dismiss_24.png" alt="Закрыть" className="dismiss-icon" />
            </div>
            <div className="description">
              <p>
                Это Барс — символ университета, а еще твой помощник, который познакомит
                тебя с культурой ИТМО. <br /> Пока что он больше похож на
                котенка-невдупленыша, но с твоей помощью он превратится в гигачада.
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
        </Panel>
      </SplitCol>
    </SplitLayout>
  );
};
