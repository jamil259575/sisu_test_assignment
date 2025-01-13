export const languages = [
    { code: 'en', path: '/sports' },
    { code: 'et', path: '/sport' },
    { code: 'fi', path: '/vedonlyonti' },
    { code: 'is', path: '/ithrottir' },
    { code: 'es', path: '/deportes' },
];

export function getPathForLang(langCode: string): string {
    const langObj = languages.find((l) => l.code === langCode);
    return langObj ? langObj.path : '/sports';
}
