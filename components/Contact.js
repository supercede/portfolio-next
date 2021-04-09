export default function Contact() {
  return (
    <section id='contact'>
      <div className='relative mt-36 min-h-30 flex flex-col m-auto sm:my-18'>
        <div className='m-auto max-w-full sm:max-w-screen-md'>
          <h2 className='text-5xl text-center font-bold'>Got an Idea?</h2>
          <p className='my-4 text-xl text-center opacity-80 anim_reachout'>
            Or want to get in touch?
          </p>
          <form
            name='contact'
            id='contactform'
            className='sm:w-500 w-screen m-auto'
            action='https://formspree.io/f/mnqozedd'
            method='POST'
          >
            <div className='my-7'>
              <label htmlFor='fullname'>
                <input
                  className='w-11/12 py-3 px-1.5 border border-gray-400 focus:border-secondary bg-transparent placeholder-secondary'
                  id='fullname'
                  name='fullname'
                  placeholder='Full Name*'
                  required
                />
              </label>
            </div>
            <div className='my-7'>
              <label htmlFor='email'>
                <input
                  className='w-11/12 py-3 px-1.5 border border-gray-400 focus:border-secondary bg-transparent placeholder-secondary'
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Email Address*'
                  required
                />
              </label>
            </div>
            <div className='my-7'>
              <label htmlFor='number'>
                <input
                  className='w-11/12 py-3 px-1.5 border border-gray-400 focus:border-secondary bg-transparent placeholder-secondary placeholder-opacity-80'
                  type='tel'
                  id='number'
                  name='number'
                  placeholder='Phone Number'
                />
              </label>
            </div>
            <div className='my-7'>
              <label htmlFor='subject'>
                <textarea
                  className='w-11/12 py-3 px-1.5 border border-gray-400 focus:border-secondary bg-transparent placeholder-secondary h-40'
                  id='subject'
                  name='subject'
                  placeholder='Subject'
                ></textarea>
              </label>
            </div>
            <div className='success opacity-0 w-full border border-green-800 -my-1 text-center font-bold'></div>
            <div className='my-5'>
              <input
                className='py-3 w-1/2 font-sans px-0 outline-none min-w-btn text-base border-secondary border hover:text-white hover:transition-all hover:ease-linear hover:duration-300 cursor-pointer'
                type='submit'
                id='send'
                value='Send'
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
