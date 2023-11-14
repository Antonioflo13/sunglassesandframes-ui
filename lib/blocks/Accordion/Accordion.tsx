import { ReactNode } from 'react';

export interface AccordionProps {
    children: ReactNode;
}

export const Accordion = ({ children }: AccordionProps): JSX.Element => {
  return (
    <div>
      <h1>{children}</h1>
      <p>{children}</p>
    </div>
  );
};
