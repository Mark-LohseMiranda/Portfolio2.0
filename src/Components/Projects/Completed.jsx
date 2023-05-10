import "./Projects.css";
import Frame from "../Frame/Frame";
import tabletopImg from "../../assets/tabletop-screenshot-min.png";
import bulletjournalImg from "../../assets/bulletjournal.png";
import gingerbread from "../../assets/gingerbread.jpg";

export default function Completed() {

  return (
    <div className="container mx-auto">
      <div className="grid-cols-2 space-y-0 animate lg:grid lg:gap-3 lg:grid-rows-3">
        <div>
          <Frame image={gingerbread} />
        </div>
        <div>
          <Frame image={tabletopImg} />
        </div>
        <div>
          <Frame image={bulletjournalImg} />
        </div>
      </div>
      
    </div>
  );
}
