import dotenv from "dotenv";
import commandLineArgs from "command-line-args";

// Setup command line options
const options = commandLineArgs([
  {
    name: "env",
    alias: "e",
    defaultValue: "production", // on production set the default value to the env file name of your app e.g "defaultValue": "" (if the name of your env file is .env)
    type: String
  }
]);

const { parsed, error } = dotenv.config({
  path: `./env/${options.env}.env` // Set the path to your environment variables
});

if (error) throw error;
