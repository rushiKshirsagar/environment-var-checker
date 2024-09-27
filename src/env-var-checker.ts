export class EnvChecker {
  private requiredVars: string[];
  private prefix: string;

  constructor(
    requiredVars: string[] = [],
    framework: "vite" | "cra" | "angular" = "vite"
  ) {
    this.requiredVars = requiredVars;

    // Determine the correct prefix based on the framework
    if (framework === "vite") {
      this.prefix = "VITE_";
    } else if (framework === "cra") {
      this.prefix = "REACT_APP_";
    } else {
      this.prefix = ""; // Angular doesn't use a prefix
    }
  }

  public check(): boolean {
    const missingVars: string[] = [];

    this.requiredVars.forEach((variable) => {
      const envVar = this.getEnvVariable(variable);

      if (!envVar) {
        missingVars.push(variable);
      }
    });

    if (missingVars.length > 0) {
      console.error(
        `Error: Missing required environment variables: ${missingVars.join(
          ", "
        )}`
      );
      return false;
    }

    console.log("All required environment variables are set.");
    return true;
  }

  public warn(): boolean {
    const missingVars: string[] = [];

    this.requiredVars.forEach((variable) => {
      const envVar = this.getEnvVariable(variable);

      if (!envVar) {
        missingVars.push(variable);
      }
    });

    if (missingVars.length > 0) {
      console.warn(
        `Warning: The following environment variables are not set: ${missingVars.join(
          ", "
        )}`
      );
      return false;
    }

    console.log("All required environment variables are set.");
    return true;
  }

  // Helper method to fetch environment variables depending on the framework
  private getEnvVariable(variable: string): string | undefined {
    if (this.prefix) {
      // For Vite or CRA, use the appropriate prefix
      return process.env
        ? process.env[`${this.prefix}${variable}`]
        : process.env[`${this.prefix}${variable}`];
    } else {
      // For Angular, assume environment variables are defined in a config file (manual check required)
      // Replace this line with your Angular environment import
      const environment = {}; // Example: import { environment } from './environments/environment';
      return environment[variable];
    }
  }
}
