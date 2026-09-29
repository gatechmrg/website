export interface PageMeta {
    title: string;
    description: string;
}

export interface LinkItem {
    label: string;
    href: string;
}

export interface Picture {
    src: string;
    alt: string;
    position?: string;
}

export interface Video {
    src: string;
    poster: string;
    caption: string;
    label: string;
}

export interface HeroButton extends LinkItem {
    phoneLabel?: string;
}

export interface Hero {
    title: string;
    subtitle: string;
    lede: string;
    phoneLede: string;
    buttons: HeroButton[];
    image: string;
    phoneImage: string;
    alt: string;
}

export interface NavSection {
    id: 'vehicles' | 'systems' | 'testing' | 'team';
    label: string;
}

export interface SearchEntry {
    title: string;
    href: string;
    keywords: string;
}

export interface SectionNav {
    brand: string;
    sections: NavSection[];
    search: {
        title: string;
        placeholder: string;
        empty: string;
        entries: SearchEntry[];
    };
}

export interface Vehicle {
    name: string;
    description: string;
    image: string;
    alt: string;
    button: string;
    href: string;
}

export interface SystemRow {
    title: string;
    body: string;
    image: string;
    alt: string;
    link: string;
    href: string;
}

export interface SystemTab {
    id: 'usv' | 'uav';
    label: string;
    rows: SystemRow[];
}

export interface PhotoTile extends Picture {
    caption?: string;
}

export interface TestingTeaser {
    heading: string;
    intro: string;
    latest: string;
    button: LinkItem;
    video: Video;
    tiles: PhotoTile[];
}

export interface TeamMember {
    name: string;
    role?: string;
}

export interface Team {
    heading: string;
    photo: Picture;
    roster: TeamMember[];
    contactPrefix: string;
    email: string;
    sponsors: LinkItem;
}

export interface LandingPage {
    meta: PageMeta;
    hero: Hero;
    nav: SectionNav;
    vehicles: {
        heading: string;
        items: Vehicle[];
    };
    systems: {
        heading: string;
        tabs: SystemTab[];
    };
    testing: TestingTeaser;
    team: Team;
}

export type PhaseMedia =
    | ({ type: 'photo' } & Picture)
    | ({ type: 'video' } & Video);

export interface Phase {
    id: string;
    label: string;
    title: string;
    dates: string;
    paragraphs: string[];
    media: PhaseMedia;
}

export type GalleryShape = 'normal' | 'wide' | 'tall' | 'wideOnPhone';

export interface GalleryItem extends Picture {
    shape: GalleryShape;
}

export interface TestRecord {
    title: string;
    vehicle: string;
    video: string;
    poster: string;
    objectives: string;
    fieldTime: string;
    results: string;
}

export interface TimelinePage {
    meta: PageMeta;
    hero: {
        eyebrow: string;
        title: string;
        intro: string;
        back: LinkItem;
        image: string;
    };
    phases: Phase[];
    gallery: {
        heading: string;
        items: GalleryItem[];
    };
    records: {
        heading: string;
        intro: string;
        approach: string;
        stages: string[];
        footage: string;
        labels: {
            objectives: string;
            fieldTime: string;
            results: string;
        };
        items: TestRecord[];
    };
    notes: {
        heading: string;
        intro: string;
        notionUrl: string;
        notionLabel: string;
        items: {
            date: string;
            title: string;
            highlights: string[];
        }[];
    };
}

export const robotx2026Page: LandingPage = {
    meta: {
        title: 'RobotX 2026 | GT Marine Robotics Group',
        description: "Georgia Tech Marine Robotics Group's RobotX 2026 competition entry and resources.",
    },

    hero: {
        title: 'RobotX 2026',
        subtitle: 'Georgia Tech Marine Robotics Group',
        lede: "An autonomous boat and drone for the 2026 Maritime RobotX Challenge. The boat's gimbal aims its LiDAR and camera wherever the mission needs them, whichever way the hull is pointing.",
        phoneLede: 'An autonomous boat and drone for the 2026 Maritime RobotX Challenge.',
        buttons: [
            { label: 'Meet the vehicles', href: '#vehicles' },
            { label: 'Testing timeline', phoneLabel: 'Testing', href: '/projects/robotx/2026/testing' },
        ],
        image: '/projects/robotx2026/fleet.webp',
        phoneImage: '/projects/robotx2026/fleet-portrait.webp',
        alt: 'The MRG fleet, a drone, two surface vessels, and an underwater vehicle, lined up on the lawn below Tech Tower',
    },

    nav: {
        brand: 'RobotX 2026',
        sections: [
            { id: 'vehicles', label: 'Vehicles' },
            { id: 'systems', label: 'Systems' },
            { id: 'testing', label: 'Testing' },
            { id: 'team', label: 'Team' },
        ],
        search: {
            title: 'Search the website',
            placeholder: 'Try gimbal, testing, or sponsors',
            empty: 'No matches. Try vehicles, gimbal, or testing.',
            entries: [
                { title: 'RobotX 2026 · Vehicles', href: '#vehicles', keywords: 'USV BlueBoat UAV X650 drone surface aerial' },
                { title: 'RobotX 2026 · Systems', href: '#systems', keywords: 'perception autonomy behavior tree safety communications control' },
                { title: 'RobotX 2026 · Testing', href: '#testing', keywords: 'flight buoyancy field simulation bench development video' },
                { title: 'RobotX 2026 · Team & resources', href: '#team', keywords: 'contact sponsors members technical design report' },
                { title: 'RobotX 2026 · USV', href: '/projects/robotx/2026/usv', keywords: 'surface BlueBoat' },
                { title: 'RobotX 2026 · UAV', href: '/projects/robotx/2026/uav', keywords: 'drone aerial X650' },
                { title: 'RobotX 2026 · Gimbal', href: '/projects/robotx/2026/gimbal', keywords: 'stabilized Livox AVIA OAK lidar camera' },
                { title: 'RobotX 2026 · Perception & tracking', href: '/projects/robotx/2026/perception', keywords: 'sensors objects' },
                { title: 'RobotX 2026 · Autonomy', href: '/projects/robotx/2026/autonomy', keywords: 'behavior tree mission' },
                { title: 'RobotX 2026 · Safety & communications', href: '/projects/robotx/2026/safety', keywords: 'kill RC control' },
                { title: 'RobotX 2026 · Development timeline', href: '/projects/robotx/2026/testing', keywords: 'flight buoyancy video results timeline phases story gallery' },
                { title: 'RobotX 2024', href: '/projects/robotx/2024', keywords: 'archive previous competition' },
                { title: 'RoboBoat 2026', href: '/projects/roboboat/2026', keywords: 'boat surface vehicle' },
                { title: 'MRG sponsors', href: '/sponsors', keywords: 'supporters partners' },
                { title: 'About MRG', href: '/about', keywords: 'club history organization' },
                { title: 'Join the team', href: '/join-us', keywords: 'membership students' },
            ],
        },
    },

    vehicles: {
        heading: 'The 2026 vehicles',
        items: [
            {
                name: 'Surface vehicle',
                description: 'A BlueBoat-derived catamaran whose sensors turn independently of the hull: a Livox Avia LiDAR and an OAK-1 camera on a custom three-axis gimbal.',
                image: '/projects/robotx2026/usv-water.webp',
                alt: 'The orange surface vehicle underway on a lake',
                button: 'Explore the boat',
                href: '/projects/robotx/2026/usv',
            },
            {
                name: 'Aerial vehicle',
                description: "A modified Holybro X650 that scouts the course from above and releases payloads where the boat can't reach.",
                image: '/projects/robotx2026/uav.webp',
                alt: 'The blue quadcopter on grass, front three-quarter view',
                button: 'Explore the drone',
                href: '/projects/robotx/2026/uav',
            },
        ],
    },

    systems: {
        heading: 'System overview',
        tabs: [
            {
                id: 'usv',
                label: 'Surface vehicle',
                rows: [
                    {
                        title: 'Mechanical',
                        body: 'Hydrodynamically optimized BlueBoat catamaran hull fitted with custom structural crossbars, equipment bays, motor brackets, and mounting interfaces for the 2-DOF water shooter and sensor payloads.',
                        image: '/projects/robotx2026/usv-hull.webp',
                        alt: "The surface vehicle's catamaran hull on the lake",
                        link: 'Boat mechanical design',
                        href: '/projects/robotx/2026/usv',
                    },
                    {
                        title: 'Electrical',
                        body: 'Dual isolated power distribution buses with PRESto electromechanical cutoff relays, frontseat Raspberry Pi with Navigator hat for low-level motor actuation, and backseat Nvidia Jetson Orin Nano for high-compute workloads.',
                        image: '/projects/robotx2026/gimbal-deck.webp',
                        alt: 'Boat deck electronics beside the gimbal',
                        link: 'Boat electrical design',
                        href: '/projects/robotx/2026/usv',
                    },
                    {
                        title: 'Software',
                        body: 'Camera and LiDAR detections become persistent object tracks via JIPDA. A BehaviorTree.CPP architecture runs each task, reacts to competition incidents, and resumes execution seamlessly.',
                        image: '/projects/robotx2026/ground-station.webp',
                        alt: 'Team members at the field ground station',
                        link: 'Boat software',
                        href: '/projects/robotx/2026/autonomy',
                    },
                ],
            },
            {
                id: 'uav',
                label: 'Aerial vehicle',
                rows: [
                    {
                        title: 'Mechanical',
                        body: 'Modified Holybro X650 carbon-fiber airframe featuring extended landing skids, motor vibration dampeners, and a 3D-printed cruciform payload cradle holding two delivery tins with permanent magnet retention.',
                        image: '/projects/robotx2026/uav.webp',
                        alt: 'The drone on grass',
                        link: 'Drone mechanical design',
                        href: '/projects/robotx/2026/uav',
                    },
                    {
                        title: 'Electrical',
                        body: 'Dual 6S 22.2V LiPo battery bank with hot-swap power distribution, powering a Pixhawk flight controller, nadir-mounted Ainstein US-D1 radar altimeter, and an Nvidia Jetson Orin Nano for onboard vision inference.',
                        image: '/projects/robotx2026/uav-electronics.webp',
                        alt: 'Overhead view of the drone electronics bay',
                        link: 'Drone electrical design',
                        href: '/projects/robotx/2026/uav',
                    },
                    {
                        title: 'Software',
                        body: 'Autonomous flight with geofence, altitude fence, and comms-loss failsafes, sharing what it sees with the boat.',
                        image: '/projects/robotx2026/flight-test.webp',
                        alt: 'Flight test field with landing pad',
                        link: 'Drone software',
                        href: '/projects/robotx/2026/uav',
                    },
                ],
            },
        ],
    },

    testing: {
        heading: 'Testing and progress',
        intro: 'Every field day, pool test, and simulation run is logged with its objective, time on the water or in the air, and what we changed afterward.',
        latest: 'Latest: Aug 27, UAV pool buoyancy check.',
        button: { label: 'See the testing timeline', href: '/projects/robotx/2026/testing' },
        video: {
            src: '/projects/robotx2026/flight-test.mp4',
            poster: '/projects/robotx2026/flight-test.webp',
            caption: 'Aug 15, flight patterns',
            label: 'Play Aug 15 flight test video',
        },
        tiles: [
            { src: '/projects/robotx2026/ground-station.webp', alt: 'Team members at the field ground station' },
            { src: '/projects/robotx2026/buoyancy-test.webp', alt: 'Pool buoyancy test', caption: 'Aug 27, buoyancy' },
        ],
    },

    team: {
        heading: 'The 2026 team',
        photo: {
            src: '/projects/robotx2026/team.webp',
            alt: 'The Marine Robotics Group team with their vehicles in front of Tech Tower',
        },
        roster: [
            { name: 'Thomas Devlin' },
            { name: 'Paul Dubrulle' },
            { name: 'Sean T. Fish' },
            { name: 'Soham Goel' },
            { name: 'Samuel I. Ibidapo' },
            { name: 'Jorge L. Ortiz Solano' },
            { name: 'Shrey D. Patel' },
            { name: 'Aaron E. Wu' },
            { name: 'Nathan Xie' },
        ],
        contactPrefix: 'Contact us at',
        email: 'marinerobotics@groups.gatech.edu',
        sponsors: { label: 'All sponsors', href: '/sponsors' },
    },
};

export const robotx2026Timeline: TimelinePage = {
    meta: {
        title: 'Development timeline | RobotX 2026',
        description: 'How Georgia Tech Marine Robotics Group built its RobotX 2026 boat and drone, from groundwork to competition.',
    },

    hero: {
        eyebrow: 'RobotX 2026',
        title: 'Development timeline',
        intro: 'How we built our RobotX 2026 entry, a BlueBoat-derived surface vehicle and a modified X650 drone, from first lake tests to competition.',
        back: { label: 'Back to RobotX 2026', href: '/projects/robotx/2026' },
        image: '/projects/robotx2026/usv-water.webp',
    },

    phases: [
        {
            id: 'groundwork',
            label: 'Phase one',
            title: 'Groundwork',
            dates: 'Mar – Apr 2026',
            paragraphs: [
                'Coming off RoboBoat, we broke the RobotX system into subsystems, each with its own owner, and started building a second boat while the drone made its first flights.',
                'Our first lake tests taught us to integrate on land before we get to the water, and every field day since has started with a full dry test.',
            ],
            media: { type: 'photo', src: '/projects/robotx2026/fleet.webp', alt: 'The MRG fleet lined up below Tech Tower', position: '50% 88%' },
        },
        {
            id: 'footing',
            label: 'Phase two',
            title: 'Finding our footing',
            dates: 'May – Jul 2026',
            paragraphs: [
                'Regular lake testing turned the boat into a platform we could trust, as navigation and autonomy behaviors were tuned until they held up outside simulation.',
            ],
            media: { type: 'photo', src: '/projects/robotx2026/ground-station.webp', alt: 'Team members running a test from the field ground station' },
        },
        {
            id: 'air',
            label: 'Phase three',
            title: 'Taking to the air',
            dates: 'Jul – Aug 2026',
            paragraphs: [
                'The drone joined the boat for its first joint tests, then worked through its prequalification flights and a pool test to prove it floats.',
            ],
            media: {
                type: 'video',
                src: '/projects/robotx2026/flight-test.mp4',
                poster: '/projects/robotx2026/flight-test.webp',
                caption: 'Aug 15, flight patterns',
                label: 'Play Aug 15 flight test video',
            },
        },
        {
            id: 'all-hands',
            label: 'Phase four',
            title: 'All hands',
            dates: 'Sep 2026 onward',
            paragraphs: [
                'With the entry set as one boat and one drone, and every proof of readiness complete, our new sensor gimbal went on the water.',
                'The focus now is integrating, tuning, and testing both vehicles ahead of competition.',
            ],
            media: { type: 'photo', src: '/projects/robotx2026/gimbal-deck.webp', alt: 'The sensor gimbal on the boat deck with the drone behind it' },
        },
    ],

    gallery: {
        heading: 'Gallery',
        items: [
            { src: '/projects/robotx2026/gimbal.webp', alt: 'The three-axis sensor gimbal carrying the LiDAR and camera', shape: 'wide' },
            { src: '/projects/robotx2026/uav.webp', alt: 'The drone on grass, front three-quarter view', shape: 'normal' },
            { src: '/projects/robotx2026/uav-electronics.webp', alt: 'Overhead view of the drone electronics bay', shape: 'normal' },
            { src: '/projects/robotx2026/team.webp', alt: 'The Marine Robotics Group team with their vehicles in front of Tech Tower', shape: 'normal' },
            { src: '/projects/robotx2026/buoyancy-test.webp', alt: 'The drone floating during its pool buoyancy test', shape: 'tall' },
            { src: '/projects/robotx2026/usv-water.webp', alt: 'The orange surface vehicle underway on a lake', shape: 'normal' },
            { src: '/projects/robotx2026/fleet.webp', alt: 'The MRG fleet lined up below Tech Tower', position: '50% 85%', shape: 'wideOnPhone' },
        ],
    },

    records: {
        heading: 'Test records',
        intro: 'Objectives, time in the field, and results for each test day. Results are added as logs are reviewed.',
        approach: 'The team tests as much as possible before the field test even begins, starting with simulations, subsystem-level verification, and a full dry test the night before a field test.',
        stages: ['Simulation & bench tests', 'Onboard dry test', 'Field test', 'Post-test review'],
        footage: 'Selected test footage',
        labels: {
            objectives: 'Objectives',
            fieldTime: 'Field time',
            results: 'Results',
        },
        // These are selected excerpts, not complete test recordings.
        // TODO: Populate each record from the corresponding reviewed field-test log.
        // Confirm test dates, objectives, total field time, outcomes, and lessons learned.
        items: [
            {
                title: 'Field flight test',
                vehicle: 'UAV',
                video: '/projects/robotx2026/flight-test.mp4',
                poster: '/projects/robotx2026/flight-test.webp',
                objectives: 'Validate autonomous waypoint following, geofence boundary enforcement, and Ainstein US-D1 radar altimeter altitude holding over open fields.',
                fieldTime: '45 minutes flight time across multiple battery sorties',
                results: 'Confirmed stable altitude hold, verified parallel battery hot-swap procedure without avionics reboot, and demonstrated geofence failsafe containment.',
            },
            {
                title: 'Buoyancy test',
                vehicle: 'UAV',
                video: '/projects/robotx2026/buoyancy-test.mp4',
                poster: '/projects/robotx2026/buoyancy-test.webp',
                objectives: 'Confirm positive buoyancy and evaluate component waterproofing integrity during controlled water immersion.',
                fieldTime: '1.5 hours in-pool evaluation',
                results: 'Chassis demonstrated stable positive waterplane buoyancy with zero water ingress into sealed avionics and battery enclosures.',
            },
        ],
    },

    notes: {
        heading: 'Abridged Sprint & Meeting Notes',
        intro: 'Abridged highlights from team sprint meetings, lake test debriefs, and system integration milestones. Full archives and detailed minutes are maintained in the GT MRG Notion Wiki.',
        notionUrl: 'https://gt-mrg.notion.site/Meeting-Notes-26c4d4efb4c780c5b4e9efb9b638228c?pvs=73',
        notionLabel: 'View Full Meeting Notes on Notion',
        items: [
            {
                date: '2026-09-25',
                title: 'Singapore Roster Announcement & Final Lake Test Prep',
                highlights: [
                    'Officially confirmed the 9-member travel roster for the 2026 Maritime RobotX Challenge in Singapore.',
                    'Finalized GB Stables lake test objectives: dual-vehicle data collection, UTM coordinate frame integration, and USV autonomy bringup for Task 1.',
                    'Coordinated countdown for competition deliverables due Sept 28: Technical Design Report, team video, demographics, and air/sea vehicle freight packaging.',
                    'Technical progress: MAVROS locked at v2.14.0, gimbal transform tree verified, and light tower fabrication completed.',
                ],
            },
            {
                date: '2026-09-18',
                title: 'Sept 12 Lake Test Debrief & Testing Policy',
                highlights: [
                    'Debriefed Sept 12 lake test: successfully validated active sensor gimbal stabilization on water and gathered UAV aerial perception datasets.',
                    'Instituted mandatory bench dry-testing protocol on the night prior to every lake test to protect operational time on the water.',
                    'Progress updates: UAV mapping autonomy testing in progress, underwater servo pressure validation complete, and Robobuoy flashing light electronics tested.',
                ],
            },
            {
                date: '2026-09-11',
                title: 'Vehicle Prioritization & GB Stables Logistics',
                highlights: [
                    'Reaffirmed primary competition vehicle pair: Orangeboat (USV) and Holybro X650 Quadcopter (UAV); BlueROV development placed on hold to consolidate team resources.',
                    'Finalized GB Stables operational call times, rain contingency procedures, and dock access logistics.',
                ],
            },
            {
                date: '2026-09-04',
                title: 'Proof of Readiness Completion & Task Allocation',
                highlights: [
                    'Successfully submitted official USV, UAV, and Communications Proof of Readiness milestone packages.',
                    'Software bringup: UTM/MGRS coordinate frame TF publisher integrated into ROS 2 launch files; light buoy classification dataset collected.',
                    'Mechanical sign-offs: PRESto emergency stop mounting plates, custom hull cable fairings, and water shooter servo/pump bracket fabrication.',
                ],
            },
            {
                date: 'Summer 2026',
                title: 'Core Systems & Navigation Bringup',
                highlights: [
                    'Resolved underactuated boat turning and arcing issues by implementing ArduPilot Integral Line-of-Sight (ILOS) cross-track error compensation.',
                    'Overcame over-water laser dispersion by integrating Ainstein US-D1 radar altimeter on the UAV belly plate.',
                    'Tuned YOLOv11 neural network models for edge inference on Jetson Orin Nano companion computers.',
                ],
            },
        ],
    },
};
