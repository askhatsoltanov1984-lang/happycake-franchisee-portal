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
      description: "Запущен портал для прозрачной связи между управляющей компанией и франчайзи. Статусы проектов, обратная связь, пилотные записи."
    },
    {
      title: "Стратегия коммуникации",
      status: "done",
      description: "Утверждена стратегия коммуникации с франчайзи: портал как основной канал, уведомления как транспорт."
    },
    {
      title: "Единая система коммуникации",
      status: "in_progress",
      description: "Запускаем прозрачный канал связи между управляющей компанией и франчайзи. Новости, задачи, обратная связь — в одном месте."
    },
    {
      title: "AI-помощник для операций",
      status: "in_progress",
      description: "Разрабатываем AI-инструменты для ускорения ответов на частые вопросы, обработки заказов и поддержки операторов."
    },
    {
      title: "P&L аналитика по локациям",
      status: "planned",
      description: "Готовим инструмент прозрачной аналитики прибыли и убытков по каждой локации и городу."
    },
    {
      title: "Telegram-бот для клиентов",
      status: "planned",
      description: "Пилотный запуск бота для приёма заказов, FAQ и быстрой связи с клиентами через Telegram."
    }
  ],

  changelog: [
    {
      date: "1 апреля 2026",
      text: "Запуск портала франчайзи v2. Три блока задач, форма пилотных записей, обратная связь."
    },
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
  ]
};

// ===== STATUS MAP =====
const STATUS_MAP = {
  in_progress: { label: "В работе", cssClass: "status-badge--in_progress" },
  planned:     { label: "Планируется", cssClass: "status-badge--planned" },
  done:        { label: "Выполнено", cssClass: "status-badge--done" }
};

// ===== RENDER =====

function escapeHtml(str) {
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

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

  // Hide empty sections
  if (!done.length) hide("section-done");
  if (!progress.length) hide("section-in-progress");
  if (!planned.length) hide("section-planned");
}

function hide(id) {
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

// ===== CLICKABLE CARDS =====

function initClickableCards() {
  var feedbackCard = document.getElementById("card-feedback");
  var pilotCard = document.getElementById("card-pilot");
  var feedbackSection = document.getElementById("feedback");
  var pilotSection = document.getElementById("pilot-signup");

  function toggleSection(card, section, otherCard, otherSection) {
    // Toggle current
    if (section.classList.contains("visible")) {
      section.classList.remove("visible");
      card.classList.remove("active");
      return;
    }
    // Hide other
    if (otherSection.classList.contains("visible")) {
      otherSection.classList.remove("visible");
      otherCard.classList.remove("active");
    }
    // Show current
    section.classList.add("visible");
    card.classList.add("active");
    // Scroll into view
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
  initClickableCards();
  initFeedbackForm();
  initPilotForm();
});
