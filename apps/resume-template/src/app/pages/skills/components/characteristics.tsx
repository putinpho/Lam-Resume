import { Box, List, ListItem, Typography, styled } from '@mui/material';
import { FC } from 'react';
import ApexCharts from 'react-apexcharts';

const CharacterisExplained: Record<string, string> = {
  Leadership:
    'Distribute and assign tasks, measure time and performance, encourange team members',
  Teamwork: 'Working well with others, being a team player.',
  Passionate:
    'Passionate about computer science. Strive to deliver the best performance can be done.',
  Communication:
    'Inquire professionalism, respectfull with self and everyone time.',
  Adaptability:
    'Willingness to learn new technologies and tools. Keeping up with new technologies',
  Delivery: 'Planning, assessing risks, and delivering projects on time.',
};
const CharacteristicsChartData = {
  series: [
    {
      name: 'Characteristics',
      data: [8, 8, 7, 10, 9, 10],
    },
  ],
  options: {
    chart: {
      toolbar: { show: false },
      id: 'characteristics',
    },
    tooltip: { enabled: false },
    fill: { opacity: 0.5 },
    yaxis: {
      show: false,
      max: 10,
      min: 0,
      tickAmount: 1,
    },
    xaxis: {
      categories: [
        'Leadership',
        'Teamwork',
        'Passionate',
        'Communication',
        'Adaptability',
        'Delivery',
      ],
      labels: {
        show: true,
        style: {
          fontSize: '1.1rem',
          fontWeight: 500,
          colors: '#ffffff',
        },
      },
    },
  },
};

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
}));

const Characteristics: FC = () => {
  return (
    <Box>
      <ApexCharts
        options={CharacteristicsChartData.options}
        series={CharacteristicsChartData.series}
        type="radar"
        height={200}
      />
      <List>
        {Object.keys(CharacterisExplained).map((key) => (
          <ListItem key={key} disablePadding disableGutters>
            <StyledTypography variant="caption">
              <strong>{key}:</strong> {CharacterisExplained[key]}
            </StyledTypography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Characteristics;
