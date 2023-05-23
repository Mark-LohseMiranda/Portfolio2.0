import "./Welcome.css";
import whatsapp from "../../assets/3D_Square_with_WhatsApp_Logo.png";

export default function Welcome() {
  return (
    <div>
      <div>
        <div className="relative flex flex-wrap justify-around mt-5 mb-5 text-xl welcomeWords colorChange">
          <span>Hello, </span>
          <span>Hola, </span>
          <span>Bonjour, </span>
          <span>你好, </span>
          <span>こんにちは, </span>
          <span>Hallo, </span>
          <span>Ciao, </span>
          <span>Olá, </span>
          <span>Здравствуйте, </span>
          <span>Hej</span>
        </div>
        <div className="text-gray-300">
          {/* <br/> */}
          <p className="text-5xl text-white">
            <u>Full Stack Web Developer</u>
          </p>
          <br />
          <div className="flex flex-wrap justify-center">
            <p className="max-w-3xl text-justify">
              Hi there! I'm Mark - a true lover of the outdoors, a computer
              enthusiast, and your go-to guy for all things web development. I'm
              a former Marine and Coastie with a robust law enforcement
              background spanning 16 years. I've transitioned from serving my
              country to serving you, utilizing my knack for problem-solving to
              navigate the complex world of coding.
            </p>
            <p className="max-w-3xl mt-3 text-justify">
              My journey in technology was forged from a unique alloy of life
              experiences. Armed with a bachelor's degree in psychology and a
              full-stack web development certificate from the prestigious
              University of Washington, I have harnessed the power of
              understanding people and computers. This blend of skills enables
              me to build websites that are functional and empathetic to your
              users' needs.
            </p>
            <p className="max-w-3xl mt-3 text-justify">
              The lessons I learned from my previous roles have equipped me with
              the ability to handle any challenge thrown my way. I'm passionate
              about thinking outside the box and tackling the most complex
              issues head-on. My motto is:{" "}
              <strong><em>no problem is too big or too small.</em></strong>
            </p>
            <p className="max-w-3xl mt-3 text-justify">
              Family is the core of my universe, and I'm fortunate to share my
              life with my spouse and two children here in Washington State. As
              an outgoing individual, I thrive on the connections I form with
              people. This enthusiasm extends to my work - I'm dedicated to
              building solid relationships with my clients and understanding
              their unique needs.
            </p>
            <p className="max-w-3xl mt-3 text-justify">
              I firmly believe in using my skills to give back to the community.
              I'm an active donor of technical services to charities, working to
              improve the world, one line of code at a time.
            </p>
            <p className="max-w-3xl mt-3 text-justify">
              Whether you're a charity needing tech assistance or a business
              looking to improve your online presence, I'm here to help. I can
              support you with your website needs, regardless of the size or
              complexity of your project. I aim to bring your vision to life,
              one webpage at a time.
            </p>
            <p className="max-w-3xl mt-3 text-justify">
              Are you ready to embark on your web development journey with me?{" "}
              <strong>Let's chat!</strong>
            </p>
          </div>
          <div className="flex justify-center mt-3">
            <a href="https://wa.link/ypq77n" target="_blank" rel="noreferrer">
              <img className="w-6 h-6 m-1" src={whatsapp} alt="whatsapp" />
            </a>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div className="m-4 text-sm">
        <div className="flex justify-start">
          <div className="max-w-md p-6 m-4 text-justify bg-white rounded-lg shadow-xl dark:bg-neutral-700 bg-opacity-80">
            <i>
              Mark was very helpful and understood the concepts during the
              project phase of our training. He was always ready to answer calls
              and help us when need be. He also has a cheeky sense of humor and
              brings the morale of the group up every once in a while.
            </i>
            <div className="float-right">-Owais Jafer, Infosys Associate</div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-md p-6 m-4 text-justify bg-white rounded-lg shadow-xl bg-opacity-80 dark:bg-neutral-700">
            <i>
              I enjoyed working with Mark. I greatly appreciated the knowledge
              he shared and his ability to help keep the team encouragement
              during some long drawn out moments. Thanks Mark. I would gladly
              work with you again.
            </i>
            <div className="float-right">-Megan Carden, Infosys Associate</div>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-md p-6 m-4 text-justify bg-white rounded-lg shadow-xl dark:bg-neutral-700 bg-opacity-80">
            <i>
              Mark has been incredibly helpful every step of the way. He is a
              great team player and has amazing work ethic. Thank you Mark
            </i>
            <div className="float-right">
              -Lydia Cuen Cuenca, Infosys Associate
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-md p-6 m-4 text-justify bg-white rounded-lg shadow-xl dark:bg-neutral-700 bg-opacity-80">
            <i>
              Mark is one of the most driven people I have ever met. Not only
              that, but he is active in helping others and seeking help in the
              most heartwarming way. Having him in my close circle has been the
              privilege of a lifetime!
            </i>
            <div className="float-right">-Jonathan Newman, Full-Stack QA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
