import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

  
function DemoTrans() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <p>{t('welcome')}</p>
      <p>{t('name')}</p>
      <LanguageSwitcher />
    </div>
  );
}

export default DemoTrans;