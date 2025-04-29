import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CloseSnackbarAction = ({ onClose }) => {
  return (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={onClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
};

export default CloseSnackbarAction;
