export default function Skill({ icon, name, items }) {
  return (
    <li className='flex flex-col mb-4 sm:items-start items-center'>
      {icon ? (
        <span
          className={`fas ${icon} bg-secondary my-2 flex justify-center items-center w-12 h-8 mr-2 bg-center bg-contain rounded'
        aria-label='list image`}
          role='img'
        >
          &nbsp;
        </span>
      ) : (
        ''
      )}
      <h3 className='text-2xl font-semibold sm:opacity-100 opacity-80'>
        {name}
      </h3>
      <p className='opacity-90'>{items}</p>
    </li>
  );
}
