import { FC } from 'react';
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
import fon from '../assets/fon.svg';
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
      });
  };

  return (
    <SplitLayout>
      <SplitCol>
        <Panel id={id}>
          <PanelHeader>Главная</PanelHeader>
          <Group header={<Header mode="secondary">Navigation Example</Header>}>
            <Div>
              <Button
                stretched
                size="l"
                mode="secondary"
                onClick={() => routeNavigator.push("persik")}
              >
                Покажите Персика, пожалуйста!
              </Button>
            </Div>
          </Group>
          <Group>
            <div className="container">
              <div className="header">
                <div className="coins">
                  <img src="coin.png" alt="coins" />
                  <span>150</span>
                </div>
                <div className="progress-bar">
                  <div className="progress" />
                </div>
                <div className="icons">
                  <img src="calendar.png" alt="calendar" />
                  <img src="bag.png" alt="bag" />
                  <img src="checklist.png" alt="checklist" />
                </div>
              </div>
              <div className="character-section">
                <div className="character-name">Невдупленыш</div>
                <img className="character" src={fon} alt="character" />
              </div>
              <div className="footer">
                <Button onClick={() => handleSubmit()}>А что делать то?</Button>
              </div>
            </div>
          </Group>
        </Panel>
      </SplitCol>
    </SplitLayout>
  );
};
