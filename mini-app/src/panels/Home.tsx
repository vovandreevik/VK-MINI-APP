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
  View
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
        console.log(loginData);
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
      <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
        <Epic
          activeStory={activeStory}
          tabbar={
            viewWidth.tabletMinus && (
              <Tabbar className={viewWidth.tabletMinus.className}>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === "feed"}
                  data-story="feed"
                  text="Новости"
                >
                  <Icon28NewsfeedOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === "services"}
                  data-story="services"
                  text="Сервисы"
                >
                  <Icon28ServicesOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === "messages"}
                  data-story="messages"
                  indicator={
                    <Counter size="s" mode="prominent">
                      12
                    </Counter>
                  }
                  text="Сообщения"
                >
                  <Icon28MessageOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === "clips"}
                  data-story="clips"
                  text="Клипы"
                >
                  <Icon28ClipOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === "profile"}
                  data-story="profile"
                  indicator={<Badge mode="prominent">Есть обновления</Badge>}
                  text="Профиль"
                >
                  <Icon28UserCircleOutline />
                </TabbarItem>
              </Tabbar>
            )
          }
        >
          <View id="feed" activePanel="feed">
            <Panel id="feed">
              <PanelHeader before={<PanelHeaderBack onClick={noop} />}>
                Новости
              </PanelHeader>
              <Group style={{ height: "1000px" }}>
                <Placeholder
                  icon={<Icon56NewsfeedOutline width={56} height={56} />}
                />
              </Group>
            </Panel>
          </View>
          <View id="services" activePanel="services">
            <Panel id="services">
              <PanelHeader before={<PanelHeaderBack onClick={noop} />}>
                Сервисы
              </PanelHeader>
              <Group style={{ height: "1000px" }}>
                <Placeholder
                  icon={<Icon28ServicesOutline width={56} height={56} />}
                ></Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="messages" activePanel="messages">
            <Panel id="messages">
              <PanelHeader before={<PanelHeaderBack onClick={noop} />}>
                Сообщения
              </PanelHeader>
              <Group style={{ height: "1000px" }}>
                <Placeholder
                  icon={<Icon28MessageOutline width={56} height={56} />}
                ></Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="clips" activePanel="clips">
            <Panel id="clips">
              <PanelHeader before={<PanelHeaderBack onClick={noop} />}>
                Клипы
              </PanelHeader>
              <Group style={{ height: "1000px" }}>
                <Placeholder
                  icon={<Icon28ClipOutline width={56} height={56} />}
                ></Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="profile" activePanel="profile">
            <Panel id="profile">
              <PanelHeader before={<PanelHeaderBack onClick={noop} />}>
                Профиль
              </PanelHeader>
              <Group style={{ height: "1000px" }}>
                <Placeholder
                  icon={<Icon28UserCircleOutline width={56} height={56} />}
                ></Placeholder>
              </Group>
            </Panel>
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};
