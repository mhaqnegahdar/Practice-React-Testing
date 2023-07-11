export type TddGreetProps = {
  name?: string;
};

export type SkillsProps = {
  skills: string[];
};

export type UseCounterProps = {
  initialCount?: number;
};

export type CounterTwoProps = {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
};
