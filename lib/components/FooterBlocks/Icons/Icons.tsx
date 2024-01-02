import { IconsBlock } from '@blocks/Footer';

type IconsProps = {
    block: IconsBlock;
}
export function Icons({ block }: IconsProps): JSX.Element {

  return (
    <>
      {block.items.map((item, key) => (
        <div key={key}>
          <div onClick={item.callback}>{item.icon}</div>
        </div>
      ))}
    </>
  );
}
