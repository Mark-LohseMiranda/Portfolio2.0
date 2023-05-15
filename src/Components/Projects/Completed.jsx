import "./Projects.css";
import Frame from "../Frame/Frame";
import tabletopImg from "../../assets/tabletop-screenshot-min.png";
import bulletjournalImg from "../../assets/bulletjournal.png";
import gingerbread from "../../assets/gingerbread.jpg";

export default function Completed() {
  return (
    <div className="container mx-auto">
      <div className="grid-cols-2 space-y-0 animate lg:grid lg:gap-3 lg:grid-rows-3">
        <div className="">
          <Frame image={gingerbread} />
        </div>
        <div className="text-justify place-self-center">
          <p className="text-center">
            <a
              href="https://github.com/Mark-LohseMiranda/invite-tracker"
              target="_blank"
              rel="noreferrer"
            >
              <button className="m-3 specialButton">GitHub</button>
            </a>
            <a
              href="https://gingerbread.mark-lohsemiranda.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="specialButton">Deployed</button>
            </a>
          </p>
          While planning for our annual gingerbread building party I created a
          invite tracker. I stopped development after obtaining MVP. Emails are
          entered in the backend and an invite email is auto generated with a
          specific invite link. The invitee uses the link to provide number
          coming and number of houses needed.
          <br />
          <br />
          Learning to use nodemailer was challenging but I finally got it work
          with a Gmail account!
        </div>
        <div>
          <Frame image={tabletopImg} />
        </div>
        <div className="text-justify place-self-center">
          <p className="text-center">
            <a
              href="https://github.com/Mark-LohseMiranda/TableTop-FrontEnd"
              target="_blank"
              rel="noreferrer"
            >
              <button className="m-3 specialButton">GitHub</button>
            </a>
            <a
              href="https://markl-m.me/TableTop"
              target="_blank"
              rel="noreferrer"
            >
              <button className="specialButton">Deployed</button>
            </a>
          </p>
          This app was created with Virtual D&D players in mind, with this
          project you can meet up with friends to create a campaign or find new
          players within our community forum to group up with. Run or join as
          many campaigns as you like with our interactive campaign and character
          creation and track progress by adding to your inventory, proficiency
          and features list and update attributes.
          <br />
          <br />I built the user account creation/login components, integrated
          the dice functionality for both the gameboard and character creation,
          and created the character creation component.
        </div>
        <div>
          <Frame image={bulletjournalImg} />
        </div>
        <div className="text-justify place-self-center">
          <p className="text-center">
            <a
              href="https://github.com/Mark-LohseMiranda/bulletjournal"
              target="_blank"
              rel="noreferrer"
            >
              <button className="m-3 specialButton">GitHub</button>
            </a>
            <a
              href="https://markl-m.me/bulletjournal2"
              target="_blank"
              rel="noreferrer"
            >
              <button className="specialButton">Deployed</button>
            </a>
          </p>
          Bullet Journal Squared is a website that allows users to create an
          account, write journal entries, and view their past thoughts and
          feelings.
          <br />
          <br />I am most proud of the positioning feature of the days page.
          Users area able to freely move all the components and the positions
          are saved in the database.
        </div>
      </div>
    </div>
  );
}
