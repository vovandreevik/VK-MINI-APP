import { useState, useEffect, ReactNode } from 'react';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

import { Home, Article } from './panels';
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
    bridge.send('VKWebAppShowSlidesSheet', {
      slides: [
        {
          media: {
            blob: 'D:\study\hakaton ITMO\src\assets', // Здесь добавьте ваши данные изображения в base64
            type: 'image',
          },
          title: 'Привет, первокурсник! Хочешь узнать больше о своём унике?',
          subtitle: 'Выполняй задания, развивай персонажа и узнавай все-все о культуре ИТМО',
        }
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
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
