import React from "react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { NEWS_ARTICLES, NewsArticle } from "@/src/data/news";

interface NewsSectionProps {
  onSelectArticle: (article: NewsArticle) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  onSelectArticle,
}) => {
  return (
    <section id="actualites" className="py-24 bg-[#0a0a0b] border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-wider text-[#e11d48] font-bold mb-2">
              Actualités & Événements
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight text-balance">
              Dernières nouvelles de la concession.
            </h2>
            <p className="text-sm text-zinc-300 mt-2">
              Restez informé des nouveaux lancements, des campagnes d&apos;entretien et de la vie de SOCAR au Bénin.
            </p>
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="bg-[#121216] border border-zinc-800/80 hover:border-zinc-700/80 rounded-lg p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-3">
                  <span className="text-[#e11d48] font-semibold">
                    {article.category}
                  </span>
                  <span>{article.date}</span>
                </div>

                <h3 className="font-display font-bold text-base text-white tracking-tight leading-snug mb-3 group-hover:text-zinc-200 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 group-hover:text-white transition-colors">
                <span className="font-semibold text-zinc-300 group-hover:text-white">
                  Lire l&apos;article
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#e11d48]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
