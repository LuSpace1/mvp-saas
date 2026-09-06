import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="border-t-[1.5px] border-border py-[60px] px-[7%]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-[100px]">
        <div className="flex-[2]">
          <div className="font-serif text-[1.6rem] font-bold text-text mb-4">MiniMenu</div>
          <p className="text-[0.95rem] text-muted leading-[1.6] max-w-[280px]">
            {t('footer.desc')}
          </p>
        </div>
        <div className="flex-1">
          <h4 className="font-sans text-[0.85rem] font-bold uppercase tracking-[0.12em] text-text mb-5">{t('footer.links')}</h4>
          <ul className="list-none flex flex-col gap-3">
            <li><a href="#hero" className="text-[0.9rem] text-muted hover:text-gold transition-colors">Inicio</a></li>
            <li><a href="#benefits" className="text-[0.9rem] text-muted hover:text-gold transition-colors">Beneficios</a></li>
            <li><a href="#plans" className="text-[0.9rem] text-muted hover:text-gold transition-colors">Planes</a></li>
          </ul>
        </div>
        <div className="flex-1">
          <h4 className="font-sans text-[0.85rem] font-bold uppercase tracking-[0.12em] text-text mb-5">{t('footer.contact')}</h4>
          <ul className="list-none flex flex-col gap-3">
            <li><a href="mailto:hola@minimenu.cl" className="text-[0.9rem] text-muted hover:text-gold transition-colors">hola@minimenu.cl</a></li>
            <li><span className="text-[0.9rem] text-muted">+56 9 1234 5678</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-[60px] pt-6 border-t border-[rgba(167,126,96,0.15)] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[0.85rem] text-muted">{t('footer.rights')}</p>
        <div className="flex gap-4">
          <a href="#" className="text-muted hover:text-gold transition-colors">Instagram</a>
          <a href="#" className="text-muted hover:text-gold transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
