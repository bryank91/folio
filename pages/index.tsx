import { GithubProjects } from '../types/project';

import * as React from 'react'
import { Octokit } from "octokit";

import { ContentContainer, PortfolioContainer, MainContainer } from '../components/content/container';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import StaticFooter from '../components/footer/staticFooter';
import About from '../components/about/about';
import { HomeData } from '../types/home';

export default function Home( { data } : HomeData ) {

  function footerRender () {
    let render = (process.env.DEPLOYMENT != 'static')
    ? <Footer />
    : <StaticFooter commit={ data.commit }/>

    return render
  }


  return (
    <MainContainer>
      <Header />
      <ContentContainer content={<About />} />
      <ContentContainer content={<PortfolioContainer GithubProjects={ data.portfolios }/>}/>
      <ContentContainer content={footerRender()}/>
    </MainContainer>
  )
}

export async function getStaticProps() {
  try {
    const octokit = new Octokit({
        auth: process.env.TOKEN
    })

    const commitReq = await octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner: process.env.USER_PROFILE!, /* you require to provide an user profile */
        repo: "folio",
    })

    const portfolioReq = await octokit.request("GET /users/{username}/repos", {
      username: process.env.USER_PROFILE!
    })

    const unfiltered : GithubProjects = portfolioReq.data.map(p => {
      return {
        "name" : p.name,
        "description": p.description,
        "updated": p.updated_at,
        "url": p.html_url,
        "language": p.language
      }
    });

    const filter = (process.env.PROJECTS) 
      ? process.env.PROJECTS.split(",")      
      : []    

    const portfolios : GithubProjects = (filter.length > 0) 
      ? unfiltered.filter(p => filter.includes(p.name!))
      : unfiltered

    const commits = commitReq.data[0].sha // grab first commit

    const data = {
      "commit": commits,
      "portfolios": portfolios
    }

    return {
        props: {
            data
        },
    }
  } catch (e) {
    console.error(e);
    return {
      props: {
        commit: "XXXXXX",
        portfolios: []
      }
    }
  }

}
