# Blisschool (Next.js One‑Page)

Готовая одностраничная версия сайта Blisschool с видеофоном, галереей и ссылками.

## Запуск локально
```bash
npm install
npm run dev
# открой http://localhost:3000
```

## Публикация бесплатно (Vercel)
1. Зайди на https://vercel.com
2. New Project → **Import** → **Upload** → выбери эту папку
3. Готово. Домен вида https://blisschool.vercel.app

## Замена видеофона
Положи свой файл в: `public/video-bg.mp4` (формат MP4).  
Картинка-заглушка берётся из `/public/images/ABBAD...jpeg`, можно заменить.

## Где менять тексты/ссылки
- `app/page.js` — все тексты и ссылки (Telegram, телефон, WhatsApp)
- `styles/globals.css` — базовые стили, кнопки
- `tailwind.config.js` — цвета

## Фото
Все 10 фотографий помещены в `/public/images` и выведены в галерее.
