export interface InstallLink {
  label: "Add to Chrome" | "Add to Firefox" | "Download Edge 0.3.8 ZIP";
  icon: string;
  href: string;
  primary: boolean;
}

export const installLinks = [
  {
    label: "Add to Chrome",
    icon: "/store-icons/chrome-web-store.png",
    href: "https://chromewebstore.google.com/detail/discussed/hhomlcmeodcgipjpjfiogjokckhibkhm",
    primary: true,
  },
  {
    label: "Add to Firefox",
    icon: "/store-icons/firefox.svg",
    href: "https://addons.mozilla.org/en-US/firefox/addon/discussed/",
    primary: false,
  },
  {
    label: "Download Edge 0.3.8 ZIP",
    icon: "/store-icons/edge.svg",
    href: "https://github.com/discussed-dev/extension/releases/download/v0.3.8/discussed-0.3.8-chrome.zip",
    primary: false,
  },
] satisfies readonly InstallLink[];
