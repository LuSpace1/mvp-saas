import React from 'react';
import { useTranslation } from 'react-i18next';

export const Plans = () => {
  const { t } = useTranslation();
  
  const plansData = [
    {
      badge: t('plans.items.0.badge'), badgeBg: "rgba(167,126,96,0.16)", badgeColor: "var(--color-gold)",
      name: t('plans.items.0.name'), price: t('plans.items.0.price'),
      features: t('plans.items.0.features', { returnObjects: true }) as string[],
      checkColor: "var(--color-gold)", cta: t('plans.items.0.cta'), ctaBg: "var(--color-gold)", ctaShadow: "rgba(167,126,96,0.30)", featured: false,
    },
    {
      badge: t('plans.items.1.badge'), badgeBg: "rgba(167,96,137,0.15)", badgeColor: "var(--color-mauve)",
      name: t('plans.items.1.name'), price: t('plans.items.1.price'),
      features: t('plans.items.1.features', { returnObjects: true }) as string[],
      checkColor: "var(--color-mauve)", cta: t('plans.items.1.cta'), ctaBg: "var(--color-mauve)", ctaShadow: "rgba(167,96,137,0.28)", featured: true,
    },
    {
      badge: t('plans.items.2.badge'), badgeBg: "rgba(167,96,102,0.14)", badgeColor: "var(--color-rose)",
      name: t('plans.items.2.name'), price: t('plans.items.2.price'),
      features: t('plans.items.2.features', { returnObjects: true }) as string[],
      checkColor: "var(--color-rose)", cta: t('plans.items.2.cta'), ctaBg: "var(--color-rose)", ctaShadow: "rgba(167,96,102,0.26)", featured: false,
    },
  ];

  return (
    <section id="plans" className="relative py-[100px] px-[7%] overflow-hidden">
      <div className="text-center mb-[56px] relative z-10">
        <div className="inline-block text-[0.76rem] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-3.5 bg-[rgba(167,96,137,0.13)] text-mauve">
          {t('plans.badge')}
        </div>
        <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold leading-[1.2] mb-3 text-text">
          {t('plans.title')}
        </h2>
        <p className="text-[1rem] text-muted max-w-[460px] mx-auto leading-[1.7]">
          {t('plans.desc')}
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[26px] max-w-[980px] mx-auto relative z-10">
        {plansData.map((p, i) => (
          <div key={i} className={`bg-surface border-[1.5px] border-border backdrop-blur-[20px] rounded-[24px] shadow-[0_4px_24px_rgba(167,126,96,0.09)] p-[42px_34px] transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_16px_44px_rgba(167,96,137,0.13)] ${p.featured ? '!border-[rgba(167,96,137,0.35)]' : ''}`}>
            <span className="inline-block text-[0.7rem] font-bold tracking-[0.13em] uppercase px-3 py-1 rounded-full mb-5" style={{ background: p.badgeBg, color: p.badgeColor }}>
              {p.badge}
            </span>
            <div className="font-serif text-[1.55rem] font-bold mb-1.5 text-text">{p.name}</div>
            <div className="text-[2.4rem] font-bold text-text mb-1">
              <sup className="text-[1rem] font-medium align-super">$</sup>{p.price}
            </div>
            <div className="text-[0.8rem] text-muted mb-6">{t('plans.currency')}</div>
            <ul className="list-none flex flex-col gap-2.5 mb-[30px]">
              {p.features.map((f, j) => (
                <li key={j} className="text-[0.87rem] text-muted flex items-start gap-2.5">
                  <span style={{ color: p.checkColor, fontWeight: 700 }}>✓</span>{f}
                </li>
              ))}
            </ul>
            <button className="w-full text-white border-none rounded-full py-3.5 font-sans text-[1rem] font-semibold cursor-pointer hover:-translate-y-[2px] transition-all" style={{ background: p.ctaBg, boxShadow: `0 8px 24px ${p.ctaShadow}` }}>
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
