import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
const UserInfo = () => (
  <Stack spacing={1}>
    <Typography variant="h6">Geek Squad Studio</Typography>
    <Typography>Email: geeksquadstudio@domain.com</Typography>
    <Stack direction="row" spacing={2}>
      <Typography>Expire Date: 17/11/2024</Typography>
      <Typography>Card No: H-1112223</Typography>
    </Stack>
  </Stack>
);
export default UserInfo;
