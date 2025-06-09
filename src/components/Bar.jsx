import { LinearProgress, linearProgressClasses, styled } from "@mui/material";

const Bar = styled(LinearProgress)(({ theme, color, variant="determinate" }) => ({
    height: 10,
    borderRadius: 5,
    marginBottom: '16px',
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: "#E7F4FF",
      ...theme.applyStyles('dark', {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: color ? color : '#56A3E6',
      ...theme.applyStyles('dark', {
        backgroundColor: '#308fe8',
      }),
    },
  }));

  export default Bar