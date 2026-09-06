import React from 'react';
import { useTranslation } from 'react-i18next';

export const HowItWorks = () => {
  const { t } = useTranslation();
  
  const stepsData = [
    { num: "01", title: t('howItWorks.items.0.title'), desc: t('howItWorks.items.0.desc') },
    { num: "02", title: t('howItWorks.items.1.title'), desc: t('howItWorks.items.1.desc') },
    { num: "03", title: t('howItWorks.items.2.title'), desc: t('howItWorks.items.2.desc') },
  ];

  return (
    <section id="how-it-works" className="relative py-[100px] px-[7%] overflow-hidden">
      <div className="text-center mb-[56px] relative z-10">
        <div className="inline-block text-[0.76rem] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-3.5 bg-[rgba(167,126,96,0.14)] text-gold">
          {t('howItWorks.badge')}
        </div>
        <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold leading-[1.2] mb-3 text-text">
          {t('howItWorks.title')}
        </h2>
        <p className="text-[1rem] text-muted max-w-[460px] mx-auto leading-[1.7]">
          {t('howItWorks.desc')}
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[32px] max-w-[960px] mx-auto relative z-10">
        {stepsData.map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-serif text-[3.6rem] font-bold text-[rgba(167,126,96,0.25)] mb-3">
              {s.num}
            </div>
            <h3 className="font-serif text-[1.25rem] font-semibold mb-2.5 text-text">{s.title}</h3>
            <p className="text-[0.95rem] text-muted leading-[1.6] max-w-[240px] mx-auto">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
