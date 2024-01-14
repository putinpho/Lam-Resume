import { Grid, Box, Chip, Typography} from '@mui/material';
interface IEducation {
  duration: string;
  university: string;
  location: string;
  degree: string;
}
function Education({ duration, location, university, degree }: IEducation) {
  return (
    <Box sx={{ mb: 3 }}>
      <Grid container justifyContent="space-between" gap={1}>
        <Grid item md={4} xs={12}>
          <Chip label={duration} color="default" />
        </Grid>
        <Grid item md={4} xs={12}>
          <Chip label={location} color="default" />
        </Grid>
      </Grid>
      <Box sx={{ mt: 1 }}>
        <Typography variant="h6">{university}</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {degree}
        </Typography>
      </Box>
    </Box>
  );
}
export default Education;
