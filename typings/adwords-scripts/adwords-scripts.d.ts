// Type definitions for Google AdWords Scripts 1.0
// Project: https://github.com/jafaircl/gaws
// Definitions by: Jonathan Faircloth <https://github.com/jafaircl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="google-apps-script" />

// Generics
interface AdWordsEntity {
    getEntityType?(): string;
}

interface AdWordsIterator<E> {
    hasNext(): boolean;
    next(): E;
    totalNumEntities(): number;
}

interface AdWordsSelector<E> {
    get(): AdWordsIterator<E>;
    withCondition(condition: string): AdWordsSelector<E>;
    withIds(ids: number[][] | number[]): AdWordsSelector<E>;
    forDateRange(dateRange: string): AdWordsSelector<E>;
    forDateRange(dateFrom: AdWordsDate | string, dateTo: AdWordsDate | string): AdWordsSelector<E>;
    orderBy(orderBy: string): AdWordsSelector<E>;
    withLimit(limit: number): AdWordsSelector<E>;
}

interface AdWordsBuilder<E> {
    build(): AdWordsOperation<E>;
}

interface AdWordsOperation<E> {
    getErrors(): string[];
    getResult(): E;
    isSuccessful(): boolean;
}

interface AdWordsStats {
    getAverageCpc(): number;
    getAverageCpm(): number;
    getAverageCpv(): number;
    getAveragePageviews(): number;
    getAveragePosition(): number;
    getAverageTimeOnSite(): number;
    getBounceRage(): number;
    getClicks(): number;
    getConversionRate(): number;
    getConversions(): number;
    getCost(): number;
    getCtr(): number;
    getImpressions(): number;
    getViewRate(): number;
    getViews(): number;
}

interface AdWordsUrls {
    getCustomParameters(): {};
    getTrackingTemplate(): string;
}

interface AdWordsBidding {
    getStrategy(): BiddingStrategy;
    getStrategySource(): BiddingStrategySource;
    getStrategyType(): string;
}

interface AdWordsTargeting<A, E> {
    audiences(): AdWordsSelector<A>;
    exculdedAudiences(): AdWordsSelector<E>;
}

// Ad Customizers
interface AdCustomizerItem extends AdWordsEntity,
                                   hasMobilePreferred,
                                   hasStartAndEndDate,
                                   hasSchedules {
    clearTargetAdGroup(): void;
    clearTargetCampaign(): void;
    clearTargetKeyword(): void;
    getAttributeValue(name: string): number | string;
    getAttributeValues(): {};
    getId(): number;
    getTargetAdGroupName(): string;
    getTargetCampaignName(): string;
    getTargetKeywordText(): string;
    remove(): void;
    setAttributeValue(name: string, value: string | number): void;
    setAttributeValues(attributeValues: {}): void;
    setTargetAdGroup(campaignName: string, adGroupName: string): void;
    setTargetCampaign(campaignName: string): void;
    setTargetKeyword(keyword?: string): void;
}

interface AdCustomizerItemBuilder<AdCustomizerItem> extends AdWordsBuilder<AdCustomizerItem>,
                                                            hasMobilePreferredBuilder<AdCustomizerItemBuilder<AdCustomizerItem>>,
                                                            hasSchedulesBuilder<AdCustomizerItemBuilder<AdCustomizerItem>>,
                                                            hasStartAndEndDateBuilder<AdCustomizerItemBuilder<AdCustomizerItem>> {
    withAttributeValue(name: string, value: {}): AdCustomizerItemBuilder<AdCustomizerItem>;
    withAttributeValues(attributeValues: {}): AdCustomizerItemBuilder<AdCustomizerItem>;
    withTargetAdGroup(campaignName: string, adGroup: string): AdCustomizerItemBuilder<AdCustomizerItem>;
    withTargetCampaign(campaignName: string): AdCustomizerItemBuilder<AdCustomizerItem>;
    withTargetKeyword(keyword: string): AdCustomizerItemBuilder<AdCustomizerItem>;
}

interface AdCustomizerSource extends AdWordsEntity {
    adCustomizerItemBuilder(): AdCustomizerItemBuilder<AdCustomizerItem>;
    getAttributes(): {};
    getName(): string;
    items(): AdWordsSelector<AdCustomizerItem>;
}

interface AdCustomizerSourceBuilder<AdCustomizerSource> extends AdWordsBuilder<AdCustomizerSource> {
    addAttribute(name: string, type: string): AdCustomizerSourceBuilder<AdCustomizerSource>;
    addAttributes(attributes: {}): AdCustomizerSourceBuilder<AdCustomizerSource>;
    withName(name: string): AdCustomizerSourceBuilder<AdCustomizerSource>;
}

// Ad extensions
interface AccountExtensions {
    callouts(): AdWordsSelector<Callout>;
    message(): AdWordsSelector<Message>;
    mobileApps(): AdWordsSelector<MobileApp>;
    reviews(): AdWordsSelector<Review>;
    sitelinks(): AdWordsSelector<Sitelink>;
    snippets(): AdWordsSelector<Snippet>;
}

interface AdGroupExtensions extends AccountExtensions {
    phoneNumbers(): AdWordsSelector<PhoneNumber>;
}

interface CampaignExtensions extends AccountExtensions {
    phoneNumbers(): AdWordsSelector<PhoneNumber>;
}

interface AdWordsAdExtensions extends AdGroupExtensions {
    newCalloutBuilder(): CalloutBuilder<Callout>;
    newMessageBuilder(): MessageBuilder<Message>;
    newMobileAppBuilder(): MobileAppBuilder<MobileApp>;
    newPhoneNumberBuilder(): PhoneNumberBuilder<PhoneNumber>;
    newReviewBuilder(): ReviewBuilder<Review>;
    newSitelinkBuilder(): SitelinkBuilder<Sitelink>;
    newSnippetBuilder(): SnippetBuilder<Snippet>;
}

interface Callout extends AdWordsEntity,
                          hasMobilePreferred,
                          hasStartAndEndDate,
                          hasSchedules,
                          hasStats,
                          isAdGroupChild {
    getId(): number;
    getText(): string;
    setText(text: string): void;
}

interface CalloutBuilder<Callout> extends AdWordsBuilder<Callout>,
                                          hasMobilePreferredBuilder<CalloutBuilder<Callout>>,
                                          hasSchedulesBuilder<CalloutBuilder<Callout>>,
                                          hasStartAndEndDateBuilder<CalloutBuilder<Callout>> {
    withText(text: string): CalloutBuilder<Callout>;
}

interface Message extends AdWordsEntity,
                          hasMobilePreferred,
                          hasStartAndEndDate,
                          hasSchedules,
                          hasStats,
                          isAdGroupChild {
    getBusinessName(): string;
    getCountryCode(): string;
    getExtensionText(): string;
    getId(): number;
    getMessageText(): string;
    getPhoneNumber(): string;
    setBusinessName(businessName: string): void;
    setCountryCode(countryCode: string): void;
    setExtensionText(extensionText: string): void;
    setMessageText(messageText: string): void;
    setPhoneNumber(phoneNumber: string): void;
}

interface MessageBuilder<Message> extends AdWordsBuilder<Message>,
                                          hasMobilePreferredBuilder<MessageBuilder<Message>>,
                                          hasStartAndEndDateBuilder<MessageBuilder<Message>>,
                                          hasSchedulesBuilder<MessageBuilder<Message>> {
    withBusinessName(businessName: string): MessageBuilder<Message>;
    withCountryCode(countryCode: string): MessageBuilder<Message>;
    withExtensionText(extensionText: string): MessageBuilder<Message>;
    withMessageText(messageText: string): MessageBuilder<Message>;
    withPhoneNumber(phoneNumber: string): MessageBuilder<Message>;
}

interface MobileApp extends AdWordsEntity,
                            hasMobilePreferred,
                            hasStartAndEndDate,
                            hasSchedules,
                            hasStats,
                            isAdGroupChild {
    clearLinkUrl(): void;
    getAppId(): string;
    getId(): number;
    getLinkText(): string;
    getStore(): AppStore;
    setAppId(appId: string): void;
    setLinkText(linkText: string): void;
    setStore(): AppStore;
    urls(): MobileAppUrls;
}

interface MobileAppUrls extends AdWordsUrls, hasGetFinalUrl, hasSetFinalUrl, hasSetTrackingTemplate {
    clearMobileFinalUrl(): void;
    clearTrackingTemplate(): void;
}

interface MobileAppBuilder<MobileApp> extends AdWordsBuilder<MobileApp>,
                                              hasMobilePreferredBuilder<MobileAppBuilder<MobileApp>>,
                                              hasStartAndEndDateBuilder<MobileAppBuilder<MobileApp>>,
                                              hasSchedulesBuilder<MobileAppBuilder<MobileApp>>,
                                              hasTrackingTemplateBuilder<MobileAppBuilder<MobileApp>>,
                                              hasFinalUrlBuilder<MobileAppBuilder<MobileApp>> {
    withAppId(appId: string): MobileAppBuilder<MobileApp>;
    withLinkText(linkText: string): MobileAppBuilder<MobileApp>;
    withStore(store: AppStore): MobileAppBuilder<MobileApp>;
}

interface PhoneNumber extends AdWordsEntity,
                              hasMobilePreferred,
                              hasSchedules,
                              hasStartAndEndDate,
                              hasStats,
                              isAdGroupChild {
    getCountry(): string;
    getId(): number;
    getPhoneNumber(): string;
    setCountry(country: string): void;
    setPhoneNumber(phoneNumber: string): void;
}

interface PhoneNumberBuilder<PhoneNumber> extends AdWordsBuilder<PhoneNumber>,
                                                  hasMobilePreferredBuilder<PhoneNumberBuilder<PhoneNumber>>,
                                                  hasStartAndEndDateBuilder<PhoneNumberBuilder<PhoneNumber>>,
                                                  hasSchedulesBuilder<PhoneNumberBuilder<PhoneNumber>> {
    withCountry(country: string): PhoneNumberBuilder<PhoneNumber>;
    withPhoneNumber(phoneNumber: string): PhoneNumberBuilder<PhoneNumber>;
}

interface Review extends AdWordsEntity,
                         hasMobilePreferred,
                         hasSchedules,
                         hasStartAndEndDate,
                         hasStats,
                         isAdGroupChild {
    getId(): number;
    getSourceName(): string;
    getSourceUrl(): string;
    getText(): string;
    isExactlyQuoted(): boolean;
    setExactlyQuoted(isExactlyQuoted: boolean): void;
    setSourceName(sourceName: string): void;
    setSourceUrl(sourceUrl: string): void;
    setText(text: string): void;
}

interface ReviewBuilder<Review> extends AdWordsBuilder<Review>,
                                        hasMobilePreferredBuilder<ReviewBuilder<Review>>,
                                        hasStartAndEndDateBuilder<ReviewBuilder<Review>>,
                                        hasSchedulesBuilder<ReviewBuilder<Review>> {
    withExactlyQuoted(exactlyQuoted: boolean): ReviewBuilder<Review>;
    withSourceName(sourceName: string): ReviewBuilder<Review>;
    withSourceUrl(sourceUrl: string): ReviewBuilder<Review>;
    withText(text: string): ReviewBuilder<Review>;
}

interface Sitelink extends AdWordsEntity,
                           hasMobilePreferred,
                           hasSchedules,
                           hasStartAndEndDate,
                           hasStats,
                           isAdGroupChild {
    clearDescription1(): void;
    clearDescription2(): void;
    clearLinkUrl(): void;
    getDescription1(): string;
    getDescription2(): string;
    getId(): number;
    getLinkText(): string;
    setDescription1(description1: string): void;
    setDescription2(description2: string): void;
    setLinkText(linkText: string): void;
    urls(): SitelinkUrls;
}

interface SitelinkUrls extends AdWordsUrls, hasSetTrackingTemplate, hasGetFinalUrl, hasSetFinalUrl {
    clearMobileFinalUrl(): void;
}

interface SitelinkBuilder<Sitelink> extends AdWordsBuilder<Sitelink>,
                                            hasMobilePreferredBuilder<SitelinkBuilder<Sitelink>>,
                                            hasStartAndEndDateBuilder<SitelinkBuilder<Sitelink>>,
                                            hasSchedulesBuilder<SitelinkBuilder<Sitelink>>,
                                            hasTrackingTemplateBuilder<SitelinkBuilder<Sitelink>>,
                                            hasFinalUrlBuilder<SitelinkBuilder<Sitelink>> {
    withDescription1(description1: string): SitelinkBuilder<Sitelink>;
    withDescription2(description2: string): SitelinkBuilder<Sitelink>;
    withLinkText(linkText: string): SitelinkBuilder<Sitelink>;
}

interface Snippet extends AdWordsEntity,
                          hasMobilePreferred,
                          hasSchedules,
                          hasStartAndEndDate,
                          hasStats,
                          isAdGroupChild {
    getHeader(): string;
    getId(): number;
    getValues(): string[];
    setHeader(header: string): void;
    setValues(values: string[]): void;
}

interface SnippetBuilder<Snippet> extends AdWordsBuilder<Snippet>,
                                          hasMobilePreferredBuilder<SnippetBuilder<Snippet>>,
                                          hasStartAndEndDateBuilder<SnippetBuilder<Snippet>>,
                                          hasSchedulesBuilder<SnippetBuilder<Snippet>> {
    withHeader(header: string): SnippetBuilder<Snippet>;
    withValues(values: string[]): SnippetBuilder<Snippet>;
}

// Ad Group
interface AdGroup extends AdWordsEntity, canBeEnabled, hasExtensions, hasLabels, hasStats, isCampaignChild {
    adParams(): AdWordsSelector<AdParam>;
    ads(): AdWordsSelector<Ad>;
    bidding(): AdGroupBidding;
    clearNegativeKeyword(keywordText: string): void;
    devices(): AdGroupDevices;
    display(): AdGroupDisplay;
    extensions(): AdGroupExtensions;
    getId(): number;
    getName(): string;
    isRemoved(): boolean;
    keywords(): AdWordsSelector<Keyword>;
    negativeKeywords(): AdWordsSelector<NegativeKeyword>;
    newAd(): AdBuilderSpace;
    newKeywordBuilder(): KeywordBuilder<Keyword>;
    setName(name: string): void;
    targeting(): AdGroupTargeting<SearchAdGroupAudience, SearchAdGroupExcludedAudience>;
    urls(): AdGroupUrls;
}

interface AdGroupUrls extends AdWordsUrls, hasSetTrackingTemplate {
    clearTrackingTemplate(): void;
}

interface AdGroupBuilder<AdGroup> extends AdWordsBuilder<AdGroup>,
                                          hasBiddingStrategyBuilder<AdGroupBuilder<AdGroup>>,
                                          hasTrackingTemplateBuilder<AdGroupBuilder<AdGroup>> {
    withCpa(cpa: number): AdGroupBuilder<AdGroup>;
    withCpc(cpc: number): AdGroupBuilder<AdGroup>;
    withCpm(cpm: number): AdGroupBuilder<AdGroup>;
    withName(name: string): AdGroupBuilder<AdGroup>;
    withStatus(status: string): AdGroupBuilder<AdGroup>;
}

interface AdGroupBidding extends KeywordBidding {
    getCpa(): number;
    setCpa(cpa: number): void;
}

interface AdGroupDevices {
    clearDesktopBidModifier(): void;
    clearMobileBidModifier(): void;
    clearTabletBidModifier(): void;
    getDesktopBidModifier(): number;
    getMobileBidModifier(): number;
    getTabletBidModifier(): number;
    setDesktopBidModifier(modifier: number): void;
    setMobileBidModifier(modifier: number): void;
    setTabletBidModifier(modifier: number): void;
}

interface AdGroupTargeting<SearchAdGroupAudience, SearchAdGroupExcludedAudience> extends AdWordsTargeting<SearchAdGroupAudience, SearchAdGroupExcludedAudience> {
    getTargetingSetting(): string;
    newUserListBuilder(): SearchAdGroupAudienceBuilder<SearchAdGroupAudience>;
    setTargetingSetting(criterionTypeGroup: CriterionTypeGroup, targetingSetting: TargetingSetting): void;
}

// Ad Param
interface AdParam extends AdWordsEntity {
    getAdGroup(): AdGroup;
    getInde(): number;
    getInsertionText(): string;
    getKeyword(): Keyword;
    remove(): void;
    setInsertionText(insertionText: string): void;
}

// Ad
interface Ad extends AdWordsEntity,
                     canBeEnabled,
                     hasLabels,
                     hasStats,
                     isAdGroupChild {
    asType(): AdViewSpace;
    getApprovalStatus(): ApprovalStatus;
    getDisapprovalReasons(): string[];
    getId(): number;
    getPolicyApprovalStatus(): PolicyApprovalStatus;
    getPolicyTopics(): PolicyTopic[];
    getType(): AdType;
    isType(): AdTypeSpace;
    remove(): void;
    urls(): AdUrls;
}

interface AdBuilder<T> extends AdWordsBuilder<T>, hasFinalUrlBuilder<T>, hasTrackingTemplateBuilder<T> { }

interface AdBuilderSpace {
    expandedTextAdBuilder(): ExpandedTextAdBuilder<ExpandedTextAd>;
    gmailImageAdBuilder(): GmailImageAdBuilder<GmailImageAd>;
    gmailMultiProductAdBuilder(): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    gmailSinglePromotionAdBuilder(): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    html5AdBuilder(): Html5AdBuilder<Html5Ad>;
    imageAdBuilder(): ImageAdBuilder<ImageAd>;
    responsiveDisplayAdBuilder(): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>;
}

interface AdTypeSpace {
    expandedTextAd(): boolean;
    gmailImageAd(): boolean;
    gmailMultiProductAd(): boolean;
    gmailSinglePromotionAd(): boolean;
    html5Ad(): boolean;
    imageAd(): boolean;
    responsiveDisplayAd(): boolean;
}

interface AdUrls extends AdWordsUrls, hasGetFinalUrl { }

interface AdViewSpace {
    expandedTextAd(): ExpandedTextAd;
    gmailImageAd(): GmailImageAd;
    gmailMultiProductAd(): GmailMultiProductAd;
    gmailSinglePromotionAd(): GmailSinglePromotionAd;
    html5Ad(): Html5Ad;
    imageAd(): ImageAd;
    responsiveDisplayAd(): ResponsiveDisplayAd;
}

interface ExpandedTextAd extends Ad {
    getDescription(): string;
    getHeadlinePart1(): string;
    getHeadlinePart2(): string;
    getPath1(): string;
    getPath2(): string;
}

interface ExpandedTextAdBuilder<ExpandedTextAd> extends AdBuilder<ExpandedTextAdBuilder<ExpandedTextAd>> {
    withDescription(descriptions: string): ExpandedTextAdBuilder<ExpandedTextAd>;
    withHeadlinePart1(headline1: string): ExpandedTextAdBuilder<ExpandedTextAd>;
    withHeadlinePart2(headline2: string): ExpandedTextAdBuilder<ExpandedTextAd>;
    withPath1(path1: string): ExpandedTextAdBuilder<ExpandedTextAd>;
    withPath2(path2: string): ExpandedTextAdBuilder<ExpandedTextAd>;
}

interface GmailImageAd extends Ad {
    getAdvertiser(): string;
    getDescription(): string;
    getImage(): Media;
    getLogo(): Media;
    getName(): string;
    getSubject(): string;
}

interface GmailImageAdBuilder<GmailImageAd> extends AdBuilder<GmailImageAdBuilder<GmailImageAd>> {
    withAdvertiser(advertiser: string): GmailImageAdBuilder<GmailImageAd>;
    withDescription(description: string): GmailImageAdBuilder<GmailImageAd>;
    withDisplayUrl(displayUrl: string): GmailImageAdBuilder<GmailImageAd>;
    withImage(image: Media): GmailImageAdBuilder<GmailImageAd>;
    withLogo(logo: Media): GmailImageAdBuilder<GmailImageAd>;
    withName(name: string): GmailImageAdBuilder<GmailImageAd>;
    withSubject(subject: string): GmailImageAdBuilder<GmailImageAd>;
}

interface GmailMultiProductAd extends Ad {
    getAdvertiser(): string;
    getContent(): string;
    getDescription(): string;
    getHeader(): Media;
    getHeadline(): string;
    getHeadlineColor(): string;
    getItemButtonCallsToAction(): string[];
    getItemButtonColor(): string[];
    getItemButtonFinalMobileUrls(): string[];
    getItemButtonFinalUrls(): string[];
    getItemButtonTextColors(): string[];
    getItemButtonTrackingTemplates(): string[];
    getItemImages(): Media[];
    getItemTitleColors(): string[];
    getItemTitles(): string[];
    getLogo(): Media;
    getName(): string;
    getSubject(): string;
}

interface GmailMultiProductAdBuilder<GmailMultiProductAd> extends AdBuilder<GmailMultiProductAdBuilder<GmailImageAd>> {
    withAdvertiser(advertiser: string): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withContent(content: string): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withDescription(description: string): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withHeader(header: Media): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withHeadline(headline: string): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withHeadlineColor(headlineColor: string): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withItemButtonCallsToAction(itemCallsToAction: string[]): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withItemButtonFinalMobileUrls(itemButtonFinalMobileUrls: string[]): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withItemButtonFinalUrls(itemButtonFinalUrls: string[]): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withItemButtonTrackingTemplates(itemButtonTrackingTemplates: string[]): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withItemImages(itemImages: Media[]): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withItemTitle(itemTitles: string[]): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withLogo(logo: Media): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withName(name: string): GmailMultiProductAdBuilder<GmailMultiProductAd>;
    withSubject(subject: string): GmailMultiProductAdBuilder<GmailMultiProductAd>;
}

interface GmailSinglePromotionAd extends Ad {
    getAdvertiser(): string;
    getCallToAction(): string;
    getCallToActionButtonColor(): string;
    getCallToActionTextColor(): string;
    getContent(): string;
    getDescription(): string;
    getHeader(): Media;
    getHeadline(): string;
    getHeadlineColor(): string;
    getImage(): Media;
    getLogo(): Media;
    getName(): string;
    getSubject(): string;
}

interface GmailSinglePromotionAdBuilder<GmailSinglePromotionAd> extends AdBuilder<GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>> {
    withAdvertiser(advertiser: string): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    withCallToAction(callToAction: string): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    withCallToActionButtonColor(callToActionButtonColor: string): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    withCallToActionTextColor(callToActionTextColor: string): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    withContent(content: string): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    withDescription(description: string): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    withDisplayUrl(displayUrl: string): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    withHeader(header: Media): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    withHeadline(headline: string): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    withHeadlineColor(headlineColor: string): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    withImage(image: Media): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    withLogo(logo: Media): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    withName(name: string): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
    withSubject(subject: string): GmailSinglePromotionAdBuilder<GmailSinglePromotionAd>;
}

interface Html5Ad extends Ad {
    getEntryPoint(): string;
    getMediaBundle(): Media;
    getName(): string;
}

interface Html5AdBuilder<Html5Ad> extends AdBuilder<Html5AdBuilder<Html5Ad>> {
    withDisplayUrl(displayUrl: string): Html5AdBuilder<Html5Ad>;
    withEntryPoint(entryPoint: string): Html5AdBuilder<Html5Ad>;
    withMediaBundle(mediaBundle: Media): Html5AdBuilder<Html5Ad>;
    withName(name: string): Html5AdBuilder<Html5Ad>;
    withDimensions(dimensions: string): Html5AdBuilder<Html5Ad>;
}

interface ImageAd extends Ad {
    getImage(): Media;
    getName(): string;
}

interface ImageAdBuilder<ImageAd> extends AdBuilder<ImageAdBuilder<ImageAd>> {
    withDisplayUrl(displayUrl: string): ImageAdBuilder<ImageAd>;
    withImage(image: Media): ImageAdBuilder<ImageAd>;
    withName(name: string): ImageAdBuilder<ImageAd>;
}

interface PolicyTopic {
    getId(): string;
    getName(): string;
    getType(): string;
}

interface ResponsiveDisplayAd extends Ad {
    getBusinessName(): string;
    getDescription(): string;
    getLogoImage(): Media;
    getLongHeadline(): string;
    getMarketingImage(): Media;
    getShortHeadline(): string;
}

interface ResponsiveDisplayAdBuilder<ResponsiveDisplayAd> extends AdBuilder<ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>> {
    withBusinessName(businessName: string): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>;
    withDescription(description: string): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>;
    withLogoImage(logo: Media): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>;
    withLongHeadline(longHeadline: string): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>;
    withMarketingImage(marketingImage: Media): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>;
    withShortHeadline(shortHeadline: string): ResponsiveDisplayAdBuilder<ResponsiveDisplayAd>;
}

// Bidding Strategies
interface BiddingStrategy extends hasStats {
    adGroups(): AdWordsSelector<AdGroup>;
    campaigns(): AdWordsSelector<Campaign>;
    getId(): number;
    getName(): string;
    getType(): string;
    keywords(): AdWordsSelector<Keyword>;
    shoppingAdGroups(): AdWordsSelector<ShoppingAdGroup>;
    shoppingCampaigns(): AdWordsSelector<ShoppingCampaign>;
}

// Budget Orders
interface BillingAccount {
    getId(): number;
    getName(): string;
    getPrimaryBillingId(): string;
    getSecondaryBillingId(): string;
}

interface BudgetOrder {
    getBillingAccount(): BillingAccount;
    getEndDatetime(): AdWordsDate;
    getId(): number;
    getName(): string;
    getPoNumber(): number;
    getSpendingLimit(): number;
    getStartDateTime(): AdWordsDate;
    getTotalAdjustments(): number;
}

// Budgets
interface Budget extends AdWordsEntity, hasStats {
    campaigns(): AdWordsSelector<Campaign>;
    getAmount(): number;
    getDeliveryMethod(): string;
    getId(): number;
    getName(): string;
    isExplicitlyShared(): boolean;
    setAmount(amount: number): void;
}

// Bulk Uploads
interface BulkUploads {
    newCsvUpload(columnNames: string[], optArgs: FileUploadArguments): CsvUpload;
    newFileUpload(file: GoogleAppsScript.Spreadsheet.Sheet | GoogleAppsScript.Base.Blob | GoogleAppsScript.Drive.File, optArgs: FileUploadArguments): FileUpload;
}

interface BulkUpload<T> {
    forCampaignManagement(): T;
    forOfflineConversions(): T;
    preview(): void;
    setFileName(fileName: string): T;
}

interface FileUpload extends BulkUpload<FileUpload> {
    apply(): void;
}

interface CsvUpload extends BulkUpload<CsvUpload> {
    apply(): void;
    append(row: {}): CsvUpload;
}

interface FileUploadArguments {
    fileLocale?: string;
    moneyInMicros?: boolean;
    timeZone?: string;
}

// Campaign
interface Campaign extends AdWordsEntity, canBeEnabled, hasLabels, hasStartAndEndDate, hasStats {
    adGroups(): AdWordsSelector<AdGroup>;
    addAdSchedule(adSchedule: AdSchedule): AdWordsOperation<AdSchedule>;
    addAdSchedule(dayOfWeek: DayOfWeekString, startHour: number, startMinute: number, endHour: number, endMinute: number, bidModifier: number): AdWordsOperation<AdSchedule>;
    addCallout(calloutExtension: Callout): AdWordsOperation<Callout>;
    addExcludedPlacementList(excludedPlacementList: ExcludedPlacementList): void;
    addLocation(locationId: number | TargetedLocation | LocationObject): AdWordsOperation<TargetedLocation>;
    addLocation(locationId: number, bidModifier: number): AdWordsOperation<TargetedLocation>;
    addMessage(messageExtension: Message): AdWordsOperation<Message>;
    addMobileApp(mobileAppExtension: MobileApp): AdWordsOperation<MobileApp>;
    addNegativeKeywordLIst(negativeKeywordList: NegativeKeywordList): void;
    addPhoneNumber(phoneNumberExtension: PhoneNumber): AdWordsOperation<PhoneNumber>;
    addProximity(proximity: ProximityObject | TargetedProximity): AdWordsOperation<TargetedProximity>;
    addProximity(latitude: number, longitude: number, radius: number, radiusUnits: RadiusUnits, optArgs: { bidModifier: number, address: AddressObject}): AdWordsOperation<TargetedProximity>;
    addReview(reviewExtension: Review): AdWordsOperation<Review>;
    addSiteLink(sitelinkExtension: Sitelink): AdWordsOperation<Sitelink>;
    addSnippet(snippetExtension: Snippet): AdWordsOperation<Snippet>;
    ads(): AdWordsSelector<Ad>;
    bidding(): CampaignBidding;
    createNegativeKeyword(keywordText: string): void;
    display(): CampaignDisplay;
    excludeLocation(location: ExcludedLocation | number | { id: number }): AdWordsOperation<ExcludedLocation>;
    excludedPlacementLists(): AdWordsSelector<ExcludedPlacementList>;
    extensions(): CampaignExtensions;
    getAdRotationType(): AdRotationType;
    getBiddingStrategyType(): BiddingStrategyString;
    getBudget(): Budget;
    getId(): number;
    getName(): string;
    isRemoved(): boolean;
    keywords(): AdWordsSelector<Keyword>;
    negativeKeywordLists(): AdWordsSelector<NegativeKeywordList>;
    negativeKeywords(): AdWordsSelector<NegativeKeyword>;
    newAdGroupBuilder(): AdGroupBuilder<AdGroup>;
    removeCallout(calloutExtension: Callout): void;
    removeExcludedPlacementList(excludedPlacementList: ExcludedPlacementList): void;
    removeMessage(message: Message): void;
    removeMobileApp(mobileApp: MobileApp): void;
    removeNegativeKeywordList(negativeKeywordList: NegativeKeywordList): void;
    removePhoneNumber(phoneNumber: PhoneNumber): void;
    removeReview(review: Review): void;
    removeSitelink(sitelkin: Sitelink): void;
    removeSnippet(snippet: Snippet): void;
    setAdRotationType(adRotationType: AdRotationType): void;
    setName(name: string): void;
    targeting(): CampaignTargeting<SearchCampaignAudience, SearchCampaignExcludedAudience>;
    urls(): CampaignUrls;
}

interface CampaignBidding extends AdWordsBidding, canSetBiddingStrategy { }

interface CampaignTargeting<SearchCampaignAudience, SearchCampaignExcludedAudience> extends AdWordsTargeting<AdWordsEntity, AdWordsEntity> {
    adSchedules(): AdWordsSelector<AdSchedule>;
    excludedContentLabels(): AdWordsSelector<ExcludedContentLabel>;
    excludedLocations(): AdWordsSelector<ExcludedLocation>;
    getTargetingSetting(criterionTypeGroup: CriterionTypeGroup): TargetingSetting;
    languages(): AdWordsSelector<Language>;
    newUserListBuilder(): SearchCampaignAudienceBuilder<SearchCampaignAudience>;
    platforms(): AdWordsSelector<Platform>;
    setTargetingSetting(criterionTypeGroup: CriterionTypeGroup, targetingSetting: TargetingSetting): void;
    targetedLocations(): AdWordsSelector<TargetedLocation>;
    targetedProximities(): AdWordsSelector<TargetedProximity>;
}

interface CampaignUrls extends AdWordsUrls, hasSetTrackingTemplate {
    clearTrackingTemplate(): void;
}

// Common
interface CurrentAccount extends AdWordsEntity, hasStats {
    addCallout(calloutExtension: Callout): AdWordsOperation<Callout>;
    addMobileApp(mobileAppExtension: MobileApp): AdWordsOperation<MobileApp>;
    addReview(reviewExtension: Review): AdWordsOperation<Review>;
    addSnippet(snippetExtension: Snippet): AdWordsOperation<Snippet>;
    extensions(): AccountExtensions;
    getCurrencyCode(): string;
    getCustomerId(): string;
    getName(): string;
    getTimeZone(): string;
    removeCallout(calloutExtension: Callout): void;
    removeMobileApp(mobileAppExtension: MobileApp): void;
    removeReview(reviewExtension: Review): void;
    removeSnippet(snippetExtension: Snippet): void;
}

interface ExecutionInfo {
    getRemainingCreateQuota(): number;
    getRemainingGetQuota(): number;
    getRemainingTime(): number;
    isPreview(): boolean;
}

// Display
interface DisplayBuilder<T> extends AdWordsBuilder<T> {
    exclude(): AdWordsOperation<T>;
    withCpc(cpc: number): T;
    withCpm(cpm: number): T;
}

interface DisplayBidding extends AdWordsBidding {
    clearCpc(): void;
    clearCpm(): void;
    getCpc(): number;
    getCpm(): number;
    setCpc(cpc: number): void;
    setCpm(cpm: number): void;
}

interface Audience extends ExcludedAudience, hasStats {
    bidding(): AudienceBidding;
    isEnabled(): boolean;
    isPaused(): boolean;
}

interface ExcludedAudience extends isAdGroupChild {
    getAudienceId(): number;
    getAudienceType(): AudienceType;
    getId(): number;
    remove(): void;
}

interface AudienceBuilder<Audience> extends DisplayBuilder<AudienceBuilder<Audience>> {
    withAudience(userList: UserList): AudienceBuilder<Audience>;
    withAudienceId(audienceId: number): AudienceBuilder<Audience>;
    withAudienceType(audienceType: AudienceType): AudienceBuilder<Audience>;
}

interface AudienceBidding extends AdWordsBidding {
    clearCpc(): void;
    clearCpm(): void;
    getCpc(): number;
    getCpm(): number;
    setCpc(cpc: number): void;
    setCpm(cpm: number): void;
}

interface DisplayKeyword extends ExcludedDisplayKeyword, hasStats {
    bidding(): DisplayKeywordBidding;
}

interface ExcludedDisplayKeyword extends isAdGroupChild {
    getId(): number;
    getText(): string;
    remove(): void;
}

interface DisplayKeywordBuilder<DisplayKeyword> extends DisplayBuilder<DisplayKeywordBuilder<DisplayKeyword>> {
    withText(text: string): DisplayKeywordBuilder<DisplayKeyword>;
}

interface DisplayKeywordBidding extends DisplayBidding, canSetBiddingStrategy {
    clearStrategy(): void;
}

interface Placement extends ExcludedPlacement, hasStats {
    bidding(): PlacementBidding;
    isEnabled(): boolean;
    isManaged(): boolean;
    isPaused(): boolean;
}

interface ExcludedPlacement extends isAdGroupChild {
    getId(): number;
    getUrl(): string;
    remove(): void;
}

interface PlacementBuilder<Placement> extends DisplayBuilder<PlacementBuilder<Placement>> {
    withUrl(url: string): PlacementBuilder<Placement>;
}

interface PlacementBidding extends DisplayBidding, canSetBiddingStrategy {
    clearStrategy(): void;
}

interface Topic extends ExcludedTopic, hasStats {
    bidding(): TopicBidding;
    isEnabled(): boolean;
    isPaused(): boolean;
}

interface ExcludedTopic extends isAdGroupChild {
    getId(): number;
    getTopicId(): number;
    remove(): void;
}

interface TopicBuilder<Topic> extends DisplayBuilder<TopicBuilder<Topic>> {
    withTopicId(topicId: number): TopicBuilder<Topic>;
}

interface TopicBidding extends AdWordsBidding {
    clearCpc(): void;
    clearCpm(): void;
    getCpc(): number;
    getCpm(): number;
    setCpc(cpc: number): void;
    setCpm(cpm: number): void;
}

interface AdGroupDisplay extends Display {
    excludedAudiences(): AdWordsSelector<ExcludedAudience>;
    excludedKeywords(): AdWordsSelector<ExcludedDisplayKeyword>;
    excludedPlacements(): AdWordsSelector<ExcludedPlacement>;
    excludedTopics(): AdWordsSelector<Topic>;
    newAudienceBuilder(): AudienceBuilder<Audience>;
    newKeywordBuilder(): DisplayKeywordBuilder<DisplayKeyword>;
    newPlacementBuilder(): PlacementBuilder<Placement>;
    newTopicBuilder(): TopicBuilder<Topic>;
}

interface CampaignDisplay extends Display {
    excludedAudiences(): AdWordsSelector<ExcludedAudience>;
    excludedKeywords(): AdWordsSelector<ExcludedDisplayKeyword>;
    excludedPlacements(): AdWordsSelector<ExcludedPlacement>;
    excludedTopics(): AdWordsSelector<Topic>;
    newAudienceBuilder(): AudienceBuilder<Audience>;
    newKeywordBuilder(): DisplayKeywordBuilder<DisplayKeyword>;
    newPlacementBuilder(): PlacementBuilder<Placement>;
    newTopicBuilder(): TopicBuilder<Topic>;
}

interface Display {
    audiences(): AdWordsSelector<Audience>;
    keywords(): AdWordsSelector<DisplayKeyword>;
    placements(): AdWordsSelector<Placement>;
    topics(): AdWordsSelector<Topic>;
}

// Keywords
interface Keyword extends AdWordsEntity, canBeEnabled, hasLabels, hasStats, isAdGroupChild {
    adParams(): AdWordsSelector<AdParam>;
    bidding(): KeywordBidding;
    clearDesinationUrl(): void;
    getApprovalStatus(): ApprovalStatus;
    getFirstPageCpc(): number;
    getId(): number;
    getMatchType(): MatchType;
    getQualityScore(): number;
    getText(): string;
    getTopOfPageCpc(): number;
    remove(): void;
    setAdParam(index: number, insertionText: string): void;
    urls(): KeywordUrls;
}

interface KeywordBidding extends AdWordsBidding, canSetBiddingStrategy {
    clearStrategy(): void;
    getCpc(): number;
    getCpm(): number;
    setCpc(cpc: number): void;
    setCpm(cpm: number): void;
}

interface KeywordBuilder<Keyword> extends AdWordsBuilder<Keyword>,
                                          hasBiddingStrategyBuilder<KeywordBuilder<Keyword>>,
                                          hasTrackingTemplateBuilder<KeywordBuilder<Keyword>>,
                                          hasFinalUrlBuilder<KeywordBuilder<Keyword>> {
    withCpc(cpc: number): KeywordBuilder<Keyword>;
    withCpm(cpm: number): KeywordBuilder<Keyword>;
    withText(text: string): KeywordBuilder<Keyword>;
}

interface KeywordUrls extends AdWordsUrls, hasGetFinalUrl, hasSetTrackingTemplate, hasSetFinalUrl {
    clearFinalUrl(): void;
    clearMobileFinalUrl(): void;
    clearTrackingTemplate(): void;
}

// Labels
interface Label extends AdWordsEntity {
    adGroups(): AdWordsSelector<AdGroup>;
    ads(): AdWordsSelector<Ad>;
    campaigns(): AdWordsSelector<Campaign>;
    getColor(): string;
    getDescription(): string;
    getId(): string;
    getName(): string;
    keywords(): AdWordsSelector<Keyword>;
    remove(): void;
    setColor(color: string): void;
    setDescription(description: string): void;
    setName(name: string): void;
}

// Media
interface AdMedia {
    media(): AdWordsSelector<Media>;
    newImageBuilder(): ImageBuilder<Media>;
    newMediaBundleBuilder(): MediaBundleBuilder<Media>;
    newVideoBuilder(): VideoBuilder<Media>;
}

interface Dimensions {
    getHeight(): number;
    getWidth(): number;
}

interface ImageBuilder<Media> extends AdWordsBuilder<Media> {
    withData(data: GoogleAppsScript.Base.Blob): ImageBuilder<Media>;
    withName(name: string): ImageBuilder<Media>;
}

interface Media {
    getDimensions(): MediaDimensions;
    getFileSize(): number;
    getId(): number;
    getMimeType(): string;
    getName(): string;
    getReferenceId(): string;
    getSourceUrl(): string;
    getType(): MediaType;
    getUrls(): MediaUrls;
    getYouTubeVideoId(): string | void;
}

interface MediaBundleBuilder<Media> extends AdWordsBuilder<Media> {
    withData(data: GoogleAppsScript.Base.Blob): MediaBundleBuilder<Media>;
    withName(name: string): MediaBundleBuilder<Media>;
}

interface MediaDimensions {
    getFullMediaDimensions(): Dimensions;
    getPreviewMediaDimensions(): Dimensions;
    getShrunkenMediaDimensions(): Dimensions;
    getVideoThumbnailDimensions(): Dimensions;
}

interface MediaUrls {
    getFullMediaUrl(): string;
    getPreviewMediaUrl(): string;
    getShrunkenMediaUrl(): string;
    getVideoThumbnailMediaUrl(): string;
}

interface VideoBuilder<Media> extends AdWordsBuilder<Media> {
    withYouTubeVideoId(youTubeVideoId: string): VideoBuilder<Media>;
}

// Negative Keywords
interface NegativeKeyword extends AdWordsEntity, isAdGroupChild {
    getMatchType(): MatchType;
    getText(): string;
    remove(): void;
}

// Reports
interface AdWordsReport {
    exportToSheet(sheet: GoogleAppsScript.Spreadsheet.Sheet): void;
    getColumnHeader(awqlColumnName: string): AdWordsReportColumnHeader;
    rows(): AdWordsReportRowIterator;
}

interface AdWordsReportRow {
    formatForUpload(): {};
}

interface AdWordsReportRowIterator {
    hasNext(): boolean;
    next(): AdWordsReportRow;
}

interface AdWordsReportColumnHeader {
    getBulkUploadColumnName(): string;
    getReportColumnName(): string;
}

// Shared Sets
interface ExcludedPlacementList extends AdWordsEntity {
    addExcludedPlacement(url: string): void;
    addExcludedPlacements(urls: string[]): void;
    campaigns(): AdWordsSelector<Campaign>;
    excludedPlacements(): AdWordsSelector<SharedExcludedPlacement>;
    getId(): number;
    getName(): string;
    setName(name: string): void;
}

interface ExcludedPlacementListBuilder<ExcludedPlacementList> extends AdWordsBuilder<ExcludedPlacementList> {
    withName(name: string): ExcludedPlacementListBuilder<ExcludedPlacementList>;
}

interface SharedExcludedPlacement extends AdWordsEntity {
    getExcludedPlacementList(): ExcludedPlacementList;
    getUrl(): string;
    remove(): void;
}

interface NegativeKeywordList extends AdWordsEntity {
    addNegativeKeyword(keywordText: string): void;
    addNegativeKeywords(keywordTexts: string[]): void;
    campaigns(): AdWordsSelector<Campaign>;
    getId(): number;
    getName(): string;
    negativeKeywords(): AdWordsSelector<SharedNegativeKeyword>;
    setName(): string;
}

interface NegativeKeywordListBuilder<NegativeKeywordList> extends AdWordsBuilder<NegativeKeywordList> {
    withName(name: string): NegativeKeywordListBuilder<NegativeKeywordList>;
}

interface SharedNegativeKeyword extends AdWordsEntity {
    getMatchType(): MatchType;
    getNegativeKeywordList(): NegativeKeywordList;
    getText(): string;
    remove(): void;
}

// Shopping Ad Groups
interface ShoppingAdGroupAudience extends hasStats {
    bidding(): ShoppingAudienceBidding;
    getAdGroup(): ShoppingAdGroup;
    getAudienceID(): number;
    getAudienceType(): AudienceType;
    getCampaign(): ShoppingCampaign;
    getId(): number;
    getName(): string;
    isEnabled(): boolean;
    isPaused(): boolean;
    remove(): void;
}

interface ShoppingAdGroupAudienceBuilder<ShoppingAdGroupAudience> extends AdWordsBuilder<ShoppingAdGroupAudience> {
    withAudienceId(audienceId: number): ShoppingAdGroupAudienceBuilder<ShoppingAdGroupAudience>;
    withBidModifier(modifier:  number): ShoppingAdGroupAudienceBuilder<ShoppingAdGroupAudience>;
}

interface AccountShoppingAdGroupTargeting {
    audiences(): AdWordsSelector<ShoppingAdGroupAudience>;
}

interface ShoppingAdGroup extends canBeEnabled, hasLabels, hasStats {
    ads(): AdWordsSelector<ProductAd>;
    bidding(): ShoppingAdGroupBidding;
    createNegativeKeyword(keyword: string): void;
    createRootProductGroup(): AdWordsOperation<ProductGroup>;
    devices(): AdGroupDevices;
    getCampaign(): ShoppingCampaign;
    getId(): number;
    getName(): string;
    isRemoved(): boolean;
    newAdBuilder(): ProductAdBuilder<ProductAd>;
    productGroups(): AdWordsSelector<ProductGroup>;
    rootProductGroup(): ProductGroup;
    setName(name: string): void;
    targeting(): ShoppingAdGroupTargeting;
}

interface ShoppingAdGroupBidding extends AdWordsBidding, canSetBiddingStrategy {
    clearStrategy(): void;
    getCpc(): number;
    setCpc(cpc: number): void;
}

interface ShoppingAdGroupBuilder<ShoppingAdGroup> extends AdWordsBuilder<ShoppingAdGroup>,
                                                          hasBiddingStrategyBuilder<ShoppingAdGroupBuilder<ShoppingAdGroup>> {
    withCpc(cpc: number): ShoppingAdGroupBuilder<ShoppingAdGroup>;
    withName(name: string): ShoppingAdGroupBuilder<ShoppingAdGroup>;
    withStatus(status: string): ShoppingAdGroupBuilder<ShoppingAdGroup>;
}

interface ShoppingAdGroupTargeting {
    audiences(): AdWordsSelector<ShoppingAdGroupAudience>;
    getTargetingSetting(): string;
    newUserListBuilder(): ShoppingAdGroupAudienceBuilder<ShoppingAdGroupAudience>;
    setTargetingSetting(criterionTypeGroup: CriterionTypeGroup, targetingSetting: TargetingSetting): void;
}

// Shopping Campaigns
interface ShoppingAdSchedule extends AdWordsEntity, canSetBidModifier, hasStats {
    getCampaign(): ShoppingCampaign;
    getDayOfWeek(): DayOfWeekString;
    getEndHour(): number;
    getEndMinute(): number;
    getId(): number;
    getStartHour(): number;
    getStartMinute(): number;
    remove(): void;
}

interface ShoppingAudienceBidding {
    clearBidModifier(): void;
    getBidModifier(): number;
    setBidModifier(modifier: number): void;
}

interface ShoppingCampaignAudience extends hasStats {
    bidding(): ShoppingAudienceBidding;
    getAudienceId(): number;
    getAudienceType(): AudienceType;
    getCampaign(): ShoppingCampaign;
    getId(): number;
    getName(): string;
    isEnabled(): boolean;
    isPaused(): boolean;
    remove(): void;
}

interface ShoppingCampaignAudienceBuilder<ShoppingCampaignAudience> extends AdWordsBuilder<ShoppingCampaignAudience> {
    withAudienceId(audienceId: number): ShoppingCampaignAudienceBuilder<ShoppingCampaignAudience>;
    withBidModifier(modifier:  number): ShoppingCampaignAudienceBuilder<ShoppingCampaignAudience>;
}

interface ShoppingExcludedLocation extends AdWordsEntity {
    getCampaign(): ShoppingCampaign;
    getCountryCode(): string;
    getId(): number;
    getName(): string;
    getTargetType(): TargetType;
    getTargetingStatus(): TargetingStatus;
    remove(): void;
}

interface ShoppingTargetedLocation extends ShoppingExcludedLocation, hasStats {
    getBidModifier(): number;
    setBidModifier(modifier: number): void;
}

interface ShoppingPlatform extends AdWordsEntity, canSetBidModifier, hasStats {
    getId(): number;
    getName(): string;
}

interface ShoppingTargetedProximity extends AdWordsEntity, canSetBidModifier, hasStats {
    getAddress(): Address;
    getCampaign(): ShoppingCampaign;
    getId(): number;
    getLatitude(): number;
    getLongitude(): number;
    getRadius(): number;
    getRadiusUnits(): RadiusUnits;
    remove(): void;
}

interface AccountShoppingCampaignTargeting {
    audiences(): AdWordsSelector<ShoppingCampaignAudience>;
}

interface ShoppingCampaign extends AdWordsEntity, canBeEnabled, hasLabels, hasStartAndEndDate, hasStats {
    addAdSchedule(adSchedule: ShoppingAdSchedule): AdWordsOperation<ShoppingAdSchedule>;
    addAdSchedule(dayOfWeek: DayOfWeekString, startHour: number, startMinute: number, endHour: number, endMinute: number, bidModifier: number): AdWordsOperation<ShoppingAdSchedule>;
    addLocation(locationId: number | ShoppingTargetedLocation | LocationObject): AdWordsOperation<ShoppingTargetedLocation>;
    addLocation(locationId: number, bidModifier: number): AdWordsOperation<ShoppingTargetedLocation>;
    addProximity(proximity: ProximityObject | ShoppingTargetedProximity): AdWordsOperation<ShoppingTargetedProximity>;
    addProximity(latitude: number, longitude: number, radius: number, radiusUnits: RadiusUnits, optArgs: { bidModifier: number, address: AddressObject}): AdWordsOperation<ShoppingTargetedProximity>;
    ads(): AdWordsSelector<ProductAd>;
    bidding(): ShoppingCampaignBidding;
    createNegativeKeyword(keywordText: string): void;
    excludeLocation(location: ShoppingExcludedLocation | number | { id: number }): AdWordsOperation<ShoppingExcludedLocation>;
    getAdRotationtype(): string;
    getBiddingStrategyType(): BiddingStrategyString;
    getBudget(): Budget;
    getId(): number;
    getName(): string;
    isDeleted(): boolean;
    negativeKeywords(): AdWordsSelector<NegativeKeyword>;
    newAdGroupBuilder(): ShoppingAdGroupBuilder<ShoppingAdGroup>;
    productGroups(): AdWordsSelector<ProductGroup>;
    setAdRotationType(adRotationType: AdRotationType): void;
    setName(name: string): void;
    targeting(): ShoppingCampaignTargeting;
}

interface ShoppingCampaignBidding extends AdWordsBidding {
    setStrategy(biddingStrategy: BiddingStrategyString | BiddingStrategy): void;
}

interface ShoppingCampaignTargeting {
    adSchedules(): AdWordsSelector<ShoppingAdSchedule>;
    audiences(): AdWordsSelector<ShoppingCampaignAudience>;
    excludedLocations(): AdWordsSelector<ShoppingExcludedLocation>;
    getTargetingSetting(): TargetingSetting;
    newUserListBuilder(): ShoppingCampaignAudienceBuilder<ShoppingCampaignAudience>;
    platforms(): AdWordsSelector<ShoppingPlatform>;
    setTargetingSetting(criterionTypeGroup: CriterionTypeGroup, targetingSetting: TargetingSetting): void;
    targetedLocations(): AdWordsSelector<ShoppingTargetedLocation>;
    targetedProximities(): AdWordsSelector<ShoppingTargetedProximity>;
}

// Shopping Product Ads
interface ProductAd extends AdWordsEntity, canBeEnabled, hasLabels, hasStats {
    getAdGroup(): ShoppingAdGroup;
    getCampaign(): ShoppingCampaign;
    getId(): number;
    getType(): string;
    isMobilePreferred(): boolean;
    remove(): void;
}

interface ProductAdBuilder<ProductAd> extends AdWordsBuilder<ProductAd> {
    withMobilePreferred(isMobilePreferred: boolean): ProductAdBuilder<ProductAd>;
}

// Shopping Products
interface ProductEntity extends AdWordsEntity, hasStats {
    children(): AdWordsSelector<ProductGroup>;
    exclude(): void;
    getAdGroup(): ShoppingAdGroup;
    getCampaign(): ShoppingCampaign;
    getId(): number;
    getMaxCpc(): number;
    getValue(): string;
    hasChildren(): boolean;
    include(): void;
    isExcluded(): boolean;
    isOtherCase(): boolean;
    newChild(): ProductGroupBuilderSpace;
    parent(): ProductGroup;
    remove(): void;
    removeAllChildren(): void;
    setMaxCpc(maxCpc: number): void;
}

// Shopping Product Brands
interface ProductBrand extends ProductEntity {
    getName(): string;
}

interface ProductBrandBuilder<ProductBrand> extends AdWordsBuilder<ProductBrand> {
    withBid(bid: number): ProductBrandBuilder<ProductBrand>;
    withName(productBrandName: string): ProductBrandBuilder<ProductBrand>;
    withValue(value: string): ProductBrandBuilder<ProductBrand>;
}

// Shopping Product Categories
interface ProductCategory extends ProductEntity {
    getCountry(): string;
    getName(): string;
}

interface ProductCategoryBuilder<ProductCategory> extends AdWordsBuilder<ProductCategory> {
    withBid(bid: number): ProductCategoryBuilder<ProductCategory>;
    withName(productCategoryName: string): ProductCategoryBuilder<ProductCategory>;
    withValue(value: string): ProductCategoryBuilder<ProductCategory>;
}

// Shopping Product Channel Exclusivities
interface ProductChannelExclusivity extends ProductBrand {
    getChannelExclusivity(): ChannelExclusivity;
}

interface ProductChannelExclusivityBuilder<ProductChannelExclusivity> extends AdWordsBuilder<ProductChannelExclusivity> {
    withBid(bid: number): ProductChannelExclusivityBuilder<ProductChannelExclusivity>;
    withChannelExclusivity(channelExclusivity: ChannelExclusivity): ProductChannelExclusivityBuilder<ProductChannelExclusivity>;
    withValue(value: string): ProductChannelExclusivityBuilder<ProductChannelExclusivity>;
}

// Shopping Product Channels
interface ProductChannel extends ProductEntity {
    getChannel(): ShoppingProductChannel;
}

interface ProductChannelBuilder<ProductChannel> extends AdWordsBuilder<ProductChannel> {
    withBid(bid: number): ProductChannelBuilder<ProductChannel>;
    withChannel(channel: ShoppingProductChannel): ProductChannelBuilder<ProductChannel>;
    withValue(value: string): ProductChannelBuilder<ProductChannel>;
}

// Shopping Product Conditions
interface ProductCondition extends ProductEntity {
    getCondition(): ShoppingProductCondition
}

interface ProductConditionBuilder<ProductCondition> extends AdWordsBuilder<ProductCondition> {
    withBid(bid: number): ProductConditionBuilder<ProductCondition>;
    withCondition(condition: ShoppingProductCondition): ProductConditionBuilder<ProductCondition>;
    withValue(value: string): ProductConditionBuilder<ProductCondition>;
}

// Shopping Product Custom Labels
interface ProductCustomLabel extends ProductEntity {
    getType(): ShoppingProductCustomLabelType;
}

interface ProductCustomLabelBuilder<ProductCustomLabel> extends AdWordsBuilder<ProductCustomLabel> {
    withBid(bid: number): ProductCustomLabelBuilder<ProductCustomLabel>;
    withType(type: ShoppingProductCustomLabelType): ProductCustomLabelBuilder<ProductCustomLabel>;
    withValue(value: string): ProductCustomLabelBuilder<ProductCustomLabel>;
}

// Shopping Product Groups
interface ProductGroup extends ProductEntity {
    asBrand(): ProductBrand;
    asCategory(): ProductCategory;
    asChannel(): ProductChannel;
    asChannelExclusivity(): ProductChannelExclusivity;
    asCondition(): ProductCondition;
    asCustomLabel(): ProductCustomLabel;
    asItemId(): ProductItemId;
    asProductType(): ProductType;
    getDimension(): ShoppingProductDimension;
}

interface ProductGroupBuilderSpace {
    brandBuilder(): ProductBrandBuilder<ProductBrand>;
    categoryBuilder(): ProductCategoryBuilder<ProductCategory>;
    channelBuilder(): ProductChannelBuilder<ProductChannel>;
    channelExclusivityBuilder(): ProductChannelExclusivityBuilder<ProductChannelExclusivity>;
    conditionBuilder(): ProductConditionBuilder<ProductCondition>;
    customLabelBuilder(): ProductCustomLabelBuilder<ProductCustomLabel>;
    itemIdBuilder(): ProductItemIdBuilder<ProductItemId>;
    productTypeBuilder(): ProductTypeBuilder<ProductType>;
}

// Shopping Product Item IDs
interface ProductItemId extends ProductEntity {
    getId(): number;
}

interface ProductItemIdBuilder<ProductItemId> extends AdWordsBuilder<ProductItemId> {
    withBid(bid: number): ProductItemIdBuilder<ProductItemId>;
    withValue(value: string): ProductItemIdBuilder<ProductItemId>;
}

// Shopping Product Types
interface ProductType extends ProductEntity {
    getType(): string;
}

interface ProductTypeBuilder<ProductType> extends AdWordsBuilder<ProductType> {
    withBid(bid: number): ProductTypeBuilder<ProductType>;
    withValue(value: string): ProductTypeBuilder<ProductType>;
}

// Targeting
interface AdSchedule extends AdWordsEntity, canSetBidModifier, hasStats, isCampaignChild {
    getCampaignType(): CampaignType;
    getDayOfWeek(): DayOfWeekString;
    getEndHour(): number;
    getEndMinute(): number;
    getId(): number;
    getStartHour(): number;
    getStartMinute(): number;
    getVideoCampaign(): VideoCampaign;
    remove(): void;
}

interface SearchAdGroupAudience extends SearchAdGroupExcludedAudience, hasStats {
    bidding(): SearchAudienceBidding;
    isEnabled(): boolean;
    isPaused(): boolean;
}

interface SearchAdGroupAudienceBuilder<SearchAdGroupAudience> extends AdWordsBuilder<SearchAdGroupAudience> {
    exclude(): AdWordsOperation<SearchAdGroupAudience>;
    withAudience(userList: UserList): SearchAdGroupAudienceBuilder<SearchAdGroupAudience>;
    withAudienceId(audienceId: number): SearchAdGroupAudienceBuilder<SearchAdGroupAudience>;
    withBidModifier(modifier: number): SearchAdGroupAudienceBuilder<SearchAdGroupAudience>;
}

interface SearchAdGroupExcludedAudience extends isAdGroupChild {
    getAudienceId(): number;
    getId(): number;
    getName(): string;
    remove(): void;
}

interface SearchAudienceBidding extends canSetBidModifier {
    clearBidModifier(): void;
}

interface SearchCampaignAudience extends SearchCampaignExcludedAudience {
    bidding(): SearchAudienceBidding;
    isEnabled(): boolean;
    isPaused(): boolean;
}

interface SearchCampaignAudienceBuilder<SearchCampaignAudience> extends AdWordsBuilder<SearchCampaignAudience> {
    exclude(): AdWordsOperation<SearchCampaignAudience>;
    withAudience(userList: UserList): SearchCampaignAudienceBuilder<SearchCampaignAudience>;
    withAudienceId(audienceId: number): SearchCampaignAudienceBuilder<SearchCampaignAudience>;
    withBidModifier(modifier: number): SearchCampaignAudienceBuilder<SearchCampaignAudience>;
}

interface SearchCampaignExcludedAudience extends isCampaignChild {
    getAudienceId(): number;
    getId(): number;
    getName(): string;
    remove(): void;
}

interface ExcludedContentLabel extends AdWordsEntity, isCampaignChild {
    getCampaignType(): CampaignType;
    getContentLabelType(): string;
    getId(): number;
    getVideoCampaign(): VideoCampaign;
    remove(): void;
}

interface ExcludedLocation extends AdWordsEntity, isCampaignChild {
    getCampaignType(): CampaignType;
    getCountryCode(): string;
    getId(): number;
    getName(): string;
    getTargetType(): TargetType;
    getTargetingStatus(): TargetingStatus;
    getVideoCampaign(): VideoCampaign;
    remove(): void;
}

interface Language extends AdWordsEntity, isCampaignChild {
    getCampaignType(): CampaignType;
    getId(): number;
    getName(): string;
    getVideoCampaign(): VideoCampaign;
    remove(): void;
}

interface TargetedLocation extends ExcludedLocation, canSetBidModifier, hasStats { }

interface Platform extends AdWordsEntity, canSetBidModifier, hasStats, isCampaignChild {
    getCampaignType(): CampaignType;
    getId(): number;
    getName(): string;
    getVideoCampaign(): VideoCampaign;
}

interface Address {
    getCityName(): string;
    getCountryCode(): string;
    getPostalCode(): string;
    getProvinceCode(): string;
    getProvinceName(): string;
    getStreetAddress(): string;
    getStreetAddress2(): string;
}

interface TargetedProximity extends AdWordsEntity, canSetBidModifier, hasStats, isCampaignChild {
    getAddress(): Address;
    getCampaignType(): CampaignType;
    getId(): number;
    getLatitude(): number;
    getLongitude(): number;
    getRadius(): number;
    getRadiusUnits(): RadiusUnits;
    getVideoCampaign(): VideoCampaign;
    remove(): void;
}

interface Targeting extends VideoCampaignTargeting {
    audiences(): AdWordsSelector<SearchCampaignAudience>;
    excludedAudiences(): AdWordsSelector<SearchCampaignExcludedAudience>;
}

interface VideoCampaignTargeting {
    adSchedules(): AdWordsSelector<AdSchedule>;
    excludedContentLabels(): AdWordsSelector<ExcludedContentLabel>;
    excludedLocations(): AdWordsSelector<ExcludedLocation>;
    languages(): AdWordsSelector<Language>;
    platforms(): AdWordsSelector<Platform>;
    targetedLocations(): AdWordsSelector<TargetedLocation>;
    targetedProximities(): AdWordsSelector<TargetedProximity>;
}

// User Lists
interface UserList {
    close(): void;
    excludedAdGroups(): AdWordsSelector<AdGroup>;
    excludedCampaigns(): AdWordsSelector<Campaign>;
    getDescription(): string;
    getId(): number;
    getMembershipLifeSpan(): number;
    getName(): string;
    getSizeForDisplay(): number;
    getSizeForSearch(): number;
    getSizeRangeForDisplay(): UserListSizeRange;
    getSizeRangeForSearch(): UserListSizeRange;
    getType(): UserListType;
    isClosed(): boolean;
    isEligibleForDisplay(): boolean;
    isEligibleForSearch(): boolean;
    isOpen(): boolean;
    isReadOnly(): boolean;
    open(): void;
    setDescription(description: string): void;
    setMembershipLifeSpan(membershipLifeSpan: number): void;
    setName(name: string): void;
    targetedAdGroups(): AdWordsSelector<AdGroup>;
    targetedCampaigns(): AdWordsSelector<Campaign>;
}

// Video Ad Groups
interface VideoAdGroup extends AdWordsEntity, canBeEnabled, hasLabels, hasStats {
    bidding(): VideoAdGroupBidding;
    clearTopContentBidModifier(): void;
    devices(): VideoAdGroupDevices;
    getAdGroupType(): VideoAdGroupType;
    getId(): number;
    getName(): string;
    getTopContentBidModifier(): number;
    getVideoCampaign(): VideoCampaign;
    isRemoved(): boolean;
    newVideoAd(): VideoAdBuilderSpace;
    setName(name: string): void;
    setTopContentBidModifier(modifier: number): void;
    videoAds(): AdWordsSelector<VideoAd>;
    videoTargeting(): AdGroupVideoTargeting;
}

interface VideoAdGroupBidding {
    getCpm(): number;
    getCpv(): number;
    getStrategySource(): 'CAMPAIGN' | 'ADGROUP' | 'CRITERION';
    getStrategyType(): 'MANUAL_CPV' | 'MANUAL_CPM';
    setCpm(cpm: number): void;
    setCpv(cpv: number): void;
}

interface VideoAdGroupBuilder<VideoAdGroup> extends AdWordsBuilder<VideoAdGroup> {
    withAdGroupType(adGroupType: VideoAdGroupType): VideoAdGroupBuilder<VideoAdGroup>;
    withCpm(cpm: number): VideoAdGroupBuilder<VideoAdGroup>;
    withCpv(cpv: number): VideoAdGroupBuilder<VideoAdGroup>;
    withName(name: string): VideoAdGroupBuilder<VideoAdGroup>;
    withStatus(status: string): VideoAdGroupBuilder<VideoAdGroup>;
}

interface VideoAdGroupDevices {
    clearDesktopBidModifier(): void;
    clearMobileBidModifier(): void;
    clearTabletBidModifier(): void;
    getDesktopBidModifier(): number;
    getMobileBidModifier(): number;
    getTabletBidModifier(): number;
    setDesktopBidModifier(modifier: number): void;
    setMobileBidModifier(modifier: number): void;
    setTabletBidModifier(modifier: number): void;
}

// Video Ads
interface BumperAdBuilder<VideoAd> extends AdWordsBuilder<VideoAd>,
                                           hasTrackingTemplateBuilder<BumperAdBuilder<VideoAd>> {
    withAdName(adName: string): BumperAdBuilder<VideoAd>;
    withCompanionBanner(imageMedia: Media): BumperAdBuilder<VideoAd>;
    withDisplayUrl(displayUrl: string): BumperAdBuilder<VideoAd>;
    withFinalUrl(finalUrl: string): BumperAdBuilder<VideoAd>;
    withVideo(videoMedia: Media): BumperAdBuilder<VideoAd>;
}

interface InStreamAdBuilder<VideoAd> extends AdWordsBuilder<VideoAd>,
                                           hasTrackingTemplateBuilder<InStreamAdBuilder<VideoAd>> {
    withAdName(adName: string): InStreamAdBuilder<VideoAd>;
    withCompanionBanner(imageMedia: Media): InStreamAdBuilder<VideoAd>;
    withDisplayUrl(displayUrl: string): InStreamAdBuilder<VideoAd>;
    withFinalUrl(finalUrl: string): InStreamAdBuilder<VideoAd>;
    withVideo(videoMedia: Media): InStreamAdBuilder<VideoAd>;
}

interface VideoAd extends AdWordsEntity, canBeEnabled, hasLabels, hasStats {
    getApprovalStatus(): ApprovalStatus;
    getChannelName(): string;
    getDescription1(): string;
    getDescription2(): string;
    getDestinationPage(): string;
    getDisapprovalReasons(): string[];
    getDisplayUrl(): string;
    getHeadline(): string;
    getId(): number;
    getName(): string;
    getPolicyApprovalStatus(): PolicyApprovalStatus;
    getPolicyTopics(): PolicyTopic[];
    getType(): VideoAdType;
    getVideoAdGroup(): VideoAdGroup;
    getVideoCampaign(): VideoCampaign;
    getVideoId(): string;
    remove(): void;
    urls(): VideoAdUrls;
}

interface VideoAdBuilderSpace {
    bumperAdBuilder(): BumperAdBuilder<VideoAd>;
    inStreamAdBuilder(): InStreamAdBuilder<VideoAd>;
    videoDiscoveryAdBuilder(): VideoDiscoveryAdBuilder<VideoAd>;
}

interface VideoAdUrls {
    getCustomParameters(): {};
    getFinalUrl(): string;
    getTrackingTemplate(): string;
}

interface VideoDiscoveryAdBuilder<VideoAd> extends AdWordsBuilder<VideoAd> {
    withAdName(adName: string): VideoDiscoveryAdBuilder<VideoAd>;
    withDescription1(description1: string): VideoDiscoveryAdBuilder<VideoAd>;
    withDescription2(description2: string): VideoDiscoveryAdBuilder<VideoAd>;
    withDestinationPage(destinationPage: DestinationPageType): VideoDiscoveryAdBuilder<VideoAd>;
    withHeadline(headline: string): VideoDiscoveryAdBuilder<VideoAd>;
    withThumbnail(thumbnail: ThumbnailType): VideoDiscoveryAdBuilder<VideoAd>;
    withVideo(videoMedia: Media): VideoDiscoveryAdBuilder<VideoAd>;
}

// Video Campaigns
interface FrequencyCap extends AdWordsEntity {
    getEventType(): FrequencyCapEventType;
    getLevel(): FrequencyCapLevel;
    getLimit(): number;
    getTimeUnit(): FrequencyCapTimeUnit;
}

interface FrequencyCapBuilder<FrequencyCap> extends AdWordsBuilder<FrequencyCap> {
    withEventType(eventType: FrequencyCapEventType): FrequencyCapBuilder<FrequencyCap>;
    withLevel(level: FrequencyCapLevel): FrequencyCapBuilder<FrequencyCap>;
    withLimit(limit: string): FrequencyCapBuilder<FrequencyCap>;
    withTimeUnit(timeUnit: FrequencyCapTimeUnit): FrequencyCapBuilder<FrequencyCap>;
}

interface FrequencyCaps extends AdWordsEntity {
    getFrequencyCapFor(eventType: FrequencyCapEventType): FrequencyCap;
    newFrequencyCapBuilder(): FrequencyCapBuilder<FrequencyCap>;
    removeFrequencyCapFor(eventType: FrequencyCapEventType): void;
}

interface VideoCampaign extends AdWordsEntity, canBeEnabled, hasLabels, hasStartAndEndDate, hasStats {
    addAdSchedule(adSchedule: AdSchedule): AdWordsOperation<AdSchedule>;
    addAdSchedule(dayOfWeek: DayOfWeekString, startHour: number, startMinute: number, endHour: number, endMinute: number, bidModifier: number): AdWordsOperation<AdSchedule>;
    addExcludedPlacementList(excludedPlacementList: ExcludedPlacementList): void;
    addLanguage(language: { id: number } | Language | number): AdWordsOperation<Language>
    addLocation(locationId: number | TargetedLocation | LocationObject): AdWordsOperation<TargetedLocation>;
    addLocation(locationId: number, bidModifier: number): AdWordsOperation<TargetedLocation>;
    addNegativeKeywordLIst(negativeKeywordList: NegativeKeywordList): void;
    addPhoneNumber(phoneNumberExtension: PhoneNumber): AdWordsOperation<PhoneNumber>;
    addProximity(proximity: ProximityObject | TargetedProximity): AdWordsOperation<TargetedProximity>;
    addProximity(latitude: number, longitude: number, radius: number, radiusUnits: RadiusUnits, optArgs: { bidModifier: number, address: AddressObject}): AdWordsOperation<TargetedProximity>;
    bidding(): VideoCampaignBidding;
    excludeContentLabel(contentLabelType: string | {} | ExcludedContentLabel): AdWordsOperation<ExcludedContentLabel>;
    excludeLocation(location: ExcludedLocation | number | { id: number }): AdWordsOperation<ExcludedLocation>;
    excludedPlacementLists(): AdWordsSelector<ExcludedPlacementList>;
    extensions(): CampaignExtensions;
    getAdRotationType(): AdRotationType;
    getBiddingStrategyType(): BiddingStrategyString;
    getBudget(): Budget;
    getFrequencyCaps(): FrequencyCaps;
    getId(): number;
    getName(): string;
    getNetworks(): VideoNetworks[];
    isRemoved(): boolean;
    negativeKeywordLists(): AdWordsSelector<NegativeKeywordList>;
    newVideoAdGroupBuilder(): VideoAdGroupBuilder<VideoAdGroup>;
    removeExcludedPlacementList(excludedPlacementList: ExcludedPlacementList): void;
    removeNegativeKeywordList(negativeKeywordList: NegativeKeywordList): void;
    setAdRotationType(adRotationType: AdRotationType): void;
    setName(name: string): void;
    setNetworks(networks: VideoNetworks[]): void;
    targeting(): VideoCampaignTargeting;
    videoAdGroups(): AdWordsSelector<VideoAdGroup>;
    videoAds(): AdWordsSelector<VideoAd>;
    videoTargeting(): CampaignVideoTargeting;
}

interface VideoCampaignBidding {
    getStrategyType(): string;
}

// Video Targeting
interface VideoTargeting {
    ages(): AdWordsSelector<AdWordsEntity>; // TODO: VideoAge
    audiences(): AdWordsSelector<AdWordsEntity>; // TODO: VideoAudience
    genders(): AdWordsSelector<AdWordsEntity>; // TODO: VideoGender
    keywords(): AdWordsSelector<AdWordsEntity>; // TODO: VideoKeyword
    mobileAppCategories(): AdWordsSelector<AdWordsEntity>; // TODO: VideoMobileAppCategory
    mobileApplications(): AdWordsSelector<AdWordsEntity>; // TODO: VideoMobileApplication
    parentalStatus(): AdWordsSelector<AdWordsEntity>; // TODO: VideoParentalStatus
    placements(): AdWordsSelector<AdWordsEntity>; // TODO: VideoPlacement
    topics(): AdWordsSelector<AdWordsEntity>; // TODO: VideoTopic
    youTubeChannels(): AdWordsSelector<AdWordsEntity>; // TODO: VideoYouTubeChannel
    youTubeVideos(): AdWordsSelector<AdWordsEntity>; // TODO: VideoYouTubeVideo
}

interface AdGroupVideoTargeting extends VideoTargeting {
    excludedAges(): AdWordsSelector<AdWordsEntity>; // TODO: ExcludedVideoAge
    excludedAudiences(): AdWordsSelector<AdWordsEntity>; // TODO: ExcludedVideo
    excludedGenders(): AdWordsSelector<AdWordsEntity>; // TODO: ExcludedVideo
    excludedKeywords(): AdWordsSelector<AdWordsEntity>; // TODO: ExcludedVideo
    excludedMobileAppCategories(): AdWordsSelector<AdWordsEntity>; // TODO: ExcludedVideo
    excludedMobileApplications(): AdWordsSelector<AdWordsEntity>; // TODO: ExcludedVideo
    excludedParentalStatuses(): AdWordsSelector<AdWordsEntity>; // TODO: ExcludedVideo
    excludedPlacements(): AdWordsSelector<AdWordsEntity>; // TODO: ExcludedVideo
    excludedTopics(): AdWordsSelector<AdWordsEntity>; // TODO: ExcludedVideo
    excludedYouTubeChannels(): AdWordsSelector<AdWordsEntity>; // TODO: ExcludedVideo
    excludedYouTubeVideos(): AdWordsSelector<AdWordsEntity>; // TODO: ExcludedVideo
    newAgeBuilder(): AdWordsBuilder<AdWordsEntity>; // TODO: Video
    newAudienceBuilder(): AdWordsBuilder<AdWordsEntity>; // TODO: Video
    newGenderBuilder(): AdWordsBuilder<AdWordsEntity>; // TODO: Video
    newKeywordBuilder(): AdWordsBuilder<AdWordsEntity>; // TODO: Video
    newMobileAppCategoryBuilder(): AdWordsBuilder<AdWordsEntity>; // TODO: Video
    newMobileApplicationBuilder(): AdWordsBuilder<AdWordsEntity>; // TODO: Video
    newParentalStatusBuilder(): AdWordsBuilder<AdWordsEntity>; // TODO: Video
    newPlacementBuilder(): AdWordsBuilder<AdWordsEntity>; // TODO: Video
    newTopicBuilder(): AdWordsBuilder<AdWordsEntity>; // TODO: Video
    newYouTubeChannelBuilder(): AdWordsBuilder<AdWordsEntity>; // TODO: Video
    newYouTubeVideoBuilder(): AdWordsBuilder<AdWordsEntity>; // TODO: Video
}

interface CampaignVideoTargeting extends AdGroupVideoTargeting {
    excludedAges(): AdWordsSelector<AdWordsEntity>; // TODO: ExcludedVideoAge
}

// Video Targeting - Ages

// Video Targeting - Audiences

// Video Targeting - Genders

// Video Targeting - Keywords

// Video Targeting - Mobile Application Categories

// Video Targeting - Mobile Applications

// Video Targeting - Parental Statuses

// Video Targeting - Placements

// Video Targeting - Topics

// Video Targeting - YouTube Channels

// Video Targeting - YouTube Videos

// MccApp - AccountLabel
interface AccountLabel extends AdWordsEntity {
    accounts(): AccountLabelSelector;
    getId(): string;
    getName(): string;
    remove(): void;
    setName(name: string): void;
}

interface AccountLabelSelector {
    get(): AdWordsIterator<AccountLabel>;
    withCondition(condition: string): AccountLabelSelector;
    withIds(ids: number[][] | number[]): AccountLabelSelector;
}

interface ExecutionResult {
    getCustomerId(): string;
    getError(): string;
    getReturnValue(): string
    getStatus(): string;
}

interface ManagedAccount extends AdWordsEntity, hasLabels {
    getCurrencyCode(): string;
    getCustomerId(): string;
    getName(): string;
    getStatsFor(dateRange: DayOfWeekString): ManagedAccountStats;
    getStatsFor(dateFrom: AdWordsDate | string, dateTo: AdWordsDate | string): ManagedAccountStats;
}

interface ManagedAccountSelector {
    executeInParallel(functionName: string, optionalCallbackFunctionName?: string, optionalInput?: string): void;
    get(): AdWordsIterator<ManagedAccount>;
    withCondition(condition: string): ManagedAccountSelector;
    withIds(ids: number[][] | number[]): ManagedAccountSelector;
    forDateRange(dateRange: string): ManagedAccountSelector;
    forDateRange(dateFrom: AdWordsDate | string, dateTo: AdWordsDate | string): ManagedAccountSelector;
    orderBy(orderBy: string): ManagedAccountSelector;
    withLimit(limit: number): ManagedAccountSelector;
}

interface ManagedAccountStats {
    getClicks(): number;
    getConversionRate(): number;
    getConversions(): number;
    getCost(): number;
    getCtr(): number;
    getImpressions(): number;
}

// Non-entity
interface ExtensionSchedule {
    getDayOfWeek(): DayOfWeekString;
    getEndHour(): number;
    getEndMinute(): number;
    getStartHour(): number;
    getStartMinute(): number;
}

interface ExtensionScheduleInput {
    dayOfWeek?: DayOfWeekString;
    startHour?: number;
    startMinute?: number;
    endHour?: number;
    endMinute?: number;
}

interface LocationObject {
    id: number;
    bidModifier?: number;
}

interface ProximityObject {
    latitude: number;
    longitude: number;
    radius: number;
    radiusUnits: RadiusUnits;
    bidModifier?: number;
    address?: AddressObject;
}

interface AddressObject {
    streetAddress: string;
    streetAddress2: string;
    cityName: string;
    provinceName: string;
    provinceCode: string;
    postalCode: string;
    countryCode: string;
}

interface ReportOptionArguments {
    includeZeroImpressions?: boolean;
    returnMoneyInMicros?: boolean;
    apiVersion?: string;
    resolveGeoNames?: boolean;
}

// Extendables
interface canBeEnabled {
    enable(): void;
    isEnabled(): boolean;
    isPaused(): boolean;
    pause(): void;
}

interface canSetBiddingStrategy {
    setStrategy(biddingStrategy: BiddingStrategyString | BiddingStrategy): void;
}

interface canSetBidModifier {
    getBidModifier(): number;
    setBidModifier(modifier: number): void;
}

interface hasBiddingStrategyBuilder<B> {
    withBiddingStrategy(biddingStrategy: BiddingStrategyString | BiddingStrategy): B;
}

interface hasExtensions {
    addCallout(calloutExtension: Callout): AdWordsOperation<Callout>;
    addMessage(messageExtension: Message): AdWordsOperation<Message>;
    addMobileApp(mobileAppExtension: MobileApp): AdWordsOperation<MobileApp>;
    addPhoneNumber(phoneNumberExtension: PhoneNumber): AdWordsOperation<PhoneNumber>;
    addReview(reviewExtension: Review): AdWordsOperation<Review>;
    addSitelink(sitelinkExtension: Sitelink): AdWordsOperation<Sitelink>;
    addSnippet(snippetExtension: Snippet): AdWordsOperation<Snippet>;
    removeCallout(calloutExtension: Callout): void;
    removeMessage(messageExtension: Message): void;
    removeMobileApp(mobileAppExtension: MobileApp): void;
    removePhoneNumber(phoneNumberExtension: PhoneNumber): void;
    removeReview(reviewExtension: Review): void;
    removeSitelink(sitelinkExtension: Sitelink): void;
    removeSnippet(snippetExtension: Snippet): void;
}

interface hasGetFinalUrl {
    getFinalUrl(): string;
    getMobileFinalUrl(): string;
}
interface hasSetFinalUrl {
    setFinalUrl(url: string): void;
    setMobileFinalUrl(url: string): void;
}
interface hasFinalUrlBuilder<B> {
    withFinalUrl(url: string): B;
    withMobileFinalUrl(url: string): B;
}

interface hasLabels {
    applyLabel(name: string): void;
    labels(): AdWordsSelector<Label>;
    removeLabel(name: string): void;
}

interface hasMobilePreferred {
    isMobilePreferred(): boolean;
    setMobilePreferred(isMobilePreferred: boolean): void;
}
interface hasMobilePreferredBuilder<B> {
    withMobilePreferred(): B;
}

interface hasSchedules {
    getSchedules(): ExtensionSchedule;
    setSchedules(schedules: ExtensionScheduleInput): void;
}
interface hasSchedulesBuilder<B> {
    withSchedules(schedules: ExtensionScheduleInput): B;
}

interface hasSetTrackingTemplate {
    setCustomParameters(customParameters: {}): void;
    setTrackingTemplate(trackingTemplate: string): void;
}
interface hasTrackingTemplateBuilder<B> {
    withCustomParameters(customParameters: {}): B;
    withTrackingTemplate(trackingTemplate: string): B;
}

interface hasStartAndEndDate {
    getEndDate(): AdWordsDate;
    getStartDate(): AdWordsDate;
    setEndDate(date: AdWordsDate | string): void;
    setStartDate(date: AdWordsDate | string): void;
}
interface hasStartAndEndDateBuilder<B> {
    withEndDate(date: AdWordsDate | string): B;
    withStartDate(date: AdWordsDate | string): B;
}

interface hasStats {
    getStatsFor(dateRange: DayOfWeekString): AdWordsStats;
    getStatsFor(dateFrom: AdWordsDate | string, dateTo: AdWordsDate | string): AdWordsStats;
}

interface isCampaignChild {
    getCampaign(): Campaign;
}
interface isAdGroupChild extends isCampaignChild {
    getAdGroup(): AdGroup;
}

// Types
interface AdWordsDate {
    year: number;
    month: number;
    day: number;
}

type DateRange = 'TODAY' |
                'YESTERDAY' |
                'LAST_7_DAYS' |
                'THIS_WEEK_SUN_TODAY' |
                'LAST_WEEK' |
                'LAST_14_DAYS' |
                'LAST_30_DAYS' |
                'LAST_BUSINESS_WEEK' |
                'LAST_WEEK_SUN_SAT' |
                'THIS_MONTH' |
                'LAST_MONTH' |
                'ALL_TIME';

type DayOfWeekString = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

type AppStore = 'iOS' | 'Android';

type ApprovalStatus = 'APPROVED' | 'DISAPPROVED' | 'FAMILY_SAFE' | 'NON_FAMILY_SAFE' | 'PORN' | 'UNCHECKED';

type PolicyApprovalStatus = 'UNKNOWN' | 'APPROVED' | 'APPROVED_LIMITED' | 'ELIGIBLE' | 'UNDER_REVIEW' | 'DISAPPROVED' | 'SITE_SUSPENDED';

type AdType = 'EXPANDED_TEXT_AD' | 'IMAGE_AD' | 'MOBILE_AD' | 'MOBILE_IMAGE_AD' | 'PRODUCT_AD' | 'RICH_MEDIA_AD' | 'TEMPLATE_AD' | 'TEXT_AD';

type BiddingStrategySource = 'CAMPAIGN' | 'ADGROUP' | 'CRITERION';

type TargetingSetting = 'TARGET_ALL_TRUE' | 'TARGET_ALL_FALSE';

type AudienceType = 'USER_INTEREST' | 'USER_LIST';

type RadiusUnits = 'MILES' | 'KILOMETERS';

type AdRotationType = 'OPTIMIZE' |
                    'CONVERSION_OPTIMIZE' |
                    'ROTATE' |
                    'ROTATE_FOREVER';

type BiddingStrategyString = 'MANUAL_CPC' | 'MANUAL_CPM' | 'BUDGET_OPTIMIZER' | 'CONVERSION_OPTIMIZER' | 'PERCENT_CPA';

type CriterionTypeGroup = 'USER_INTEREST_AND_LIST';

type MatchType = 'BROAD' | 'PHRASE' | 'EXACT';

type MediaType = 'AUDIO' | 'DYNAMIC_IMAGE' | 'ICON' | 'IMAGE' | 'STANDARD_ICON' | 'VIDEO' | 'MEDIA_BUNDLE';

type CampaignType = 'SEARCH_OR_DISPLAY' | 'VIDEO' | 'SHOPPING';

type TargetType = 'Airport' |
                'Autonomous Community' |
                'Borough' |
                'Canton' |
                'City' |
                'City Region' |
                'Congressional District' |
                'Country' |
                'County' |
                'Department' |
                'District' |
                'Governorate' |
                'Municipality' |
                'National Park' |
                'Neighborhood' |
                'Okrug' |
                'Postal Code' |
                'Prefecture' |
                'Province' |
                'Region' |
                'State' |
                'Territory' |
                'TV Region' |
                'Union Territory' |
                'University';

type TargetingStatus = 'ACTIVE' | 'PHASING_OUT' | 'OBSOLETE';

type UserListType = 'UNKNOWN0' | 'REMARKETING' | 'LOGICAL' | 'EXTERNAL_REMARKETING' | 'RULE_BASED' | 'SIMILAR' | 'CRM_BASED';

type UserListSizeRange = 'LESS_THAN_FIVE_HUNDRED' |
                         'LESS_THAN_ONE_THOUSAND' |
                         'ONE_THOUSAND_TO_TEN_THOUSAND' |
                         'TEN_THOUSAND_TO_FIFTY_THOUSAND' |
                         'FIFTY_THOUSAND_TO_ONE_HUNDRED_THOUSAND' |
                         'ONE_HUNDRED_THOUSAND_TO_THREE_HUNDRED_THOUSAND' |
                         'THREE_HUNDRED_THOUSAND_TO_FIVE_HUNDRED_THOUSAND' |
                         'FIVE_HUNDRED_THOUSAND_TO_ONE_MILLION' |
                         'ONE_MILLION_TO_TWO_MILLION' |
                         'TWO_MILLION_TO_THREE_MILLION' |
                         'THREE_MILLION_TO_FIVE_MILLION' |
                         'FIVE_MILLION_TO_TEN_MILLION' |
                         'TEN_MILLION_TO_TWENTY_MILLION' |
                         'TWENTY_MILLION_TO_THIRTY_MILLION' |
                         'THIRTY_MILLION_TO_FIFTY_MILLION' |
                         'OVER_FIFTY_MILLION';

type ChannelExclusivity = 'SINGLE_CHANNEL' | 'MULTI_CHANNEL';

type ShoppingProductChannel = 'LOCAL' | 'ONLINE';

type ShoppingProductCondition = 'NEW' | 'USED' | 'REFURBISHED';

type ShoppingProductCustomLabelType = 'CUSTOM_LABEL_0' | 'CUSTOM_LABEL_1' | 'CUSTOM_LABEL_2' | 'CUSTOM_LABEL_3' | 'CUSTOM_LABEL_4';

type ShoppingProductDimension = 'ROOT' |
                                'BRAND' |
                                'CATEGORY' |
                                'CONDITION' |
                                'CUSTOM_LABEL' |
                                'ITEM_ID' |
                                'PRODUCT_TYPE';

type VideoAdGroupType = 'TRUE_VIEW_IN_STREAM' | 'TRUE_VIEW_IN_DISPLAY' | 'BUMPER';

type VideoAdType = 'TRUE_VIEW_IN_STREAM_VIDEO_AD' | 
                   'TRUE_VIEW_IN_DISPLAY_VIDEO_AD' |
                   'BUMPER_VIDEO_AD';

type DestinationPageType = 'WATCH' | 'CHANNEL';

type ThumbnailType = 'DEFAULT' | 'THUMBNAIL1' | 'THUMBNAIL2' | 'THUMBNAIL3';

type FrequencyCapEventType = 'IMPRESSION' | 'VIDEO_VIEW';

type FrequencyCapLevel = 'CAMPAIGN' | 'AD_GROUP' | 'AD_GROUP_CREATIVE';

type FrequencyCapTimeUnit = 'DAY' | 'WEEK' | 'MONTH';

type VideoNetworks = 'YOUTUBE_SEARCH' | 'YOUTUBE_VIDEO' | 'VIDEO_PARTNER_ON_THE_DISPLAY_NETWORK';

// Autocomplete
declare namespace AdWordsApp {
    function adCustomizerSources(): AdWordsSelector<AdCustomizerSource>;
    function adGroups(): AdWordsSelector<AdGroup>;
    function adGroupTargeting(): AdWordsTargeting<SearchAdGroupAudience, SearchAdGroupExcludedAudience>;
    function adMedia(): AdMedia;
    function adParams(): AdWordsSelector<AdParam>;
    function ads(): AdWordsSelector<Ad>;
    function biddingStrategies(): AdWordsSelector<BiddingStrategy>;
    function budgetOrders(): AdWordsSelector<BudgetOrder>;
    function budgets(): AdWordsSelector<Budget>;
    function bulkUploads(): BulkUploads;
    function campaigns(): AdWordsSelector<Campaign>;
    function createLabel(name: string, description?: string, backgroundColor?: string): void;
    function currentAccount(): CurrentAccount;
    function display(): Display;
    function excludedPlacementLists(): AdWordsSelector<ExcludedPlacementList>;
    function extensions(): AdWordsAdExtensions;
    function getExecutionInfo(): ExecutionInfo;
    function keywords(): AdWordsSelector<Keyword>;
    function labels(): AdWordsSelector<Label>;
    function negativeKeywordLists(): AdWordsSelector<NegativeKeywordList>;
    function newAdCustomizerSourceBuilder(): AdCustomizerSourceBuilder<AdCustomizerSource>;
    function newExcludedPlacementListBuilder(): ExcludedPlacementListBuilder<ExcludedPlacementList>;
    function newNegativeKeywordListBuilder(): NegativeKeywordListBuilder<NegativeKeywordList>;
    function productAds(): AdWordsSelector<ProductAd>;
    function productGroups(): AdWordsSelector<ProductGroup>;
    function report(query: string, options?: ReportOptionArguments): AdWordsReport;
    function shoppingAdGroupTargeting(): AccountShoppingAdGroupTargeting;
    function shoppingAdGroups(): AdWordsSelector<ShoppingAdGroup>;
    function shoppingCampaignTargeting(): AccountShoppingCampaignTargeting;
    function shoppingCampaigns(): AdWordsSelector<ShoppingCampaign>;
    function targeting(): AdWordsSelector<Targeting>;
    function userlists(): AdWordsSelector<UserList>;
    function videoAdGroups(): AdWordsSelector<VideoAdGroup>;
    function videoAds(): AdWordsSelector<VideoAd>;
    function videoCampaigns(): AdWordsSelector<VideoCampaign>;
    function videoTargeting(): VideoTargeting;
}

declare namespace MccApp {
    function accountLabels(): AccountLabelSelector;
    function accounts(): ManagedAccountSelector;
    function createAccountLabel(name: string): void;
    function select(account: ManagedAccount): void;
}

declare namespace Analytics { }

declare namespace BigQuery { }

declare namespace Calendar { }

declare namespace FusionTables { }

declare namespace Prediction { }

declare namespace ShoppingContent { }

declare namespace Slides { }

declare namespace Tasks { }

declare namespace YouTube { }
