import React from "react";
import { X, Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { NewsArticle } from "@/src/data/news";

interface NewsDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({
  article,
  onClose,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#121216] border border-zinc-800 rounded-xl w-full max-w-3xl overflow-hidden shadow-2xl relative my-auto">
        <div className="p-4 sm:p-6 bg-[#16161d] border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="text-[#e11d48] font-bold">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.date}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800 rounded-full transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-snug mb-6">
            {article.title}
          </h2>

          <div className="p-4 bg-[#181820] border-l-2 border-[#e11d48] rounded-r-lg text-sm font-medium text-zinc-200 mb-8 italic">
            {article.highlight}
          </div>

          <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            {article.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
            <span>Publié par la Direction de la Communication SOCAR Bénin</span>
            <button
              onClick={onClose}
              className="text-[#e11d48] hover:text-[#be123c] font-semibold flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Retour aux actualités</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
