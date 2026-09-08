'use client';

import React from 'react';

interface FloatingLogoItem {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  positionClass: string;
  animationClass: string;
  glowColor: string;
  borderHoverColor: string;
  delayStyle?: React.CSSProperties;
}

export const FloatingSoftwareLogos: React.FC = () => {
  const logos: FloatingLogoItem[] = [
    {
      id: 'm365',
      name: 'Microsoft 365',
      category: 'Bản quyền Doanh nghiệp',
      glowColor: 'rgba(235, 60, 0, 0.45)',
      borderHoverColor: 'hover:border-red-400/80',
      positionClass: 'top-[8%] left-[8%]',
      animationClass: 'animate-float-tile-1',
      icon: (
        <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
          <rect x="6" y="6" width="16" height="16" rx="2" fill="#F25022" />
          <rect x="26" y="6" width="16" height="16" rx="2" fill="#7FBA00" />
          <rect x="6" y="26" width="16" height="16" rx="2" fill="#00A4EF" />
          <rect x="26" y="26" width="16" height="16" rx="2" fill="#FFB900" />
        </svg>
      ),
    },
    {
      id: 'win11',
      name: 'Windows 11 Pro',
      category: 'Hệ điều hành Doanh nghiệp',
      glowColor: 'rgba(0, 120, 212, 0.5)',
      borderHoverColor: 'hover:border-blue-400/80',
      positionClass: 'top-[6%] right-[14%]',
      animationClass: 'animate-float-tile-2',
      icon: (
        <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
          <path d="M7 7h15v15H7z" fill="#0078D4" />
          <path d="M26 7h15v15H26z" fill="#0078D4" />
          <path d="M7 26h15v15H7z" fill="#0078D4" />
          <path d="M26 26h15v15H26z" fill="#0078D4" />
        </svg>
      ),
    },
    {
      id: 'teams',
      name: 'Microsoft Teams',
      category: 'Hội họp & Cộng tác số',
      glowColor: 'rgba(98, 100, 167, 0.5)',
      borderHoverColor: 'hover:border-indigo-400/80',
      positionClass: 'top-[36%] left-[3%]',
      animationClass: 'animate-float-tile-3',
      icon: (
        <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
          <circle cx="34" cy="16" r="6" fill="#5059C9" />
          <rect x="24" y="24" width="20" height="14" rx="4" fill="#5059C9" />
          <circle cx="20" cy="18" r="8" fill="#7B83EB" />
          <rect x="8" y="28" width="24" height="16" rx="5" fill="#464EB8" />
          <text x="14" y="41" fill="white" fontSize="13" fontWeight="bold" fontFamily="sans-serif">T</text>
        </svg>
      ),
    },
    {
      id: 'onedrive',
      name: 'OneDrive Cloud',
      category: 'Lưu trữ đám mây 1TB+',
      glowColor: 'rgba(0, 164, 239, 0.5)',
      borderHoverColor: 'hover:border-sky-400/80',
      positionClass: 'top-[32%] right-[5%]',
      animationClass: 'animate-float-tile-4',
      icon: (
        <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
          <path
            d="M32 36H15a9 9 0 01-2.4-17.7 11 11 0 0121.2-2.8A8.5 8.5 0 0132 36z"
            fill="#0078D4"
            opacity="0.9"
          />
          <path
            d="M36 36h-8.5a7 7 0 00-11-7.2 9 9 0 018.5-4.8 9.5 9.5 0 019 6.2A6.5 6.5 0 0136 36z"
            fill="#0364B8"
          />
        </svg>
      ),
    },
    {
      id: 'kaspersky',
      name: 'Kaspersky Endpoint',
      category: 'Bảo mật & Diệt virus',
      glowColor: 'rgba(0, 168, 142, 0.5)',
      borderHoverColor: 'hover:border-emerald-400/80',
      positionClass: 'bottom-[22%] left-[12%]',
      animationClass: 'animate-float-tile-5',
      icon: (
        <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
          <rect width="48" height="48" rx="10" fill="#006D55" />
          <path
            d="M14 12v24h6V26.5l8.5 9.5H36L25.5 24 35 12h-7.5l-7.5 9.5V12H14z"
            fill="#FFFFFF"
          />
        </svg>
      ),
    },
    {
      id: 'sql',
      name: 'SQL Server Standard',
      category: 'Cơ sở dữ liệu Doanh nghiệp',
      glowColor: 'rgba(216, 59, 1, 0.45)',
      borderHoverColor: 'hover:border-amber-400/80',
      positionClass: 'bottom-[18%] right-[10%]',
      animationClass: 'animate-float-tile-6',
      icon: (
        <svg viewBox="0 0 48 48" className="w-9 h-9" fill="none">
          <ellipse cx="24" cy="14" rx="14" ry="5" fill="#E81123" />
          <path d="M10 14v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8" stroke="#E81123" strokeWidth="3" fill="none" />
          <path d="M10 22v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8" stroke="#C30012" strokeWidth="3" fill="none" />
          <path d="M10 30v8c0 2.8 6.3 5 14 5s14-2.2 14-5v-8" stroke="#A80000" strokeWidth="3" fill="none" />
        </svg>
      ),
    },
    {
      id: 'outlook',
      name: 'Outlook / Exchange',
      category: 'Email Doanh nghiệp riêng',
      glowColor: 'rgba(0, 114, 206, 0.45)',
      borderHoverColor: 'hover:border-cyan-400/80',
      positionClass: 'top-[52%] right-[22%]',
      animationClass: 'animate-float-tile-2',
      icon: (
        <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
          <rect x="14" y="10" width="26" height="28" rx="3" fill="#0072CE" />
          <path d="M14 13l13 10 13-10" stroke="#ffffff" strokeWidth="2.5" fill="none" />
          <rect x="8" y="15" width="16" height="18" rx="3" fill="#004E8C" />
          <circle cx="16" cy="24" r="4" fill="#ffffff" />
        </svg>
      ),
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-20">
      {logos.map((item) => (
        <div
          key={item.id}
          className={`absolute ${item.positionClass} ${item.animationClass} pointer-events-auto transition-transform duration-300 hover:scale-110 hover:z-30 group`}
        >
          {/* Glass Card Container */}
          <div
            className={`relative flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white/70 dark:bg-slate-900/65 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-lg shadow-blue-900/10 transition-all duration-300 ${item.borderHoverColor} hover:shadow-2xl hover:bg-white/90 dark:hover:bg-slate-900/85 cursor-pointer`}
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            }}
          >
            {/* Ambient Backlight Glow */}
            <div
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 pointer-events-none"
              style={{ background: item.glowColor }}
            />

            {/* Icon Wrapper */}
            <div className="relative shrink-0 flex items-center justify-center p-1 rounded-xl bg-white/80 dark:bg-slate-800/80 shadow-sm border border-black/5 dark:border-white/5">
              {item.icon}
            </div>

            {/* Badge Content (visible on larger screens or compact) */}
            <div className="relative flex flex-col pr-1 text-left">
              <span className="text-[13px] font-bold text-slate-800 dark:text-white leading-tight tracking-tight whitespace-nowrap">
                {item.name}
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-blue-300/80 leading-tight whitespace-nowrap">
                {item.category}
              </span>
            </div>

            {/* Pulsing Status Dot */}
            <span className="relative flex h-2 w-2 ml-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
