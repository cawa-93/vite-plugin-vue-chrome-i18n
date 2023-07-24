/// <reference types="chrome" />
import {getCurrentInstance} from "vue";

/**
 * Gets the localized string for the specified message. If the message is missing, this method returns an empty string (''). If the format of the getMessage() call is wrong — for example, messageName is not a string or the substitutions array has more than 9 elements — this method returns undefined.
 * @param messageName The name of the message, as specified in the messages.json file.
 * @param substitutions Optional. Up to 9 substitution strings, if the message requires any.
 */
export function getMessage(messageName: string, substitutions?: string | string[]): string {
    const pref = (getCurrentInstance() as any)?.type['chrome-i18n-prefix']! || ''
    return (pref && chrome.i18n.getMessage(pref + '_' + messageName, substitutions)) || chrome.i18n.getMessage(messageName, substitutions)
}

