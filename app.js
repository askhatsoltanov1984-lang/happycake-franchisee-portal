// ===== DATA LAYER =====
const PORTAL_DATA = {
  hero: {
    subtitle: "Единое окно для франчайзи: что сейчас делается, что планируется, чего мы ждём от вас. Обновляется ежедневно.",
    status: "Активно"
  },

  tasks: [
    {
      title: "Портал франчайзи",
      status: "done",
      tag: "beta-test",
      description: "Портал запущен и обновляется как единое окно для франчайзи: статусы задач, обратная связь и запись в пилоты."
    },
    {
      title: "Канал Happy Life",
      status: "done",
      description: "Канал подготовлен к рабочим публикациям: права подтверждены, бот подключён, первое сообщение отправлено."
    },
    {
      title: "Доступы и тесты AI-бота",
      status: "done",
      description: "Проверены права бота, доступ к каналу и отправка сообщений. Техническая связка для публикаций отлажена."
    },
    {
      title: "Инструкции для AI-публикаций",
      status: "in_progress",
      description: "Фиксируем единый процесс: каждый финальный текст сначала идёт на утверждение, затем публикуется в канал и отражается в портале."
    },
    {
      title: "Контур обратной связи",
      status: "in_progress",
      description: "Собираем обратную связь из портала и канала в единый рабочий поток, чтобы быстрее отвечать и выносить частые темы в обновления."
    },
    {
      title: "P&L аналитика по локациям",
      status: "in_progress",
      description: "Идёт подготовка аналитики по локациям для прозрачной картины по работе точек и дальнейших управленческих решений."
    },
    {
      title: "AI-помощник для франчайзи",
      status: "planned",
      description: "Следующий этап — перевести ответы на типовые вопросы, навигацию по данным и поддержку франчайзи в постоянный AI-контур."
    },
    {
      title: "Пилотные запуски новых модулей",
      status: "planned",
      description: "После стабилизации канала и портала начнём запускать новые модули по пилотным локациям с быстрым сбором обратной связи."
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
      date: "2 апреля 2026",
      text: "На портал вынесены сегодняшние итоги: запуск канала, проверка доступов бота, тесты публикации и текущие следующие шаги."
    },
    {
      date: "2 апреля 2026",
      text: "Happy Life переведён в рабочий режим для AI-публикаций: подтверждены права бота и выполнена первая отправка сообщения в канал."
    },
    {
      date: "1 апреля 2026",
      text: "Портал v2: три блока задач, пилотные записи, полный список франчайзи и локаций."
    },
    {
      date: "1 апреля 2026",
      text: "Запуск портала франчайзи: статусы проектов, ожидания, обратная связь и запись на пилоты."
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
