import { Planet } from "@planet/types";

const URL = "https://api-planets.onrender.com/api/planet";

interface Response {
  planet?: Planet;
  error?: string;
}

export const ServicePlanets = {
  get: async function (name: string): Promise<Response> {
    const response = await fetch(`${URL}/${name}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      const planet: Planet = await response.json();
      return { planet };
    } catch (e) {
      const error = "not found";
      return { error };
    }
  },
};
