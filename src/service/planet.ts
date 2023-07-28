import { Planet } from "@planet/types";

const URL = "https://planetas-api.onrender.com/api/planet";

interface Response {
  planet?: Planet;
  error?: string;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export const ServicePlanets = {
  get: async function (name: string): Promise<Response> {
    try {
      const response = await fetch(`${URL}/${name}`);
      const planet: Planet = await response.json();
      return { planet };
    } catch (e) {
      return { error: getErrorMessage(e) };
    }
  },
};
