import { ExperienceTypes } from '../../components/work-experience';

const WorkExperiences: ExperienceTypes.Experience[] = [
  {
    company: 'Mount Pleasant Neighbourhood House',
    position: 'Volunteer',
    date: 'August 2023 - Present',
    location: 'Vancouver, BC. Canada',
    expriences: [
      'Met and greeted approximately 10 walk-in clients per day and participated in-home visits to help with technical inquiries for senior clients.',
      'Instructed senior clients how to use laptops, phones, and install the requested apps such as Google, Gmail, and Office 365.',
    ],
  },

  {
    company: 'AVID Distribution Connection Ltd',
    position: 'Web Developer',
    date: 'Sept 2022 - Dec 2022',
    location: 'Vancouver, BC. Canada',
    expriences: [
      'Implemented a new B2B web platform, using PHP, Python, and C++ to allow new and current businesses to connect with different farmers and suppliers to purchase produce.',
      'Implemented Docker virtual machine to connect 3 virtual machines located on remote servers and configure different extensions to help synchronize file sharing across all developers in their virtual machine.',
      'Utilized Magento 2.4.5 website and related support extension to create a developer website to accelerate the development process and allow flexibility in using open-source apps',
      'Collected more than 5000 unique store data in Vancouver to help promote and maintain the searchability of the Avid storefront website on a variety of search engine.',
      'Achievement: Successfully built a website from the beginning, including buying a server, setting up a virtual machine, and testing the search engine, see more <a href="https://avidcxn.ca/">here</a>.',
    ],
  },
];
export default WorkExperiences;
