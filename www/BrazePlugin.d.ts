// Braze methods
/**
 * When a user first uses Braze on a device they are considered "anonymous". Use this method to identify a user
 *    with a unique ID, which enables the following:
 *
 *    - If the same user is identified on another device, their user profile, usage history and event history will
 *        be shared across devices.
 *    - If your app is used on the same device by multiple people, you can assign each of them a unique identifier
 *        to track them separately. Only the most recent user on a particular browser will receive push
 *        notifications and in-app messages.
 *
 * When you request a user switch (which is any call to changeUser where the new user ID is not the same as the
 *    existing user ID), the current session for the previous user (anonymous or not) is automatically ended and
 *    a new session is started. Similarly, following a call to changeUser, any events which fire are guaranteed to
 *    be for the new user -- if an in-flight server request completes for the old user after the user switch no
 *    events will fire, so you do not need to worry about filtering out events from Braze for old users.
 *
 * Additionally, if you identify a user which has never been identified on another device, the entire history of
 *    that user as an "anonymous" user on this device will be preserved and associated with the newly identified
 *    user. However, if you identify a user which *has* been identified in another app, any history which was
 *    already flushed to the server for the anonymous user on this device will become orphaned and will not be
 *    associated with any future users. These orphaned users are not considered in your user counts and will not
 *    be messaged.
 *
 * Note: Once you identify a user, you cannot revert to the "anonymous" user. The transition from anonymous to
 *    identified tracking is only allowed once because the initial anonymous user receives special treatment to
 *    allow for preservation of their history. As a result, we recommend against changing the user ID just because
 *    your app has entered a "logged out" state because it makes you unable to target the previously logged out user
 *    with re-engagement campaigns. If you anticipate multiple users on the same device, but only want to target one
 *    of them when your app is in a logged out state, we recommend separately keeping track of the user ID you want
 *    to target while logged out and switching back to that user ID as part of your app's logout process.
 *
 * @param {string} userId - A unique identifier for this user.
 */
export function changeUser(userId: string);

/**
 * ** ANDROID ONLY**
 *
 * Registers the device as eligible to receive push notifications from Braze.
 *
 * @param {string} registrationId - The registration ID / push token.
 */
export function registerAppboyPushMessages(registrationID: string);

/**
 * ** ANDROID ONLY**
 *
 * Registers the device as eligible to receive push notifications from Braze.
 *
 * @param {string} pushToken - The registration ID / push token.
 */
export function setRegisteredPushToken(pushToken: string);

/**
 * ** ANDROID ONLY**
 *
 * Requests the push permission prompt to be shown to the user.
 */
export function requestPushPermission();

/**
 * Reports that the current user performed a custom named event.
 * @param {string} eventName - The identifier for the event to track. Best practice is to track generic events
 *      useful for segmenting, instead of specific user actions (i.e. track watched_sports_video instead of
 *      watched_video_adrian_peterson_td_mnf). Value is limited to 255 characters in length, cannot begin with a $,
 *      and can only contain alphanumeric characters and punctuation.
 * @param {object} [eventProperties] - Hash of properties for this event. Keys are limited to 255
 *      characters in length, cannot begin with a $, and can only contain alphanumeric characters and punctuation.
 *      Values can be numeric, boolean, or strings 255 characters or shorter.
 */
export function logCustomEvent(eventName: string, eventProperties: object);

/**
 * Reports that the current user made an in-app purchase. Useful for tracking and segmenting users.
 * @param {string} productId - A string identifier for the product purchased, e.g. an SKU. Value is limited to
 *      255 characters in length, cannot begin with a $, and can only contain alphanumeric characters and punctuation.
 * @param {float} price - The price paid. Base units depend on the currency. As an example, USD should be
 *      reported as Dollars.Cents, whereas JPY should be reported as a whole number of Yen. All provided
 *      values will be rounded to two digits with toFixed(2)
 * @param {string} [currencyCode=USD] - Currencies should be represented as an ISO 4217 currency code. Supported
 *      currency symbols include: AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF,
 *      BMD, BND, BOB, BRL, BSD, BTC, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLF, CLP, CNY, COP, CRC, CUC, CUP, CVE,
 *      CZK, DJF, DKK, DOP, DZD, EEK, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GGP, GHS, GIP, GMD, GNF, GTQ, GYD,
 *      HKD, HNL, HRK, HTG, HUF, IDR, ILS, IMP, INR, IQD, IRR, ISK, JEP, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW,
 *      KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LTL, LVL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MTL,
 *      MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR,
 *      RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, STD, SVC, SYP, SZL, THB, TJS, TMT,
 *      TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XAG, XAU, XCD, XDR, XOF,
 *      XPD, XPF, XPT, YER, ZAR, ZMK, ZMW, and ZWL. Any other provided currency symbol will result in a logged
 *      warning and no other action taken by the SDK.
 * @param {integer} [quantity=1] - The quantity of items purchased expressed as a whole number. Must be at least 1
 *      and at most 100.
 * @param {object} [purchaseProperties] - Hash of properties for this purchase. Keys are limited to 255
 *      characters in length, cannot begin with a $, and can only contain alphanumeric characters and punctuation.
 *      Values can be numeric, boolean, or strings 255 characters or shorter.
 */
export function logPurchase(
  productId: string,
  price: number,
  currencyCode: string,
  quantity: number,
  purchaseProperties: object,
);

/**
 * Sets the attribution information for the user. For in apps that have an install tracking integration.
 */
export function setUserAttributionData(network, campaign, adgroup, creative);

/**
 * Sets a custom user attribute. This can be any key/value pair and is used to collect extra information about the
 *    user.
 * @param {string} key - The identifier of the custom attribute. Limited to 255 characters in length, cannot begin with
 *    a $, and can only contain alphanumeric characters and punctuation.
 * @param value - Can be numeric, boolean, a Date object, a string, or an array of strings. Strings are limited to
 *    255 characters in length, cannot begin with a $, and can only contain alphanumeric characters and punctuation.
 *    Passing a null value will remove this custom attribute from the user.
 */
export function setCustomUserAttribute(
  key: string,
  value: number | boolean | Date | string | string[] | object | object[] | null,
  merge?: boolean
);

/**
 * Increment/decrement the value of a custom attribute. Only numeric custom attributes can be incremented. Attempts to
 *    increment a custom attribute that is not numeric be ignored. If you increment a custom attribute that has not
 *    previously been set, a custom attribute will be created and assigned the value of incrementValue. To decrement
 *    the value of a custom attribute, use a negative incrementValue.
 * @param {string} key - The identifier of the custom attribute. Limited to 255 characters in length, cannot begin with
 *    a $, and can only contain alphanumeric characters and punctuation.
 * @param {integer} - May be negative to decrement.
 */
export function incrementCustomUserAttribute(key: string, value: number);

/**
 * Sets the first name of the user.
 * @param {string} firstName - Limited to 255 characters in length.
 */
export function setFirstName(firstName: string);

/**
 * Sets the last name of the user.
 * @param {string} lastName - Limited to 255 characters in length.
 */
export function setLastName(lastName: string);

/**
 * Sets the email address of the user.
 * @param {string} email - Must pass RFC-5322 email address validation.
 */
export function setEmail(email: string);

/**
 * Sets the gender of the user.
 * @param {ab.User.Genders} gender - Generally 'm' or 'f'.
 */
export function setGender(gender: Genders);

/**
 * Sets the country for the user.
 * @param {string} country - Limited to 255 characters in length.
 */
export function setCountry(country: string);

/**
 * Sets the home city for the user.
 * @param {string} homeCity - Limited to 255 characters in length.
 */
export function setHomeCity(homeCity: string);

/**
 * Sets the phone number of the user.
 * @param {string} phoneNumber - A phone number is considered valid if it is no more than 255 characters in length and
 *    contains only numbers, whitespace, and the following special characters +.-()
 */
export function setPhoneNumber(phoneNumber: string);

/**
 * Sets the date of birth of the user.
 * @param {integer} year
 * @param {integer} month - 1-12
 * @param {integer} day
 */
export function setDateOfBirth(year: number, month: number, day: number);

/**
 * Sets whether the user should be sent push campaigns.
 * @param {NotificationSubscriptionTypes} notificationSubscriptionType - Notification setting (explicitly
 *    opted-in, subscribed, or unsubscribed).
 */
export function setPushNotificationSubscriptionType(
  notificationSubscriptionType: NotificationSubscriptionTypes,
);

/**
 * Sets whether the user should be sent email campaigns.
 * @param {NotificationSubscriptionTypes} notificationSubscriptionType - Notification setting (explicitly
 *    opted-in, subscribed, or unsubscribed).
 */
export function setEmailNotificationSubscriptionType(
  notificationSubscriptionType: NotificationSubscriptionTypes,
);

/**
 * Adds a string to a custom atttribute string array, or creates that array if one doesn't exist.
 * @param {string} key - The identifier of the custom attribute. Limited to 255 characters in length, cannot begin with
 *    a $, and can only contain alphanumeric characters and punctuation.
 * @param {string} value - The string to be added to the array. Strings are limited to 255 characters in length, cannot
 *    begin with a $, and can only contain alphanumeric characters and punctuation.
 */
export function addToCustomUserAttributeArray(key: string, value: string);

/**
 * Removes a string from a custom attribute string array.
 * @param {string} key - The identifier of the custom attribute. Limited to 255 characters in length, cannot begin with
 *    a $, and can only contain alphanumeric characters and punctuation.
 * @param {string} value - The string to be removed from the array. Strings are limited to 255 characters in length,
 *    cannot beging with a $, and can only contain alphanumeric characters and punctuation.
 */
export function removeFromCustomUserAttributeArray(
  key: string,
  value: string,
);

/**
 * Unsets a custom user attribute.
 * @param {string} key - The identifier of the custom attribute. Limited to 255 characters in length, cannot begin with
 *    a $, and can only contain alphanumeric characters and punctuation.
 */
export function unsetCustomUserAttribute(key: string);

/**
 * Adds an alias for the user.
 * @param {string} alias - An identifier for this user.
 * @param {string} label - A label for the alias. e.g. the source of the alias, like "internal_id"
 */
export function addAlias(alias: string, label: string);

// Other
/**
 * Launches the News Feed UI element.
 */
export function launchNewsFeed();

/**
 * Returns array of serialized card items
 */
export function getNewsFeed(
  successCallback: (cardItems: object[]) => void,
  errorCallback: (error) => void,
);

// News Feed methods

/**
 * Gets the number of unread News Feed Cards. The result is returned as an integer argument to the successCallback function. The card count uses the cards present in the cache. News Feed cards are not refreshed as a result of this call.
 */
export function getNewsFeedUnreadCount(
  successCallback: (count: number) => void,
  errorCallback: (error) => void,
);

/**
 * Gets the number of News Feed Cards. The result is returned as an integer argument to the successCallback function. The card count uses the cards present in the cache. News Feed cards are not refreshed as a result of this call.
 **/
export function getNewsFeedCardCount(
  successCallback: (count: number) => void,
  errorCallback: (error) => void,
);

/**
 * Gets the number of News Feed Cards for a category. The result is returned as an integer argument to the successCallback function. The card count uses the cards present in the cache. News Feed cards are not refreshed as a result of this call.
 **/
export function getCardCountForCategories(
  successCallback: (count: number) => void,
  errorCallback: (error) => void,
  cardCategories: CardCategories[],
);

/**
 * Gets the number of unread News Feed Cards for a category. The result is returned as an integer argument to the successCallback function. The card count uses the cards present in the cache. News Feed cards are not refreshed as a result of this call.
 */
export function getUnreadCardCountForCategories(
  successCallback: (count: number) => void,
  errorCallback: (error) => void,
  cardCategories: CardCategories[],
);

/**
 * Wipes Data on the Braze SDK. On iOS, the SDK will be disabled for the rest of the app run.
 */
export function wipeData();

/**
 * Enables the Braze SDK after a previous call to disableSDK().
 * On iOS, the SDK will be enabled only after a subsequent call to startWithApiKey().
 */
export function enableSdk();

/**
 * Disables the Braze SDK immediately.
 */
export function disableSdk();

/**
 * Requests that the Braze SDK immediately flush any pending data.
 */
export function requestImmediateDataFlush();

/**
 * Requests the latest Content Cards from the Braze SDK server.
 */
export function requestContentCardsRefresh();

/**
 * Retrieves Content Cards from the Braze SDK. This will return the latest list of cards from the server.
 */
export function getContentCardsFromServer(
  successCallback: (cardItems: object[]) => void,
  errorCallback: (error) => void,
);

/**
 * Retrieves Content Cards from the Braze SDK. This will return the latest list of cards from the cache.
 */
export function getContentCardsFromCache(
  successCallback: (cardItems: object[]) => void,
  errorCallback: (error) => void,
);

/**
 * Subscribes to Feature Flags events. The subscriber callback will be called when Feature Flags are updated.
 */
export function subscribeToContentCardsUpdates(
  successCallback: (cardItems: object[]) => void,
  errorCallback: (error) => void,
);

/**
 * Launches a default Content Cards UI element.
 */
export function launchContentCards();

/**
 * Logs a click for the given Content Card id.
 */
export function logContentCardClicked(cardId: string);

/**
 * Logs an impression for the given Content Card id.
 */
export function logContentCardImpression(cardId: string);

/**
 * Logs a dismissal for the given Content Card id.
 */
export function logContentCardDismissed(cardId: string);

/**
 * Sets the language for a user. Language Strings should be valid ISO 639-1 language codes. See loc.gov/standards/iso639-2/php/code_list.php.
 */
export function setLanguage(language: string);

/**
 * Adds user to given subscription group.
 */
export function addToSubscriptionGroup(groupId: string);

/**
 * Removes user from given subscription group.
 */
export function removeFromSubscriptionGroup(groupId: string);

/**
 * @return An app specific ID that is stored on the device.
 */
export function getDeviceId(
  successCallback: (deviceId: string) => void,
  errorCallback: (error) => void,
);

/**
 * Requests a specific Feature Flags. This will pull the data from a local cache and does
 * not force a refresh.
 *
 * @param id The ID of the Feature Flag to retrieve.
 * @return A promise containing the [FeatureFlag] of the requested ID.
 * If the Feature Flag does not exist, a [FeatureFlag] will be returned with
 * enabled set to `false` and empty properties.
 */
export function getFeatureFlag(id: string);

/**
 * Retrieves the offline/cached list of Feature Flags from offline storage.
 *
 * @return A promise containing the list of cached Feature Flags. Note that this does not request a
 * fresh list of Feature Flags from Braze. If the SDK is disabled or the
 * cached list of feature flags cannot be retrieved, returns empty list.
 */
export function getAllFeatureFlags();

/**
 * Requests a refresh of Feature Flags from the Braze server.
 */
export function refreshFeatureFlags();

/**
 * Subscribes to Feature Flags events. The subscriber callback will be called when Feature Flags are updated.
 */
export function subscribeToFeatureFlagsUpdates(
  flagId: string,
  propertyKey: string,
  successCallback: (...args: unknown[]) => void,
  errorCallback: (error) => void,
);

/**
 * Requests a boolean property for a given Feature Flag ID and a property key.
 * @param {string} flagId - The identifier for the Feature Flag.
 * @param {string} propertyKey - The key for the boolean property.
 *
 * @return A promise containing the boolean property requested. This should return null if there is no such property.
 */
export function getFeatureFlagBooleanProperty(
  flagId: string,
  propertyKey: string,
);

/**
 * Requests a string property for a given Feature Flag ID and a property key.
 * @param {string} flagId - The identifier for the Feature Flag.
 * @param {string} propertyKey - The key for the string property.
 *
 * @return A promise containing the string property requested. This should return null if there is no such property.
 */
export function getFeatureFlagStringProperty(
  flagId: string,
  propertyKey: string,
);

/**
 * Requests a number property for a given Feature Flag ID and a property key.
 * @param {string} flagId - The identifier for the Feature Flag.
 * @param {string} propertyKey - The key for the number property.
 *
 * @return A promise containing the number property requested. This should return null if there is no such property.
 */
export function getFeatureFlagNumberProperty(
  flagId: string,
  propertyKey: string,
);

/**
 * @return Starts SDK session tracking if previously disabled. Only used for Android.
 */
export function startSessionTracking();

export enum NotificationSubscriptionTypes {
  'OPTED_IN' = 'opted_in',
  'SUBSCRIBED' = 'subscribed',
  'UNSUBSCRIBED' = 'unsubscribed',
}

export enum Genders {
  'FEMALE' = 'f',
  'MALE' = 'm',
  'NOT_APPLICABLE' = 'n',
  'OTHER' = 'o',
  'PREFER_NOT_TO_SAY' = 'p',
  'UNKNOWN' = 'u',
}

export enum CardCategories {
  'ADVERTISING' = 'advertising',
  'ANNOUNCEMENTS' = 'announcements',
  'NEWS' = 'news',
  'SOCIAL' = 'social',
  'NO_CATEGORY' = 'no_category',
  'ALL' = 'all',
}

export enum ContentCardTypes {
  'CLASSIC' = 'Classic',
  'BANNER' = 'Banner',
  'CAPTIONED' = 'Captioned',
}
