import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const GitHubEnterprise = 'https://github.com/EducationNetworkGroup'
const GitHubRepo = 'https://educationnetworkgroup.github.io'
const EditUrl = 'https://github.com/EducationNetworkGroup/si-docs/tree/main'
const Website = 'https://scienceisland.com/#/'
const Game = 'https://scienceisland.com/main.php#/'
const TeachersPortal = 'https://platform.scienceisland.com/'
const CurriculumMapper = 'https://mapper.scienceisland.com/login'
const AWS = '/' /* Pending */
const KeyCloak = '/' /* Pending */

const config: Config = {
    title: 'Science Island',
    tagline: 'Cool, Fun & Engaging',
    favicon: 'img/favicon.ico',

    url: GitHubRepo,
    baseUrl: '/si-docs/',
    organizationName: 'EducationNetworkGroup',
    projectName: 'si-docs',
    deploymentBranch: "gh-pages",
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                    showLastUpdateTime: false,
                    showLastUpdateAuthor: false,
                    editUrl: EditUrl,
                },
                blog: {
                    path: 'projects',
                    routeBasePath: 'projects',
                    showReadingTime: false,
                    showLastUpdateTime: false,
                    showLastUpdateAuthor: false,
                    editUrl: EditUrl,
                    blogTitle: 'Student Projects',
                    blogDescription: 'Overview of work completed on Science Island by student teams.',
                    blogSidebarCount: 'ALL',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/science-island-social-card.png',

        colorMode: {
            defaultMode: 'dark',
            respectPrefersColorScheme: false
        },

        navbar: {
            title: 'Science Island',
            logo: {
                alt: 'Science Island Logo',
                src: 'img/logo.png',
            },
            items: [
                {
                    label: 'Docs',
                    to: '/',
                    position: 'left',
                },
                {
                    label: 'Projects',
                    to: '/projects',
                    position: 'left',
                },
                {
                    label: 'GitHub',
                    href: GitHubEnterprise,
                    position: 'right',
                },
            ],
        },

        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Site Map',
                    items: [
                        {
                            label: 'Docs',
                            to: '/',
                        },
                        {
                            label: 'Projects',
                            to: '/projects',
                        }
                    ],
                },
                {
                    title: 'Tools & Resources',
                    items: [
                        {
                            label: 'GitHub',
                            href: GitHubEnterprise,
                        },
                        {
                            label: 'AWS',
                            href: AWS,
                        },
                        {
                            label: 'KeyCloak',
                            href: KeyCloak,
                        },
                    ],
                },
                {
                    title: 'Deployed',
                    items: [

                        {
                            label: 'Website',
                            href: Website,
                        },
                        {
                            label: 'Game',
                            href: Game,
                        },
                        {
                            label: 'Teacher\'s Portal',
                            href: TeachersPortal,
                        },
                        {
                            label: 'Curriculum Mapper',
                            href: CurriculumMapper,
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Education Network Group.`,
        },

        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },

    } satisfies Preset.ThemeConfig,
};

export default config;
