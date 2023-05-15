import "./Projects.css";
import Frame from "../Frame/Frame";
import underConstruction from "../../assets/under-construction.png";

export default function InProgress() {
  return (
    <div className="container mx-auto">
      <div className="grid-cols-2 space-y-0 animate lg:grid lg:gap-3 lg:grid-rows3">
        <div>
          <Frame image={underConstruction} />
        </div>
        <div className="text-justify place-self-center">
          <p className="text-center">
            <span className="text-white">
              Flashcards
            </span>
            <a
              href="https://github.com/Mark-LohseMiranda/flashcards"
              target="_blank"
              rel="noreferrer"
            >
              <button className="m-3 specialButton">GitHub</button>
            </a>
          </p>
          Concept: I wanted to build a simple flashcard program. Users can save
          a deck of flashcards and choose if they are private or public. Users
          can then enter their own decks or any of the public ones and flip
          through the cards looking at either question or answer.
          <br />
          <br />
          Finished: Backend
          <br />
          In Progress: Frontend
        </div>
        <div>
          <Frame image={underConstruction} />
        </div>
        <div className="text-justify place-self-center">
          <p className="text-center">
            <span className="text-white">
              Wedding Organizer
            </span>
            <a
              href="https://github.com/Mark-LohseMiranda/wedding-mongodb-express-react-node"
              target="_blank"
              rel="noreferrer"
            >
              <button className="m-3 specialButton">GitHub</button>
            </a>
          </p>
          Concept: I wanted to make a wedding organizer app. Users can create a
          wedding, add parties, guests, and gifts. I am working with two amazing
          developers:{" "}
          <u>
            <a
              className="text-blue-300 "
              href="https://www.linkedin.com/in/courtney-cash-616a8617b/"
              target="_blank"
              rel="noreferrer"
            >
              Courtney
            </a>
          </u>{" "}
          and{" "}
          <u>
            <a
              className="text-blue-300"
              href="https://www.linkedin.com/in/nick-gray-06/"
              target="_blank"
              rel="noreferrer"
            >
              Nick
            </a>
          </u>
          .
          <br />
          <br />
          In Progress: Backend is almost done. Frontend needs work lol.
        </div>
      </div>
    </div>
  );
}
