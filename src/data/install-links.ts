export interface InstallLink {
  label: "Add to Chrome" | "Add to Firefox" | "Add to Edge";
  icon: string;
  href: string;
  preferred: boolean;
}

const chromeWebStore =
  "https://chromewebstore.google.com/detail/discussed/hhomlcmeodcgipjpjfiogjokckhibkhm";

export const installLinks = [
  {
    label: "Add to Chrome",
    icon: "/store-icons/chrome-web-store.png",
    href: chromeWebStore,
    preferred: true,
  },
  {
    label: "Add to Firefox",
    icon: "/store-icons/firefox.svg",
    href: "https://addons.mozilla.org/en-US/firefox/addon/discussed/",
    preferred: true,
  },
  {
    label: "Add to Edge",
    icon: "/store-icons/edge.svg",
    // Edge installs Chrome Web Store extensions directly; use the Edge Add-ons URL once that listing is live.
    href: chromeWebStore,
    preferred: false,
  },
] satisfies readonly InstallLink[];
