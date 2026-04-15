// all the svg icons in one place
// most are from lucide.dev
// to add a new one: copy the <path> tags from lucide, paste into a Stroke wrapper,
// then add it to the ICONS map at the bottom

// shared svg wrapper so every icon looks consistent
// (same stroke width, same viewBox, etc)
function Stroke({ size = 20, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export const IconHome = ({ size }) => (
  <Stroke size={size}>
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
    <path d="M9 21V12h6v9" />
  </Stroke>
);

export const IconUser = ({ size }) => (
  <Stroke size={size}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </Stroke>
);

export const IconFile = ({ size }) => (
  <Stroke size={size}>
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8" />
    <path d="M8 17h5" />
  </Stroke>
); //Ei kasuta ss enam? delete later?

export const IconCap = ({ size }) => (
  <Stroke size={size}>
    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
    <path d="M22 10v6"/>
    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>
  </Stroke>
);

export const IconCode = ({ size }) => (
  <Stroke size={size}>
    <path d="M16 18l6-6-6-6" />
    <path d="M8 6L2 12l6 6" />
  </Stroke>
);

export const IconFolder = ({ size }) => (
  <Stroke size={size}>
    <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
  </Stroke>
);

export const IconMail = ({ size }) => (
  <Stroke size={size}>
    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
    <path d="M2 7l10 7 10-7" />
  </Stroke>
);

export const IconPhone = ({ size }) => (
  <Stroke size={size}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 014 6a2 2 0 012-2z" />
  </Stroke>
);

export const IconPin = ({ size }) => (
  <Stroke size={size}>
    <path d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7z" />
  </Stroke>
);

// smaller default size since this one shows up next to text in project links
export const IconLink = ({ size = 13 }) => (
  <Stroke size={size}>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
  </Stroke>
);

// these two are filled instead of outlined - they dont use the Stroke wrapper
export const IconLinkedIn = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const IconGithub = ({ size = 17 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// lookup so data files can use strings like icon: "home" instead of importing each one
const ICONS = {
  home: IconHome,
  user: IconUser,
  file: IconFile,
  cap: IconCap,
  code: IconCode,
  folder: IconFolder,
  mail: IconMail,
  phone: IconPhone,
  pin: IconPin,
  link: IconLink,
  linkedin: IconLinkedIn,
  github: IconGithub,
};

export function Icon({ name, size }) {
  const Cmp = ICONS[name];
  if (!Cmp) {
    // dont crash if i typo a name somewhere, just warn me in the console
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  return <Cmp size={size} />;
}
