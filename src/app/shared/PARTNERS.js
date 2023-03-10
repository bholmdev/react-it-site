import ciscologo from '../assets/img/cisco-logo.png';
import sophosLogo from "../assets/img/sophos-logo.png";
import palosAltoLogo from "../assets/img/paloalto-logo.png"
import sonicwallLogo from '../assets/img/sonic-wall.png';

export const PARTNERS = [
    {
        id: 0,
        name: 'Cisco Technologies',
        link: "https://www.cisco.com/",
        image: ciscologo,
        featured: false,
        description:
            "If it's connected, it's protected."
    },
    {
        id: 1,
        name: 'Sophos',
        link: "https://www.sophos.com/",
        image: sophosLogo,
        description:
            'Managed Detection and Response.'
    },
    {
        id: 2,
        name: 'Palo Alto',
        link: "https://www.paloaltonetworks.com/",
        image: palosAltoLogo,
        description:
            'Fix the unknown before you know it.'
    },
    {
        id: 3,
        name: 'SonicWall',
        link: "https://www.sonicwall.com/",
        image: sonicwallLogo,
        description:
            'Mobilize for the new normal.'
    }
];
