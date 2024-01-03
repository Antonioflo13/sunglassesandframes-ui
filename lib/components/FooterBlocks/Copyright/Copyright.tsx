import { CopyrightBlock } from '@blocks/Footer';
import { Typography } from '@components/Typography';

type CopyrightProps = {
    block: CopyrightBlock;
}
export function Copyright({ block }: CopyrightProps): JSX.Element {

  return <Typography label={block.label} fontFamily="helvetica-regular" />;
}
