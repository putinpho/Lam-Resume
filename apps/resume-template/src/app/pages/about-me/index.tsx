import { Target, User } from 'react-feather';
import PageCover from '../../components/page-layout/page-cover';
import {
  SectionCol,
  SectionRow,
  SectionTitle,
  SectionWrapper,
} from '../../components/section';
import { Typography } from '@mui/material';
import Education from './components/education';

const AboutMe = () => {
  return (
    <PageCover>
      <SectionWrapper>
        <SectionTitle icon={<User size={35} />} title="About Me" />
        <SectionRow>
          <SectionCol>
            <Typography variant="body1">
              Recent graduate and aspiring software engineer with a passion for
              learning and a demonstrated aptitude for cutting-edge
              technologies. My independent study has provided me with a solid
              understanding of ReactJS, Git Actions, Kubernetes, and Istio, as
              well as practical experience in developing micro front-ends with
              Federation webpack plugin. During my studies , I actively seek challenges through personal
              projects and embrace opportunities to learn new skills quickly. I
              am confident that my self-motivation, dedication, technical skillset, and
              collaborative spirit make me a valuable asset to your team.
            </Typography>
          </SectionCol>
        </SectionRow>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle icon={<Target size={35} />} title="Education" />
        <SectionRow>
          <SectionCol>
            <Education
              duration="2022-2023"
              location="Vancouver, BC. Canada"
              university="Langara College"
              degree="Associate of Science Degree in Computer Science"
            />
            <Education
              duration="2020-2022"
              location="Vancouver, BC. Canada"
              university="Simon Fraser University"
              degree="Bachelor of Science in Computer Science"
            />
            <Education
              duration="2018-2020"
              location="Vancouver, BC. Canada"
              university="Langara College"
              degree="Associate of Science Degree in Computer Science"
            />
          </SectionCol>
        </SectionRow>
      </SectionWrapper>
    </PageCover>
  );
};

export default AboutMe;
