import { MenuBlock } from '@blocks/Footer';

type MenuProps = {
    block: MenuBlock;
}
export function Menu({ block }: MenuProps): JSX.Element {

  return (
    <>
      <div>{block.item}</div>
      {block.items.map((item, key) => (
        <div key={key}>
          <div onClick={item.callback}>{item.label}</div>
        </div>
      ))}
    </>
  );
}
