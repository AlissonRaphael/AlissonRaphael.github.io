import React, { useState, useMemo, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiGithub } from 'react-icons/si'

import { FourthSection, Container, Line, MoreRepos } from './style.js'

import MyContext from '../../MyContext.js'
import Repo from '../Repo'


export default function Repos(){
  const { fourthSectionRender } = useContext(MyContext)
  const [repositories, setRepositories] = useState(null)

  useMemo(async() => {

    async function getLanguages(url){
      const languagesResponse = await fetch(url)
      const tempLanguages = await languagesResponse.json()
      return tempLanguages
    }

    const repositoriesResponse = await fetch('https://api.github.com/users/alissonraphael/repos')
    const tempRepositories = await repositoriesResponse.json()

    const promisesRepositories = tempRepositories.map(tempRepo => {
      return new Promise(async(resolve, reject) => {
        const promisesLanguages = await getLanguages(tempRepo.languages_url)

        resolve({
          url: tempRepo.html_url,
          name: tempRepo.name,
          description: tempRepo.description,
          languages: Object.keys(promisesLanguages),
          license: tempRepo.license,
        })
      })
    })

    const repositories = await Promise.all(promisesRepositories)
    setRepositories(repositories)

  },[])

  console.log(repositories)

  return (
    <AnimatePresence>
      { fourthSectionRender &&
        <FourthSection>
          <Container>
            { repositories &&
              repositories.map((repo, index) => {
                if(index > 6) return null

                return <Repo key={index} time={index+1} repo={repo} align={ index%2 !== 0 ?"left":'right'}/>
              })
            }

            <MoreRepos
              href="https://github.com/AlissonRaphael?tab=repositories"
              target="_blank"
              whileHover={{ backgroundColor: 'rgb(255, 99, 71)', transition: { type: 'spring', stiffness: 1000 } }}
            >
              <SiGithub/>
              <span>Mais repositórios</span>
            </MoreRepos>
            <Line
              initial={{ scaleY: 0, originY: 0 }}
              animate={{ scaleY: 1, transition: { delay: 0.5, duration: 2, type:'tween', ease: 'easeInOut' } }}
              exit={{ scaleY: 0, originY: 1, transition: { duration: 2, type:'tween', ease: 'easeInOut' } }}
            /> 
          </Container>
        </FourthSection>
      }
    </AnimatePresence>
  )
}
