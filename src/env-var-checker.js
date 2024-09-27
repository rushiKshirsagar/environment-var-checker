import { errorConsole, successConsole } from "../constants/console-styles";

class EnvChecker {
  constructor(requiredVars = []) {
    this.requiredVars = requiredVars;
  }

  check() {
    const missingVars = [];

    this.requiredVars.forEach((variable) => {
      const envValue = this.getEnvVariable(variable);
      if (!envValue) {
        missingVars.push(variable);
      }
    });

    if (missingVars.length > 0) {
      console.log(
        `%cError: Missing required environment variables: ${missingVars.join(
          ", "
        )}`,
        errorConsole
      );
      return false;
    }

    console.log(
      "%cAll required environment variables are set.",
      successConsole
    );
    return true;
  }

  getEnvVariable(variable) {
    if (
      typeof import.meta !== "undefined" &&
      import.meta.env &&
      import.meta.env[variable]
    ) {
      return import.meta.env[variable];
    }

    if (
      typeof process !== "undefined" &&
      process.env &&
      process.env[variable]
    ) {
      return process.env[variable];
    }

    return undefined;
  }
}

export { EnvChecker };
