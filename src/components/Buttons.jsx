import satData from './satData';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div className='flex-container'>
      {displaySats.map((orbitType) => (
      <button key={orbitType} onclick={() => filterByType(orbitType)}>
        {orbitType} Orbit
        </button>
       ))}
      <button onclick={() => filterByType('All')}>
        All Orbits
      </button>
    </div>
  );
};

export default Buttons;