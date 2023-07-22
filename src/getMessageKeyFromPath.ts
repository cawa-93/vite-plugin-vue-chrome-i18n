import {posix, win32} from 'node:path'

export function getMessageKeyFromPath(path: string, root: string = process.cwd() as string) {
    const normalizedRoot = root.replaceAll(win32.sep, posix.sep)
    return path
        .replace(normalizedRoot + posix.sep, '')
        .split('?')[0]
        .replace(/[^a-zA-Z0-9_@]+/g, '_')
}