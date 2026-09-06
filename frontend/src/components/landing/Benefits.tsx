import React from 'react';
import { useTranslation } from 'react-i18next';

export const Benefits = () => {
  const { t } = useTranslation();
  
  const benefitsData = [
    { icon: "🎨", iconBg: "rgba(167,126,96,0.15)",  title: t('benefits.items.0.title'), desc: t('benefits.items.0.desc') },
    { icon: "🍽️", iconBg: "rgba(167,96,102,0.13)", title: t('benefits.items.1.title'), desc: t('benefits.items.1.desc') },
    { icon: "✨", iconBg: "rgba(167,96,137,0.13)",  title: t('benefits.items.2.title'), desc: t('benefits.items.2.desc') },
    { icon: "📱", iconBg: "rgba(167,126,96,0.12)",  title: t('benefits.items.3.title'), desc: t('benefits.items.3.desc') },
  ];

  return (
    <section id="benefits" className="relative py-[100px] px-[7%] overflow-hidden">
      <div className="text-center mb-[56px] relative z-10">
        <div className="inline-block text-[0.76rem] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-3.5 bg-[rgba(167,126,96,0.14)] text-gold">
          {t('benefits.badge')}
        </div>
        <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold leading-[1.2] mb-3 text-text">
          {t('benefits.title')}
        </h2>
        <p className="text-[1rem] text-muted max-w-[460px] mx-auto leading-[1.7]">
          {t('benefits.desc')}
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[22px] relative z-10">
        {benefitsData.map((b, i) => (
          <div key={i} className="bg-surface border-[1.5px] border-border backdrop-blur-[20px] rounded-[24px] shadow-[0_4px_24px_rgba(167,126,96,0.09)] p-[36px_30px] hover:-translate-y-1.5 hover:shadow-[0_14px_40px_rgba(167,96,102,0.13)] transition-all duration-250">
            <div className="w-[52px] h-[52px] rounded-[16px] flex items-center justify-center mb-5 text-2xl" style={{ background: b.iconBg }}>
              {b.icon}
            </div>
            <h3 className="font-serif text-[1.18rem] font-semibold mb-2.5 text-text">{b.title}</h3>
            <p className="text-[0.88rem] text-muted leading-[1.7]">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
