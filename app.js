// ===== DATA LAYER =====
const PORTAL_DATA = {
  hero: {
    subtitle: "Единое окно для франчайзи: что сейчас делается, что планируется, чего мы ждём от вас. Обновляется ежедневно.",
    status: "Активно"
  },

  tasks: [
    // ── ВЫПОЛНЕНО ──
    {
      title: "Wolt-доставка — Астана и Алматы",
      status: "done",
      tag: "Q1 2026",
      description: "Запущен дополнительный канал продаж: Астана — 500+ тортов/мес, Алматы — 300+ тортов/мес. Потенциал доставки подтверждён — готовим масштабирование на новые города."
    },
    {
      title: "Новинки ассортимента Q1",
      status: "done",
      tag: "Q1 2026",
      description: "Запущено 6 новых продуктов: ПП Медовый, ПП Ягодный, Сладкий венок, Полумесяц, Ёлка, Новогодний венок. Дегустации прошли в Астане и Алматы."
    },
    {
      title: "Сезонные акции — Рамадан и Новый год",
      status: "done",
      tag: "Q1 2026",
      description: "Проведена новогодняя кампания «Напиши письмо Деду Морозу» — охват почти вся сеть. Запущены ифтар-сеты в Рамадан: чайные десерты + миксы + мини-торт, скидки до 10%. Инструмент подтверждён."
    },
    {
      title: "Обучение команды — Q1",
      status: "done",
      tag: "Q1 2026",
      description: "Обучено около 40 сотрудников: кондитеры (январь–февраль), оформители, кассиры (сервис, коммуникация, стандарты). Записана база знаний — единая система обучения сети."
    },
    {
      title: "Повышение цен в сети",
      status: "done",
      tag: "Q1 2026",
      description: "С 4 марта 2026 повышение цен проведено в 19 городах. Регулярные аудиты производственных цехов. Шаг к росту маржинальности сети."
    },
    {
      title: "Рост сети — Q1 2026",
      status: "done",
      tag: "Q1 2026",
      description: "Открыто 15+ новых точек за квартал: Астана (8 новых адресов), Ташкент (2), Алматы, Тараз, Шымкент, Талдыкорган, Сатпаев. Сеть активно расширяется."
    },
    {
      title: "Маркетинговая стратегия — Алматы",
      status: "done",
      tag: "Q1 2026",
      description: "Разработана маркетинговая стратегия для г. Алматы. Фокус на локальном усилении позиций. Регулярные фотосессии — единый визуальный стандарт сети."
    },
    {
      title: "Портал франчайзи",
      status: "done",
      description: "Портал запущен и обновляется как единое окно для франчайзи: статусы задач, обратная связь и запись в пилоты."
    },
    {
      title: "Канал Happy Life",
      status: "done",
      description: "Канал подготовлен к рабочим публикациям: права подтверждены, бот подключён, первое сообщение отправлено."
    },
    {
      title: "Мгновенные уведомления о почте",
      status: "done",
      description: "Входящие письма на aizek@agentmail.to мгновенно приходят в рабочую группу с темой, отправителем и содержимым. SSL-сертификат, webhook на выделенном домене."
    },
    {
      title: "Процесс публикаций в Happy Life",
      status: "done",
      description: "Единый процесс запущен: текст → утверждение → публикация в канал → обновление портала. AI-бот подключён к каналу и публикует напрямую."
    },
    {
      title: "Стандарты клиентского сервиса — апрель",
      status: "done",
      tag: "Апрель 2026",
      description: "Разработан и выдан операторам обновлённый скрипт вечерней смены. Охватывает топ-продукты, отработку возражений и стрессовые ситуации. Единый стандарт — по всей сети."
    },
    {
      title: "Актуализация информации о точках",
      status: "done",
      tag: "Апрель 2026",
      description: "Адреса, часы работы и прайс-листы обновлены во всех каналах: Instagram, 2ГИС, Google, Яндекс. Клиент видит актуальные данные там, где ищет."
    },
    {
      title: "Запуск NPS-мониторинга",
      status: "done",
      tag: "Апрель 2026",
      description: "Запущена система замера удовлетворённости клиентов. Пилот проведён, первые данные получены. CALLCENTER: 4.93/5. Внедряем регулярный сбор обратной связи."
    },
    {
      title: "Работа с жалобами клиентов",
      status: "done",
      tag: "Апрель 2026",
      description: "Проведён разбор обращений за март: 143 клиента получили личный звонок. Большинство вопросов закрыты. Работа с оставшимися обращениями продолжается."
    },
    {
      title: "Сокращение времени ожидания на линии",
      status: "done",
      tag: "Апрель 2026",
      description: "IVR-структура сокращена до 9 секунд фикс-части (4 с приветствие + 5 с предупреждение о записи) плюс переменная часть рекламы в очереди от загрузки. Клиент быстрее выходит на оператора. Дальнейшая оптимизация переменной части — через рост пропускной способности call-центра."
    },
    // ── В РАБОТЕ ──
    {
      title: "Контур обратной связи",
      status: "in_progress",
      description: "Обратная связь из портала приходит на email команды. Следующий шаг — автоматическая классификация и ответ через единый рабочий поток."
    },
    {
      title: "Матрица доступности продуктов",
      status: "in_progress",
      description: "Формируем понимание какие продукты доступны в каких точках сети. Основа для управления ассортиментом и предотвращения потерь продаж."
    },
    {
      title: "Аналитика и контроль по локациям",
      status: "in_progress",
      description: "Регулярные аудиты производственных цехов, финансовый контроль. Цель — прозрачная картина по каждой точке и обоснованные управленческие решения."
    },
    {
      title: "Развитие новых рынков — Ташкент и Душанбе",
      status: "in_progress",
      description: "В Ташкенте открыты 2 новые точки. Контроль строительства в Душанбе — онлайн и выездной. Таджикистан в плане на Q2."
    },
    {
      title: "Новинки ассортимента Q2",
      status: "in_progress",
      description: "«Киевский», «Норвежский», Эклеры, Шу — дегустации проведены, собираем обратную связь. Дизайны подготовлены до мая. Доработка по итогам обратной связи и поэтапный вывод на сеть."
    },
    // ── ПЛАНИРУЕТСЯ ──
    {
      title: "Масштабирование партнёров до 10+ точек",
      status: "planned",
      description: "Цель по итогам стратсессий: партнёры с 10+ точками. Отбор идёт по показателям рейтинга (выше 4,8), снижению жалоб и росту NPS в 1,3 раза."
    },
    {
      title: "Полный запуск Таджикистан",
      status: "planned",
      description: "Сайт, приложение, Telegram. Запуск запланирован на май 2026. Строительство контролируется онлайн и выездами."
    },
    {
      title: "AI-помощник для франчайзи",
      status: "planned",
      description: "Следующий этап — перевести ответы на типовые вопросы, навигацию по данным и поддержку франчайзи в постоянный AI-контур."
    },
    {
      title: "Программа лояльности — перезапуск",
      status: "planned",
      description: "На основе данных 1.7М клиентов — персонализированные предложения, сегментация по городам и истории заказов. Запуск Q2 2026."
    },
    {
      title: "Аналитический дашборд для партнёров",
      status: "planned",
      description: "Каждый франчайзи получит доступ к ключевым метрикам своей точки: продажи, NPS, динамика. Прозрачность — инструмент роста."
    },
    {
      title: "Сессия по стандартам — франчайзи",
      status: "planned",
      description: "Совместная встреча по обновлённым стандартам сети: сервис, ассортимент, оформление. Апрель 2026."
    }
  ],

  // Города — из базы франчайзи (Qoopia)
  cities: [
    "Абылай хан", "Акмешит", "Аксай", "Актау", "Актобе",
    "Алмаксай", "Астана — Гульжан", "Астана — Expo", "Астана — Highvill",
    "Астана — Кошкарбаева", "Астана — Nova City", "Астана — Сыганак",
    "Атакент", "Атырау",
    "Екибастуз", "Жезказган",
    "Караганда", "Караганда — Жанур", "Каскелен",
    "Коксетау", "Костанай",
    "Кызылорда",
    "Оренбург", "Оскемен",
    "Павлодар", "Петропавловск",
    "Рудный",
    "Сарыарка", "Сатпаев", "Семей", "Степногорск",
    "Талдыкорган", "Тараз", "Тастак", "Ташкент",
    "Уральск",
    "Шымкент",
    "Алматы — Казахфильм", "Алматы — Central Stadium",
    "Алматы — Керуен Сити", "Алматы — Коссы Гулулы",
    "Алматы — Куйшидина", "Алматы — Ньютон", "Алматы — Коссы"
  ],

  // Франчайзи — из Qoopia contacts (category=franchise)
  franchisees: [
    { name: "Абдилова Арайлым", location: "Акмешит" },
    { name: "Абдуллаев Алибек", location: "Коссы" },
    { name: "Аблезов Бауыржан", location: "Кызылорда" },
    { name: "Адилшина Венера", location: "Абылай хан, Актобе" },
    { name: "Альдибаев Айбар", location: "Сатпаев, Атакент" },
    { name: "Байбусынова Анар", location: "Екибастуз" },
    { name: "Байгелдиева Алина", location: "Тараз" },
    { name: "Батыров Нурбек", location: "Аксай, Уральск" },
    { name: "Бахтыяр Алия", location: "Алмаксай" },
    { name: "Баянбеков Галинур", location: "Костанай, Рудный" },
    { name: "Букин Нуржан", location: "Семей" },
    { name: "Буранов Галым", location: "Атырау" },
    { name: "Галимжанов Руслан", location: "Highvill" },
    { name: "Досанбаев Олжас", location: "Ташкент" },
    { name: "Дюсюпова Салтанат", location: "Оскемен" },
    { name: "Есенбеков Ернур", location: "Сарыарка, Тастак" },
    { name: "Кайржанов Дастан", location: "Гульжан, Коксетау" },
    { name: "Кинабаев Жасулан", location: "Жезказган" },
    { name: "Косманов Азамат", location: "Петропавловск" },
    { name: "Куткунов Дамир", location: "Кошкарбаева" },
    { name: "Матжанова Айнур", location: "Куйшидина" },
    { name: "Мұхамед Назерке", location: "Коссы Гулулы, Керуен Сити" },
    { name: "Онгарбаев Есламбек", location: "Шымкент" },
    { name: "Сейдахметова Анар", location: "Актау" },
    { name: "Сейлов Амирали", location: "Expo" },
    { name: "Сейлова Айя", location: "Nova City" },
    { name: "Смагулов Дарын", location: "Павлодар" },
    { name: "Смагулова Балжан", location: "Талдыкорган" },
    { name: "Солтанов Ерлан", location: "Казахфильм" },
    { name: "Солтанова Дана", location: "Ньютон" },
    { name: "Таурбекова Жанар", location: "Караганда, Жанур" },
    { name: "Тулендиева Шолпан", location: "Central Stadium" },
    { name: "Тынымбай Дастан", location: "Каскелен" },
    { name: "Тыштыкова Нурсулу", location: "Сыганак" },
    { name: "Уваров Евгений", location: "Степногорск" },
    { name: "Япиев Рамиль", location: "Оренбург" }
  ],

  projects: [
    { value: "pnl-analytics", label: "P&L аналитика по локациям" },
    { value: "telegram-bot", label: "Telegram-бот для клиентов" },
    { value: "ai-assistant", label: "AI-помощник для операций" },
    { value: "comm-system", label: "Единая система коммуникации" }
  ],

  changelog: [
    {
      date: "17 апреля 2026",
      text: "IVR-меню сокращено: фикс-часть теперь 9 секунд (приветствие + предупреждение о записи) плюс переменная реклама от загрузки линии. Задача «Сокращение времени ожидания на линии» закрыта. «Новинки ассортимента Q2» переведены в работу — дегустации проведены, собирается обратная связь."
    },
    {
      date: "16 апреля 2026",
      text: "Операционная сессия: добавлены карточки по стандартам сервиса, NPS-мониторингу, работе с жалобами, актуализации информации о точках. Обновлены блоки «В работе» и «В планах»."
    },
    {
      date: "12 апреля 2026",
      text: "Портал обновлён по итогам дайджеста Q1 2026: добавлены карточки Wolt-доставки, новинок ассортимента, сезонных акций, обучения команды, роста сети. Обновлены планы на Q2."
    },
    {
      date: "4 марта 2026",
      text: "Повышение цен проведено в 19 городах сети. Аудиты производственных цехов — в регулярном режиме."
    },
    {
      date: "1 марта 2026",
      text: "Wolt-доставка работает: Астана — 500+ тортов/мес, Алматы — 300+ тортов/мес. Готовим масштабирование."
    },
    {
      date: "Февраль 2026",
      text: "Обучение команды завершено: ~40 сотрудников прошли подготовку. База знаний записана и доступна."
    },
    {
      date: "Январь–март 2026",
      text: "Запущено 6 новых продуктов в Q1. Ифтар-сеты в Рамадан. Новогодняя кампания охватила почти всю сеть."
    },
    {
      date: "3 апреля 2026",
      text: "Запущены мгновенные уведомления: входящая почта на ящик команды приходит в рабочую группу в реальном времени."
    },
    {
      date: "1 апреля 2026",
      text: "Портал v2: три блока задач, пилотные записи, полный список франчайзи и локаций."
    },
    {
      date: "31 марта 2026",
      text: "Утверждена стратегия коммуникации с франчайзи: портал как основной контур, канал как слой уведомлений."
    }
  ]
};

// ===== STATUS MAP =====
const STATUS_MAP = {
  in_progress: { label: "В работе", cssClass: "status-badge--in_progress" },
  planned:     { label: "Планируется", cssClass: "status-badge--planned" },
  done:        { label: "Выполнено", cssClass: "status-badge--done" }
};

// ===== HELPERS =====

function escapeHtml(str) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// ===== RENDER =====

function renderHero(data) {
  var subtitle = document.getElementById("hero-subtitle");
  var status = document.getElementById("hero-status");
  if (subtitle) subtitle.textContent = data.subtitle;
  if (status) status.textContent = data.status;
}

function renderTaskCard(item) {
  var statusInfo = STATUS_MAP[item.status] || STATUS_MAP.planned;
  var badges = '<span class="status-badge ' + statusInfo.cssClass + '">' + escapeHtml(statusInfo.label) + '</span>';
  if (item.tag) {
    badges += ' <span class="status-badge status-badge--beta">' + escapeHtml(item.tag) + '</span>';
  }
  return '<article class="card">' +
    '<div class="card__header">' +
      '<h3 class="card__title">' + escapeHtml(item.title) + '</h3>' +
      '<div>' + badges + '</div>' +
    '</div>' +
    '<p class="card__desc">' + escapeHtml(item.description) + '</p>' +
  '</article>';
}

function renderTasks(tasks) {
  var doneGrid = document.getElementById("done-grid");
  var progressGrid = document.getElementById("in-progress-grid");
  var plannedGrid = document.getElementById("planned-grid");

  var done = [], progress = [], planned = [];
  tasks.forEach(function(t) {
    if (t.status === "done") done.push(t);
    else if (t.status === "in_progress") progress.push(t);
    else planned.push(t);
  });

  if (doneGrid) doneGrid.innerHTML = done.map(renderTaskCard).join('');
  if (progressGrid) progressGrid.innerHTML = progress.map(renderTaskCard).join('');
  if (plannedGrid) plannedGrid.innerHTML = planned.map(renderTaskCard).join('');

  if (!done.length) hideEl("section-done");
  if (!progress.length) hideEl("section-in-progress");
  if (!planned.length) hideEl("section-planned");
}

function hideEl(id) {
  var el = document.getElementById(id);
  if (el) el.style.display = "none";
}

function renderChangelog(items) {
  var list = document.getElementById("changelog-list");
  if (!list) return;
  list.innerHTML = items.map(function(item) {
    return '<div class="timeline-entry">' +
      '<span class="timeline-entry__date">' + escapeHtml(item.date) + '</span>' +
      '<p class="timeline-entry__text">' + escapeHtml(item.text) + '</p>' +
    '</div>';
  }).join('');
}

// ===== POPULATE DROPDOWNS =====

function populateDropdowns() {
  // Cities
  var citySelect = document.getElementById("pilot-city");
  if (citySelect) {
    PORTAL_DATA.cities.forEach(function(city) {
      var opt = document.createElement("option");
      opt.value = city;
      opt.textContent = city;
      citySelect.appendChild(opt);
    });
  }

  // Franchisees
  var franchiseeSelect = document.getElementById("pilot-franchisee");
  if (franchiseeSelect) {
    PORTAL_DATA.franchisees.forEach(function(f) {
      var opt = document.createElement("option");
      opt.value = f.name;
      opt.textContent = f.name + " — " + f.location;
      franchiseeSelect.appendChild(opt);
    });
  }

  // Projects
  var projectSelect = document.getElementById("pilot-project");
  if (projectSelect) {
    // Clear existing static options except the placeholder
    while (projectSelect.options.length > 1) {
      projectSelect.remove(1);
    }
    PORTAL_DATA.projects.forEach(function(p) {
      var opt = document.createElement("option");
      opt.value = p.value;
      opt.textContent = p.label;
      projectSelect.appendChild(opt);
    });
  }
}

// ===== CLICKABLE CARDS =====

function initClickableCards() {
  var feedbackCard = document.getElementById("card-feedback");
  var pilotCard = document.getElementById("card-pilot");
  var feedbackSection = document.getElementById("feedback");
  var pilotSection = document.getElementById("pilot-signup");

  function toggleSection(card, section, otherCard, otherSection) {
    if (section.classList.contains("visible")) {
      section.classList.remove("visible");
      card.classList.remove("active");
      return;
    }
    if (otherSection && otherSection.classList.contains("visible")) {
      otherSection.classList.remove("visible");
      if (otherCard) otherCard.classList.remove("active");
    }
    section.classList.add("visible");
    card.classList.add("active");
    setTimeout(function() {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  if (feedbackCard && feedbackSection) {
    feedbackCard.addEventListener("click", function() {
      toggleSection(feedbackCard, feedbackSection, pilotCard, pilotSection);
    });
    feedbackCard.addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); feedbackCard.click(); }
    });
  }

  if (pilotCard && pilotSection) {
    pilotCard.addEventListener("click", function() {
      toggleSection(pilotCard, pilotSection, feedbackCard, feedbackSection);
    });
    pilotCard.addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pilotCard.click(); }
    });
  }
}

// ===== FEEDBACK FORM =====

function initFeedbackForm() {
  var form = document.getElementById("feedback-form");
  var btn = document.getElementById("submit-btn");
  var successEl = document.getElementById("form-success");
  if (!form || !btn) return;

  var fields = form.querySelectorAll("input[required], textarea[required]");

  function checkFields() {
    var allFilled = true;
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value.trim()) { allFilled = false; break; }
    }
    btn.disabled = !allFilled;
  }

  for (var i = 0; i < fields.length; i++) {
    fields[i].addEventListener("input", checkFields);
  }

  var isSubmitting = false;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (isSubmitting || btn.disabled) return;
    isSubmitting = true;
    btn.classList.add("btn-submit--sending");
    btn.textContent = "Отправка…";
    btn.disabled = true;

    var formData = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(function(response) {
      if (response.ok) {
        form.hidden = true;
        if (successEl) successEl.hidden = false;
      } else { throw new Error("Ошибка"); }
    })
    .catch(function() {
      alert("Не удалось отправить. Попробуйте позже.");
      btn.classList.remove("btn-submit--sending");
      btn.textContent = "Отправить";
      btn.disabled = false;
      isSubmitting = false;
    });
  });
}

// ===== PILOT FORM =====

function initPilotForm() {
  var form = document.getElementById("pilot-form");
  var btn = document.getElementById("pilot-submit-btn");
  var successEl = document.getElementById("pilot-success");
  if (!form || !btn) return;

  var selects = form.querySelectorAll("select[required]");

  function checkSelects() {
    var allSelected = true;
    for (var i = 0; i < selects.length; i++) {
      if (!selects[i].value) { allSelected = false; break; }
    }
    btn.disabled = !allSelected;
  }

  for (var i = 0; i < selects.length; i++) {
    selects[i].addEventListener("change", checkSelects);
  }

  var isSubmitting = false;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (isSubmitting || btn.disabled) return;
    isSubmitting = true;
    btn.classList.add("btn-submit--sending");
    btn.textContent = "Отправка…";
    btn.disabled = true;

    var formData = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(function(response) {
      if (response.ok) {
        form.hidden = true;
        if (successEl) successEl.hidden = false;
      } else { throw new Error("Ошибка"); }
    })
    .catch(function() {
      alert("Не удалось отправить. Попробуйте позже.");
      btn.classList.remove("btn-submit--sending");
      btn.textContent = "Записаться на пилот";
      btn.disabled = false;
      isSubmitting = false;
    });
  });
}

// ===== INIT =====

document.addEventListener("DOMContentLoaded", function() {
  renderHero(PORTAL_DATA.hero);
  renderTasks(PORTAL_DATA.tasks);
  renderChangelog(PORTAL_DATA.changelog);
  populateDropdowns();
  initClickableCards();
  initFeedbackForm();
  initPilotForm();
});
