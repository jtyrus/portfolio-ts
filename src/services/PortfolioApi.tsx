import axios from "axios";

const PORTFOLIO_API = "https://api.jordantyrus.com/portfolio";

const FALL_BACK = {
  title: "Marketplace Authentication",
  subtitle: "Peerstreet",
  description:
    "Built a white label authentication solution for real estate lenders using AWS Cognito. Onboarding flow automatically built out a custom domain, user pool, and logo.",
  image: "./peerstreet.png",
  link: "https://www.peerstreet.com/",
};



async function GetProjects(branch: string): Promise<any> {
  try {
    const resp = await axios(`${PORTFOLIO_API}?id=jt`);
    const body = resp.data;
    if (body !== null || body.projects.length > 0 || resp.status !== 200 ) {
      return body;
    } else {
      console.error(`bad response - falling back: ${JSON.stringify(resp)}`);
      return new Promise((resolve) => resolve([FALL_BACK]));
    }
  } catch (err) {
    console.error(err);
    return new Promise((resolve) => resolve([FALL_BACK]));
  }
}

export { GetProjects };
export interface Project {
  title: string
  subtitle: string
  description: string
  image: string
  link: string
}