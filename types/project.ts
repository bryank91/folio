export interface Project {
    data: {
        name: string;
        shorthand?: string;
        description?: string;
        url?: string;
    }
}

export interface GithubProject {
    name: string;
    shorthand?: string;
    description?: string;
    url?: string;
}

export type GithubProjects = Array<GithubProject>

export interface TypeGithubProjects {
    GithubProjects: GithubProjects;
}