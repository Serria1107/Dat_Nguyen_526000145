const movies = [
  {
    id: 'interstellar',
    title: 'Interstellar',
    originalTitle: 'Interstellar',
    year: 2014,
    genres: ['Sci-Fi', 'Adventure', 'Drama'],
    runtime: '2h 49m',
    director: 'Christopher Nolan',
    synopsis:
      'Một hành trình không gian mạo hiểm khi con người cố gắng tìm ra nơi ở mới trong vũ trụ rộng lớn và đầy bí ẩn.',
    poster: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1800&q=80',
    trailer: 'https://www.youtube.com/watch?v=zSWdZVtXT7E'
  },
  {
    id: 'inception',
    title: 'Inception',
    originalTitle: 'Inception',
    year: 2010,
    genres: ['Sci-Fi', 'Action', 'Thriller'],
    runtime: '2h 28m',
    director: 'Christopher Nolan',
    synopsis:
      'Một chuyên gia chèn cọc trí óc vào giấc mơ phải chiến đấu với thời gian, ký ức và những nỗi sợ hãi sâu thẳm.',
    poster: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1800&q=80',
    trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0'
  },
  {
    id: 'oppenheimer',
    title: 'Oppenheimer',
    originalTitle: 'Oppenheimer',
    year: 2023,
    genres: ['Drama', 'History', 'Thriller'],
    runtime: '3h 0m',
    director: 'Christopher Nolan',
    synopsis:
      'Câu chuyện về J. Robert Oppenheimer và những hệ quả khủng khiếp của phát minh mang tính định nghĩa trong lịch sử.',
    poster: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1800&q=80',
    trailer: 'https://www.youtube.com/watch?v=uYPbbksJxIg'
  },
  {
    id: 'dune-part-two',
    title: 'Dune: Part Two',
    originalTitle: 'Dune: Part Two',
    year: 2024,
    genres: ['Sci-Fi', 'Adventure', 'Action'],
    runtime: '2h 46m',
    director: 'Denis Villeneuve',
    synopsis:
      'Một chàng trai trẻ bước vào cuộc chiến của lịch sử, quyền lực và lời hứa của một sa mạc vĩ đại.',
    poster: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=1800&q=80',
    trailer: 'https://www.youtube.com/watch?v=Way9Dexny3w'
  },
  {
    id: 'the-dark-knight',
    title: 'The Dark Knight',
    originalTitle: 'The Dark Knight',
    year: 2008,
    genres: ['Action', 'Drama', 'Thriller'],
    runtime: '2h 32m',
    director: 'Christopher Nolan',
    synopsis:
      'Batman phải đối đầu với Joker trong một trận chiến trí tuệ và lòng dũng cảm, khiến Gotham chìm trong bóng tối.',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1800&q=80',
    trailer: 'https://www.youtube.com/watch?v=EXeTwQWrcwY'
  },
  {
    id: 'blade-runner-2049',
    title: 'Blade Runner 2049',
    originalTitle: 'Blade Runner 2049',
    year: 2017,
    genres: ['Sci-Fi', 'Drama', 'Thriller'],
    runtime: '2h 44m',
    director: 'Denis Villeneuve',
    synopsis:
      'Một thám tử mới khám phá bí mật đen tối của bản thân và thế giới mà ông bước vào.',
    poster: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1800&q=80',
    trailer: 'https://www.youtube.com/watch?v=gCcx85zbxz4'
  },
  {
    id: 'parasite',
    title: 'Parasite',
    originalTitle: '기생충',
    year: 2019,
    genres: ['Thriller', 'Drama', 'Comedy'],
    runtime: '2h 12m',
    director: 'Bong Joon-ho',
    synopsis:
      'Một gia đình nghèo lao vào một phù điêu quyền lực và sự ngụy trang, phá vỡ sự bình yên bằng một cú sốc khủng khiếp.',
    poster: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1800&q=80',
    trailer: 'https://www.youtube.com/watch?v=5xH0HfJHsaY'
  },
  {
    id: 'whiplash',
    title: 'Whiplash',
    originalTitle: 'Whiplash',
    year: 2014,
    genres: ['Drama', 'Music'],
    runtime: '1h 46m',
    director: 'Damien Chazelle',
    synopsis:
      'Một tay trống trẻ bắt đầu cuộc hành trình đầy điên rồ để đạt đến sự xuất sắc và đánh đổi bằng mọi thứ.',
    poster: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80',
    trailer: 'https://www.youtube.com/watch?v=7d_jQycdQGo'
  },
  {
    id: 'arrival',
    title: 'Arrival',
    originalTitle: 'Arrival',
    year: 2016,
    genres: ['Drama', 'Sci-Fi'],
    runtime: '1h 56m',
    director: 'Denis Villeneuve',
    synopsis:
      'Một nhà ngôn ngữ học cố gắng giải mã một ngôn ngữ ngoài hành tinh trước khi thời gian và ký ức thay đổi tất cả.',
    poster: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80',
    trailer: 'https://www.youtube.com/watch?v=tFMo3UJ4B4g'
  },
  {
    id: 'spirited-away',
    title: 'Spirited Away',
    originalTitle: '千と千尋の神隠し',
    year: 2001,
    genres: ['Animation', 'Fantasy', 'Adventure'],
    runtime: '2h 5m',
    director: 'Hayao Miyazaki',
    synopsis:
      'Một cô bé vừa rời khỏi thế giới thực, bước chân vào một thế giới phép thuật đầy kỳ ảo và những lựa chọn mang tính chuyển hóa.',
    poster: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=1800&q=80',
    trailer: 'https://www.youtube.com/watch?v=ByXuk9QqQkk'
  },
  {
    id: 'everything-everywhere-all-at-once',
    title: 'Everything Everywhere All at Once',
    originalTitle: 'Everything Everywhere All at Once',
    year: 2022,
    genres: ['Action', 'Adventure', 'Drama'],
    runtime: '2h 19m',
    director: 'Daniel Kwan and Daniel Scheinert',
    synopsis:
      'Một bà mẹ đang cố gắng cứu gia đình trong khi khám phá nhiều đời sống khác nhau của chính mình.',
    poster: 'https://images.unsplash.com/photo-1524989941526-c0f9d9b75d80?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1524989941526-c0f9d9b75d80?auto=format&fit=crop&w=1800&q=80',
    trailer: 'https://www.youtube.com/watch?v=SXmmn9V_0kA'
  },
  {
    id: 'spider-man-across-the-spider-verse',
    title: 'Spider-Man: Across the Spider-Verse',
    originalTitle: 'Spider-Man: Across the Spider-Verse',
    year: 2023,
    genres: ['Animation', 'Action', 'Adventure'],
    runtime: '2h 20m',
    director: 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson',
    synopsis:
      'Miles Morales tiếp tục cuộc phiêu lưu giữa các vũ trụ, đối mặt với trách nhiệm và những lựa chọn không ngừng thay đổi.',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1800&q=80',
    trailer: 'https://www.youtube.com/watch?v=shW9i6k8cB0'
  }
];

const FAVORITES_KEY = 'cineverse-favorites';
const state = {
  genre: 'All',
  search: '',
  sort: 'newest',
  favorites: new Set(loadFavorites())
};

const movieGrid = document.getElementById('movieGrid');
const movieStatus = document.getElementById('movieStatus');
const searchInput = document.getElementById('movieSearch');
const searchClear = document.querySelector('.search-clear');
const filterButtons = document.querySelectorAll('.filter-button');
const genreCards = document.querySelectorAll('.genre-card');
const sortSelect = document.getElementById('sortSelect');
const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const modal = document.getElementById('movieModal');
const modalClose = document.querySelector('.modal-close');
const modalPoster = document.getElementById('modalPoster');
const modalGenre = document.getElementById('modalGenre');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalRuntime = document.getElementById('modalRuntime');
const modalDirector = document.getElementById('modalDirector');
const modalDescription = document.getElementById('modalDescription');
const modalTrailer = document.getElementById('modalTrailer');
const modalFavorite = document.getElementById('modalFavorite');
const favoriteToggle = document.querySelector('.favorite-toggle');
const favoriteCount = document.querySelector('.favorite-count');

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveFavorites() {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([...state.favorites]));
  } catch (error) {
    // Ignore write failures in restricted browsers.
  }
}

function getMoviesBySort(list) {
  const clone = [...list];

  switch (state.sort) {
    case 'oldest':
      clone.sort((a, b) => a.year - b.year);
      break;
    case 'az':
      clone.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'za':
      clone.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 'newest':
    default:
      clone.sort((a, b) => b.year - a.year);
      break;
  }

  return clone;
}

function getFilteredMovies() {
  const query = state.search.trim().toLowerCase();

  return getMoviesBySort(
    movies.filter((movie) => {
      const matchesGenre = state.genre === 'All' || movie.genres.includes(state.genre);
      const titleMatch = !query || movie.title.toLowerCase().includes(query) || movie.originalTitle.toLowerCase().includes(query);
      return matchesGenre && titleMatch;
    })
  );
}

function createMovieCard(movie) {
  const isFavorite = state.favorites.has(movie.id);

  return `
    <article class="movie-card" data-id="${movie.id}">
      <figure>
        <img src="${movie.poster}" alt="Poster phim ${movie.title}" loading="lazy" />
        <span class="movie-overlay" aria-hidden="true"></span>
        <button type="button" class="favorite-badge ${isFavorite ? 'is-active' : ''}" data-favorite-id="${movie.id}" aria-label="${isFavorite ? 'Xóa khỏi yêu thích' : 'Thêm vào yêu thích'}">
          ${isFavorite ? '♥' : '♡'}
        </button>
      </figure>
      <div class="movie-body">
        <div class="meta-row">
          <span>${movie.genres[0]}</span>
          <time datetime="${movie.year}">${movie.year}</time>
        </div>
        <h3>${movie.title}</h3>
        <p>${movie.synopsis}</p>
        <div class="movie-actions">
          <button type="button" class="btn btn-primary view-details" data-movie-id="${movie.id}">Xem chi tiết</button>
        </div>
      </div>
    </article>
  `;
}

function renderMovies() {
  const filteredMovies = getFilteredMovies();

  movieGrid.innerHTML = filteredMovies.map((movie) => createMovieCard(movie)).join('');

  if (filteredMovies.length === 0) {
    movieStatus.textContent = 'Không có phim phù hợp với bộ lọc hiện tại.';
    return;
  }

  movieStatus.textContent = `${filteredMovies.length} phim phù hợp`;
  updateFavoriteCount();
}

function setActiveFilter(nextFilter) {
  state.genre = nextFilter;

  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === nextFilter;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  renderMovies();
}

function updateSearch(query) {
  state.search = query;
  searchClear.hidden = !query;
  renderMovies();
}

function updateFavoriteCount() {
  favoriteCount.textContent = String(state.favorites.size);
}

function toggleFavorite(movieId) {
  if (state.favorites.has(movieId)) {
    state.favorites.delete(movieId);
  } else {
    state.favorites.add(movieId);
  }

  saveFavorites();
  updateFavoriteCount();
  renderMovies();
}

function openModal(movieId) {
  const selectedMovie = movies.find((movie) => movie.id === movieId);

  if (!selectedMovie) {
    return;
  }

  const isFavorite = state.favorites.has(selectedMovie.id);

  modalPoster.src = selectedMovie.poster;
  modalPoster.alt = `Poster phim ${selectedMovie.title}`;
  modalGenre.textContent = selectedMovie.genres.join(' • ');
  modalTitle.textContent = selectedMovie.title;
  modalYear.textContent = `Năm phát hành: ${selectedMovie.year}`;
  modalRuntime.textContent = `Thời lượng: ${selectedMovie.runtime}`;
  modalDirector.textContent = `Đạo diễn: ${selectedMovie.director}`;
  modalDescription.textContent = selectedMovie.synopsis;
  modalTrailer.href = selectedMovie.trailer;
  modalFavorite.textContent = isFavorite ? 'Đã yêu thích' : 'Yêu thích';
  modalFavorite.dataset.movieId = selectedMovie.id;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  const closeButton = modal.querySelector('.modal-close');
  closeButton.focus();
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function handleMovieDetailsClick(event) {
  const target = event.target.closest('[data-movie-id]');

  if (!target) {
    return;
  }

  if (target.classList.contains('favorite-badge')) {
    toggleFavorite(target.dataset.favoriteId);
    return;
  }

  if (target.classList.contains('view-details')) {
    openModal(target.dataset.movieId);
    return;
  }

  if (target.id === 'modalFavorite') {
    toggleFavorite(target.dataset.movieId);
    openModal(target.dataset.movieId);
  }
}

function setStickyHeader() {
  header.classList.toggle('scrolled', window.scrollY > 18);
}

function toggleMenu() {
  const isOpen = mobileMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  mobileMenu.hidden = !isOpen;
}

function closeMenu() {
  mobileMenu.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileMenu.hidden = true;
}

function trapFocus(event) {
  if (event.key !== 'Tab' || !modal.classList.contains('is-open')) {
    return;
  }

  const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
  const focusable = [...modal.querySelectorAll(focusableSelector)];

  if (!focusable.length) {
    event.preventDefault();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function syncHeroSlide(index) {
  const slides = [...document.querySelectorAll('.hero-slide')];
  const safeIndex = slides.length ? ((index % slides.length) + slides.length) % slides.length : 0;
  const selectedMovie = movies[safeIndex] || movies[0];
  const heroPoster = document.getElementById('heroPoster');
  const heroLabel = document.getElementById('heroLabel');
  const heroMeta = document.getElementById('heroMeta');

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('is-active', slideIndex === safeIndex);
  });

  heroPoster.src = selectedMovie.poster;
  heroPoster.alt = `Poster phim ${selectedMovie.title}`;
  heroLabel.textContent = selectedMovie.title;
  heroMeta.textContent = `${selectedMovie.year} · ${selectedMovie.genres[0]} · ${selectedMovie.genres[1] || 'Adventure'}`;

  const dots = document.querySelector('.hero-dots');
  if (!dots) {
    return;
  }

  dots.innerHTML = slides
    .map((_, dotIndex) => `<button class="dot ${dotIndex === safeIndex ? 'active' : ''}" type="button" aria-label="Chuyển đến slide ${dotIndex + 1}" data-slide-index="${dotIndex}"></button>`)
    .join('');

  dots.querySelectorAll('.dot').forEach((dot) => {
    dot.addEventListener('click', () => {
      syncHeroSlide(Number(dot.dataset.slideIndex));
    });
  });
}

function updateHeroSlide(direction) {
  const slides = [...document.querySelectorAll('.hero-slide')];
  const activeIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
  const nextIndex = direction === 'next'
    ? (activeIndex + 1) % slides.length
    : (activeIndex - 1 + slides.length) % slides.length;

  syncHeroSlide(nextIndex);
}

window.addEventListener('scroll', setStickyHeader);
window.addEventListener('load', () => {
  setStickyHeader();
  renderMovies();
  updateFavoriteCount();
  syncHeroSlide(0);

  if (window.AOS) {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 30,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
  }
});

searchInput.addEventListener('input', (event) => {
  updateSearch(event.target.value);
});

searchClear.addEventListener('click', () => {
  searchInput.value = '';
  updateSearch('');
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setActiveFilter(button.dataset.filter);
  });
});

genreCards.forEach((card) => {
  card.addEventListener('click', () => {
    const selectedGenre = card.dataset.genre;
    setActiveFilter(selectedGenre);
    document.getElementById('discover').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

sortSelect.addEventListener('change', (event) => {
  state.sort = event.target.value;
  renderMovies();
});

document.addEventListener('click', (event) => {
  const favoriteButton = event.target.closest('.favorite-badge');
  const detailButton = event.target.closest('.view-details');
  const modalFavoriteButton = event.target.closest('#modalFavorite');

  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favoriteId);
    return;
  }

  if (detailButton) {
    openModal(detailButton.dataset.movieId);
    return;
  }

  if (modalFavoriteButton) {
    toggleFavorite(modalFavoriteButton.dataset.movieId);
    modalFavoriteButton.textContent = state.favorites.has(modalFavoriteButton.dataset.movieId) ? 'Đã yêu thích' : 'Yêu thích';
    openModal(modalFavoriteButton.dataset.movieId);
    return;
  }

  if (event.target.closest('[data-close="true"]')) {
    closeModal();
  }
});

favoriteToggle.addEventListener('click', () => {
  const favoriteList = [...state.favorites];
  const favoriteMovie = movies.find((movie) => movie.id === favoriteList[0]);

  if (!favoriteMovie) {
    movieStatus.textContent = 'Bạn chưa lưu phim nào vào danh sách yêu thích.';
    return;
  }

  openModal(favoriteMovie.id);
});

menuToggle.addEventListener('click', toggleMenu);

document.querySelectorAll('.mobile-nav .nav-link').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

modalClose.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeModal();
  }

  trapFocus(event);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

const heroPrevBtn = document.querySelector('[data-direction="prev"]');
const heroNextBtn = document.querySelector('[data-direction="next"]');

heroPrevBtn.addEventListener('click', () => updateHeroSlide('prev'));
heroNextBtn.addEventListener('click', () => updateHeroSlide('next'));

setInterval(() => {
  updateHeroSlide('next');
}, 5000);

renderMovies();
