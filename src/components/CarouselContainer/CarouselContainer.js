import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import VideoStoreLight from "./../../images/the_video_store_light.png";
import SimpleStepsLight from "./../../images/simple_steps_light.png";
import TravelGuruLight from "./../../images/travel_guru_light.png";
import VideoStoreDark from "./../../images/the_video_store_dark.png";
import SimpleStepsDark from "./../../images/simple_steps_dark.png";
import TravelGuruDark from "./../../images/travel_guru_dark.png";
import IveGotToDoThisDark from "./../../images/ive_got_to_do_this_dark.png";
import IveGotToDoThisLight from "./../../images/ive_got_to_do_this_light.png";
import Carousel from "../Carousel/Carousel";

const CarouselContainer = () => {
  const { isLightTheme } = useContext(ThemeContext);

  const projects = [
    {
      image: { image: isLightTheme ? VideoStoreLight : VideoStoreDark },
      imageAlt: "sample of the video store project",
      title: "The Video Store",
      text: "The Video Store will provide you with a selection of those most popular movies. You can favourite the movies, rent them or simply just browse for ideas...",
      deploy: "https://lucy-quinn.github.io/The-Video-Store-m1-Project/",
      github: "https://github.com/Lucy-Quinn/The-Video-Store-m1-Project",
      languages: "HTML5 | CSS3 | JavaScript | Bootstrap | External API",
    },
    {
      image: { image: isLightTheme ? SimpleStepsLight : SimpleStepsDark },
      imageAlt: "sample of the simple steps project",
      title: "Simple Steps",
      text: "A web app that connects volunteers and charities in Barcelona, which offers two types of users; one to volunteer and one to find volunteers.",
      deploy: "https://simple-steps.herokuapp.com/",
      github: "https://github.com/Lucy-Quinn/Simple-Steps",
      languages:
        "Server Side Rendering | HTML5 | CSS3 | NodeJS | Express | MongoDB | Mongoose | JSX | Heroku",
    },
    {
      image: { image: isLightTheme ? TravelGuruLight : TravelGuruDark },
      imageAlt: "sample of the travel guru project",
      title: "Travel Guru",
      text: "A full stack web app with the intention for users to be able to log and keep a record of all of their travel memories and find travel inspiration.",
      deploy: "https://travel-guru.herokuapp.com/",
      github: "https://github.com/Lucy-Quinn/Client-Travel-Guru",
      languages:
        "ReactJS | MongoDB | Mongoose | Express | CSS3 | HTML5 | Postman | Heroku",
    },
    {
      image: { image: isLightTheme ? IveGotToDoThisDark : IveGotToDoThisLight },
      imageAlt: "sample of i've got to do this",
      title: `I've got to do this!`,
      text: "A todo list web app using both Redux and an external emoji API",
      deploy: "https://todo-list-redux-a3scb03e9-lucy-quinn.vercel.app/",
      github: "https://github.com/Lucy-Quinn/Todo-List-Redux",
      languages:
        "ReactJS | Redux | Redux-Saga | Styled-components | Lodash | Prop-types | Axios | React-datepicker | Eslint | Prettier | Vercel",
    },
  ];

  return (
    <div className="carousel">
      <Carousel projects={projects} />
    </div>
  );
};

export default CarouselContainer;
