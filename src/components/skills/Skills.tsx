import { useState, useEffect } from 'react';
import { SkillsProps } from './Skills.types';

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  }, []);

  return (
    <>
      <h5>Skills</h5>
      <div className="App">
        <ul>
          {skills &&
            skills.map((skill) => {
              return <li key={skill}>{skill}</li>;
            })}
        </ul>
        {isLoggedIn ? (
          <button>Start learning</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </>
  );
};
