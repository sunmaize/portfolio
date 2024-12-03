/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Haoran Sun",
  title: "Hi there, I'm Haoran",
  subTitle: [
    emoji(
      "🔧 Over three years of experience as a backend developer for Meituan (Dianping App)"
    ),
    emoji(
      " 💻 Proficient in Java and Spring, with over 100k lines of code written for the Dianping App"
    ),
    emoji("💼 Working for Mastercard as A SDE II now")
  ],
  resumeLink:
    "https://docs.google.com/document/d/1dHEOj-4GocPFqiXej0mltcRS2Pj11NN_NbCD5N9JkWY/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sunmaize",
  linkedin: "https://www.linkedin.com/in/haoran-sun-hannah/",
  gmail: "hannahsun.ca@gmail.com",
  medium: "https://medium.com/@hannahsun.ca",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "EXPERIENCED BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Proficient in backend development using Java, Spring, MySQL, and Redis."
    ),
    emoji(
      "⚡ Experienced in building and optimizing scalable, high-performance distributed systems."
    ),
    emoji(
      "⚡ Strong skills in database optimization and managing large datasets using techniques like indexing and sharding."
    ),
    emoji(
      "⚡ Adept at collaborating with cross-functional teams to deliver solutions that balance technical efficiency with business goals."
    ),
    emoji(
      "⚡ Skilled in ensuring system stability, performance tuning, and reducing development time through process improvements."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  // Both Font Awesome and custom image icons
  // iconUrls are from https://icons8.com/icons/

  softwareSkills: [
    {
      skillName: "Java",
      iconUrl:
        "https://img.icons8.com/?size=100&id=13679&format=png&color=000000"
    },
    {
      skillName: "cpp",
      iconUrl:
        "https://img.icons8.com/?size=100&id=tmthf8xybKpa&format=png&color=000000"
    },
    {
      skillName: "python",
      iconUrl:
        "https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
    },
    {
      skillName: "Spring",
      iconUrl:
        "https://img.icons8.com/?size=100&id=90519&format=png&color=000000"
    },
    {
      skillName: "MySQL",
      iconUrl:
        "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000"
    },
    {
      skillName: "Redis",
      iconUrl:
        "https://img.icons8.com/?size=100&id=pHS3eRpynIRQ&format=png&color=000000"
    },
    {
      skillName: "ElasticSearch",
      iconUrl:
        "https://img.icons8.com/?size=100&id=aGBLcugRkYpT&format=png&color=000000"
    },
    {
      skillName: "Git",
      iconUrl:
        "https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
    },
    {
      skillName: "Docker",
      iconUrl:
        "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000"
    },
    //    {
    //      skillName: "swift",
    //      fontAwesomeClassname: "fab fa-swift"
    //    },
    //    {
    //      skillName: "npm",
    //      fontAwesomeClassname: "fab fa-npm"
    //    },
    //    {
    //      skillName: "database",
    //      iconUrl: "https://img.icons8.com/?size=100&id=8305&format=png&color=000000"
    //    },
    {
      skillName: "aws",
      iconUrl:
        "https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
    },
    {
      skillName: "Kafka",
      iconUrl:
        "https://img.icons8.com/?size=100&id=fOhLNqGJsUbJ&format=png&color=000000"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Tongji University",
      logo: require("./assets/images/tongjiLogo.png"),
      subHeader: "Master in Control Science and Engineering",
      duration: "September 2018 - March 2021",
      desc: "Ranked in the top 10% of my major. Participated in the research of Robotics and published 2 patterns. Participated in the RoboCup Soccer team(TJArk) and won the China Regional Championship, advancing to the quarterfinals in the World Cup.",
      descBullets: [
        "2021 Outstanding graduate of Tongji University",
        "2019 Outstanding student of Tongji University",
        "Champion of 2019 RoboCup China Open",
        "SMIC MengNing Scholarship of SongQingling Foundation",
        "Second Place of 2019 China Post Graduate Mathematical Contest in Modeling"
      ]
    },
    {
      schoolName: "Shanghai University",
      logo: require("./assets/images/shangdaLogo.png"),
      subHeader: "Bachelor of Engineering in Automation",
      duration: "September 2014 - July 2018",
      desc: "Ranked 1st in the major. Participated in the RoboCup Basketball team and won second place in the China Regional Competition.",
      descBullets: [
        "2018 Outstanding Graduate of Shanghai University",
        "2016/2017 Outstanding Student of Shanghai University",
        "2016/2017 Excellence Academic Scholarship",
        "Second Place of 2017 China Robot Competition Basketball Robot Group"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "System Design", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer II",
      company: "Mastercard",
      companylogo: require("./assets/images/mastercardLogo.png"),
      date: "November 2024 – Present",
      desc: "As a backend software engineer in the Decision Management Program, I focus on developing and maintaining scalable backend systems that power Mastercard’s decision-making processes.",
      descBullets: [
        "Designing, implementing, and optimizing APIs.",
        "Enhancing system performance, reliability, and scalability.",
        "Collaborating with cross-functional teams to integrate advanced tools.",
        "Supporting business-critical systems to ensure seamless transaction processing and decision-making capabilities."
      ]
    },
    {
      role: "Software Development Engineer II",
      company: "Meituan",
      companylogo: require("./assets/images/meituanLogo.png"),
      date: "July 2022 – May 2024",
      desc: "Took on more leadership responsibilities, including system design, backend architecture improvements, and driving key technical initiatives that significantly impacted system scalability, performance, and business operations.",
      descBullets: [
        "Led the modularization of the review incentive system, reducing development time by 70%.",
        "Spearheaded database optimization for Free Trial, improving storage stability and system scalability.",
        "Developed subscription features for Free Trial, increasing DAU by 16% and driving user engagement."
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Meituan",
      companylogo: require("./assets/images/meituanLogo.png"),
      date: "May 2021 – July 2022",
      desc: "Focused on backend development and system maintenance, gaining valuable experience in handling complex systems and supporting various business needs. Actively contributed to system stability, performance optimizations, and the development of new features.",
      descBullets: [
        "Contributed to question-answer backend reconstruction, enhancing user management and operational efficiency.",
        "Supported video processing optimization, reducing processing time by 54% and improving success rates.",
        "Delivered MVP of review incentive campaign manage system, enabling faster feature deployment and improved operational workflows."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Meituan(Dianping App)",
      companylogo: require("./assets/images/dianpingLogo.png"),
      date: "April 2020 – July 2020",
      desc: "Gained hands-on experience in backend development and took on several key responsibilities, laying a strong foundation for my future work as a full-time developer.",
      descBullets: [
        "Contributed to developing and deploying customer-facing features, improving user experience.",
        "Completed upgrades for several services, enhancing system stability and security.",
        "Gained proficiency in Java, web application frameworks, and layered application design principles."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
// TODO 在github上维护一两个自己的项目之后再放出来

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
// TODO: 完善我的BigProject之后再打开

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Basketball Robot Team",
      subtitle:
        "Second Place of 2017 China Robot Competition Basketball Robot Group. Developed an OpenCV-based vision system for the basketball robot, enhancing real-time object detection and competition performance.",
      image: require("./assets/images/BasketballRobot.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Detail",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "News",
          url: "https://jwb.shu.edu.cn/info/1016/35211.htm"
        }
      ]
    },
    {
      title: "Soccer Robot Team",
      subtitle:
        "Contributed to winning the China Championship and achieving Top 8 in the RoboCup Soccer World Cup. Developed an optimized camera extrinsics calibration system for NAO robots, reducing calibration time by 80% and enhancing accuracy for vision tasks.",
      image: require("./assets/images/naoRobot.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Detail",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Media",
          url: "https://www.youtube.com/watch?v=KkZf3MttR2s&t=19s"
        },
        {
          name: "News",
          url: "http://news.tongji.edu.cn/info/1003/69413.htm"
        },
        {
          name: "Pattern",
          url: "https://patents.google.com/patent/CN110930458A/en?oq=CN110930458A"
        }
      ]
    }
    //    ,{
    //      title: "PWA Web App Developer",
    //      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //      image: require("./assets/images/pwaLogo.webp"),
    //      imageAlt: "PWA Logo",
    //      footerLink: [
    //        {
    //            name: "Certification",
    //            url: ""},
    //        {
    //          name: "Final Project",
    //          url: "https://pakistan-olx-1.firebaseapp.com/"
    //        }
    //      ]
    //    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@hannahsun.ca/deploying-blog-using-wordpress-on-aws-with-docker-9f0f0f163f92",
      title: "Deploying Blog Using WordPress on AWS with Docker",
      description:
        "Learn how to deploy a WordPress blog on AWS using Docker, combining cloud infrastructure with containerization for a scalable, efficient setup. This guide showcases my technical ability in cloud services and Docker orchestration."
    },
    {
      url: "https://medium.com/@hannahsun.ca/building-and-deploying-a-personal-portfolio-website-with-github-pages-1104715acc4a",
      title:
        "Building and Deploying a Personal Portfolio Website with GitHub Pages",
      description:
        "Learn how to build and deploy your own developer portfolio using React, GitHub Pages, and custom icons to showcase your skills in style."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "hannahsun.ca@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
