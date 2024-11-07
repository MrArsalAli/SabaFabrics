import { Link } from "react-router-dom";

function WhatsappButton() {
  return (
    <div className="fixed bottom-3 start-3 md:bottom-6 md:start-6 group">
      <Link
        to={"https://wa.me/+923402196848"}
        target="_blank"
        data-dial-toggle="speed-dial-menu-bottom-left"
        aria-controls="speed-dial-menu-bottom-left"
        aria-expanded="false"
        className="flex items-center justify-center rounded-full w-10 h-10 md:w-14 md:h-14"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="SabaFab"
        />
      </Link>
    </div>
  );
}

export default WhatsappButton;
