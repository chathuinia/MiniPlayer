// ===== ЗАЩИТА ОТ ВЗЛОМА ===== //

// 1. Защита от keylogger’ов (маскировка ввода)
document.querySelectorAll('input[type="password"]').forEach(input => {
  input.addEventListener('keydown', (e) => {
    const fakeInput = document.createElement('input');
    fakeInput.type = 'text';
    fakeInput.style.position = 'absolute';
    fakeInput.style.left = '-9999px';
    document.body.appendChild(fakeInput);
    fakeInput.focus();
    setTimeout(() => fakeInput.remove(), 100);
  });
});

// 2. Детектор подозрительных скриптов
setInterval(() => {
  const scripts = document.getElementsByTagName('script');
  for (let script of scripts) {
    if (script.src.includes('cryptonight') || script.src.includes('coin-hive')) {
      script.remove();
      console.warn('Блокирован криптомайнер:', script.src);
    }
  }
}, 5000);

// ===== МИНИ-YOUTUBE ===== //
const miniPlayer = document.createElement('div');
miniPlayer.id = 'mini-yt';
miniPlayer.innerHTML = `
  <iframe width="280" height="158" src="about:blank" frameborder="0"></iframe>
  <input type="text" placeholder="Вставьте ID видео" id="yt-id">
  <button id="load-yt">Загрузить</button>
`;
document.body.appendChild(miniPlayer);

document.getElementById('load-yt').addEventListener('click', () => {
  const videoId = document.getElementById('yt-id').value.trim();
  if (videoId) {
    const iframe = document.querySelector('#mini-yt iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
  }
});