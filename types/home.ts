import { GithubProject } from "./project";

export interface HomeData {
    data: {
        commit: string
        portfolios: Array<GithubProject>
    }
}