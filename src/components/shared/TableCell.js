import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

export default withStyles(theme => ({
  head: {
    fontSize: 14,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

