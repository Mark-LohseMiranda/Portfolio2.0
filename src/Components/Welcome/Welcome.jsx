import "./Welcome.css";

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
          <p>Thank you for visting. I am Mark Lohse-Miranda and I am a</p>
          <br />
          <p className="text-5xl text-white"><u>Full Stack Web Developer</u></p>
          <br />
          <div className="flex flex-wrap justify-center">
            <p className="max-w-xl text-justify">
              This means that I can handle whatever your website needs are. From
              a simple one page landing site to a complex interactive, visually
              apealing site with a shopping cart, user accounts or more.
            </p>
            <p className="max-w-xl mt-3 text-justify">
              I love projects large and small. Just need something updated? I
              can do that. Need something built from the ground up? I can do
              that!
            </p>
            <p className="max-w-xl mt-3 text-justify">
              Currently I am looking for work. If you're an employeer I'd love
              to chat to see if we're a good fit for each other. If you're a
              non-profit looking for volunteers I'd love to assist.
            </p>
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
