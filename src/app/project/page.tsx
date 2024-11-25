import "../../style/project.css";
import Image from "next/image";
import "../globals.css"

export default function Project() {
  return (
    <div className="project-box">
      <h1 className="project-heading">My Projects</h1>
      <div className="main-div">
        <div className="project-item">
          <Image
            src="/countdown timer.PNG"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="portfolio-image"
          />

          <h3>Countdown Timer</h3>
          <p>
            A website powered by Next.js and TypeScript, featuring an
            interactive countdown function for tracking events.
          </p>
          <button type="button">
            <a
              href="https://count-down-timer-beryl.vercel.app/"
              target="_blank"
            >
              View Timer
            </a>
          </button>
        </div>

        <div className="project-item">
          <Image
            src="/cv.png"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="portfolio-image"
          />

          <h3>Static Interactive Resume</h3>
          <p>
            An interactive resume built with TypeScript, HTML, and CSS, enabling
            users to dynamically showcase their skills.
          </p>
          <button type="button">
            <a
              href="https://static-interactive-resume-builder-kpbu.vercel.app/"
              target="_blank"
            >
              View Resume
            </a>
          </button>
        </div>

        <div className="project-item">
          <Image
            src="/todo-list.PNG"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="portfolio-image"
          />

          <h3>Todo List</h3>
          <p>
            A task management application built with React and TypeScript,
            designed for efficient organization and productivity.
          </p>
          <button type="button">
            <a
              href="https://todo-list-chi-lovat.vercel.app/?vercelToolbarCode=kH2-UXAi21lRa2p"
              target="_blank"
            >
              View List
            </a>
          </button>
        </div>

        <div className="project-item">
          <Image
            src="/digital-clock.PNG"
            alt="clock Image"
            width={300}
            height={250}
            className="portfolio-image"
          />

          <h3>Digital Clock</h3>
          <p>
          A digital clock is a contemporary device designed to measure and display time in a numerical format.
          </p>
          <button type="button">
            <a
              href="https://next-js-digital-clock-two.vercel.app/"
              target="_blank"
            >
              View Clock
            </a>
          </button>
        </div>

        <div className="project-item">
          <Image
            src="/calculator.PNG"
            alt="clock Image"
            width={300}
            height={250}
            className="portfolio-image"
          />

          <h3>Calculator</h3>
          <p>
          A calculator is a compact device used for performing mathematical calculations.
          </p>
          <button type="button">
            <a
              href="https://next-js-simple-calculator.vercel.app/"
              target="_blank"
            >
              View Calculator
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
