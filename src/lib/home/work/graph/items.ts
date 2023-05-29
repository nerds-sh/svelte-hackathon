import blockchain from '$lib/assets/home/blockchain.svg'
import monolithExtraction from '$lib/assets/home/monolith-extraction.svg'
import bootcamp from '$lib/assets/home/bootcamp.svg'
import video from '$lib/assets/home/video.svg'
import custom from '$lib/assets/home/custom.svg'

export const items = [
  {
    title: 'Blockchain',
    description: 'The fast-growing segment caught our attention, ' +
      'and we are actively involved in DApps, Staking Providers, and Smart Contracts development on Elrond Network.',
    left: false,
    icon: blockchain
  },
  {
    title: 'Monolith Extraction',
    description: 'We help clients to upgrade legacy platforms through seamless migration to ' +
      'new microservices-first architecture so that your company can stay competitive ' +
      'without the need to change current business processes.',
    left: true,
    icon: monolithExtraction
  },
  {
    title: 'Video Engineering',
    description: 'Encrypted and secure delivery of content. We deliver highly scalable ' +
      'device-targeted frontends, administration panels, and integration with major CND providers.',
    left: false,
    icon: video
  },
  {
    title: 'Nerds Bootcamp',
    description: 'On-site edge-tech training programs are suitable for companies that need to' +
      'make a shift in technology or take it to the next level.',
    left: true,
    icon: bootcamp
  },
  {
    title: 'Custom Development',
    description: 'Full-Cycle development coverage. From designing systems to end-to-end implementation.',
    left: false,
    icon: custom
  }
]