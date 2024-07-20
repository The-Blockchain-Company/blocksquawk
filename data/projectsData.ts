interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'DeFi One',
    description: `Engineering sustainable enterprise usability for public blockchain technology into the quantum era `,
    imgSrc: '/static/images/google.png',
    href: 'https://www.defione.io',
  },
  {
    title: 'Quantum One DAO',
    description: `The chain-agnostic DAO for the post quantum era `,
    imgSrc: '/static/images/time-machine.jpg',
    href: 'https://quantumone.io',
  },
]

export default projectsData
