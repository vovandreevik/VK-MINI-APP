import { FC } from "react";
import bridge from "@vkontakte/vk-bridge"; // Импортируем VK Bridge
import "./CoinsProgressBar.css";
import coinsIcon from "../assets/coins.png";

interface CoinsProgressBarProps {
  coins: number;
  progressWidth: number; // Прогресс в процентах
}

export const CoinsProgressBar: FC<CoinsProgressBarProps> = ({
  coins,
  progressWidth,
}) => {
  // Функция для показа слайдов о коинах
  const showCoinsSlide = () => {
    bridge
      .send("VKWebAppShowSlidesSheet", {
        slides: [
          {
            media: {
              blob: "data:image/png;base64,JVBERi0xLjcKCjEgMCBvYmoKICA8PCA+PgplbmRvYmoKCjIgMCBvYmoKICA8PCAvRmlsdGVyIC9GbGF0ZURlY29kZQogICAgIC9MZW5ndGggMyAwIFIKICA+PgpzdHJlYW0KeAFtkUFOAzEMRfc5RS5AmtiJk2wBiTVwhFERSLQSqsT5+Rlm7FStN+O8Sexv/8Pz8fdrOb69PPqnd3ew03JxPy6FuIaPe/Kg2e0/TZbT/LLG0hohwRHhL8vZcQo9SuXmE242iZH8aaXSuIpPeEadWvNM+zswFumFrxk+CL84oznkWlPJnnJoLKUU655kzxQtroYknHM2ponWUjL31BRwEwfESSgPtM0A1JmEpmEhN9Tck0QvodYmtfseSsqRKnqiJGISq2hxRJBUorBBaoE45cyjmHTOyWOXrYlA+GgqXNt4C3qz92/3OfO+8ys/2j6LbRlsG/mK4YMYvYwOxesSzRC9aDMqmgxRhh2uMRUzpLdmR1Qe0OaITgG0OaLjQvDuSMo3lqAriiImvcZmU4yaK6PgjS3ofMcW0H89wxbrxZqdnC3RqC0btQpRy7NVpPfQy2iE5nWTVtE63ssmYwxil2tM9QzprckZU6jVbBCra2zBKj7c2b26P4dl5pgKZW5kc3RyZWFtCmVuZG9iagoKMyAwIG9iagogIDM4MAplbmRvYmoKCjQgMCBvYmoKICA8PCAvQW5ub3RzIFtdCiAgICAgL1R5cGUgL1BhZ2UKICAgICAvTWVkaWFCb3ggWyAwLjAwMDAwMCAwLjAwMDAwMCAzMi4wMDAwMDAgMzYuMDAwMDAwIF0KICAgICAvUmVzb3VyY2VzIDEgMCBSCiAgICAgL0NvbnRlbnRzIDIgMCBSCiAgICAgL1BhcmVudCA1IDAgUgogID4+CmVuZG9iagoKNSAwIG9iagogIDw8IC9LaWRzIFsgNCAwIFIgXQogICAgIC9Db3VudCAxCiAgICAgL1R5cGUgL1BhZ2VzCiAgPj4KZW5kb2JqCgo2IDAgb2JqCiAgPDwgL1BhZ2VzIDUgMCBSCiAgICAgL1R5cGUgL0NhdGFsb2cKICA+PgplbmRvYmoKCnhyZWYKMCA3CjAwMDAwMDAwMDAgNjU1MzUgZgowMDAwMDAwMDEwIDAwMDAwIG4KMDAwMDAwMDAzNCAwMDAwMCBuCjAwMDAwMDA0OTggMDAwMDAgbgowMDAwMDAwNTIwIDAwMDAwIG4KMDAwMDAwMDY5MyAwMDAwMCBuCjAwMDAwMDA3NjcgMDAwMDAgbgp0cmFpbGVyCjw8IC9JRCBbIChzb21lKSAoaWQpIF0KICAgL1Jvb3QgNiAwIFIKICAgL1NpemUgNwo+PgpzdGFydHhyZWYKODI2CiUlRU9G", // Сюда нужно вставить изображение в base64
              type: "image",
            },
            title: "Это коины",
            subtitle:
              "Зарабатывай их выполнением заданий и трать на легендарный мерч ИТМО",
          },
        ],
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Функция для показа слайдов о прогрессе
  const showProgressSlide = () => {
    bridge
      .send("VKWebAppShowSlidesSheet", {
        slides: [
          {
            media: {
              blob: "/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAkACADAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+sj9oX9sLX7XXdW8EfCuaLTLXSp59N1XxcYorm/u76B2hvINDjnWS3s7S3kWSA6g8Ut3cSq0tkbOOOKe5/wAVPpd/tEOK8DxRn/hj4E4mhkmByHFYrJs+8QZUKGMzXMMzw05YbMcLwxSxMK2Dy7AYOtGrhXm9ShiMfi8RCVfLZZfRo0MVjP7Z8IPo65TXyrL+KOPKVTHV8fSpY3AcPKpOjhMPhasVUw9XNJ0pQrYnEVoOFX6nGpTw9GnJU8SsROc6VH4G1zxX4o8TXD3fiPxFrmu3MhYtPq+q32oyHcclQ13PLtT0RcIoACqAAK/yh4n494442xlTMOMeMOJ+KcbVcnUxPEGe5nm9VqTu4KWPxVdwp30jShy04JKMYqKSX9ZZXkGR5JRjh8mybK8qoQty0svwGFwcNFZNrD0qd5d5SvJu7bbbYaH4s8UeGJ0ufDniPXNBnjYOsmj6rfacwYHPP2SeIMDk7lYFWBIYEEgvhfj7jngjE08ZwbxjxRwriqU1UhW4ez7NMnmpJ83vfUMVQU4ybfPCalCalKM4yjJprNMgyLPKUqOc5Nlea0pxcZQzHAYXGKzVtPrFKpZrSzjZxaTTTSZ97/s9ftha/c69pfgr4rXMeqWusXUOn6V4u8m3tLywvrmURWkGtR20cNrc2E8rx241BY4biyYrLetcwNLPbf6tfRE/aI8WY3ivJPDTx5xtHPMDxFjsNlGReIP1fCZfmOVZpja6oZfhOJaWCo4bA4zKsVXq0sIs3hRw+Ly2bhXzKeNws8RisF/J/i/9HXKaOU47ibgKhPA18uoVMZj+HvaVsRhsXhaEHUxFXLJ1p1a9HF0oRnV+pudSjiYqVPDKhVjTpVviH4j+Btd+HPjPXfCfiCCeO8069n8i5mVtmq6fJLIbHV7aVgBPbahABMsi5KyGWCYR3EM0Sf5j+MvhfxR4O+JHFHAPFuFxVHMcnzLFfVcbiYT9nnuUVcRVeWcQYKvNJYrB5thoxxMK0W5QrOvhcRGljMNiaFL+n+DOKcr4y4byvP8AKKtKeGxmGpe1oUnHmwGLhTgsVl9eCd6VbCVW6coPSUFCrTc6NSnOXDV+YH1AUAdz8N/A2ufEbxnoXhPQILiS81G9h8+5gRiNL0+KVGvtWuJBhYILGEmXzHZQ0vlQRlp5okf9Q8GfC/ifxi8SOF+AeE8Ni6uYZvmWHeLxuFpzlHI8ooV6Uszz7F1o2jhsLleGcq/tak4KeI+r4Wk5YnE0KdT5bjPinK+DeGs0z/NqtGGHweGqeyoVZJPHYycJLC4ClB3dWriqtqfJFS5aftKs0qVOpKP3bqvxE8G3mqXPwY/az8NtJqfhiZ7Tw78SYoL6O41HTTLs0/Vbm60wDUoBqdvFDNNfWSz6ddyrJHq9ja3Ftcsf9Tc98X/DjMM8xn0b/p+cGSq51wTiamA4P8Z6OEzSli84yWVf2eUZ9jMdkijnOFWd4Whh8RiM0yyGKyjMK8KtLiHLMDi8FjZy/lfAcH8SYfA0fEn6P+dKGCzynHEZxwXOrhZ0sHjVT5sZgKNDG3wdV4GrOpTp4XEuljMPBwnl+Kr0a1FKJf2MPhX4yAvfhv8AGgTWE5DxI0Wh+LmQON/kmTS9U0J1dBlTHNEJ4yCsql1bOEf2bvgR4jRjmfg19JOOIyvFSVShTlR4Y8QZUlUXtPq8q2R53wtUhVpx5oujiaEcTRceTERdSnUvb+knx5w23heM/DV08VSTjUkp5pw8pOPu+0UMdgc1jKMnZqdOo6U0703yyiDfsYfCvwaftvxH+NKwafCFaWMRaH4Rd8E/IJtU1TXGIkIKCOKAynkI27BCn+zc8CfDmX9peMn0k44bKMOozrUVQ4Y8PqtW0n+7jic8zziiclVcXTVKhhXiJtSjSnz2cSP0k+POJF9W4M8NHVxdS8YT9pmnEMY3XxOngcDlaXImpOdSqqa0cly7yaT8R/BtvqFp8F/2TfDUsGp+I547PxF8S5bO4a6tNJjKrqOsW1zqH/EyuHsopJpY77UkstOsZyI9I0+aa8tZYt8g8Y/DnCZvl/0bfoC8GVsLnfGOKo5dxh41YjLsZPHZfkFFxhnHEWDxub/8LOLq5bQrYivQzPOaeXZPleKlGhw9lOIxOY4CtQjMODeJK2DxHiV4/wCdQq4HJqU8Tk/BNPEUY0MRj53eDy6tRwf+xUo4mpCnTnhcFLE4zFUk55ji6dPDV4VF1X4ieDbzVLn4MftZ+G2k1PwxM9p4d+JMUF9Hcajppl2afqtzdaYBqUA1O3ihmmvrJZ9Ou5Vkj1extbi2uWLz3xf8OMwzzGfRv+n5wZKrnXBOJqYDg/xno4TNKWLzjJZV/Z5Rn2Mx2SKOc4VZ3haGHxGIzTLIYrKMwrwq0uIcswOLwWNnIwHB/EmHwNHxJ+j/AJ0oYLPKccRnHBc6uFnSweNVPmxmAo0MbfB1Xgas6lOnhcS6WMw8HCeX4qvRrUUol/Yw+FfjIC9+G/xoE1hOQ8SNFofi5kDjf5Jk0vVNCdXQZUxzRCeMgrKpdWzhH9m74EeI0Y5n4NfSTjiMrxUlUoU5UeGPEGVJVF7T6vKtked8LVIVaceaLo4mhHE0XHkxEXUp1L2/pJ8ecNt4XjPw1dPFUk41JKeacPKTj7vtFDHYHNYyjJ2anTqOlNO9N8sog37GHwr8Gn7b8R/jSsGnwhWljEWh+EXfBPyCbVNU1xiJCCgjigMp5CNuwQp/s3PAnw5l/aXjJ9JOOGyjDqM61FUOGPD6rVtJ/u44nPM84onJVXF01SoYV4ibUo0p89nEj9JPjziRfVuDPDR1cXUvGE/aZpxDGN18Tp4HA5WlyJqTnUqqmtHJcu8mk/Efwbb6hafBf9k3w1LBqfiOeOz8RfEuWzuGurTSYyq6jrFtc6h/xMrh7KKSaWO+1JLLTrGciPSNPmmvLWWLfIPGPw5wmb5f9G36AvBlbC53xjiqOXcYeNWIy7GTx2X5BRcYZxxFg8bm/wDws4urltCtiK9DM85p5dk+V4qUaHD2U4jE5jgK1CMw4N4krYPEeJXj/nUKuByalPE5PwTTxFGNDEY+d3g8urUcH/sVKOJqQp054XBSxOMxVJOeY4unTw1eFT7h+IXwq8B/FLT4tO8baBb6stsWNjeK81nqens5VnNlqNpJDdwpIUQyweY1tPtUTwyAAV/p34u+BHhX455RQyfxL4TwefQwTnLLMxjUxGX53lM6koSqPLc4wFXD4/DU6sqcHXwvtpYPFckVisNWjFI/l/hDj3ivgTF1MZwzm1bAOvyrFYZxp4jA4tRTUfrODxEKlCpKClJU6vIq1LmbpVINtn5JftC/Bvwv8KtYnsvDl5rlzAJVCjWLqxuWVXK/KGtNNsCQobCltzYA3MxyT/z/AP0u/o58DeA/EWJy3g3MeKMbhY1oKC4hx+V42cI1ZUnyRngMmytuMFUcYOfNOyjzynK8pf6CeEHiPnvHuXUsTnOGyuhVcHzPLqGKoRk4qWrWIxuKs5ct3y2V2+VJWSb+z98HfC/xT8QwaZ4jvNctrZkSVv7IurG2kbqShe702+wjYwdoV8E7XBwRn9En6OvA/jrxdhcl4xzHifBYKdGFep/q/jsswVWbTk3TdTH5NmiVOajyy5IxqJN8tSMrSVeLniNnnAmUVcbk2GyutXUpQj/aFDFVoR2Sko4fG4W8le65m43SvFq6f64fD34WeBPhdprab4K0C10pZljF9fEvdarqTRg7X1DUrgyXVwAxd44N6WsDO4treFG21/0DeEfgV4WeBuSzyXw14UwORQxMaSzPNJOpjc+zqpRT5KubZzi5Vcdi1GcqlSlhfawwGElVqLBYTDU5OB/nxxfx3xVx1jY43iXNq+PdJzeFwq5aGAwUZ7xwmCoqFCldKMZ1eWVeqox9vWqyXMD/2Q==", // Изображение в base64
              type: "image",
            },
            title: "Это твой прогресс",
            subtitle: "Он увеличивается за тапанье и выполненные задания",
          },
        ],
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="coins-progress-container">
      <div className="coins" onClick={showCoinsSlide}>
        <img src={coinsIcon} alt="coins" />
        <span>{coins}</span>
      </div>
      <div className="progress-bar" onClick={showProgressSlide}>
        <div
          className="progress"
          style={{ width: `${progressWidth}%` }}
        />
      </div>
    </div>
  );
};
