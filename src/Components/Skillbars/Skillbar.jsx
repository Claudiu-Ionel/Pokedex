import './skillbar.css';

const Skillbar = ({ name, level }) => {
  return (
    <div className="skill-bar-wrapper">
      <div className="skill-bar-name">{name}</div>
      <div className="skill-bar-body">
        <div className="skill-bar-body-fil" style={{ width: level }}></div>
        <div className="skill-bar-body-stat">
          <span>{level}</span>
        </div>
      </div>
    </div>
  );
};

export default Skillbar;
