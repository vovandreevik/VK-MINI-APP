import "@vkontakte/vkui/dist/vkui.css";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import { CoinsProgressBar } from "../components/CoinsProgressBar";
import { UserInfo } from "@vkontakte/vk-bridge";

import { FC } from "react";
import {
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
} from "@vkontakte/vkui";
export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}
const MAX_COUNT = 100;
const exp = 65;
const progressWidth = (exp / MAX_COUNT) * 100;

export const Shop: FC<HomeProps> = ({ id, fetchedUser }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        Магазин
      </PanelHeader>
      <Placeholder>
        <>
          <CoinsProgressBar coins={150} progressWidth={progressWidth} />
          <h1>Мерч</h1>
          <div className="merch-container">
            <div className="merch-item">
              <img
                src="https://dreamy-cobbler-6fa517.netlify.app/images/hoodie_itmo.png "
                alt="Толстовка с шевроном"
              />
              <div className="info">
                <span className="price">3 990 🟡</span>
                <p>Толстовка с шевроном</p>
              </div>
            </div>
            <div className="merch-item">
              <img
                src="https://dreamy-cobbler-6fa517.netlify.app/images/cup_itmo.png"
                alt="Кружка From ITMO with love"
              />
              <div className="info">
                <span className="price">1 190 🟡</span>
                <p>Кружка "From ITMO with love"</p>
              </div>
            </div>
            <div className="merch-item">
              <img
                src="https://dreamy-cobbler-6fa517.netlify.app/images/bracelet_itmo.png"
                alt="Браслет пропуск ИТМО"
              />
              <div className="info">
                <span className="price">590 🟡</span>
                <p>Браслет пропуск ИТМО</p>
              </div>
            </div>
            <div className="merch-item">
              <img
                src="https://dreamy-cobbler-6fa517.netlify.app/images/raincoat_itmo.png"
                alt="Дождевик Наука это улет"
              />
              <div className="info">
                <span className="price">1 990 🟡</span>
                <p>Дождевик "Наука это улет"</p>
              </div>
            </div>
            <div className="merch-item">
              <img
                src=" https://dreamy-cobbler-6fa517.netlify.app/images/crocs_itmo.png"
                alt="Тапочки ITMO"
              />
              <div className="info">
                <span className="price">1 990 🟡</span>
                <p>Тапочки ITMO</p>
              </div>
            </div>
            <div className="merch-item">
              <img
                src="https://dreamy-cobbler-6fa517.netlify.app/images/cardholder_itmo.png"
                alt="Чехол для пропуска"
              />
              <div className="info">
                <span className="price">1 990 🟡</span>
                <p>Чехол для пропуска ITMO</p>
              </div>
            </div>
          </div>
        </>
      </Placeholder>
    </Panel>
  );
};

