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
  username: "Isaac Perkins",
  title: "Hi all, I'm Isaac",
  subTitle: "Results-driven Computer Science and Data Science student at the University of Oregon with a proven track record of academic excellence. Proficient in software development and machine learning, passionate about leveraging technology to drive innovation. Seeking challenging opportunities to apply my skills and contribute to cutting-edge advancements in the field",
  resumeLink:
    "https://drive.google.com/file/d/1-ul9QSgb_g2_2sViKbkNx1_DIdTQgBuq/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Isaac987",
  linkedin: "https://www.linkedin.com/in/isaac-p-5a0868132/",
  gmail: "iperkins@uoregon.edu",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEVELOPING CUTTING-EDGE SOFTWARE SOLUTIONS AND LEVERAGING MACHINE LEARNING TECHNIQUES TO SOLVE COMPLEX PROBLEMS",
  skills: [
    emoji(
      "⚡ Develop cutting-edge software solutions"),
    emoji("⚡ Utilize machine learning techniques to solve complex problems"),
    emoji("⚡ Apply programming skills in languages such as C, C++, Python, and Java")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C",
      fontAwesomeClassname: "devicon-c-plain"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "devicon-cplusplus-plain"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "devicon-java-plain"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "numpy",
      fontAwesomeClassname: "devicon-numpy-original"
    },
    {
      skillName: "pandas",
      fontAwesomeClassname: "devicon-pandas-original"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "devicon-pytorch-original"
    },
    {
      skillName: "tensorflow",
      fontAwesomeClassname: "devicon-tensorflow-original"
    },
    {
      skillName: "scikit learn",
      fontAwesomeClassname: "fa fa-cog"
    },
    {
      skillName: "jupyter",
      fontAwesomeClassname: "devicon-jupyter-plain"
    },
    {
      skillName: "anaconda",
      fontAwesomeClassname: "devicon-anaconda-original"
    },
    {
      skillName: "windows",
      fontAwesomeClassname: "devicon-windows8-original"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "devicon-linux-plain"
    },
    {
      skillName: "mac os",
      fontAwesomeClassname: "devicon-apple-original"
    },
    {
      skillName: "html",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Oregon",
      logo: require("./assets/images/uo_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2020 - June 2024",
      // desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [" Cumulative GPA 3.83"]
    },
    {
      schoolName: "University of Oregon",
      logo: require("./assets/images/uo_logo.png"),
      subHeader: "Bachelor of Science in Data Science",
      duration: "September 2020 - June 2024",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [" Cumulative GPA 3.75"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Support",
      company: "University of Oregon",
      companylogo: require("./assets/images/uo_logo.png"),
      date: "Feb 2023 - Present",
      desc: "User Support Services will strive to create a consistent customer-focused support experience, ensure a secure IT environment, and provide resources that empower students, faculty, and staff to achieve their diverse goals",
      descBullets: [
        "Introduced a solution to recurring printer problems, reducing printer issues by 60%",
        "Utilized a priority ticket system to fulfill requests promptly and documented the steps taken",
        "Contributed to a common knowledge base for future tailored self support",
        "Collaborated effectively in a team, providing timely technical services",
      ]
    },
    {
      role: "Java Mentor",
      company: "The NW Advanced Programming Workshop",
      companylogo: require("./assets/images/generic_logo.jpg"),
      date: "Jan 2023 - June 2023",
      desc: "An immersion program for high school students designed to take their understanding of computer science to the next level",
      descBullets: [
        "Guided and mentored students in debugging and completing their programming projects",
        "Documented successful approaches and areas for improvement, enhancing students' understanding",
        "Designed two Java assignments to teach object-oriented programming concepts",
        "Continuously evaluated and correct documentation for improved comprehension",
      ]
    },
    {
      role: "Web Developer",
      company: "University of Oregon",
      companylogo: require("./assets/images/uo_logo.png"),
      date: "Apr 2022 - Sep 2022",
      desc: "Working in partnership with UO schools and colleges, selected vendors, and national credentialing associations, we serve the public by enabling learning outside of the traditional university setting.",
      descBullets: [
        "Executed requested edits to meet clients' standards and expectations",
        "Developed and edited web pages using HTML, CSS, JavaScript, and PHP",
        "Provided resourceful information and contributed to the team's success",
        "Automated task management software by integrating calendar data, reducing task creation time by 1 minute",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/iste_logo.png"),
      projectName: "ISTE",
      projectDesc: "As a web developer at the University of Oregon, I had the opportunity to work closely with ISTE, our largest client. I enhanced the website's appearance and user experience while managing forms and an SQL database for thousands of conference attendees. Git served as our version control system, and I developed on macOS for a reliable and efficient workflow",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://conference.iste.org/2023/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/generic_logo.jpg"),
      projectName: "The NW Advanced Programming Workshop",
      projectDesc: "As a Java mentor at the NW Advanced Programming Workshop, I was responsible for developing course projects for the students. One of the projects involved creating a text-based adventure game in Java, where the objective was to find the combination to a lock by searching for clues within a room. To guide the students, I provided instructions for both a function-based and an object-based approach. Another project I designed was a console-based snake game. Due to the limited resources available on the free version of Replit that our students used, I had to provide a library that enabled the use of limited ASCII graphics within the Replit console. This approach ensured that resources were used sparingly while still allowing for an engaging gaming experience",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nwapw.org/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(503)-559-5568",
  email_address: "iperkins@uoregon.edu"
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
  isHireable
};
