export default function Project({ image, name, title, github, live, tools }) {
  return (
    <section className='project'>
      <figure className='project_image relative border-b-4 border-secondary overflow-hidden border-solid'>
        <img src={image} alt={name} title={title} className='w-full block' />
        <div className='projects__btns absolute top-0 h-full w-full z-10 justify-around items-center grid grid-cols-2 gap-0.5 text-center'>
          <a
            href={live}
            className='projects__btn no-underline opacity-0 z-90 transition-all ease-in-out duration-500 text-white'
          >
            <i className='fas fa-eye'></i> Preview
          </a>
          <a
            href={github}
            className='projects__btn no-underline opacity-0 z-90 transition-all ease-in-out duration-500 text-white'
          >
            <i className='fab fa-github'></i> Github
          </a>
        </div>
      </figure>
      <div className='para project_desc'>
        <h2 className='font-semibold text-3xl mt-2.5 mb-1.5'>{name}</h2>
        <p>{title}</p>
        <br />
        <p>Utilized: {tools}</p>
      </div>
    </section>
  );
}
