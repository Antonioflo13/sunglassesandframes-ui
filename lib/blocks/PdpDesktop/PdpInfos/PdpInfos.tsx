import { Typography } from '../../../components';

import styles from './PdpInfos.module.css';
import { PdpInfosProps } from './types';

export const PdpInfos = ({ infos }: PdpInfosProps): JSX.Element => {
  return (
    <section className={styles['container-infos']}>
      {infos.map((info, idx) => (
        <div className={styles['container-info']} key={idx}>
          <Typography Tag="h3" label={info.title} fontFamily="helvetica-medium" textSize="md" />
          <Typography
            Tag="p"
            label={info.description}
            fontFamily="helvetica-regular"
            textSize="md"
          />
        </div>
      ))}
    </section>
  );
};
