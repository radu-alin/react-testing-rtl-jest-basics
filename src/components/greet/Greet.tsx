import { GreetProps } from './greet.types';

export const Greet = ({ name }: GreetProps) => (
  <>
    <h5>Greet</h5>
    <div className="App">Hello {name ? name : 'Guest'}</div>
  </>
);
