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
        "background-color:lightcoral;padding:10px; margin:5px 0 5px 0;color:black"
      );
      return false;
    }

    console.log(
      "%cAll required environment variables are set.",
      "background-color:green;padding:10px; margin:5px 0 5px 0;color:white"
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
