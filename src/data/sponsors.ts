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
    description: string; 
    sponsors: Sponsor[];
}

export const sponsorTiers: SponsorTier[] = [
    {
        label: 'Platinum Sponsors',
        color: '#000000',
        description: 'Our Platinum sponsors are the cornerstone of our organization.',
        sponsors: [
            { name: 'Tocaro Blue', logo: '/sponsors/logos/logo_tocaroblue.webp', website: 'https://tocaroblue.com', description: 'Tocaro Blue ...' },
            ],
    },
    {
        label: 'Gold Sponsors',
        color: '#8a7a3a',
        description: 'Our Gold sponsors play a crucial role in supporting us.',
        sponsors: [
            { name: 'VectorNav', logo: '/sponsors/logos/logo_vectornav.svg', website: 'https://vectornav.com' },
            { name: 'Waterlinked', logo: '/sponsors/logos/logo_waterlinked.svg', website: 'https://waterlinked.com' },
        ],
    },
    {
        label: 'Silver Sponsors',
        color: '#676767',
        description: 'Our Silver sponsors are an integral part of our organization.',
        sponsors: [
            { name: 'TDK Lambda', logo: '/sponsors/logos/logo_tdk.svg', website: 'https://tdk.com' },
        ],
    },
    {
        label: 'Bronze Sponsors',
        color: '#CD7F32',
        description: 'Our Bronze sponsors are an important part of our organization.',
        sponsors: [
            { name: 'Blue Trail Engineering', logo: '/sponsors/logos/logo_bluetrail.png' },
        ],
    },
    {
        label: 'Supporting Institutions and Affiliates',
        color: '#444444',
        description: 'The support of institutions and affiliates at Georgia Tech are cruicial to our mission.',
        sponsors: [
            { name: 'Aerospace Systems Design Laboratory', 
              logo: '/sponsors/logos/logo_asdl.svg',
              description: 'The Aerospace Systems Design Laboratory (ASDL) at Georgia Tech is the home of our research and development efforts in MRG.',
            },
            { name: 'Student Government Association of Georgia Tech', 
              logo: '/sponsors/logos/logo_sga.webp',
              description: 'The Student Government Association of Georgia Tech allocates funding for student initiatives and projects.',
            },
        ],
    },
    {
        label: 'Friends of MRG',
        color: '#005366',
        description: 'We recognize Friends of MRG who support our organization outside of formal partnerships, such as through discounts on products and services and matched donation contributions from individual donors.',
        sponsors: [
            { name: 'Blue Trail Engineering', logo: '/sponsors/logos/logo_bluetrail.webp' },
            { name: 'Nvidia', logo: '/sponsors/logos/logo_nvidia.webp' },
        ],
    },
];