import { defaultColorPalette } from './color-palette';
import { DOM } from './dom';
import { Theme } from './theme';

export const THEMES: Theme[] = [
    {
        id: 'default',
        name: 'Default',
        eclipseDirection: 'rtl',
        colors: defaultColorPalette()
    },
    {
        /* https://www.youtube.com/watch?v=cbBLtQizxPM */
        id: 'heejin',
        name: '희진 (HeeJin)',
        eclipseDirection: 'ltr',
        colors: {
            ...defaultColorPalette(),
            backgroundEnd: '#ED008E',
            loonaEnd: '#FFFFFF',
            slashEnd: '#71EA4D'
        }
    },
    {
        /* https://www.youtube.com/watch?v=mybsDDymrsc */
        id: 'hyunjin',
        name: '현진 (HyunJin)',
        eclipseDirection: 'ltr',
        colors: {
            ...defaultColorPalette(),
            backgroundEnd: '#7FC102',
            loonaEnd: '#FFFFFF',
            slashEnd: '#DAE42C'
        }
    },
    {
        /* https://www.youtube.com/watch?v=6a4BWpBJppI */
        id: 'haseul',
        name: '하슬 (HaSeul)',
        eclipseDirection: 'ltr',
        colors: {
            ...defaultColorPalette(),
            backgroundEnd: '#B8000F',
            loonaEnd: '#FFFFFF',
            slashEnd: '#FFC443'
        }
    },
    {
        /* https://www.youtube.com/watch?v=thpTOAS1Vgg */
        id: 'yeojin',
        name: '여진 (YeoJin)',
        eclipseDirection: 'ltr',
        colors: {
            ...defaultColorPalette(),
            backgroundEnd: '#0183D8',
            loonaEnd: '#FFFFFF',
            slashEnd: '#B59B75'
        }
    },
    {
        /* https://www.youtube.com/watch?v=ZNcBZM5SvbY */
        id: 'vivi',
        name: '비비 (ViVi)',
        eclipseDirection: 'ltr',
        colors: {
            ...defaultColorPalette(),
            backgroundEnd: '#FFA4B6',
            loonaEnd: '#FFFFFF',
            slashEnd: '#62E9B3'
        }
    },
    {
        /* https://www.youtube.com/watch?v=_qJEoSa3Ie0 */
        id: 'kim-lip',
        name: '김립 (Kim Lip)',
        eclipseDirection: 'ltr',
        colors: {
            ...defaultColorPalette(),
            backgroundEnd: '#000000',
            eclipseStart: '#9A0036',
            eclipseEnd: '#9A0036',
            loonaEnd: '#FFFFFF',
            slashEnd: '#FFFFFF'
        }
    },
    {
        /* https://www.youtube.com/watch?v=RWeyOyY_puQ */
        id: 'jinsoul',
        name: '진솔 (JinSoul)',
        eclipseDirection: 'ltr',
        colors: {
            ...defaultColorPalette(),
            backgroundEnd: '#000000',
            eclipseStart: '#1C23D7',
            eclipseEnd: '#1C23D7',
            loonaEnd: '#FFFFFF',
            slashEnd: '#FFFFFF'
        }
    },
    {
        /* https://www.youtube.com/watch?v=VBbeuXW8Nko */
        id: 'choerry',
        name: '최리 (Choerry)',
        eclipseDirection: 'ltr',
        colors: {
            ...defaultColorPalette(),
            backgroundEnd: '#000000',
            eclipseStart: '#842BCD',
            eclipseEnd: '#842BCD',
            loonaEnd: '#FFFFFF',
            slashEnd: '#FFFFFF'
        }
    },
    {
        /* https://www.youtube.com/watch?v=LIDe-yTxda0 */
        id: 'yves',
        name: '이브 (Yves)',
        eclipseDirection: 'rtl',
        colors: {
            ...defaultColorPalette(),
            eclipseStart: '#7E0A24',
            eclipseEnd: '#7E0A24',
            slashEnd: '#E6D351'
        }
    },
    {
        /* https://www.youtube.com/watch?v=BVVfMFS3mgc */
        id: 'chuu',
        name: '츄 (Chuu)',
        eclipseDirection: 'rtl',
        colors: {
            ...defaultColorPalette(),
            eclipseStart: '#FF896F',
            eclipseEnd: '#FF896F',
            slashEnd: '#E6D351'
        }
    },
    {
        /* https://www.youtube.com/watch?v=m5qwcYL8a0o */
        id: 'go-won',
        name: '고원 (Go Won)',
        eclipseDirection: 'rtl',
        colors: {
            ...defaultColorPalette(),
            eclipseStart: '#41C9A9',
            eclipseEnd: '#41C9A9',
            slashEnd: '#E6D351'
        }
    },
    {
        /* https://www.youtube.com/watch?v=m5qwcYL8a0o */
        id: 'olivia-hye',
        name: '올리비아 혜 (Olivia Hye)',
        eclipseDirection: 'rtl',
        colors: {
            ...defaultColorPalette(),
            eclipseStart: '#000000',
            eclipseEnd: '#000000',
            slashEnd: '#E6D351'
        }
    },
    {
        /* https://www.youtube.com/watch?v=4K4b9Z9lSwc */
        id: '1/3',
        name: '1/3',
        eclipseDirection: 'ltr',
        colors: defaultColorPalette()
    },
    {
        /* https://www.youtube.com/watch?v=tIWpr3tHzII */
        id: 'yyxy',
        name: 'Youth Youth by Young (yyxy)',
        eclipseDirection: 'rtl',
        colors: {
            ...defaultColorPalette(),
            backgroundEnd: '#F1C704',
            eclipseStart: '#FFFFFF',
            eclipseEnd: '#FFFFFF',
            slashStart: '#B9241D',
            slashEnd: '#B9241D'
        }
    },
    {
        /* https://www.youtube.com/watch?v=tyInv6RWL0Q */
        id: 'oec',
        name: '오드아이써클 (Odd Eye Circle)',
        eclipseDirection: 'ltr',
        colors: {
            ...defaultColorPalette(),
            backgroundEnd: '#000000',
            eclipseStart: '#131288',
            eclipseEnd: '#810442',
            loonaEnd: '#FFFFFF',
            slashEnd: '#FFFFFF'
        }
    }
];
