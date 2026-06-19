/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  AlignJustify, 
  List, 
  Quote, 
  Eraser, 
  Undo, 
  Redo 
} from 'lucide-react';

export interface RichTextToolbarProps {
  editorBold: boolean;
  setEditorBold: React.Dispatch<React.SetStateAction<boolean>>;
  editorItalic: boolean;
  setEditorItalic: React.Dispatch<React.SetStateAction<boolean>>;
  editorUnderline: boolean;
  setEditorUnderline: React.Dispatch<React.SetStateAction<boolean>>;
  editorFont: string;
  setEditorFont: React.Dispatch<React.SetStateAction<string>>;
  editorFontSize: string;
  setEditorFontSize: React.Dispatch<React.SetStateAction<string>>;
  editorAlignment: string;
  setEditorAlignment: React.Dispatch<React.SetStateAction<string>>;
  editorColor: string;
  setEditorColor: React.Dispatch<React.SetStateAction<string>>;
  editorIsQuote: boolean;
  setEditorIsQuote: React.Dispatch<React.SetStateAction<boolean>>;
  editorListType: string | null;
  setEditorListType: React.Dispatch<React.SetStateAction<string | null>>;
  onUndo?: () => void;
  onRedo?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
  onClearFormatting?: () => void;
  onToggleBullet?: () => void;
}

export function RichTextToolbar({
  editorBold,
  setEditorBold,
  editorItalic,
  setEditorItalic,
  editorUnderline,
  setEditorUnderline,
  editorFont,
  setEditorFont,
  editorFontSize,
  setEditorFontSize,
  editorAlignment,
  setEditorAlignment,
  editorColor,
  setEditorColor,
  editorIsQuote,
  setEditorIsQuote,
  editorListType,
  setEditorListType,
  onUndo,
  onRedo,
  canUndo = false,
  canRedo = false,
  onClearFormatting,
  onToggleBullet
}: RichTextToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-2xl mb-2 shadow-xs select-none">
      {/* Undo / Redo */}
      {onUndo && onRedo && (
        <>
          <div className="flex items-center gap-0.5">
            <button
              type="button"
              onClick={onUndo}
              disabled={!canUndo}
              title="Desfazer (Undo)"
              className={`p-2 rounded-xl active:scale-95 transition-all cursor-pointer ${
                !canUndo ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              <Undo size={14} className="stroke-[2.5]" />
            </button>
            <button
              type="button"
              onClick={onRedo}
              disabled={!canRedo}
              title="Refazer (Redo)"
              className={`p-2 rounded-xl active:scale-95 transition-all cursor-pointer ${
                !canRedo ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              <Redo size={14} className="stroke-[2.5]" />
            </button>
          </div>
          <div className="w-[1px] h-4 bg-slate-200 mx-0.5" />
        </>
      )}

      {/* Font Family Selector Dropdown */}
      <div className="relative">
        <select
          value={editorFont}
          onChange={(e) => setEditorFont(e.target.value)}
          className="bg-transparent text-slate-700 text-xs font-semibold py-1 pl-2 pr-5 border border-transparent rounded-xl hover:bg-slate-200/60 cursor-pointer focus:outline-none appearance-none font-sans"
        >
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif (Editorial)</option>
          <option value="monospace">Monospace</option>
        </select>
        <div className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[8px] font-black">▼</div>
      </div>

      <div className="w-[1px] h-4 bg-slate-200 mx-0.5" />

      {/* Font Size Selector Dropdown "tT" */}
      <div className="relative flex items-center">
        <span className="text-[10px] font-black mr-1 text-slate-500">tT</span>
        <select
          value={editorFontSize}
          onChange={(e) => setEditorFontSize(e.target.value)}
          className="bg-transparent text-slate-700 text-xs font-semibold py-1 pl-1.5 pr-4 border border-transparent rounded-xl hover:bg-slate-200/60 cursor-pointer focus:outline-none appearance-none font-sans"
        >
          <option value="sm">Pequeno</option>
          <option value="base">Normal</option>
          <option value="lg">Grande</option>
          <option value="xl">Título</option>
        </select>
        <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[8px] font-black">▼</div>
      </div>

      <div className="w-[1px] h-4 bg-slate-200 mx-0.5" />

      {/* Inline formatting styles B, I, U */}
      <div className="flex items-center gap-0.5">
        <button
          type="button"
          onClick={() => setEditorBold(!editorBold)}
          title="Negrito (Bold)"
          className={`p-1.5 rounded-xl active:scale-95 transition-all font-black text-xs min-w-[28px] flex items-center justify-center cursor-pointer ${
            editorBold 
              ? 'bg-indigo-100/80 text-indigo-755 border border-indigo-200/30' 
              : 'text-slate-650 hover:bg-slate-200/60 hover:text-slate-900'
          }`}
        >
          <Bold size={13} className="stroke-[3]" />
        </button>

        <button
          type="button"
          onClick={() => setEditorItalic(!editorItalic)}
          title="Itálico (Italic)"
          className={`p-1.5 rounded-xl active:scale-95 transition-all font-black text-xs min-w-[28px] flex items-center justify-center cursor-pointer ${
            editorItalic 
              ? 'bg-indigo-100/80 text-indigo-755 border border-indigo-200/30' 
              : 'text-slate-650 hover:bg-slate-200/60 hover:text-slate-900'
          }`}
        >
          <Italic size={13} className="stroke-[3]" />
        </button>

        <button
          type="button"
          onClick={() => setEditorUnderline(!editorUnderline)}
          title="Sublinhado (Underline)"
          className={`p-1.5 rounded-xl active:scale-95 transition-all font-black text-xs min-w-[28px] flex items-center justify-center cursor-pointer ${
            editorUnderline 
              ? 'bg-indigo-100/80 text-indigo-755 border border-indigo-200/30' 
              : 'text-slate-650 hover:bg-slate-200/60 hover:text-slate-900'
          }`}
        >
          <Underline size={13} className="stroke-[3]" />
        </button>
      </div>

      <div className="w-[1px] h-4 bg-slate-200 mx-0.5" />

      {/* Font Color Selection */}
      <div className="relative group">
        <button
          type="button"
          title="Cor do Texto"
          className="p-1.5 rounded-xl text-slate-600 hover:bg-slate-200/60 hover:text-slate-900 active:scale-95 transition-all flex items-center gap-1 cursor-pointer"
        >
          <span className="font-extrabold text-xs border-b-2 leading-none" style={{ borderColor: editorColor }}>A</span>
          <span className="text-[6px]">▼</span>
        </button>
        <div className="absolute left-0 top-8 hidden group-hover:flex group-focus-within:flex flex-col bg-white border border-slate-200 rounded-xl p-2 shadow-xl z-20 min-w-[130px] gap-1 text-left">
          <span className="text-[8px] font-bold text-slate-400 select-none uppercase tracking-widest px-1">Cor da Fonte</span>
          <div className="grid grid-cols-5 gap-1 pt-1">
            {[
              { label: 'Slate', value: '#1e293b', bgClass: 'bg-slate-800' },
              { label: 'Red', value: '#dc2626', bgClass: 'bg-red-600' },
              { label: 'Blue', value: '#2563eb', bgClass: 'bg-blue-600' },
              { label: 'Green', value: '#16a34a', bgClass: 'bg-green-600' },
              { label: 'Gold', value: '#ca8a04', bgClass: 'bg-yellow-600' }
            ].map((color) => (
              <button
                key={color.value}
                type="button"
                onClick={() => setEditorColor(color.value)}
                title={color.label}
                className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${color.bgClass} ${
                  editorColor === color.value ? 'ring-2 ring-indigo-500 ring-offset-1 border-white' : 'border-black/5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-[1px] h-4 bg-slate-200 mx-0.5" />

      {/* Paragraph Alignment Selector Button Row */}
      <div className="flex items-center gap-0.5">
        {[
          { val: 'left', icon: <AlignLeft size={13} />, title: 'Alinhar à Esquerda' },
          { val: 'center', icon: <AlignCenter size={13} />, title: 'Alinhar ao Centro' },
          { val: 'right', icon: <AlignRight size={13} />, title: 'Alinhar à Direita' },
          { val: 'justify', icon: <AlignJustify size={13} />, title: 'Justificar' }
        ].map((align) => (
          <button
            key={align.val}
            type="button"
            onClick={() => setEditorAlignment(align.val)}
            title={align.title}
            className={`p-1.5 rounded-xl active:scale-95 transition-all text-slate-600 cursor-pointer ${
              editorAlignment === align.val 
                ? 'bg-indigo-100/85 text-indigo-755 border border-indigo-200/30' 
                : 'hover:bg-slate-200/60 hover:text-slate-900'
            }`}
          >
            {align.icon}
          </button>
        ))}
      </div>

      <div className="w-[1px] h-4 bg-slate-200 mx-0.5" />

      {/* List Type Bullet Toggle */}
      <div className="flex items-center gap-0.5">
        <button
          type="button"
          onClick={() => {
            if (onToggleBullet) {
              onToggleBullet();
            } else {
              setEditorListType(editorListType === 'bullet' ? null : 'bullet');
            }
          }}
          title="Lista de Marcadores (Bullets)"
          className={`p-1.5 rounded-xl active:scale-95 transition-all cursor-pointer ${
            editorListType === 'bullet'
              ? 'bg-indigo-100/85 text-indigo-755 border border-indigo-200/30'
              : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'
          }`}
        >
          <List size={13} />
        </button>
      </div>

      <div className="w-[1px] h-4 bg-slate-200 mx-0.5" />

      {/* Blockquote Toggle */}
      <button
        type="button"
        onClick={() => setEditorIsQuote(!editorIsQuote)}
        title="Citação (Blockquote)"
        className={`p-1.5 rounded-xl active:scale-95 transition-all cursor-pointer ${
          editorIsQuote
            ? 'bg-indigo-100/85 text-indigo-755 border border-indigo-200/30'
            : 'text-slate-600 hover:bg-slate-200/60 hover:text-slate-900'
        }`}
      >
        <Quote size={13} />
      </button>

      {/* Clear formatting Eraser */}
      {onClearFormatting && (
        <button
          type="button"
          onClick={onClearFormatting}
          title="Limpar Formatação"
          className="p-1.5 rounded-xl text-slate-600 hover:bg-slate-200 hover:text-red-650 hover:bg-red-50/70 active:scale-95 transition-all ml-auto cursor-pointer"
        >
          <Eraser size={13} />
        </button>
      )}
    </div>
  );
}
