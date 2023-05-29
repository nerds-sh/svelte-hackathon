import CodePen from '$lib/assets/fi_codepen.svg?component'
import Layout from '$lib/assets/fi_layout.svg?component'
import Command from '$lib/assets/fi_command.svg?component'
import Sliders from '$lib/assets/fi_sliders.svg?component'
import CodeSandbox from '$lib/assets/fi_codesandbox.svg?component'
import GitBranch from '$lib/assets/fi_git-branch.svg?component'
import Key from '$lib/assets/fi_key.svg?component'
import PenTool from '$lib/assets/fi_pen-tool.svg?component'

export const services = [
    {
        title: 'Architecture & Design',
        description: 'Plan and model systems, layouting future technologies to be used.',
        icon: CodePen
    },
    {
        title: 'Web Development',
        description: 'Pixel perfect implementation for scalable requirements.',
        icon: Layout
    },
    {
        title: 'API Craftsmanship',
        description: 'API development under the latest industry trends.',
        icon: Command
    },
    {
        title: 'DevOps',
        description: 'Environment bootstrapping or updating legacy platforms.',
        icon: Sliders
    },
    {
        title: 'Blockchain Integrations',
        description: 'DApps, Staking Providers, and Smart Contracts development.',
        icon: CodeSandbox
    },
    {
        title: 'Technical Trainings',
        description: 'On-site edge-tech training programs for companies.',
        icon: GitBranch
    },
    {
        title: 'Consultancy',
        description: 'Technical analysis of the business idea.',
        icon: Key
    },
    {
        title: 'UI/UX Design',
        description: 'Turning and bringing idea\ninto amazing product through next level visuals.',
        icon: PenTool
    },
]
