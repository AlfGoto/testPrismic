// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = HeroSlice | TextSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the document
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Description used for SEO
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice = GrosSliceSlice | HeroSlice | TextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the page
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Description used for SEO
   * - **API ID Path**: page.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * nesting field in *Page*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: page.nesting
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  nesting: prismic.ContentRelationshipField<"page">;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for the link
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Site TItle field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Global title of the site
   * - **API ID Path**: settings.site_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  site_title: prismic.TitleField;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | HomepageDocument
  | PageDocument
  | SettingsDocument;

/**
 * Primary content in *GrosSlice → Default → Primary*
 */
export interface GrosSliceSliceDefaultPrimary {
  /**
   * Label ? field in *GrosSlice → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Type some text...............
   * - **API ID Path**: gros_slice.default.primary.TexteTresRiche
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  TexteTresRiche: prismic.RichTextField;

  /**
   * Image field in *GrosSlice → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gros_slice.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Select field in *GrosSlice → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: Select Pls...
   * - **Default Value**: Hello
   * - **API ID Path**: gros_slice.default.primary.selectTextTresRiche
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  selectTextTresRiche: prismic.SelectField<"Hello" | "Yes" | "Ok", "filled">;
}

/**
 * Default variation for GrosSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GrosSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GrosSliceSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *GrosSlice → Color → Primary*
 */
export interface GrosSliceSliceColorPrimary {
  /**
   * Label ? field in *GrosSlice → Color → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Type some text...............
   * - **API ID Path**: gros_slice.color.primary.TexteTresRiche
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  TexteTresRiche: prismic.RichTextField;

  /**
   * Image field in *GrosSlice → Color → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gros_slice.color.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Color field in *GrosSlice → Color → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: Select Color
   * - **API ID Path**: gros_slice.color.primary.colorGrosSlice
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  colorGrosSlice: prismic.ColorField;
}

/**
 * Color variation for GrosSlice Slice
 *
 * - **API ID**: `color`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GrosSliceSliceColor = prismic.SharedSliceVariation<
  "color",
  Simplify<GrosSliceSliceColorPrimary>,
  never
>;

/**
 * Slice variation for *GrosSlice*
 */
type GrosSliceSliceVariation = GrosSliceSliceDefault | GrosSliceSliceColor;

/**
 * GrosSlice Shared Slice
 *
 * - **API ID**: `gros_slice`
 * - **Description**: GrosSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GrosSliceSlice = prismic.SharedSlice<
  "gros_slice",
  GrosSliceSliceVariation
>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Text field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text displayed adjacent to image
   * - **API ID Path**: hero.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * Button Link field in *Hero → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for the button
   * - **API ID Path**: hero.items[].button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField<
    string,
    string,
    unknown,
    prismic.FieldState,
    never
  >;

  /**
   * Button Label field in *Hero → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Label for the button
   * - **API ID Path**: hero.items[].button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Text → Default → Primary*
 */
export interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text with rich formatting
   * - **API ID Path**: text.default.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      GrosSliceSlice,
      GrosSliceSliceDefaultPrimary,
      GrosSliceSliceColorPrimary,
      GrosSliceSliceVariation,
      GrosSliceSliceDefault,
      GrosSliceSliceColor,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceVariation,
      HeroSliceDefault,
      TextSlice,
      TextSliceDefaultPrimary,
      TextSliceVariation,
      TextSliceDefault,
    };
  }
}
