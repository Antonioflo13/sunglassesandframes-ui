import { LogoBlock } from '@blocks/Footer';

type LogoProps = {
    block: LogoBlock;
}
export function Logo({ block }: LogoProps): JSX.Element {

  return (
    <section onClick={block.callback}>
      {block.logo}
    </section>
  );
}
