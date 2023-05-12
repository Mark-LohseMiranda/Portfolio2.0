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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla
          posuere sollicitudin aliquam ultrices. Leo vel orci porta non pulvinar
          neque laoreet suspendisse interdum. Sed pulvinar proin gravida
          hendrerit lectus. Interdum consectetur libero id faucibus nisl
          tincidunt eget nullam. Imperdiet sed euismod nisi porta lorem mollis
          aliquam ut. Pharetra sit amet aliquam id diam maecenas ultricies mi.
          Risus quis varius quam quisque id diam vel quam.
        </div>
        <div>
          <Frame image={tabletopImg} />
        </div>
        <div className="text-justify place-self-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla
          posuere sollicitudin aliquam ultrices. Leo vel orci porta non pulvinar
          neque laoreet suspendisse interdum. Sed pulvinar proin gravida
          hendrerit lectus. Interdum consectetur libero id faucibus nisl
          tincidunt eget nullam. Imperdiet sed euismod nisi porta lorem mollis
          aliquam ut. Pharetra sit amet aliquam id diam maecenas ultricies mi.
          Risus quis varius quam quisque id diam vel quam.
        </div>
        <div>
          <Frame image={bulletjournalImg} />
        </div>
        <div className="text-justify place-self-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla
          posuere sollicitudin aliquam ultrices. Leo vel orci porta non pulvinar
          neque laoreet suspendisse interdum. Sed pulvinar proin gravida
          hendrerit lectus. Interdum consectetur libero id faucibus nisl
          tincidunt eget nullam. Imperdiet sed euismod nisi porta lorem mollis
          aliquam ut. Pharetra sit amet aliquam id diam maecenas ultricies mi.
          Risus quis varius quam quisque id diam vel quam.
        </div>
      </div>
    </div>
  );
}
