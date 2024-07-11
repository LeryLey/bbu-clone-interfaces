import { IoChevronDown } from "react-icons/io5";
import PP from "/src/assets/campuse-pp.jpg";
import SR from "/src/assets/campuse-sr.png";
import BDB from "/src/assets/campuse-bdb.png";
import BM from "/src/assets/campuse-btm.png";
import PS from "/src/assets/campuse-psn.png";
import RTK from "/src/assets/campuse-rtk.png";
import TK from "/src/assets/campuse-tk.png";
import ST from "/src/assets/campuse-st.png";
import TBK from "/src/assets/campuse-tbk.jpg";
// slide
import SlideOne from "/src/assets/slide-1.png";
import SlideTwo from "/src/assets/slide-2.png";
import SlideThree from "/src/assets/slide-3.jpg";
import SlideFour from "/src/assets/slide-4.jpg";
import SlideFive from "/src/assets/slide-5.jpg";
// image
import NewCourse from "/src/assets/course.jpg";
import { BsFillMortarboardFill } from "react-icons/bs";

interface LinkType {
  title: string;
  path: string;
}
export const headerLinks: LinkType[] = [
  {
    title: "For Enrollment",
    path: "/enrollment",
  },
  {
    title: "Sitemap",
    path: "/sitemap",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
  {
    title: "BBU Mail",
    path: "/bbuMail",
  },
];
// dropdown links
interface DropdownType {
  title: string;
  path: string;
  icon: any;
  img: any;
}
// campuses
export const campusesDropdown: DropdownType[] = [
  {
    title: "Phnom Penh Campus:",
    path: "/phon-penh",
    icon: null,
    img: PP,
  },
  {
    title: "Siem Reap Campus:",
    path: "/siem-reap",
    icon: null,
    img: SR,
  },
  {
    title: "Battambang Campus:",
    path: "/battambang",
    icon: null,
    img: BDB,
  },
  {
    title: "Banteay Meanchey Campus:",
    path: "/banteay-meanchey",
    icon: null,
    img: BM,
  },
  {
    title: "Preah Sihanouk Campus:",
    path: "/preah-sihanouk",
    icon: null,
    img: PS,
  },
  {
    title: "Ratanakiri Campus:",
    path: "/ratanakiri",
    icon: null,
    img: RTK,
  },
  {
    title: "Takeo Campus:",
    path: "/takeo",
    icon: null,
    img: TK,
  },
  {
    title: "Stung Treng Campus:",
    path: "/stung-treng",
    icon: null,
    img: ST,
  },
  {
    title: "Tboung Khmum Campus:",
    path: "/tboung-khmum",
    icon: null,
    img: TBK,
  },
];
// about bbu
export const about: DropdownType[] = [
  {
    title: "Background",
    path: "/background",
    icon: null,
    img: null,
  },
  {
    title: "Question & Answer",
    path: "/question-answer",
    icon: null,
    img: null,
  },
  {
    title: "Privacy Policy",
    path: "/privacy-policy",
    icon: null,
    img: null,
  },
  {
    title: "Teaching Staff and Administrators",
    path: "/teaching-staff-administrators",
    icon: <IoChevronDown />,
    img: null,
  },
  {
    title: "Location and Maps",
    path: "/location-maps",
    icon: null,
    img: null,
  },
  {
    title: "Vision, Mission & Strategic Goals",
    path: "/vision-mission-strategic-goals",
    icon: null,
    img: null,
  },
  {
    title: "Governance Structure",
    path: "/governance-structure",
    icon: <IoChevronDown />,
    img: null,
  },
  {
    title: "Office of Academic and Student Affairs",
    path: "/office-academic-student-affairs",
    icon: null,
    img: null,
  },
  {
    title: "Office of Planning, Finance & Administration",
    path: "/office-planning-finance-administration",
    icon: null,
    img: null,
  },
  {
    title: "Office of University Public Affairs",
    path: "/office-university-public-affairs",
    icon: null,
    img: null,
  },
  {
    title: "BBU Annual Conference",
    path: "/bbu-annual-conference",
    icon: null,
    img: null,
  },
  {
    title: "International Links",
    path: "/international-links",
    icon: <IoChevronDown />,
    img: null,
  },
  {
    title: "Recognition & Accreditation",
    path: "/recognition-accreditation",
    icon: null,
    img: null,
  },
];
// academics
export const academics = [
  {
    title: "Faculty of Economics and Agricultural Sciences",
    path: "/faculty-economics-agriculture",
    icon: null,
    img: null,
  },
  {
    title: "Faculty of Business Administration",
    path: "/faculty-business-administration",
    icon: <IoChevronDown />,
    img: null,
  },
  {
    title: "Faculty of Tourism and Hospitality",
    path: "/faculty-tourism-hospitality",
    icon: null,
    img: null,
  },
  {
    title: "Faculty of Science and Technology",
    path: "/faculty-science-technology",
    icon: null,
    img: null,
  },
  {
    title: "Faculty of Engineering and Architecture",
    path: "/faculty-engineering-architecture",
    icon: null,
    img: null,
  },
  {
    title: "Faculty of Arts, Humanities and Languages",
    path: "/faculty-arts-humanities-languages",
    icon: <IoChevronDown />,
    img: null,
  },
  {
    title: "Faculty of Law and Social Science",
    path: "/faculty-law-social-science",
    icon: null,
    img: null,
  },
  {
    title: "Master's Degree Programs",
    path: "/masters-degree-programs",
    icon: null,
    img: null,
  },
  {
    title: "School of Doctoral Studies",
    path: "/school-doctoral-studies",
    icon: null,
    img: null,
  },
];
// admission

export const admissions = [
  {
    title: "Admission Information",
    path: "/admission-information",
    icon: null,
    img: null,
  },
  {
    title: "Enroller",
    path: "/enroller",
    icon: <IoChevronDown />,
    img: null,
  },
  {
    title: "BBU Sholarship",
    path: "/sholarship",
    icon: null,
    img: null,
  },
  {
    title: "Brochure",
    path: "/brochure",
    icon: <IoChevronDown />,
    img: null,
  },
];
// research and publication
export const researchAndPublication = [
  {
    title: "Centre for Research, Resources Development and Consultancy",
    path: "/centre-research-resources-development-consultancy",
    icon: null,
    img: null,
  },
  {
    title: "Research, Consultancy and Training Program",
    path: "/research-consultancy-training-program",
    icon: null,
    img: null,
  },
  {
    title: "Publication",
    path: "/publication",
    icon: null,
    img: null,
  },
  {
    title: "International Journal of Business and Development Research (IJBDR)",
    path: "/international-journal-business-development-research",
    icon: null,
    img: null,
  },
];
// student services

export const studentServices = [
  {
    title: "Library Services",
    path: "/library-services",
    icon: null,
    img: null,
  },
  {
    title: "Student Advisory Services",
    path: "/student-advisory-services",
    icon: null,
    img: null,
  },
  {
    title: "Career and Community Services",
    path: "/career-community-services",
    icon: null,
    img: null,
  },
  {
    title: "Health Services",
    path: "/health-services",
    icon: null,
    img: null,
  },
  {
    title: "Learning Support Services",
    path: "/learning-support-services",
    icon: null,
    img: null,
  },
  {
    title: "Student Benefits",
    path: "/student-benefits",
    icon: null,
    img: null,
  },
  {
    title: "Student Loan",
    path: "/student-loan",
    icon: null,
    img: null,
  },
  {
    title: "Student Outcome",
    path: "/student-outcome",
    icon: null,
    img: null,
  },
  {
    title: "Questionnaire for Students",
    path: "/questionnaire-students",
    icon: null,
    img: null,
  },
  {
    title: "Questionnaire for Teachers",
    path: "/questionnaire-teachers",
    icon: null,
    img: null,
  },
  {
    title: "Library Catalog",
    path: "/library-catalog",
    icon: null,
    img: null,
  },
];
// slide show
export const slides = [
  {
    id: 1,
    img: SlideOne,
  },
  {
    id: 2,
    img: SlideTwo,
  },
  {
    id: 3,
    img: SlideThree,
  },
  {
    id: 4,
    img: SlideFour,
  },
  {
    id: 5,
    img: SlideFive,
  },
];
// new events
interface EventType {
  title: string;
  date: number;
  month: string;
  img: any;
  description: string;
  path: string;
}
export const events: EventType[] = [
  {
    title:
      "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ១០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
    date: 8,
    month: "Feb",
    img: NewCourse,
    description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង...",
    path: "/new-course",
  },
  {
    title:
      "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ១០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
    date: 8,
    month: "Feb",
    img: NewCourse,
    description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង...",
    path: "/new-course",
  },
  {
    title:
      "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ១០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
    date: 8,
    month: "Feb",
    img: NewCourse,
    description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង...",
    path: "/new-course",
  },
  {
    title:
      "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ១០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
    date: 8,
    month: "Feb",
    img: NewCourse,
    description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង...",
    path: "/new-course",
  },
  {
    title:
      "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ១០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
    date: 8,
    month: "Feb",
    img: NewCourse,
    description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង...",
    path: "/new-course",
  },
  {
    title:
      "វគ្គសិក្សាថ្មី! សាកលវិទ្យាល័យបៀលប្រាយ ផ្ដល់អាហារូបករណ៍សិក្សា ១០% សម្រាប់ បរិញ្ញាបត្ររង បរិញ្ញាប័ត្រ និង បរិញ្ញាបត្រជាន់ខ្ពស់",
    date: 8,
    month: "Feb",
    img: NewCourse,
    description: "សាកលវិទ្យាល័យបៀលប្រាយ ជាគ្រឹះស្ថានដ៏ធំជាងគេ ក្នុង...",
    path: "/new-course",
  },
];
// education
interface EducationType {
  icon: any;
  title: string;
}
export const educations: EducationType[] = [
  {
    icon: <BsFillMortarboardFill />,
    title: "Associate Degree",
  },
  {
    icon: <BsFillMortarboardFill />,
    title: "Bachelor's Degree",
  },
  {
    icon: <BsFillMortarboardFill />,
    title: "Master's Degree",
  },
  {
    icon: <BsFillMortarboardFill />,
    title: "Doctoral Degree",
  },
];
