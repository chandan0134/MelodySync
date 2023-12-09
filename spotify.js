const authEndpoint="https://accounts.spotify.com/authorize?";
const clientID="35588e38cfa04f9d81c97eee4a729d33";
const redirectUri="http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];
export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;