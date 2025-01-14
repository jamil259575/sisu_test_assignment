export const languagesAndPaths = [
    { code: 'en', path: '/sports' },
    { code: 'et', path: '/sport' },
    { code: 'fi', path: '/vedonlyonti' },
    { code: 'is', path: '/ithrottir' },
    { code: 'es', path: '/deportes' },
];

export function getPathForLang(langCode: string): string {
    const langObj = languagesAndPaths.find((l) => l.code === langCode);
    return langObj ? langObj.path : '/sports';
}

export const estonianLanguagePath   = languagesAndPaths.find((lang) => lang.code === 'et');