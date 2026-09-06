import React from 'react';
import { useTranslation } from 'react-i18next';

export const Nav = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-[4%] py-4">
      <nav className="max-w-[1200px] mx-auto bg-[rgba(242,232,223,0.7)] backdrop-blur-[12px] border-[1.5px] border-border rounded-full px-6 py-3 flex items-center justify-between shadow-[0_4px_30px_rgba(46,26,14,0.03)]">
        <div className="font-serif text-[1.4rem] font-bold text-text tracking-tight">MiniMenu</div>
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          <li><a href="#products" className="text-muted text-[0.88rem] font-medium hover:text-gold transition-colors">{t('nav.products')}</a></li>
          <li><a href="#how-it-works" className="text-muted text-[0.88rem] font-medium hover:text-gold transition-colors">{t('nav.how_it_works')}</a></li>
          <li><a href="#plans" className="text-muted text-[0.88rem] font-medium hover:text-gold transition-colors">{t('nav.plans')}</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <button onClick={toggleLang} className="text-muted text-[0.78rem] font-semibold hover:text-text transition-colors">
            {i18n.language.toUpperCase()}
          </button>
          <button className="bg-transparent text-rose border-[1.5px] border-rose rounded-full px-4 py-1.5 font-sans text-[0.78rem] font-semibold cursor-pointer hover:bg-rose hover:text-white transition-all">
            {t('nav.login')}
          </button>
          <button className="bg-gold text-white border-none rounded-full px-5 py-2.5 font-sans text-[0.86rem] font-semibold cursor-pointer hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(167,126,96,0.38)] transition-all">
            {t('nav.demo')}
          </button>
        </div>
      </nav>
    </div>
  );
};
