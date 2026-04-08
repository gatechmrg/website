export type Tier = 'Platinum' | 'Gold' | 'Silver' | 'Bronze';

export interface Sponsor {
    name: string;
    logo: string;       // path to image
    website?: string;
    description?: string; // only really needed for Platinum
}

export interface SponsorTier {
    label: Tier;
    color: string;
    sponsors: Sponsor[];
}

export const sponsorTiers: SponsorTier[] = [
    {
        label: 'Platinum',
        color: '#000000',
        sponsors: [
            { name: 'Tocaro Blue', logo: '/sponsors/logos/logo_tocaroblue.png', website: 'https://tocaroblue.com', description: 'Tocaro Blue ...' },
            { name: 'Blue Trail Engineering', logo: '/sponsors/logos/logo_bluetrail.png' },
        ],
    },
    {
        label: 'Gold',
        color: '#8a7a3a',
        sponsors: [
            { name: 'VectorNav', logo: '/sponsors/logos/logo_vectornav.svg', website: 'https://vectornav.com' },
            { name: 'Waterlinked', logo: '/sponsors/logos/logo_waterlinked.svg', website: 'https://waterlinked.com' },
        ],
    },
    {
        label: 'Silver',
        color: '#676767',
        sponsors: [
            { name: 'TDK Lambda', logo: '/sponsors/logos/logo_tdk.svg', website: 'https://tdk.com' },
        ],
    },
    {
        label: 'Bronze',
        color: '#CD7F32',
        sponsors: [
            { name: 'Blue Trail Engineering', logo: '/sponsors/logos/logo_bluetrail.png' },
        ],
    },
];