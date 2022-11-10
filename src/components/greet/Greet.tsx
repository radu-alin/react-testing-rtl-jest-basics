type GreetProps = {
  name?: string;
};

export const Greet = ({ name }: GreetProps) => <div>Hello {name}</div>;
