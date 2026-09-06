import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const templates = [
  { id: 'minimalist', name: 'The Minimalist' },
  { id: 'grid', name: 'The Grid Gallery' },
  { id: 'dark', name: 'The Dark Elegant' }
];

export const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState(templates[0].id);
  const { t } = useTranslation();

  return (
    <section id="products" className="relative py-[100px] px-[7%] overflow-hidden">
      <div className="text-center mb-[56px] relative z-10">
        <div className="inline-block text-[0.76rem] font-bold tracking-[0.15em] uppercase px-3.5 py-1.5 rounded-full mb-3.5 bg-[rgba(167,96,137,0.13)] text-mauve">
          {t('showcase.badge')}
        </div>
        <h2 className="font-serif text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold leading-[1.2] mb-3 text-text">
          {t('showcase.title')}
        </h2>
        <p className="text-[1rem] text-muted max-w-[460px] mx-auto leading-[1.7]" dangerouslySetInnerHTML={{ __html: t('showcase.desc') }}></p>
      </div>

      <div className="max-w-[960px] mx-auto relative z-10">
        <div className="flex justify-center sm:justify-start overflow-x-auto gap-2 px-4 border-b border-border mb-[-1.5px] relative z-20">
          {templates.map((temp) => {
            const isActive = activeTab === temp.id;
            return (
              <button
                key={temp.id}
                onClick={() => setActiveTab(temp.id)}
                className={`px-6 py-3 font-serif font-semibold text-[1rem] rounded-t-[16px] transition-all border-[1.5px] border-b-0 cursor-pointer flex-shrink-0 ${
                  isActive 
                    ? 'bg-surface border-border text-text shadow-[0_-4px_10px_rgba(167,126,96,0.05)] pt-4 pb-4' 
                    : 'bg-transparent border-transparent text-muted hover:bg-[rgba(255,255,255,0.3)] pb-2'
                }`}
              >
                {temp.name}
              </button>
            );
          })}
        </div>

        <div className="w-full aspect-[16/9] md:aspect-[16/7] rounded-[28px] rounded-tl-none bg-surface border-[1.5px] border-border backdrop-blur-[20px] shadow-[0_4px_24px_rgba(167,126,96,0.09)] p-6 relative z-10 transition-all">
          <div className="w-full h-full rounded-[inherit] bg-[rgba(167,96,102,0.06)] border-2 border-dashed border-[rgba(167,96,102,0.20)] flex flex-col items-center justify-center gap-3 text-rose text-[0.88rem] font-medium">
            <ImageIcon width={44} height={44} strokeWidth={1.3} />
            <span>{t('showcase.preview', { name: templates.find(t => t.id === activeTab)?.name })}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
