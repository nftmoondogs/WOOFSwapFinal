import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.shadowswap.xy/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/@shadowswap',
      },
      {
        label: t('CoreDao'),
        href: 'https://coredao.org/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Guides'),
        href: 'https://shadow-11.gitbook.io/shadowswap/',
      },
      {
        label: t('Getting Started with Core'),
        href: 'https://docs.coredao.org/developer',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/shadowswap',
      },
      {
        label: t('Documentation'),
        href: 'https://shadow-11.gitbook.io/shadowswap/',
      },
      {
        label: t('Core Network Docs'),
        href: 'https://docs.coredao.org/core-white-paper-v1.0.5/',
      },
      {
        label: t('Sverse Lab'),
        href: 'https://docs.shadowswap.xyz/hiring/join-the-shadow-devs',
      },
    ],
  },
]
