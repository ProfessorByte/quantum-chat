export function MenuIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function MessageIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

export function LogOutIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

export function SpinnerIcon() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-green-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C6.373 0 0 6.373 0 12h4z"
      />
    </svg>
  );
}

export function HistoryIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={84} height={72} fill="none">
      <path
        fill="#f3f4f6"
        d="M48 0C28.12 0 12 16.12 12 36H0l15.56 15.56.28.56L32 36H20C20 20.52 32.52 8 48 8s28 12.52 28 28-12.52 28-28 28c-7.72 0-14.72-3.16-19.76-8.24l-5.68 5.68C29.08 67.96 38.04 72 48 72c19.88 0 36-16.12 36-36S67.88 0 48 0Zm-4 20v20l17.12 10.16L64 45.32 50 37V20h-6Z"
      />
    </svg>
  );
}

export function ChatBubbleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width={150}
      height={150}
      viewBox="0 0 45.779 45.779"
    >
      <path
        fill="#f3f4f6"
        d="M37.426 2.633H8.362C3.746 2.633 0 6.369 0 10.985v17.003c0 4.615 3.747 8.344 8.362 8.344h18.48l3.902 5.604a2.827 2.827 0 0 0 2.311 1.211 2.818 2.818 0 0 0 2.314-1.197l4.129-5.865a8.361 8.361 0 0 0 6.281-8.098V10.985a8.349 8.349 0 0 0-8.353-8.352zm-21.995 19.57a2.72 2.72 0 0 1-2.726-2.717 2.722 2.722 0 0 1 2.726-2.716 2.721 2.721 0 0 1 2.726 2.716 2.72 2.72 0 0 1-2.726 2.717zm7.463 0a2.72 2.72 0 0 1-2.726-2.717 2.722 2.722 0 0 1 2.726-2.716 2.72 2.72 0 0 1 2.725 2.716 2.72 2.72 0 0 1-2.725 2.717zm7.463 0a2.721 2.721 0 0 1-2.727-2.717c0-1.499 1.221-2.716 2.727-2.716s2.726 1.217 2.726 2.716a2.72 2.72 0 0 1-2.726 2.717z"
      />
    </svg>
  );
}
