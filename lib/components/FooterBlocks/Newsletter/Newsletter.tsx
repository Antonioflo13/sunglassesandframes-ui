import { NewsletterBlock } from '@blocks/Footer';

type NewsletterProps = {
    block: NewsletterBlock;
}
export function Newsletter({ block }: NewsletterProps): JSX.Element {

  return (
    <>
      <div>{block.title}</div>
      <div>{block.subTitle}</div>
      <input type="text" />
      <div>{block.description}</div>
    </>
  );
}
