import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-[7%] pt-[130px] pb-[90px] overflow-hidden">
      <div className="relative z-10 max-w-[600px] w-full">
        <div className="inline-block bg-[rgba(167,126,96,0.16)] text-gold text-[0.8rem] font-semibold tracking-[0.14em] uppercase px-4 py-1.5 rounded-full mb-6">
          {t('hero.badge')}
        </div>
        <h1 className="font-serif text-[clamp(2.6rem,5vw,4rem)] font-bold leading-[1.12] mb-5 text-text">
          {t('hero.title1')}
          <br />
          <em className="italic text-rose">{t('hero.title_italic')}</em> {t('hero.title2')}
        </h1>
        <p className="text-[1.1rem] font-light text-muted leading-[1.75] mb-9 max-w-[460px]">
          {t('hero.desc')}
        </p>
        <div className="flex gap-3.5 flex-wrap items-center">
          <button className="bg-gold text-white border-none rounded-full px-9 py-3.5 font-sans text-[1rem] font-semibold cursor-pointer hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(167,126,96,0.38)] transition-all">
            {t('hero.demo')}
          </button>
          <button className="bg-transparent text-rose border-[1.5px] border-rose rounded-full px-8 py-3.5 font-sans text-[0.95rem] font-medium cursor-pointer hover:bg-rose hover:text-white transition-colors">
            {t('hero.example')}
          </button>
        </div>
        <p className="text-[0.78rem] text-muted mt-4.5 opacity-80">
          {t('hero.footnote')}
        </p>
      </div>

      <div className="hidden lg:flex absolute right-[5%] top-1/2 -translate-y-1/2 w-[min(460px,40vw)] aspect-[4/5] rounded-[32px] z-[1] bg-surface border-[1.5px] border-border backdrop-blur-[20px] shadow-[0_4px_24px_rgba(167,126,96,0.09)]">
        <div className="w-full h-full rounded-[inherit] bg-[rgba(167,96,137,0.07)] border-2 border-dashed border-[rgba(167,96,137,0.22)] flex flex-col items-center justify-center gap-2.5 text-mauve text-[0.85rem] font-medium">
          <ImageIcon width={40} height={40} strokeWidth={1.4} className="opacity-40" />
          <span>{t('hero.preview')}</span>
        </div>
      </div>
    </section>
  );
};
