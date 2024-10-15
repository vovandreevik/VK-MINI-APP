import { FC } from "react";
import { UserInfo } from "@vkontakte/vk-bridge";

import {
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder,

} from "@vkontakte/vkui";
import { useRouteNavigator } from "@vkontakte/vk-mini-apps-router";
import beITMO from "../assets/beITMOinfo.png";
import "./BEITMO.css";
import "@vkontakte/vkui/dist/vkui.css";

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const BEITMO: FC<NavIdProps> = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader
        before={<PanelHeaderBack onClick={() => routeNavigator.back()} />}
      >
        be ITMO
      </PanelHeader>
      <Placeholder>
        <div className="beITMO-container">
          <div className="itmo-image">
            <img src={beITMO} alt="beITMOinfo" />
          </div>
          <div className="description">
            <h2>be ITMO — не просто слова</h2>
            <p>
              be ITMO — стиль жизни Университета ИТМО, основанный на принципах
              благополучия человека и всестороннего развития членов ITMO Family.
            </p>
            <h3>Направления:</h3>
            <ul>
              <li className="be-friendly">
                <span className="be-friendly1">be friendly</span> — социальные
                программы, волонтерские движения, открытые мероприятия для всех
                членов ITMO.FAMILY;
              </li>
              <li className="be-healthy">
                <span className="be-healthy1">be healthy</span> — здоровый образ
                жизни, регулярные занятия спортом, привычки правильного питания,
                а также забота о ментальном и физическом здоровье;
              </li>
              <li className="be-fit">
                <span className="be-fit1">be fit</span> — культура здорового
                образа жизни через создание условий для занятий физической
                культурой, организацию спортивно-массовых мероприятий и
                популяризацию активной физической среды ИТМО;
              </li>
              <li className="be-eco">
                <span className="be-eco1">be eco</span> — в рамках реализации
                концепции «Зеленого кампуса» Университета ИТМО создаем
                инфраструктуру для внедрения практик осознанного потребления, а
                также разрабатываем образовательные программы в области
                устойчивого развития;
              </li>
              <li className="be-open">
                <span className="be-open1">be open</span> — благоприятная среда
                для научной и образовательной деятельности, досуга и творчества.
                Через создание комфортных пространств стимулируем к общению и
                сотворчеству, повышающим продуктивность и эффективность в учебе
                и работе;
              </li>
              <li className="be-pro">
                <span className="be-pro1">be pro</span> — обеспечиваем условия
                для профессионального роста и самореализации через развитие
                корпоративных связей и культуры, помогая сотрудникам и
                обучающимся раскрыть свой потенциал.
              </li>
            </ul>
          </div>
        </div>
      </Placeholder>
    </Panel>
  );
};
