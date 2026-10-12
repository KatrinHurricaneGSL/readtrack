import { Library } from 'lucide-react';
import { Toaster } from 'sonner';

import { LibraryPage } from '@/pages/library-page';

import './styles/index.css';

function App() {
  return (
    <>
      <header>
        <a href='/'>
          <Library />
          <span>ReadTrack</span>
        </a>
      </header>
      <main>
        <LibraryPage />
      </main>
      <Toaster position='top-center' richColors />
    </>
  );
}

export default App;
