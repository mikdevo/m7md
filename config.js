window.PROFILE_CONFIG = {
  site: {
    backgroundImage: "./assets/background.png",
    animatedBackground: {
      enabled: true,
      type: "blobs",
      blobs: 5,
      speed: 28
    },
    theme: {
      primary: "#6c5ce7",
      accent: "#00d1ff",
      text: "#f6f7fb",
      muted: "#cfd3e3",
    },
  },
  user: {
    displayName: "Wick",
    avatar: "./assets/avatar.png",
    banner: "./assets/banner.png",
    roles: [
      "Developer",
      "Gamer",
      "Designer",
    ],
  },
  roles: {
    Developer: '<i class="fas fa-code"></i>',
    Gamer: '<i class="fas fa-gamepad"></i>',
    Designer: '<i class="fas fa-palette"></i>',
  },
  dynamic: {
    discord: {
      enabled: true,
      userId: "740892059707244614",
      sourcePriority: ["japi", "lanyard"],
      refreshMs: 10000,
      overrideDisplayName: true,
      imageSizes: { avatar: 512, banner: 2048 },
    },
  },
  socials: [
    { name: "Instagram", url: "https://www.instagram.com/0.p63", icon: "fab fa-instagram" },
    { name: "Facebook", url: "https://www.facebook.com/share/1BKCGKE5wu/?mibextid=wwXIfr", icon: "fab fa-facebook" },
    { name: "Spotify", url: "https://open.spotify.com/user/31jkaat74hdldsguldi55ipr7gx4?si=dzW-4xB9SWyMmrfVMYTbFw", icon: "fab fa-spotify" },
    { name: "Twitch", url: "https://m.twitch.tv/r3bx55/home", icon: "fab fa-twitch" },
  ],
};