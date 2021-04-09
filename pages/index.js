import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Supercede</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <div className='max-w-7xl m-auto p-3'>
        <div className='w-full relative'>
          <Header />
        </div>
        <About />
        <Projects />
        <Contact />
        <footer>
          <div>
            <div className='text-right text-lg'>Supercede, &copy; 2020</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
