import styles from './HeadingGroup.module.css';

type Props = {
  commitedFieldsToAdd: number;
};

const HeadingGroup: React.FC<Props> = ({ commitedFieldsToAdd }) => {
  return (
    <div className={`col-6 text-center d-none d-lg-block ${styles.headingGroup}`}>
      {[...Array(commitedFieldsToAdd)].map((value: undefined, index: number) => (
        <h1 key={index} className={styles.h1}>
          CHESS <span className={styles.span}>/</span> AND <span className={styles.span}>/</span>{' '}
          KNOWLEDGE
        </h1>
      ))}
    </div>
  );
};

export default HeadingGroup;
