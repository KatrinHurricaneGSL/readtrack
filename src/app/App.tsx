import { LibraryPage } from '@/pages/library-page';

import './styles/index.css';

function App() {
  return (
    <>
      <header>
        <a href='/'>ReadTrack</a>
      </header>
      <main>
        <LibraryPage />
      </main>
      <footer>
        <p className='footer-info'>ReadTrack — трекер домашней библиотеки</p>
      </footer>
    </>
  );
}

export default App;
