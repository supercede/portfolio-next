module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ['UbuntuMono-Regular'],
      },
      colors: {
        blackish: {
          DEFAULT: '#1e1e1e',
        },
        secondary: {
          DEFAULT: '#bd9d31',
        },
        nav: {
          DEFAULT: '#272727',
        },
      },
      height: (theme) => ({
        inherit: 'inherit',
      }),
      minWidth: {
        btn: '8rem',
      },
      width: {
        100: '400px',
        500: '500px',
      },
      backgroundSize: {
        200: '200%',
      },
      gradientColorStops: (theme) => ({
        // primary: '#3490dc',
        secondary: '#bd9d31',
      }),
      backgroundImage: (theme) => ({
        'header-content':
          'radial-gradient(closest-side at 50% 50%, rgba(30, 30, 30, 0.35) 0%, rgb(30, 30, 30) 100%)',
        header:
          'url(https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)',
      }),
      gridTemplateColumns: {
        // Simple 16 column grid
        '20': 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
      fontSize: {
        '4l': '4rem',
        '2l': '2rem',
      },
      margin: {
        18: '5rem',
        36: '10rem',
      },
      minHeight: {
        20: '20rem',
        30: '30vh',
      },
      maxWidth: {
        78: '78%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
