import { WhatsappIcon } from "./icons";

const whatsappUrl =
  "https://wa.me/994556055015?text=" +
  encodeURIComponent("Hi Murad, I found your portfolio and…");

export function WhatsappButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-5 bottom-5 z-40 flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition hover:brightness-95 sm:right-6 sm:bottom-6"
    >
      <WhatsappIcon className="size-6" />
    </a>
  );
}
