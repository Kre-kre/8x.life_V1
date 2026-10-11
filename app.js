const media = [
  ['People in a sunlit shared space', 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=85'],
  ['Friends sharing a table', 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85'],
  ['A conversation in progress', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85'],
  ['A quiet work moment', 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85'],
  ['An evening gathering', 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=900&q=85'],
];
const people = [
  { name: 'Jaka Bavdek', role: 'Co-founder', image: './assets/jaka-bavdek.jpeg', tint: 'violet', url: 'https://jakabavdek.com/' },
  { name: 'Theo Bui', role: 'Co-founder', image: './assets/theo-bui.jpeg', tint: 'blue', url: 'https://www.theobui.com/' },
];
const builds = [
  { code: '01', name: '8x Social', text: 'A world for creators, audiences and the work that moves between them.', tag: 'Community / culture', className: 'platform', url: 'https://8x.social/' },
  { code: '02', name: '8x Business', text: 'Where ambitious people and commercial momentum meet.', tag: 'Business / growth', className: 'network', url: 'https://8x.business/' },
  { code: '03', name: '8x Research', text: 'The thinking layer: questions first, sharper answers after.', tag: 'Research / insight', className: 'ideas', url: 'https://8xresearch.com/' },
  { code: '04', name: '8x Sale', text: 'A space for people who turn genuine conviction into action.', tag: 'Sales / action', className: 'sales', url: 'https://8x.sale/' },
];
const traits = [
  ['Taste', 'You know the difference between finished and good.'],
  ['Ownership', 'You do not wait to be told what needs doing.'],
  ['Speed', 'You would rather test than theorise forever.'],
  ['Range', 'You can travel between problems, disciplines and contexts.'],
  ['Curiosity', 'You keep pulling the thread.'],
  ['Judgement', 'You know when 80% is enough — and when it is not.'],
];
const rules = [
  ['Freedom is part of the deal.', 'You will have room to decide. You will be expected to use it.'],
  ['The pace can be real.', 'Not for the sake of busyness — because moments with momentum deserve it.'],
  ['Your work will be seen.', 'The point is not status. It is making the standard visible, then lifting it.'],
  ['The goalposts can move.', 'You will need to move with them, without losing the reason you started.'],
];
const networkItems = [
  { title: '8x Social', body: 'For creators looking for their next audience and opportunity.', label: 'For creators', link: 'https://www.8x.social/en/for-creators', tone: 'blue' },
  { title: '8x Business', body: 'For creators ready to build their professional footprint.', label: 'Meet Business', link: 'https://8x.business/creator', tone: 'violet' },
  { title: '8x Research', body: 'For people who see a question and want to follow it further.', label: 'Explore research', link: 'https://8xresearch.com/earn', tone: 'cream' },
  { title: '8x Sale', body: 'For sales people who like turning a real conversation into momentum.', label: 'Meet sales', link: 'https://8x.sale/reps', tone: 'orange' },
];

const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
document.querySelector('#media-track').innerHTML = [...media, ...media].map(([alt, src], i) => html`<figure class="media-card media-${i % media.length}"><img src="${src}" alt="${alt}" loading="lazy" /><figcaption>8x life / ${String((i % media.length) + 1).padStart(2, '0')}</figcaption></figure>`).join('');
document.querySelector('#team-grid').innerHTML = people.map((person, i) => html`<a class="team-card ${person.tint}" href="${person.url}" target="_blank" rel="noreferrer"><div class="team-no">Co-founder / 0${i + 1}</div><img src="${person.image}" alt="${person.name}" loading="lazy" /><div class="team-card-copy"><span>${person.name}</span><strong>${person.role} <b>↗</b></strong></div></a>`).join('');
document.querySelector('#build-deck').innerHTML = builds.map((build) => html`<a class="build-card ${build.className}" href="${build.url}" target="_blank" rel="noreferrer"><div><span>${build.code} / ${build.tag}</span><b>↗</b></div><h3>${build.name}</h3><p>${build.text}</p><i aria-hidden="true"></i></a>`).join('');
document.querySelector('#traits').innerHTML = traits.map(([name, description], i) => html`<button type="button" class="trait-card" data-trait="${name}" data-description="${description}" role="listitem"><span>0${i + 1}</span><strong>${name}</strong><b>+</b></button>`).join('');
document.querySelector('#rules-list').innerHTML = rules.map(([title, body], i) => html`<article class="rule"><span>0${i + 1}</span><h3>${title}</h3><p>${body}</p><b>↘</b></article>`).join('');
document.querySelector('#network-cards').innerHTML = networkItems.map((item, i) => html`<a class="network-card ${item.tone}" href="${item.link}" ${item.link.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}><span>0${i + 1}</span><h3>${item.title}</h3><p>${item.body}</p><strong>${item.label} <b>↗</b></strong></a>`).join('');

const dialog = document.querySelector('#network-dialog');
document.querySelectorAll('.network-trigger').forEach((button) => button.addEventListener('click', () => dialog.showModal()));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
document.querySelectorAll('.trait-card').forEach((card) => card.addEventListener('click', () => {
  document.querySelectorAll('.trait-card').forEach((item) => item.classList.remove('is-selected'));
  card.classList.add('is-selected');
  document.querySelector('#selected-trait').textContent = card.dataset.trait;
  document.querySelector('#selected-description').textContent = card.dataset.description;
}));
const paper = document.querySelector('#manifesto-scroll');
paper.addEventListener('scroll', () => { const max = paper.scrollHeight - paper.clientHeight; document.querySelector('.paper-progress i').style.width = `${max ? (paper.scrollTop / max) * 100 : 0}%`; });
document.querySelector('.menu-toggle').addEventListener('click', (event) => { const open = document.body.classList.toggle('nav-open'); event.currentTarget.setAttribute('aria-expanded', open); });
document.querySelectorAll('#site-nav a').forEach((link) => link.addEventListener('click', () => document.body.classList.remove('nav-open')));
const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: 0.14 });
document.querySelectorAll('.section-pad, .hero-copy').forEach((element) => reveal.observe(element));
