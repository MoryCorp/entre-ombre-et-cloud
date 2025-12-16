import avatar from '../assets/images/avatar.png';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://amaury-cleuziou.fr',
    avatar: {
        src: avatar,
        alt: 'Amaury Cleuziou'
    },
    title: 'Entre Ombre & Cloud',
    subtitle: 'Les élucubrations d\'un homme qui gérait mal son temps',
    description: 'Blog personnel d\'Amaury Cleuziou - Les élucubrations d\'un homme qui gérait mal son temps',
    image: {
        src: '/avatar.png',
        alt: 'Amaury Cleuziou'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'À propos',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/MoryCorp'
        },
        {
            text: 'LinkedIn',
            href: 'https://fr.linkedin.com/in/amaury-cleuziou'
        }
    ],
    hero: {
        title: 'Amaury CLEUZIOU',
        text: "Je conçois et j'optimise des écosystèmes pour des dirigeants et des équipes qui veulent moins d'outils inutiles, moins de friction, et plus de valeur métier.\n\nPas de bullshit, pas de dépendance excessive, pas de solutions gadget.",
        actions: [
            {
                text: 'Me contacter',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: false,
        title: 'Newsletter',
        text: 'Restez informé des nouveaux articles.',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;