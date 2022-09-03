import { GithubProjects } from '../types/project';

import * as React from 'react'
import { Octokit } from "octokit";

import { ContentContainer, PortfolioContainer, MainContainer } from '../components/content/container';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import StaticFooter from '../components/footer/staticFooter';
import About from '../components/about/about';

export default function Home( {data} : any ) {

  const currentPorfolio : GithubProjects = [{
    "name": "flippy",
    "shorthand": "flip",
    "description": "flippy is about a bird game",
    "url": "https://flippy.com"
  },
  {
    "name": "flippy",
    "shorthand": "flip",
    "description": "flippy is about a bird game",
    "url": "https://flippy.com"
  },
  {
    "name": "flippy",
    "shorthand": "flip",
    "description": "flippy is about a bird game",
    "url": "https://flippy.com"
  }
  ];

  function footerRender () {
    let render = (process.env.DEPLOYMENT != 'static')
    ? <Footer />
    : <StaticFooter commit={ data }/>

    return render
  }


  return (
    <MainContainer>
      <Header />
      <ContentContainer content={<About />} />
      <ContentContainer content={<PortfolioContainer GithubProjects={currentPorfolio}/>}/>
      <ContentContainer content={footerRender()}/>
    </MainContainer>
  )
}

export async function getStaticProps() {
  const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
  })

  const req = await octokit.request("GET /repos/{owner}/{repo}/commits", {
      owner: "bryank91",
      repo: "folio",
  })

  const data = req.data[0].sha

  return {
      props: {
          data
      },
  }

}
