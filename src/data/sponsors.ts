export type Tier = 'Platinum Sponsors' | 'Gold Sponsors' | 'Silver Sponsors' | 'Bronze Sponsors' | 'Supporting Institutions and Affiliates' | 'Friends of MRG';

export interface Sponsor {
    name: string;
    logo: string;       // path to image
    website?: string;
    description?: string; // only really needed for Platinum
}

export interface SponsorTier {
    label: Tier;
    color: string;
    description?: string; 
    sponsors: Sponsor[];
}

export const sponsorTiers: SponsorTier[] = [
    {
        label: 'Platinum Sponsors',
        color: '#000000',
        sponsors: [
            { name: 'Tocaro Blue', logo: '/sponsors/logos/logo_tocaroblue.webp', website: 'https://tocaroblue.com', description: 'Tocaro Blue is a software company based in Pensacola, Florida that aims to expand the utilization of radar for maritime perception. Their mission is to “modernize legacy marine sensors with smart software,” and they believe that applying intelligent software to legacy marine sensors can unlock new capabilities in maritime perception and situational awareness.' },
            ],
    },
    {
        label: 'Gold Sponsors',
        color: '#8a7a3a',
        sponsors: [
            { name: 'VectorNav', logo: '/sponsors/logos/logo_vectornav.svg', website: 'https://vectornav.com' },
            { name: 'Theia Technologies', logo: '/sponsors/logos/logo_theia.svg', website: 'https://theiatech.com' },
        ],
    },
    {
        label: 'Silver Sponsors',
        color: '#676767',
        sponsors: [
            { name: 'TDK Lambda', logo: '/sponsors/logos/logo_tdk.svg', website: 'https://tdk.com' },
            { name: 'Waterlinked', logo: '/sponsors/logos/logo_waterlinked.svg', website: 'https://waterlinked.com' },
        ],
    },
    {
        label: 'Bronze Sponsors',
        color: '#CD7F32',
        sponsors: [
        ],
    },
    {
        label: 'Supporting Institutions and Affiliates',
        color: '#444444',
        description: 'Our activities are also made possible by the support of insitutions both at Georgia Tech and beyond.',
        sponsors: [
            { name: 'Aerospace Systems Design Laboratory', 
              logo: '/sponsors/logos/logo_asdl.svg',
              description: 'The Aerospace Systems Design Laboratory (ASDL) at Georgia Tech is the home of our organization, and supports us with resources, mentorship, and facilities to design and build our vehicles.',
              website: 'https://asdl.gatech.edu',
            },
            { name: 'Student Government Association of Georgia Tech', 
              logo: '/sponsors/logos/logo_sga.webp',
              description: 'The Student Government Association of Georgia Tech allocates funding for student initiatives and projects, enabling student-led development of our vehicles and travel to competitions.',
              website: 'https://sga.gatech.edu',
            },
            { name: 'RoboNation', 
              logo: '/sponsors/logos/logo_robonation.svg',
              description: 'RoboNation, the host of many competitions we attend, has provided a granted platform for us to develop and compete in the RobotX competition.',
              website: 'https://robonation.org',
            },
            { name: 'VIP - Vertically Integrated Projects', 
              logo: '/sponsors/logos/logo_vip.webp',
              description: 'The Vertically Integrated Projects (VIP) program at Georgia Tech supports student-led research. The AquaBots VIP is partnered with our organization to allow students to receive credit for their work on aquatic vehicles.',
              website: 'https://vip.gatech.edu',
            },
        ],
    },
    {
        label: 'Friends of MRG',
        color: '#005366',
        description: 'We recognize Friends of MRG who support our organization outside of formal partnerships, such as through discounts on products and services and matched donation contributions from individual donors.',
        sponsors: [
            { name: 'Blue Trail Engineering', logo: '/sponsors/logos/logo_bluetrail.webp', website: 'https://bluetrailengineering.com' },
            { name: 'Nvidia', logo: '/sponsors/logos/logo_nvidia.webp', website: 'https://nvidia.com' },
        ],
    },
];