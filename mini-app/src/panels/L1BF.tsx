import { FC, useState } from "react";
import {
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,
  Button,
} from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import beFriendly from "../assets/beFriendly_text.png";
import heart from "../assets/beFriendly.svg";
import money150 from "../assets/coins.png";
import "@vkontakte/vkui/dist/vkui.css";
import { UserInfo } from "@vkontakte/vk-bridge";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

import "./L1BF.css";

export const L1BF: FC<HomeProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [rewardClaimed, setRewardClaimed] = useState(false);

  const openVkLink = () => {
    window.open("https://vk.com/donor_itmo", "_blank");
    setIsSubscribed(true); 
  };

  const claimReward = () => {
    if (isSubscribed) {
      setRewardClaimed(true);
      alert("Поздравляем! Вы получили 150 коинов!");
    } else {
      alert("Сначала подпишитесь на группу ВК!");
    }
  };

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        Донорство крови
      </PanelHeader>
      <Placeholder>
        <>
          <header>
            <div>
              <div className="image-container">
                <img src={heart} alt="love" />
                <img src={beFriendly} alt="befriendly" />
              </div>
            </div>
          </header>
          <div className="container">
            <div className="title">
              <h1>Как комарик укусит</h1>
            </div>
            <div className="text">
              <div className="text-h">
                <h2>Донорство крови</h2>
              </div>
              <div className="text-p">
                <p>
                  Университет ИТМО — гордый носитель донорской ячейки — от 2 до
                  4 раз в семестр проводит «День донора», где каждый сотрудник
                  или студент может сдать кровь, не уходя с работы или занятий.
                  Более 200 человек ежегодно становятся донорами на площадках
                  вуза!
                </p>
              </div>
            </div>
            <div className="image-don">
              <img
                src={
                  "https://dreamy-cobbler-6fa517.netlify.app/images/be_friendly.png"
                }
                alt="donor"
              />
            </div>
            <div className="vkpo">
              <div className="vkpo-div">
                <h2>Подпишись на группу ВК, чтобы получить награду</h2>
              </div>
              <div className="money150">
                <img className="moneyimg" src={money150} alt="money150" />
                150
              </div>
            </div>
          </div>
          <footer>
            <div className="footer-container">
              <Button
                className="subscribe-button"
                onClick={openVkLink}
                disabled={isSubscribed}
              >
                {isSubscribed ? "Вы подписались" : "Подписаться"}
              </Button>
              <Button
                className="reward-button"
                onClick={claimReward}
                disabled={rewardClaimed}
              >
                {rewardClaimed ? "Награда получена" : "Забрать награду"}
              </Button>
            </div>
          </footer>
        </>
      </Placeholder>
    </Panel>
  );
};
