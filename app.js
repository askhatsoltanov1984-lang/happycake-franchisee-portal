// ===== DATA LAYER =====
// Весь контент портала. В будущем заменится на fetch() к API.
// Для обновления контента — меняйте только этот объект.

const PORTAL_DATA = {
  hero: {
    title: "Happy Cake — Портал франчайзи",
    subtitle: "Единое окно для франчайзи: что сейчас делается, что планируется, чего мы ждём от вас. Обновляется ежедневно.",
    status: "Активно"
  },

  currentWork: [
    {
      title: "Единая система коммуникации",
      status: "in_progress",
      description: "Запускаем прозрачный канал связи между управляющей компанией и франчайзи. Новости, задачи, обратная связь — в одном месте, без потерь."
    },
    {
      title: "AI-помощник для операций",
      status: "in_progress",
      description: "Разрабатываем AI-инструменты для ускорения ответов на частые вопросы, обработки заказов и поддержки операторов."
    },
    {
      title: "Портал франчайзи",
      status: "in_progress",
      description: "Этот портал — ваше окно в текущие проекты. Видите что делается, даёте обратную связь, влияете на приоритеты."
    },
    {
      title: "P&L аналитика по локациям",
      status: "planned",
      description: "Готовим инструмент прозрачной аналитики прибыли и убытков по каждой локации и городу. Цель — видеть реальную картину."
    },
    {
      title: "Telegram-бот для клиентов",
      status: "planned",
      description: "Пилотный запуск бота для приёма заказов, FAQ и быстрой связи с клиентами через Telegram."
    }
  ],

  expectations: [
    {
      title: "Давайте честную обратную связь",
      description: "Пишите что реально работает, а что мешает. Каждое сообщение читается и влияет на решения. Форма обратной связи — внизу этой страницы."
    },
    {
      title: "Участвуйте в пилотных запусках",
      description: "Мы будем тестировать новые инструменты на отдельных локациях. Ваша задача — попробовать и быстро сообщить результат."
    },
    {
      title: "Сообщайте о срочных проблемах",
      description: "Если вопрос критичный или конфиденциальный — не ждите. Напишите напрямую через обратную связь с пометкой «Срочно»."
    }
  ],

  changelog: [
    {
      date: "1 апреля 2026",
      text: "Запуск портала франчайзи. Первая версия: статусы проектов, ожидания, форма обратной связи."
    },
    {
      date: "31 марта 2026",
      text: "Утверждена стратегия коммуникации с франчайзи: портал как основной канал, уведомления как транспорт."
    },
    {
      date: "30 марта 2026",
      text: "Запущен проект AI Customer Operations. Определена архитектура: Telegram → WhatsApp → голосовой канал."
    }
  ],

  formspreeId: "PLACEHOLDER"
};

// ===== STATUS MAP =====
const STATUS_MAP = {
  in_progress: { label: "В работе", cssClass: "status-badge--in_progress" },
  planned:     { label: "Планируется", cssClass: "status-badge--planned" },
  done:        { label: "Готово", cssClass: "status-badge--done" }
};

// ===== RENDER LAYER =====

function renderHero(data) {
  const title = document.getElementById("hero-title");
  const subtitle = document.getElementById("hero-subtitle");
  const status = document.getElementById("hero-status");

  if (title) title.textContent = data.title;
  if (subtitle) subtitle.textContent = data.subtitle;
  if (status) status.textContent = data.status;
}

function renderCurrentWork(items) {
  const grid = document.getElementById("current-work-grid");
  if (!grid) return;

  grid.innerHTML = items.map(function(item) {
    const statusInfo = STATUS_MAP[item.status] || STATUS_MAP.planned;
    return '<article class="card">' +
      '<div class="card__header">' +
        '<h3 class="card__title">' + escapeHtml(item.title) + '</h3>' +
        '<span class="status-badge ' + statusInfo.cssClass + '">' + escapeHtml(statusInfo.label) + '</span>' +
      '</div>' +
      '<p class="card__desc">' + escapeHtml(item.description) + '</p>' +
    '</article>';
  }).join('');
}

function renderExpectations(items) {
  const grid = document.getElementById("expectations-grid");
  if (!grid) return;

  grid.innerHTML = items.map(function(item) {
    return '<article class="card">' +
      '<h3 class="card__title">' + escapeHtml(item.title) + '</h3>' +
      '<p class="card__desc" style="margin-top:0.5rem">' + escapeHtml(item.description) + '</p>' +
    '</article>';
  }).join('');
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

function initFeedbackForm(formspreeId) {
  var form = document.getElementById("feedback-form");
  var btn = document.getElementById("submit-btn");
  var successEl = document.getElementById("form-success");
  if (!form || !btn) return;

  // Set form action
  if (formspreeId && formspreeId !== "PLACEHOLDER") {
    form.action = "https://formspree.io/f/" + formspreeId;
  }

  // Enable/disable button based on field content
  var fields = form.querySelectorAll("input[required], textarea[required]");

  function checkFields() {
    var allFilled = true;
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value.trim()) {
        allFilled = false;
        break;
      }
    }
    btn.disabled = !allFilled;
  }

  for (var i = 0; i < fields.length; i++) {
    fields[i].addEventListener("input", checkFields);
  }

  // Form submission
  var isSubmitting = false;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (isSubmitting) return;
    if (btn.disabled) return;

    // Check if formspree is configured
    if (!formspreeId || formspreeId === "PLACEHOLDER") {
      alert("Форма ещё не настроена. Formspree ID не указан.");
      return;
    }

    isSubmitting = true;
    btn.classList.add("btn-submit--sending");
    btn.textContent = "Отправка…";
    btn.disabled = true;

    var formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    })
    .then(function(response) {
      if (response.ok) {
        form.hidden = true;
        if (successEl) successEl.hidden = false;
      } else {
        throw new Error("Ошибка отправки");
      }
    })
    .catch(function() {
      alert("Не удалось отправить сообщение. Попробуйте позже.");
      btn.classList.remove("btn-submit--sending");
      btn.textContent = "Отправить";
      btn.disabled = false;
      isSubmitting = false;
    });
  });
}

// ===== HELPERS =====

function escapeHtml(str) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// ===== INIT =====

document.addEventListener("DOMContentLoaded", function() {
  renderHero(PORTAL_DATA.hero);
  renderCurrentWork(PORTAL_DATA.currentWork);
  renderExpectations(PORTAL_DATA.expectations);
  renderChangelog(PORTAL_DATA.changelog);
  initFeedbackForm(PORTAL_DATA.formspreeId);
});
