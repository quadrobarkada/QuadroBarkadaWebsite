/* =========================================================
   QUADRO BARKADA
   All content lives in the DATA section below.
   To change text, edit the data. The page builds itself.
   ========================================================= */

/* ---------- 1. DATA (edit this!) ---------- */

// Replace the names/nicknames with your real ones.
const MEMBERS = [
  {
    name: 'CJ',
    nick: 'The Coder',
    icon: 'terminal',
    color: 'indigo',
    bio: 'Builds things with code, breaks them, then troubleshoots them back to life.',
    tags: ['tech', 'academics'],
    sections: {
      Hobbies: ['Coding', '3D Modelling', 'Developing a Game', 'Troubleshooting', 'AI'],
      Talents: ['Python automation', 'and more...'],
      Activities: [
        'Fine-tuning an SLM',
        'Reading a book about money and machine learning',
        'Quality Time',
      ],
      Interests: ['Computer Science', 'Cybersecurity', 'Statistics', 'Data Science'],
    },
  },
  {
    name: 'Keshy',
    nick: 'The Hooper',
    icon: 'dribbble',
    color: 'rose',
    bio: 'Part gamer, part musician, part athlete. Strategy on the board and on the court.',
    tags: ['gaming', 'sports', 'music'],
    sections: {
      Hobbies: [
        'Online Gaming', 'Basketball', 'Chess', 'Piano', 'Guitar',
        'Working out (Gym, Calisthenics)',
      ],
      Talents: [
        'Acoustic instruments',
        'Variety gaming and irl applications (strategy, problem solving)',
        '1700 highest chess elo',
      ],
      Activities: [
        'Gaming', 'Playing acoustic instruments', 'Playing sports', 'Gym / Calisthenics',
      ],
      Interests: [
        'Acoustic instruments', 'Sports (NBA, F1, etc.)', 'Legit Isuna',
        'Variety of games (CoC, Genshin, etc.)',
      ],
    },
  },
  {
    name: 'Jakob',
    nick: 'The Speedrunner',
    icon: 'zap',
    color: 'emerald',
    bio: 'Fast on the track, fast in FPS games, and fast at learning anything new.',
    tags: ['gaming', 'sports', 'academics'],
    sections: {
      Hobbies: [
        'Jogging and running', "Solving Rubik's Cube",
        'Playing strategy games', 'Playing online games',
      ],
      Talents: ['Learning new things quickly', 'Good at FPS games'],
      Activities: [
        'Participating in science-based events', 'Hanging out with friends',
        'Engaging in physical activities', 'Playing sports',
      ],
      Interests: [
        'Music and entertainment', 'Science and Mathematics', 'Sports and fitness',
        'Videogames', 'Traveling and exploring new places',
      ],
    },
  },
  {
    name: 'Rahm',
    nick: 'The All-Rounder',
    icon: 'music',
    color: 'amber',
    bio: 'Bridges the gap between academics, athletics, and music.',
    tags: ['academics', 'sports', 'music'],
    sections: {
      Hobbies: [
        'Singing', 'Playing instruments', 'Volleyball', 'Basketball',
        'Table tennis', 'Badminton',
      ],
      Talents: ['Complex math problems', 'Critical thinking'],
      Activities: ['Math and science school competitions', 'Playing on the court'],
      Interests: ['Academics', 'Athletics', 'Music'],
    },
  },
];

// Filter chips + "Common Ground" cards (key must match the tags above)
const TOPICS = {
  tech:      { label: 'Tech',      icon: 'cpu',        blurb: 'Code, data, and building things.' },
  gaming:    { label: 'Gaming',    icon: 'gamepad-2',  blurb: 'Strategy, FPS, and everything in between.' },
  sports:    { label: 'Sports',    icon: 'trophy',     blurb: 'Courts, tracks, and gyms.' },
  music:     { label: 'Music',     icon: 'headphones', blurb: 'Singing, strings, and keys.' },
  academics: { label: 'Academics', icon: 'book-open',  blurb: 'Math, science, and competitions.' },
};

// Tailwind color classes per theme color (written out in full so Tailwind sees them)
const COLORS = {
  indigo:  { text: 'text-indigo-500',  bg: 'bg-indigo-500',  soft: 'bg-indigo-500/10',  border: 'border-indigo-500/40',  top: 'border-t-indigo-500'  },
  rose:    { text: 'text-rose-500',    bg: 'bg-rose-500',    soft: 'bg-rose-500/10',    border: 'border-rose-500/40',    top: 'border-t-rose-500'    },
  emerald: { text: 'text-emerald-500', bg: 'bg-emerald-500', soft: 'bg-emerald-500/10', border: 'border-emerald-500/40', top: 'border-t-emerald-500' },
  amber:   { text: 'text-amber-500',   bg: 'bg-amber-500',   soft: 'bg-amber-500/10',   border: 'border-amber-500/40',   top: 'border-t-amber-500'   },
};

// The YouTube video shown under the stats.
// Paste any normal YouTube link here (watch, youtu.be, or shorts all work).
const VIDEO = {
  url: 'https://youtu.be/uVm6kCwBesM',   // example: 'https://www.youtube.com/watch?v=XXXXXXXXXXX'
  title: 'Our Barkada Video',
  caption: 'A little look at the four of us.',
};

const SECTION_ICONS = {
  Hobbies: 'heart',
  Talents: 'star',
  Activities: 'zap',
  Interests: 'compass',
};

/* ---------- 2. RENDER (builds the page from the data) ---------- */

const grid = document.getElementById('member-grid');

function chip(text, c) {
  return `<span class="inline-block text-xs px-2.5 py-1 rounded-full border ${c.border} ${c.soft}">${text}</span>`;
}

function memberCard(m) {
  const c = COLORS[m.color];
  const sections = Object.entries(m.sections).map(([title, items]) => `
    <div class="mb-4">
      <h4 class="flex items-center gap-2 text-sm font-semibold mb-2">
        <i data-lucide="${SECTION_ICONS[title]}" class="w-4 h-4 ${c.text}"></i> ${title}
      </h4>
      <div class="flex flex-wrap gap-2">${items.map(i => chip(i, c)).join('')}</div>
    </div>`).join('');

  return `
    <article class="member-card cursor-grab active:cursor-grabbing bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 border-t-4 ${c.top} rounded-2xl p-6 shadow-sm hover:shadow-xl"
             data-name="${m.name}" data-tags="${m.tags.join(' ')}" data-aos="fade-up">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-14 h-14 rounded-xl ${c.bg} text-white flex items-center justify-center">
          <i data-lucide="${m.icon}" class="w-7 h-7"></i>
        </div>
        <div>
          <h3 class="font-display text-xl font-bold">${m.name}</h3>
          <p class="text-sm ${c.text} font-medium">${m.nick}</p>
        </div>
        <i data-lucide="grip-vertical" class="ml-auto text-slate-400"></i>
      </div>
      <p class="text-sm text-slate-500 dark:text-slate-400 mb-5">${m.bio}</p>
      ${sections}
    </article>`;
}

function renderMembers() {
  grid.innerHTML = MEMBERS.map(memberCard).join('');
}

function renderStats() {
  const totalHobbies = MEMBERS.reduce((n, m) => n + m.sections.Hobbies.length, 0);
  const stats = [
    { value: MEMBERS.length, label: 'Friends', icon: 'users' },
    { value: totalHobbies, label: 'Hobbies', icon: 'heart' },
    { value: Object.keys(TOPICS).length, label: 'Shared Worlds', icon: 'globe' },
    { value: '∞', label: 'Good Times', icon: 'smile' },
  ];
  document.getElementById('stats').innerHTML = stats.map(s => `
    <div class="rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 p-4">
      <i data-lucide="${s.icon}" class="mx-auto mb-1 text-indigo-500"></i>
      <div class="font-display text-2xl font-bold">${s.value}</div>
      <div class="text-xs text-slate-500">${s.label}</div>
    </div>`).join('');
}

function renderFilters() {
  const buttons = [['all', 'Everyone', 'users'], ...Object.entries(TOPICS).map(([k, t]) => [k, t.label, t.icon])];
  document.getElementById('filters').innerHTML = buttons.map(([key, label, icon], i) => `
    <button class="filter-btn inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border transition
                   ${i === 0 ? 'bg-indigo-500 text-white border-indigo-500' : 'border-slate-300 dark:border-slate-700 hover:border-indigo-500'}"
            data-filter="${key}">
      <i data-lucide="${icon}" class="w-4 h-4"></i> ${label}
    </button>`).join('');
}

function renderCommon() {
  const memberColor = name => COLORS[MEMBERS.find(m => m.name === name).color];
  document.getElementById('common-grid').innerHTML = Object.entries(TOPICS).map(([key, t], i) => {
    const who = MEMBERS.filter(m => m.tags.includes(key));
    const dots = MEMBERS.map(m => {
      const on = who.includes(m);
      const c = COLORS[m.color];
      return `<span title="${m.name}" class="w-3 h-3 rounded-full ${on ? c.bg : 'bg-slate-300 dark:bg-slate-700'}"></span>`;
    }).join('');
    return `
      <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6"
           data-aos="zoom-in" data-aos-delay="${i * 80}">
        <div class="flex items-center justify-between mb-3">
          <i data-lucide="${t.icon}" class="text-indigo-500"></i>
          <div class="flex gap-1.5">${dots}</div>
        </div>
        <h3 class="font-display font-bold text-lg">${t.label}</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 mb-2">${t.blurb}</p>
        <p class="text-xs font-semibold text-indigo-500">${who.length} of ${MEMBERS.length} of us</p>
      </div>`;
  }).join('');
}

// Pull the 11-character video ID out of any YouTube link
function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  return match ? match[1] : null;
}

function renderVideo() {
  const wrap = document.getElementById('video-wrap');
  const id = getYouTubeId(VIDEO.url);

  const frame = id
    ? `<iframe class="absolute inset-0 w-full h-full"
               src="https://www.youtube-nocookie.com/embed/${id}"
               title="${VIDEO.title}"
               loading="lazy"
               referrerpolicy="strict-origin-when-cross-origin"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowfullscreen></iframe>`
    : `<div class="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-500 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl">
         <i data-lucide="play-circle" class="w-12 h-12"></i>
         <p class="text-sm px-4">Paste a YouTube link in <code class="font-mono">VIDEO.url</code> inside script.js</p>
       </div>`;

  wrap.innerHTML = `
    <h3 class="font-display text-xl font-bold mb-1">${VIDEO.title}</h3>
    <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">${VIDEO.caption}</p>
    <div class="relative aspect-video overflow-hidden rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900">
      ${frame}
    </div>`;
}

/* ---------- 3. INTERACTIONS ---------- */

// Dark / light mode (remembers the choice, defaults to dark)
const html = document.documentElement;
const toggle = document.getElementById('theme-toggle');

function safeGet(key) { try { return localStorage.getItem(key); } catch { return null; } }
function safeSet(key, val) { try { localStorage.setItem(key, val); } catch {} }

if (safeGet('theme') !== 'light') html.classList.add('dark');

function updateThemeIcon() {
  const isDark = html.classList.contains('dark');
  toggle.innerHTML = `<i data-lucide="${isDark ? 'sun' : 'moon'}"></i>`;
  lucide.createIcons();
}

toggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  safeSet('theme', html.classList.contains('dark') ? 'dark' : 'light');
  updateThemeIcon();
});

// Filter: show only members whose data-tags include the chosen topic
function setupFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const active = ['bg-indigo-500', 'text-white', 'border-indigo-500'];
  const idle = ['border-slate-300', 'dark:border-slate-700'];

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      buttons.forEach(b => { b.classList.remove(...active); b.classList.add(...idle); });
      btn.classList.add(...active);
      btn.classList.remove(...idle);

      grid.querySelectorAll('.member-card').forEach(card => {
        const match = filter === 'all' || card.dataset.tags.split(' ').includes(filter);
        card.classList.toggle('is-hidden', !match);
      });
    });
  });
}

// Drag & drop reordering (SortableJS: works with mouse AND touch)
const ORDER_KEY = 'barkada-order';

function saveOrder() {
  const order = [...grid.children].map(c => c.dataset.name);
  safeSet(ORDER_KEY, JSON.stringify(order));
}

function restoreOrder() {
  try {
    const order = JSON.parse(safeGet(ORDER_KEY));
    if (!Array.isArray(order)) return;
    order.forEach(name => {
      const card = [...grid.children].find(c => c.dataset.name === name);
      if (card) grid.appendChild(card);
    });
  } catch {}
}

function setupDragDrop() {
  restoreOrder();
  new Sortable(grid, { animation: 200, ghostClass: 'sortable-ghost', onEnd: saveOrder });
}

/* ---------- 4. START ---------- */

renderStats();
renderVideo();
renderFilters();
renderMembers();
renderCommon();
setupFilters();
setupDragDrop();
updateThemeIcon();     // also runs lucide.createIcons() for everything rendered above
AOS.init({ duration: 700, once: true });