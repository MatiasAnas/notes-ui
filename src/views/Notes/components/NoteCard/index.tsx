import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { NoteCardProps } from './types';
import styles from './styles.module.scss';
import { Note } from '../../../../types/notes';

const NoteCard = ({ note }: NoteCardProps) => {
  const getContentClassName = ({ bold, italic }: Partial<Note>): string =>
    `${styles.content} ${bold && styles.bold} ${italic && styles.italic}`;

  return (
    <Box className={styles.container}>
      <Typography variant="h6" className={styles.title}>
        {note.title}
      </Typography>
      <Typography variant="subtitle1" className={getContentClassName(note)}>
        {note.content}
      </Typography>
    </Box>
  );
};

export default NoteCard;
