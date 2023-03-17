import localFont from 'next/font/local';

export const calibre = localFont({
    src: [
        {
            path: './Calibre/Calibre-Regular.ttf',
            weight: '400',
        },
        {
            path: './Calibre/Calibre-Bold.ttf',
            weight: '600',
        },
    ],
    variable: '--font-calibre'
})

export  const sfMono = localFont({
    src: [
        {
            path: './SFMono/SFMono-Light.otf',
            weight: '300',
        },
        {
            path: './SFMono/SFMono-Regular.otf',
            weight: '400',
        },
        {
            path: './SFMono/SFMono-Bold.otf',
            weight: '500',
        },
        {
            path: './SFMono/SFMono-Bold.otf',
            weight: '600',
        },
    ],
    variable: '--font-sfmono'
})