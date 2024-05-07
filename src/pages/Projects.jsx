import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import kickstart from "../assets/projects/kickstart.png";
import ping from "../assets/projects/ping.png";
import tictac from "../assets/projects/tictac.png";
import numb from "../assets/projects/numb.png";
import task from "../assets/projects/task.png";
import chess from "../assets/projects/chess.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Chess - PyChess"
              description="A Python-based chess game leveraging the Pygame library. This innovative application integrates advanced AI features, including the powerful Stockfish engine, offering challenging opponents at various skill levels. With meticulous code architecture and robust testing, PyChess ensures a seamless gaming experience. Automation techniques streamline deployment, making it accessible across platforms. Dive into strategic battles with PyChess today!."
              ghLink="https://github.com/nawaid2003/Chess"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="FlixHub"
              description="A cutting-edge movie website built with JavaScript and Firebase authentication. FlixHub provides a sleek and intuitive platform for users to discover and enjoy a wide range of movies and TV shows. With seamless authentication powered by Firebase, users can securely access personalized recommendations and engage with a vibrant community of film enthusiasts. Explore the world of cinema with FlixHub and elevate your movie-watching experience today."
              ghLink="https://github.com/nawaid2003/projectsite"
              demoLink="https://flixhubsite.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Credit IT"
              description="An e-commerce platform built with HTML, CSS, MySQL, and PHP. Credit IT offers a scalable and user-friendly shopping experience, with a focus on intuitive design and efficient backend development. Leveraging automation for deployment and maintenance, Credit IT ensures reliability and seamless operation. Experience secure transactions and personalized services with Credit IT, your one-stop destination for online shopping."
              ghLink="https://github.com/nawaid2003/Credit-IT"
              demoLink="https://creditit-tech.000webhostapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Lojisyel"
              description="Embrace a Healthier You with Lojisyel an AI Companion Lojisyel is your personalized AI health assistant, ready to guide you on your wellness journey. Our interactive companion provides valuable insights about your health, allowing you to set achievable goals and track progress. Empowered by AI, the app recommends resources and strategies tailored to your unique needs. Don't know where to start? Explore fitness routines, healthy recipes, and mindfulness practices all curated for you."
              ghLink="https://github.com/nawaid2003/lojisyel"
              demoLink="https://drive.google.com/file/d/132pCb3bBRle2fti3DM3hIf8XC79NuZMa/view"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={numb}
              isBlog={false}
              title="2048 Game"
              description="An addictive puzzle game created with JavaScript, offering endless hours of entertainment. Embark on a quest to reach the elusive 2048 tile by strategically combining numbered tiles on a grid. With intuitive controls and captivating gameplay, 2048 Quest challenges players to think critically and solve increasingly complex puzzles. Join the quest, sharpen your mind, and conquer the 2048 tile with 2048 Quest today."
              ghLink="https://github.com/nawaid2003/2048"
              demoLink="https://2048-simple-game.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="TaskTrek"
              description="A powerful todo app built entirely with JavaScript. Seamlessly manage your tasks and stay organized with TaskTrek's intuitive interface and robust features. From creating to-do lists to setting reminders and deadlines, TaskTrek empowers you to take control of your day. With its sleek design and user-friendly experience, TaskTrek makes productivity effortless. Elevate your task management game with TaskTrek today."
              ghLink="https://github.com/nawaid2003/ToDo-app"
              demoLink="https://to-do-proj.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="ChessMaster"
              description="An immersive chess experience meticulously crafted using JavaScript. Dive into the timeless game of strategy and skill, where every move counts. With sleek design and intuitive controls, ChessMaster offers players a seamless and captivating gameplay experience. Challenge friends or test your mettle against AI opponents. Unleash your inner grandmaster and dominate the board with ChessMaster today."
              ghLink="https://github.com/nawaid2003/chess-using-js"
              demoLink="https://chessmasters.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ping}
              isBlog={false}
              title="PingPong"
              description="An exhilarating ping pong game crafted with JavaScript. Experience the thrill of the classic arcade game right in your browser. With responsive controls and dynamic gameplay, PingPong offers endless entertainment for players of all skill levels. Compete against the computer or challenge a friend in exhilarating head-to-head matches. Get ready to unleash your paddle skills and dominate the court with PingPong today"
              ghLink="https://github.com/nawaid2003/PingPong"
              demoLink="https://ping-pong-proj.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="TicTacJS"
              description="A captivating XO game created with JavaScript. Immerse yourself in the timeless game of Tic-Tac-Toe, where strategy meets fun. With intuitive controls and sleek design, TicTacJS offers an addictive gameplay experience for players of all ages. Challenge friends or test your skills against the AI. Whether you're a seasoned pro or a beginner, TicTacJS promises hours of entertainment. Get ready to mark your victory with TicTacJS."
              ghLink="https://github.com/nawaid2003/XO-game"
              demoLink="https://xo-game-virid.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects