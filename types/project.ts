export interface Project {
    data: {
        name: string | null 
        description?: string | null
        url?: string | null
        updated?: string | null
        language?: string | null
    }
}

export interface GithubProject {
    name: string | null   
    description?: string | null
    url?: string | null
    updated?: string | null
    language?: string | null
}

export type GithubProjects = Array<GithubProject>

export interface TypeGithubProjects {
    GithubProjects: GithubProjects
}