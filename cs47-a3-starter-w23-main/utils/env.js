import { Platform } from "react-native";

// ***** TODO: Fill in your constants here ***** //
const CLIENT_ID = "09df8586bfd843d888c891816decf6e1";
const REDIRECT_URI = "exp://10.31.83.56:19000"; // TODO: Replace this with your own redirect URI
const ALBUM_ID = "5z7TD11Qh81Gbf52hd5zAv?si=WEiGLYh6S3uP49W538j_mQ"; // By default, this is the Weeknd's Album's "DAWN FM"
// ********************************************* //

const redirectUri = (uri) => {
  if (!uri) {
    const err = new Error(
      "No redirect URI provided.\nPlease provide a redirect URI in env.js.\n You can find the file in utils/env.js."
    );
    console.error(err);
    alert(err);
  }
  return Platform.OS === "web" ? "http://localhost:19006/" : uri;
};

const ENV = {
  CLIENT_ID: CLIENT_ID,
  SCOPES: [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "streaming",
    "user-read-email",
    "user-read-private",
  ],
  REDIRECT_URI: redirectUri(REDIRECT_URI),
  ALBUM_ID: ALBUM_ID,
  SPOTIFY_API: {
    // Endpoints for auth & token flow
    DISCOVERY: {
      authorizationEndpoint: "https://accounts.spotify.com/authorize",
      tokenEndpoint: "https://accounts.spotify.com/api/token",
    },
    SHORT_TERM_API:
      "https://api.spotify.com/v1/me/top/tracks?time_range=short_term",
    LONG_TERM_API:
      "https://api.spotify.com/v1/me/top/tracks?time_range=long_term",
    ALBUM_TRACK_API_GETTER: (albumId) =>
      `https://api.spotify.com/v1/albums/${albumId}/tracks`,
  },
};

const getEnv = () => ENV;
export default getEnv;
// ^ use this type of exporting to ensure compliance with webpack and expo-web
