import Typed from 'react-typed';

export default function Header() {
  const strings = [
    '',
    'Software Developer',
    'Technical Writer',
    'Music Afficionado',
    'Dad Joke Expert',
    'Football Manager Fiend',
  ];

  return (
    <div className='items-center'>
      <header className='grid grid-cols-20 items-center gap-8 sm:block h-screen relative bg-header bg-center bg-cover bg-no-repeat'>
        <div className='flex text-center items-center justify-center h-screen w-full header-content bg-header-content bg-transparent'>
          <div>
            <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>
              Ajagunna
            </h1>
            <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl text-secondary'>
              <span>Sijuade</span>
            </h1>

            <Typed
              strings={strings}
              typeSpeed={50}
              startDelay={2000}
              loop={true}
              backDelay={900}
              backSpeed={30}
              className='text-2xl opacity-80'
            ></Typed>

            <div className='fixed bottom-2.5 left-1.5 self-center'>
              <a
                className='text-white opacity-60 text-2l inline-block mr-3'
                href='https://www.linkedin.com/in/sijuade-ajagunna-064458184/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn profile link'
              >
                <i className='fab fa-linkedin' aria-hidden='true'></i>
              </a>
              <a
                className='text-white opacity-60 text-2l inline-block mr-2'
                href='https://github.com/supercede'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Github profile link'
              >
                <i className='fab fa-github' aria-hidden='true'></i>
              </a>
              <a
                className='text-white opacity-60 text-2l inline-block mr-2'
                href='https://www.medium.com/@mahyor.sam'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Medium profile link'
              >
                <i className='fab fa-medium' aria-hidden='true'></i>
              </a>
              <a
                className='text-white opacity-60 text-2l inline-block mr-2'
                href='https://twitter.com/DEST1NY_'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Twitter profile link'
              >
                <i className='fab fa-twitter' aria-hidden='true'></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
