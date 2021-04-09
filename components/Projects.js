import Project from './Project';

export default function Projects() {
  return (
    <section id='projects'>
      <div className='my-36'>
        <h2 className='text-5xl font-bold'>Some Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-2.5 grid-flow-row m-auto my-10'>
          <Project
            image='/static/images/naijafotos.png'
            name='Naijafotos'
            title='A photo sharing website'
            github='https://github.com/supercede/naija-fotos'
            live='https://naijafotos-backend.herokuapp.com/'
            tools='Express, React, MongoDB, TravisCI, Swagger, Jest, Docker, Cloudinary'
          />
          <Project
            image='/static/images/naijatours.png'
            name='Naijatours'
            title='A tour management website'
            github='https://github.com/supercede/naija-tour'
            live='https://naijatours.herokuapp.com/'
            tools='Express, MongoDB, Pug'
          />
          <Project
            image='/static/images/get-it-done.png'
            name='Get it Done'
            title='A full-stack to-do list with authentication'
            github='https://github.com/supercede/nest-task-manager'
            live='https://get-it-done.s3-website.us-east-2.amazonaws.com/'
            tools='Typescript(NestJS), React, AWS (S3, EC2)'
          />
        </div>
      </div>
    </section>
  );
}
