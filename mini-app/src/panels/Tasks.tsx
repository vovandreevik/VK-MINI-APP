import { FC } from "react";
import {
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  Div,
  Banner,
  Image,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import be_open from "../assets/be_open.png";
import be_friendly from "../assets/be_friendly.png";
import be_fit from "../assets/be_fit.png";
import be_health from "../assets/be_health.png";
import be_eco from "../assets/be_eco.png";
import be_pro from "../assets/be_pro.png";
import { CoinsProgressBar } from "../components/CoinsProgressBar";
import { UserInfo } from "@vkontakte/vk-bridge";
export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import "./Tasks.css";
import { router, routes } from "../routes";

const MAX_COUNT = 100;
const exp = 87;
const progressWidth = (exp / MAX_COUNT) * 100;

export const Tasks: FC<HomeProps> = ({ id, fetchedUser }) => {
  const routeNavigator = useRouteNavigator();
  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        Задания
      </PanelHeader>
      <Placeholder>
        <CoinsProgressBar coins={150} progressWidth={progressWidth} />

        <div className="page-name">Задания</div>

        <Div className="tasks-container">
          <Banner
            before={<Image size={24} src={be_open} />}
            header="Тссс!"
            subheader="Посети библиотеку"
            onClick={() =>
              routeNavigator.push(routes.default_root.default_view.l1bo)
            }
          />
          <Banner
            before={<Image size={24} src={be_friendly} />}
            header="Как комарик укусит"
            subheader="Узнай больше о донорсве крови"
            onClick={() =>
              routeNavigator.replace(routes.default_root.default_view.l1bf)
            }
          />
          <Banner
            before={<Image size={24} src={be_fit} />}
            header="Бегит, турник, анжуманя"
            subheader="Запишись в спортивную секцию"
            onClick={() =>
              routeNavigator.push(routes.default_root.default_view.tasks)
            }
          />
          <Banner
            before={<Image size={24} src={be_health} />}
            header="В ресурсе, в потоке"
            subheader="Подпишись на ΨРесурс"
            onClick={() =>
              routeNavigator.push(routes.default_root.default_view.tasks)
            }
          />
          <Banner
            before={<Image size={24} src={be_eco} />}
            header="Лучший подарок"
            subheader="Обменяй книгу на Буккроссинге"
            onClick={() =>
              routeNavigator.push(routes.default_root.default_view.tasks)
            }
          />
          <Banner
            before={<Image size={24} src={be_pro} />}
            header="Кто куда, а я..."
            subheader="Узнай о студенческой мобильности"
            onClick={() =>
              routeNavigator.push(routes.default_root.default_view.tasks)
            }
          />
        </Div>
      </Placeholder>
    </Panel>
  );
};
