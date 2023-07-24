import {describe, expect, test, vi} from 'vitest'
import {getMessage} from "./getMessage.js";
import {getCurrentInstance} from "vue";

const componentPrefix = 'mocked-prefix'
const messageLocalKey = 'messageLocalKey'
const messageGlobalKey = 'messageGlobalKey'
const messages = {
    [componentPrefix + '_' + messageLocalKey]: componentPrefix + '_' + messageLocalKey,
    [messageGlobalKey]: messageGlobalKey,
}

vi.mock('vue', () => {
    return {
        getCurrentInstance: vi.fn(() => null)
    }
})

const chromeMock = {
    i18n: {
        getMessage: vi.fn((m) => messages[m] || '')
    }
}

vi.stubGlobal('chrome', chromeMock)


describe('outside component', () => {
    test('should get access to global messages', () => {
        expect(getMessage(messageGlobalKey)).toBe(messages[messageGlobalKey])
    })

    test('should not get access to scoped messages', () => {
        expect(getMessage(messageLocalKey)).toBe('')
    })
})

describe('inside component', () => {
    test('should get access to global messages', () => {
        vi.mocked(getCurrentInstance).mockReturnValueOnce({
            type: {
                ['chrome-i18n-prefix']: componentPrefix
            }
        } as any)
        expect(getMessage(messageGlobalKey)).toBe(messages[messageGlobalKey])
    })

    test('should get access to scoped messages', () => {
        vi.mocked(getCurrentInstance).mockReturnValueOnce({
            type: {
                ['chrome-i18n-prefix']: componentPrefix
            }
        } as any)
        expect(getMessage(messageLocalKey)).toBe(messages[componentPrefix + '_' + messageLocalKey])
    })
})

