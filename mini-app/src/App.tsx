import { useState, useEffect, ReactNode } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { Home, Article, BEITMO, Tasks, Shop, L1BF } from "./panels";
import { DEFAULT_VIEW_PANELS } from './routes';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState<UserInfo | undefined>();
  const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size="large" />);

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  // Вызываем функцию при загрузке
  setVh();

  // Обновляем значение при изменении размеров окна
  window.addEventListener("resize", setVh);

  useEffect(() => {
    // Показать слайд при первом запуске приложения
    bridge
      .send("VKWebAppShowSlidesSheet", {
        slides: [
          {
            media: {
              blob: "data:image/png;base64,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",
              type: "image",
            },
            title: "Привет, первокурсник! Хочешь узнать больше о своём унике?",
            subtitle:
              "Выполняй задания, развивай персонажа и узнавай все-все о культуре ИТМО",
          },
        ],
      })
      .then((data) => {
        // Если слайд успешно показан
        if (data.result) {
          setPopout(null); // Скрыть спиннер, если слайд показан
        }
      })
      .catch((error) => {
        console.error(error); // Обработка ошибок
      });
  }, []);  

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home id="home" fetchedUser={fetchedUser} />
          <Article id="article" fetchedUser={fetchedUser} />
          <BEITMO id="beitmo" />
          <Tasks id="tasks" />
          <Shop id="shop" />
          <L1BF id="l1bf" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
