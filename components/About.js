import Skill from './Skill';

export default function About() {
  return (
    <section id='about'>
      <div className='relative flex flex-col sm:flex-row w-full flex-wrap max-w-screen-lg overflow-hidden m-auto mt-18 min-h-20'>
        <div className='flex text-center justify-center w-full sm:w-1/2 sm:text-left'>
          <div className='sm:max-w-78 max-w-full px-3'>
            <h2 className='text-5xl font-bold'>About Me</h2>
            <p className='my-4 text-xl opacity-80'>
              A self-taught software developer, soaking up as much knowledge and
              practice as I can in an attempt to perfect my craft. I am team
              oriented and get along with others when working in a group
              setting. In addition to writing code I enjoy writing (technical
              and to a general audience) and music (I am an indie/alternative
              rock freak 😊)
            </p>
          </div>
        </div>

        <div className='flex text-center justify-center w-full sm:w-1/2 sm:text-left'>
          <div className='sm:max-w-78 max-w-full px-3'>
            <h2 className='text-5xl font-bold'>Skills</h2>
            <ul className='list-none my-4'>
              <Skill
                icon='fa-laptop-code'
                name='Languages'
                items='JavaScript, TypeScript, Python, Golang'
              />
              <Skill
                icon='fa-terminal'
                name='Frameworks'
                items='NodeJS (Express and AdonisJS), NestJS, ReactJS'
              />
              <Skill
                icon='fa-database'
                name='Databases'
                items='PostgreSQL, MYSQL, MongoDB'
              />
              <Skill
                // icon='fa-database'
                name='Others'
                items='Docker, HTML5, Redis, Mocha, Jest'
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
