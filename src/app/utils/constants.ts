import GitHubSVG from '../assets/SVG/GitHubSVG';
import InstagramSVG from '../assets/SVG/InstagramSVG';
import TwitterSVG from '../assets/SVG/TwitterSVG';
import LinkedInSVG from '../assets/SVG/LinkedInSVG';

export interface SocialMediaElement {
 name: string,
 link: string,
 Icon: Function
}

export interface Experience {
 link: string,
 technologies: Array<string>
}

export interface Tag {
 text: string,
}

interface SocialMediaElements extends Array<SocialMediaElement> { }

export interface PersonalData {
 name: string,
 title: string,
 intro: string,
 SM: SocialMediaElements
}

export const Links: Array<string> = [
 "about",
 "experience",
 "projects"
]

export const personalData: PersonalData = {
 name: "Said Gouzal",
 title: "Software Engineer 👨‍💻",
 intro: "I am a passionate Software Engineer skilled in React JS/TS 💻, React Native 📱 and Electrone JS 🖥️",
 SM: [
  {
   name: "GitHub",
   link: "https://github.com/SaidGouzal",
   Icon: GitHubSVG
  },
  {
   name: "Instagram",
   link: "https://instagram.com/SaidGouzal",
   Icon: InstagramSVG
  },
  {
   name: "Twitter",
   link: "https://twitter.com/GouzalSaid",
   Icon: TwitterSVG
  },
  {
   name: "LinkedIn",
   link: "https://www.linkedin.com/in/said-gouzal-9a8a46184/",
   Icon: LinkedInSVG
  }
 ]
}
