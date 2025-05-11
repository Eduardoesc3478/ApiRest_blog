import { config } from "dotenv";
import { initServer } from "./configs/server.js";
import { addDefaultPublication } from "./src/publication/createPublication.js";

config();
initServer();
addDefaultPublication();
