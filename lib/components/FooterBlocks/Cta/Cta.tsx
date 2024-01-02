import { CtaBlock } from '@blocks/Footer';

type CtaProps = {
    block: CtaBlock;
}
export function Cta({ block }: CtaProps): JSX.Element {

  return (
    <>
      <div>{block.item}</div>
      {block.items.map((item, key) => (
        <section key={key}>
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.cta}</div>
        </section>
      ))}
    </>
  );
}
