/*
 * Every string on the page, in both languages.
 * The two trees must have the same shape — add a key to one, add it to the other.
 */

export const LANGUAGES = ['ru', 'en']
export const DEFAULT_LANGUAGE = 'ru'

export const content = {
  ru: {
    nav: {
      repertoire: 'Репертуар',
      formats: 'Форматы',
      gallery: 'Фото',
      book: 'Заказать',
    },
    a11y: {
      mainNav: 'Основная навигация',
      langSwitch: 'Переключение языка',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
      logo: 'Гости из прошлого — кавер-группа',
    },
    hero: {
      tagline: 'Живая музыка · Live Music',
      cta1: 'Заказать выступление',
      cta2: 'Репертуар',
    },
    about: {
      eyebrow: 'О группе',
      heading: 'Кавер-группа из Австралии',
      body: 'Гости из прошлого — кавер-группа из Австралии. Играем лучшие русские и зарубежные хиты для вашего события. Корпоративы, свадьбы, фестивали — мы создаём атмосферу живой музыки, которую не забыть.',
    },
    formats: {
      eyebrow: 'Форматы',
      heading: 'Мы играем для любых событий',
      cards: [
        {
          icon: '🏢',
          title: 'Корпоратив',
          text: 'Профессиональное выступление для корпоративных мероприятий. Создадим нужную атмосферу для вашей компании.',
        },
        {
          icon: '💍',
          title: 'Свадьба',
          text: 'Живая музыка — лучший подарок для вашего особого дня. Романтика, веселье и незабываемые воспоминания.',
        },
        {
          icon: '🎪',
          title: 'Фестиваль',
          text: 'Яркое выступление на фестивале или открытой площадке. Заряжаем энергией весь зал.',
        },
      ],
    },
    repertoire: {
      eyebrow: 'Репертуар',
      heading: 'Что мы играем',
      genres: [
        'Русский рок',
        'Поп',
        '80s / 90s',
        'Зарубежные хиты',
        'Танцевальные',
        'Классика',
      ],
      note: 'Играем хиты на заказ. Свяжитесь с нами, чтобы уточнить репертуар.',
    },
    gallery: {
      eyebrow: 'Фото',
      heading: 'Мы на сцене',
      placeholder: 'Фото скоро',
    },
    booking: {
      eyebrow: 'Заказать',
      heading: 'Закажите выступление',
      lead: 'Заполните форму — мы свяжемся с вами в течение 24 часов.',
      name: 'Ваше имя',
      email: 'Email',
      eventType: 'Тип мероприятия',
      eventTypePlaceholder: 'Корпоратив, свадьба, фестиваль...',
      message: 'Сообщение',
      messagePlaceholder: 'Расскажите о вашем мероприятии — дата, место, количество гостей...',
      send: 'Отправить заявку',
      success: 'Заявка отправлена! Мы свяжемся с вами.',
      error: 'Что-то пошло не так. Попробуйте ещё раз.',
      orContact: 'Или свяжитесь с нами напрямую',
      telegram: 'Написать в Telegram',
    },
    footer: {
      copy: '© 2025 Гости из прошлого. Все права защищены.',
      followUs: 'Мы в соцсетях',
    },
  },

  en: {
    nav: {
      repertoire: 'Repertoire',
      formats: 'Formats',
      gallery: 'Gallery',
      book: 'Book Us',
    },
    a11y: {
      mainNav: 'Main navigation',
      langSwitch: 'Language switch',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      logo: 'Guests from the Past — cover band',
    },
    hero: {
      tagline: 'Живая музыка · Live Music',
      cta1: 'Book Us',
      cta2: 'Repertoire',
    },
    about: {
      eyebrow: 'About',
      heading: 'A Cover Band Based in Australia',
      body: 'Guests from the Past — a cover band based in Australia. We play the best Russian and international hits for your event. Corporate events, weddings, festivals — we create a live music atmosphere you won\'t forget.',
    },
    formats: {
      eyebrow: 'Formats',
      heading: 'We Play For Any Occasion',
      cards: [
        {
          icon: '🏢',
          title: 'Corporate Events',
          text: 'Professional live performance for corporate events. We set the perfect tone for your company gathering.',
        },
        {
          icon: '💍',
          title: 'Weddings',
          text: 'Live music is the best gift for your special day. Romance, joy and unforgettable memories.',
        },
        {
          icon: '🎪',
          title: 'Festivals & Live Shows',
          text: 'High-energy performances at festivals and outdoor venues. We bring the whole crowd to life.',
        },
      ],
    },
    repertoire: {
      eyebrow: 'Repertoire',
      heading: 'What We Play',
      genres: [
        'Russian Rock',
        'Pop',
        '80s / 90s',
        'International Hits',
        'Dance Floor',
        'Classics',
      ],
      note: 'We take song requests. Contact us to discuss the set list.',
    },
    gallery: {
      eyebrow: 'Gallery',
      heading: 'On Stage',
      placeholder: 'Photos coming soon',
    },
    booking: {
      eyebrow: 'Book',
      heading: 'Book a Performance',
      lead: 'Fill out the form — we\'ll get back to you within 24 hours.',
      name: 'Your name',
      email: 'Email',
      eventType: 'Event type',
      eventTypePlaceholder: 'Corporate event, wedding, festival...',
      message: 'Message',
      messagePlaceholder: 'Tell us about your event — date, venue, number of guests...',
      send: 'Send Request',
      success: 'Request sent! We\'ll be in touch.',
      error: 'Something went wrong. Please try again.',
      orContact: 'Or contact us directly',
      telegram: 'Message on Telegram',
    },
    footer: {
      copy: '© 2025 Guests from the Past. All rights reserved.',
      followUs: 'Follow Us',
    },
  },
}
