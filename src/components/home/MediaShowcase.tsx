"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X, Calendar, Users, Award, ShieldCheck, Check } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
}

const videos: VideoItem[] = [
  {
    id: "ORv9zupc-qQ",
    title: "Tân Phát ETEK Kỷ Niệm 20 Năm Thành Lập & Phát Triển",
    category: "Thương hiệu ETEK",
    duration: "05:24",
    thumbnail: "/legacy-media/videos/yt_ORv9zupc-qQ.jpg"
  },
  {
    id: "O9FfxDD-tFA",
    title: "ETEKSOFTS — Giải Pháp Quản Trị Nguồn Nhân Lực 4.0",
    category: "Giải pháp HRM",
    duration: "03:40",
    thumbnail: "/legacy-media/videos/yt_O9FfxDD-tFA.jpg"
  },
  {
    id: "xbAP9eY5OZE",
    title: "Hướng Dẫn Thiết Lập & Khởi Tạo Hệ Thống ETEKSOFTS",
    category: "Hướng dẫn kỹ thuật",
    duration: "08:12",
    thumbnail: "/legacy-media/videos/yt_xbAP9eY5OZE.jpg"
  },
  {
    id: "8hupJgDruuo",
    title: "Câu Hỏi Nào Gây Ức Chế Nhất Cho Nhân Viên?",
    category: "Góc nhìn nhân sự",
    duration: "02:15",
    thumbnail: "/legacy-media/videos/yt_8hupJgDruuo.jpg"
  }
];

export default function MediaShowcase() {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            <Calendar className="h-3.5 w-3.5" />
            HÀNH TRÌNH 20 NĂM PHÁT TRIỂN
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Thước Phim & Câu Chuyện{" "}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
              Thương Hiệu ETEK
            </span>
          </h2>
          <p className="mt-3.5 text-base text-slate-600">
            Khám phá chặng đường hai thập kỷ xây dựng uy tín công nghệ và tầm nhìn giải pháp chuyển đổi số cho doanh nghiệp Việt.
          </p>
        </div>

        {/* Video Cinema Container */}
        <div className="relative mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-slate-900 p-2 sm:p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
            
            {isPlaying ? (
              <div className="relative h-full w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md hover:bg-black/90 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="relative h-full w-full">
                <Image
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  fill
                  className="object-cover opacity-85 transition-transform duration-700 hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Big Ripple Play Button */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    className="group relative flex h-20 w-20 sm:h-22 sm:w-22 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 p-1 shadow-[0_0_40px_rgba(37,99,235,0.6)] transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <span className="absolute -inset-2 rounded-full border border-cyan-400/40 animate-ping opacity-60 pointer-events-none" />
                    <Play className="h-8 w-8 fill-white text-white ml-1 transition-transform group-hover:scale-110" />
                  </button>

                  <div className="mt-5 text-center max-w-lg px-4">
                    <span className="inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold text-white backdrop-blur-md mb-2">
                      {activeVideo.category} • {activeVideo.duration}
                    </span>
                    <h3 className="text-base sm:text-xl font-bold text-white leading-snug">
                      {activeVideo.title}
                    </h3>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Video Playlist Selector */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {videos.map((vid) => {
            const isCurrent = vid.id === activeVideo.id;
            return (
              <button
                key={vid.id}
                type="button"
                onClick={() => {
                  setActiveVideo(vid);
                  setIsPlaying(true);
                }}
                className={`group flex items-center gap-3 rounded-2xl border p-2.5 text-left transition-all duration-200 ${
                  isCurrent
                    ? "border-blue-500 bg-blue-50/70 shadow-sm"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
                }`}
              >
                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <Play className="h-4 w-4 fill-white text-white" />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold text-blue-600 truncate">{vid.category}</p>
                  <p className="text-xs font-semibold text-slate-800 line-clamp-2 leading-tight mt-0.5">
                    {vid.title}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* 4 Landmark Milestone Statistics */}
        <div className="mt-16 grid grid-cols-2 gap-5 lg:grid-cols-4 max-w-5xl mx-auto">
          {[
            { num: "20+", label: "Năm Vững Vàng Phát Triển", desc: "Thành lập từ 2004", icon: Award },
            { num: "500+", label: "Doanh Nghiệp Triển Khai", desc: "Trên toàn quốc", icon: Users },
            { num: "99.9%", label: "Kích Hoạt Hợp Lệ 100%", desc: "Bảo hành trọn vòng đời", icon: ShieldCheck },
            { num: "24/7", label: "Hỗ Trợ Kỹ Thuật Chuyên Sâu", desc: "Đội ngũ kỹ sư chính hãng", icon: Check }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 text-center transition-all duration-300 hover:border-blue-300 hover:bg-white hover:shadow-md"
              >
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-3xl sm:text-4xl font-extrabold text-blue-700 font-mono tracking-tight">
                  {stat.num}
                </p>
                <p className="mt-2 text-xs sm:text-sm font-bold text-slate-900">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
