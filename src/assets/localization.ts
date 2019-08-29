export const messages = {
  ru: {
    title: 'Войси',
    notFound: 'Страница не найдена',
    close: 'Закрыть',
    headline:
      '<a target="_blank" href="https://t.me/voicybot">@voicybot</a> автоматически переводит все голосовые сообщения в текст, если добавить его в групповой чат.',
    add: 'Добавить в Телеграм',
    premise:
      'Если вы ищите статистику проекта, то она доступна на <a target="_blank" href="https://borodutch.com">borodutch.com</a>',
    errors: {
      internal: 'Внутренняя ошибка сервера',
      size: 'Файл должен быть меньше 200 мегабайт',
      keySize: 'Файл ключей должен быть меньше 1 мегабайта',
    },
    recognition: {
      headline:
        'К сожалению, Телеграм ограничивает максимальный размер доступных для ботов файлов до 20 мегабайт. Чтобы обойти этот лимит, мы реализовали распознавание речи прямо на этом вебсайте. Все бесплатно, никакие данные у нас на сервере не хранятся, а код опубликован в <a target="_blank" href="https://github.com/backmeupplz/voicy-landing">открытом доступе</a>. Пользуйтесь на здоровье.',
      wit: {
        headline:
          '<a target="_blank" href="https://wit.ai">Wit.ai</a> — это бесплатный движок распознавания речи. Он поддерживает лишь аудио-записи длинной менее 15 секунд, но Войси автоматически разделяет ваш аудио-файл на отрезки длинной в 15 секунд и распознает их раздельно. Поэтому в районе промежутков между 10-ти секундными интервалами могут появляться странные артефакты. Пожалуйста, введите ключ от вашего Wit-приложения ниже. Можете ознакомиться с <a target="_blank" href="https://medium.com/@nikitakolmogorov/%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BB%D1%8E%D1%87%D0%B0-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-wit-%D0%B4%D0%BB%D1%8F-voicybot-com-7c3791dcea26">инструкцией</a>, как получить ключ.',
        key: 'Ключ Wit-приложения',
      },
      keyHint: 'Мы не храним ваши ключи',
      file: 'Файл для распознавания',
      fileHint: 'Мы не храним ваши файлы',
      gs: {
        headline:
          '<a target="_blank" href="https://cloud.google.com/speech-to-text/">Google Speech</a> — это более продвинутый движок распознавания речи. После того, как Войси получает ваш файл, он загружает его в Google Cloud Storage, распознает при помощи Google Speech, а после удаляет файл с Google Cloud Storage. Пожалуйста, предоставьте ваши ключи от Google Cloud ниже. Можете ознакомиться с <a target="_blank" href="https://medium.com/@nikitakolmogorov/%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B9-google-speech-%D0%B4%D0%BB%D1%8F-voicybot-com-8d05f2f5c425">инструкцией</a>, как получить ключи. Учтите, что Google Speech не бесплатный, цены на распознавание речи указаны в их <a target="_blank" href="https://cloud.google.com/speech-to-text/pricing">справке</a>.',
        key: 'Ключи Google Cloud',
      },
      recognize: 'Распознать',
    },
    uploading: 'Загрузка фаила на сервер Войси',
    noText: 'Похоже, Войси не смог распознать текст в этом файле.',
    recognizing: 'Распознавание речи...',
    result: 'Результат:',
    footer:
      'Проблемы с этим сайтом? Ищите помощь на <a target="_blank" href="https://t.me/borodutch_support">нашем канале поддержки</a>. Удачи!',
    author:
      'Сделано <a target="_blank" href="https://borodutch.com">@borodutch</a> с ❤️',
    language: 'Язык',
  },
  en: {
    title: 'Voicy',
    notFound: 'Page not found',
    close: 'Close',
    headline:
      '<a target="_blank" href="https://t.me/voicybot">@voicybot</a> automatically converts all the audio messages to text when added to a group chat.',
    add: 'Add to Telegram',
    premise:
      'If you\'re looking for the project stats, it\'s available at <a target="_blank" href="https://borodutch.com">borodutch.com</a>',
    errors: {
      internal: 'Internal server error',
      size: 'File should be smaller than 200 megabytes',
      keySize: 'Credentials file should be smaller than 1 megabyte',
    },
    recognition: {
      headline:
        'Unfortunately, Telegram doesn\'t allow bots to download files over 20 megabytes. To bypass this limit, we\'ve implemented voice recognition on this webpage. It\'s free, no data is stored on our servers, and code is completely <a target="_blank" href="https://github.com/backmeupplz/voicy-landing">open-source</a>. Enjoy.',
      wit: {
        headline:
          '<a target="_blank" href="https://wit.ai">Wit.ai</a> is a free voice recognition engine. It only supports voice messages up to 15 seconds long, but Voicy automatically splits your recordings into 10-second intervals and recognizes them separately. Downside is that you can experience weird artifacts in between the 10 second intervals. Please, provide your Wit app key in the form below. Here\'s <a target="_blank" href="https://medium.com/@nikitakolmogorov/getting-wit-app-key-for-voicybot-com-7c150672070b?postPublishedType=initial">an instruction</a> on how to obtain one.',
        key: 'Wit app key',
      },
      file: 'File to recognize',
      fileHint: 'We do not store your files',
      keyHint: 'We do not store your keys',
      gs: {
        headline:
          '<a target="_blank" href="https://cloud.google.com/speech-to-text/">Google Speech</a> is a more advanced voice recognition engine. After Voicy obtains your file, it uploads the file to the Google Cloud Storage, then recognizes it with Google Speech, then deletes the file from the Google Cloud Storage. Please, provide your Google Cloud credentials below. Here\'s <a target="_blank" href="https://medium.com/@nikitakolmogorov/getting-google-speech-credentials-for-voicybot-com-e389e4a4059d">an instruction</a> on how to obtain them. Please, note, that Google Speech is not free, Google will charge you as outlined in their <a target="_blank" href="https://cloud.google.com/speech-to-text/pricing">reference</a>.',
        key: 'Google Cloud credentials',
      },
      recognize: 'Recognize',
    },
    uploading: 'Uploading the file to the Voicy server',
    noText: 'Looks like Voicy was not able to recognize speech in this file.',
    recognizing: 'Speech recognition...',
    result: 'Result:',
    footer:
      'Having issues with this website? Find help on <a target="_blank" href="https://t.me/borodutch_support">our support channel</a>. Cheers!',
    author:
      'Made by <a target="_blank" href="https://borodutch.com">@borodutch</a> with ❤️',
    language: 'Language',
  },
}
