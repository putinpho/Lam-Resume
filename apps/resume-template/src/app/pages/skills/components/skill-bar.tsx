import { Box, Grid, LinearProgress, Typography, styled } from '@mui/material';
import { FC } from 'react';
import { Skill } from './types';

const StyledWrapper = styled(Box, {
  name: 'SkillBarWrapper',
})(({ theme }) => ({
  padding: theme.spacing(1, 2),
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const StyledSkillName = styled(Typography, {})(({ theme }) => ({
  fontSize: '11px',
  fontWeight: 600,
  textAlign: 'left',
}));
const StyledSkillExperience = styled(Typography, {})(({ theme }) => ({
  fontSize: '11px',
  fontWeight: 300,
  textAlign: 'right',
}));

interface SkillBarProps {
  skill: Skill;
}
const SkillBar: FC<SkillBarProps> = ({ skill }) => {
  return (
    <StyledWrapper>
      <Grid container justifyContent="space-between" sx={{mb: 1}}>
        <Grid item xs>
          <StyledSkillName>{skill.name}</StyledSkillName>
        </Grid>
        <Grid item xs>
          <StyledSkillExperience>{skill.description}</StyledSkillExperience>
        </Grid>
      </Grid>
      <LinearProgress variant="determinate" value={skill.level} color='info' />
    </StyledWrapper>
  );
};

export default SkillBar;
