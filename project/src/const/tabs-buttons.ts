type TabsButton = {
  title: string;
  type: string;
}

enum TabsButtonsTitles {
  Features = 'Характеристики',
  Description = 'Описание'
}

export enum TabType {
  Features = 'features',
  Description = 'description'
}
export const TUBS_BUTTONS: TabsButton[] = [
  {title: TabsButtonsTitles.Features, type: TabType.Features},
  {title: TabsButtonsTitles.Description, type: TabType.Description},
];

export enum FeaturesTitles {
  VendorCode = 'Артикул',
  Category = 'Категория',
  Type = 'Тип камеры',
  Level = 'Уровень'
}

export const DEFAULT_TABS_TYPE = TabType.Features;
