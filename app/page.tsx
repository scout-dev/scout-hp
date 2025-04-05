'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Dumbbell, Users, Monitor, Sparkles, ChevronRight, Twitter, Facebook, Menu, X, ArrowRight, Star, Calendar, MessageCircle, Search, User, ChevronDown
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'testimonials', 'operators'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-gradient-to-b from-[#0a0a0a] to-[#121212] text-white min-h-screen font-sans">
      {/* Header */}
      <header className="fixed w-full bg-black/80 backdrop-blur-md z-40 transition-all duration-300">
        <div className="container mx-auto py-4 px-4 sm:px-6 flex justify-between items-center">
          <div className="logo text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            SOCOUT
          </div>
          
          <nav className="hidden lg:block">
            <ul className="flex space-x-8 items-center">
              <li>
                <Link 
                  href="#home" 
                  className={`hover:text-blue-400 transition-colors duration-300 ${activeSection === 'home' ? 'text-blue-400' : ''}`}
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link 
                  href="#about" 
                  className={`hover:text-blue-400 transition-colors duration-300 ${activeSection === 'about' ? 'text-blue-400' : ''}`}
                >
                  SOCOUTとは
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className={`hover:text-blue-400 transition-colors duration-300 ${activeSection === 'services' ? 'text-blue-400' : ''}`}
                >
                  サービス内容
                </Link>
              </li>
              <li>
                <Link 
                  href="#testimonials" 
                  className={`hover:text-blue-400 transition-colors duration-300 ${activeSection === 'testimonials' ? 'text-blue-400' : ''}`}
                >
                  スカウトの声
                </Link>
              </li>
              <li>
                <Link 
                  href="#operators" 
                  className={`hover:text-blue-400 transition-colors duration-300 ${activeSection === 'operators' ? 'text-blue-400' : ''}`}
                >
                  運営者について
                </Link>
              </li>
              <li>
                <Link 
                  href="https://socout-client.vercel.app" 
                  target="_blank" 
                  className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  始めましょう
                </Link>
              </li>
            </ul>
          </nav>
          
          <button 
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen py-6' : 'max-h-0'}`}>
          <ul className="flex flex-col space-y-4 px-6">
            <li>
              <Link 
                href="#home" 
                className="block py-2 hover:text-blue-400 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                ホーム
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className="block py-2 hover:text-blue-400 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                SOCOUTとは
              </Link>
            </li>
            <li>
              <Link 
                href="#services" 
                className="block py-2 hover:text-blue-400 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                サービス内容
              </Link>
            </li>
            <li>
              <Link 
                href="#testimonials" 
                className="block py-2 hover:text-blue-400 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                スカウトの声
              </Link>
            </li>
            <li>
              <Link 
                href="#operators" 
                className="block py-2 hover:text-blue-400 transition-colors duration-300"
                onClick={toggleMobileMenu}
              >
                運営者について
              </Link>
            </li>
            <li className="pt-4">
              <Link 
                href="https://socout-client.vercel.app" 
                target="_blank" 
                className="block bg-blue-500 text-white px-6 py-3 rounded-full text-center hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20"
                onClick={toggleMobileMenu}
              >
                始めましょう
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 z-10"></div>
          <Image 
            src="https://raw.githubusercontent.com/Sota10000/image-storage/main/IMG_1260.JPG" 
            alt="サッカーコーチと選手たち" 
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tighter mb-6 sm:mb-8 hero-title">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">SOCOUT</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl mx-auto mb-8 sm:mb-12">
            サッカー人生を懸けた選手とスカウトをつなぐ、<br className="hidden sm:block" />
            新しいプラットフォーム
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="https://socout-client.vercel.app" 
              target="_blank" 
              className="bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20 flex items-center justify-center"
            >
              始めましょう <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20 animate-bounce">
          <Link href="#about" className="text-white hover:text-white transition-colors duration-300">
            <ChevronDown size={32} />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 relative overflow-hidden bg-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-12 relative inline-block">
              <span className="text-blue-400">SOCOUTとは</span>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-blue-500"></div>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-12 sm:mb-16">
              本気でプロ選手を目指している人に、<br className="hidden sm:block" />自身のプレーをスカウトにアピールする場を提供します。
            </p>
            
            <div className="relative">
              <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-black/60 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10">
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-wider text-white">
                  『自ら進路を切り開け』
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 sm:mb-16 text-center relative inline-block">
            <span className="text-blue-400">サービス内容</span>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-blue-500"></div>
          </h2>
          
          {/* Players Section */}
          <div className="mb-16 sm:mb-24">
            <div className="flex items-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold relative">
                <span className="text-blue-400">選手</span>
              </h3>
              <div className="ml-6 flex-grow h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            </div>
            
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="services-swiper"
            >
              <SwiperSlide className="h-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-48 sm:h-64">
                    <Image 
                      src="https://raw.githubusercontent.com/Sota10000/image-storage/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-03-03%2013.15.16.png" 
                      alt="プロフィール登録"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-4 sm:p-8 flex-grow flex flex-col">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <User size={18} className="text-blue-400 mr-2" />
                      <h4 className="text-lg sm:text-xl font-bold">プロフィール登録</h4>
                    </div>
                    <p className="text-sm sm:text-base text-white flex-grow">プレー集を載せ、一目で特徴を掴んでもらえるようにアピールしよう。また、スカウトにアピールポイントや想いを文章でも伝えよう。</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="h-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-48 sm:h-64">
                    <Image 
                      src="https://raw.githubusercontent.com/Sota10000/image-storage/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-03-03%2013.37.39.png" 
                      alt="試合予定カレンダー"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-4 sm:p-8 flex-grow flex flex-col">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <Calendar size={18} className="text-blue-400 mr-2" />
                      <h4 className="text-lg sm:text-xl font-bold">試合予定カレンダー</h4>
                    </div>
                    <p className="text-sm sm:text-base text-white flex-grow">試合予定をカレンダーに記載し、スカウトにアピール。試合後は映像を残し、来られなかったスカウトにも見てもらおう。高校生の試合、大学のIリーグや新人戦などもスカウトは映像を求めています。</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="h-auto">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col">
                  <div className="relative h-48 sm:h-64">
                    <Image 
                      src="https://raw.githubusercontent.com/Sota10000/image-storage/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-03-03%2013.38.43.png" 
                      alt="スカウトへメッセージ"
                      fill
                      className="object-cover object-left group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                  <div className="p-4 sm:p-8 flex-grow flex flex-col">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <MessageCircle size={18} className="text-blue-400 mr-2" />
                      <h4 className="text-lg sm:text-xl font-bold">スカウトへメッセージ</h4>
                      <span className="ml-2 text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">近日公開</span>
                    </div>
                    <p className="text-sm sm:text-base text-white flex-grow">行きたいチームに直接メッセージが送れます。自分のサッカー人生、周りに左右されず自分で開拓しよう。後悔のないサッカー人生を送るための機能です。</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          
          {/* Scouts Section */}
          <div>
            <div className="flex items-center mb-8 sm:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold relative">
                <span className="text-blue-400">スカウト</span>
              </h3>
              <div className="ml-6 flex-grow h-px bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-48 sm:h-64">
                  <Image 
                    src="https://raw.githubusercontent.com/Sota10000/image-storage/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-03-03%2014.33.23.png" 
                    alt="選手検索システム"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-4 sm:p-8 flex-grow flex flex-col">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Search size={18} className="text-blue-400 mr-2" />
                    <h4 className="text-lg sm:text-xl font-bold">選手検索システム</h4>
                  </div>
                  <p className="text-sm sm:text-base text-white flex-grow">ポジション、年齢、地域、スキルセットなど、様々な条件で選手を検索できる高度なフィルタリングシステム。あなたのチームに最適な人材を効率的に見つけることができます。</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 group flex flex-col h-full">
                <div className="relative h-48 sm:h-64">
                  <Image 
                    src="https://raw.githubusercontent.com/Sota10000/image-storage/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-03-03%2014.34.16.png" 
                    alt="試合予定確認"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-4 sm:p-8 flex-grow flex flex-col">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Star size={18} className="text-blue-400 mr-2" />
                    <h4 className="text-lg sm:text-xl font-bold">試合予定確認</h4>
                  </div>
                  <p className="text-sm sm:text-base text-white flex-grow">試合の予定や試合映像を簡単に確認できます。興味のある選手の今後の予定を把握し、試合当日に現地に行けなくても、選手が出演する試合映像を視聴することができます。選手をお気に入りに追加すれば、★で簡単に追跡ができ、さらに便利に活用できます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 sm:mb-16 text-center relative inline-block">
            <span className="text-blue-400">スカウトの声</span>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-blue-500"></div>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 h-full flex flex-col">
              <div className="mb-4 sm:mb-6 flex justify-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-500 flex items-center justify-center text-2xl sm:text-3xl font-bold">
                  J1
                </div>
              </div>
              <p className="text-sm sm:text-base text-white mb-4 sm:mb-6 italic flex-grow">
                "スカウト活動にリソースを割けていなった。チームに帯同することも多く、選手の試合を見る時間が中々取れていなかった。それが、このSOCOUTを使い自宅で見れる様になると助かる。"
              </p>
              <div className="flex items-center mt-auto">
                <div className="h-px w-8 sm:w-12 bg-blue-500 mr-3 sm:mr-4"></div>
                <p className="font-bold text-sm sm:text-base">J1スカウト</p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 h-full flex flex-col">
              <div className="mb-4 sm:mb-6 flex justify-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-500 flex items-center justify-center text-2xl sm:text-3xl font-bold">
                  J2
                </div>
              </div>
              <p className="text-sm sm:text-base text-white mb-4 sm:mb-6 italic flex-grow">
                "地方のクラブで、しかも予算が限られている。出張費を考えると非常にSOCOUTがあると有り難い。せっかく出張に行っても、目当ての選手が出ないことがあり無駄足になったこともある。事前に予定確認ができるから嬉しい。"
              </p>
              <div className="flex items-center mt-auto">
                <div className="h-px w-8 sm:w-12 bg-blue-500 mr-3 sm:mr-4"></div>
                <p className="font-bold text-sm sm:text-base">J2スカウト</p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 h-full flex flex-col">
              <div className="mb-4 sm:mb-6 flex justify-center">
                <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-blue-500 flex items-center justify-center text-2xl sm:text-3xl font-bold">
                  J1
                </div>
              </div>
              <p className="text-sm sm:text-base text-white mb-4 sm:mb-6 italic flex-grow">
                "最近は高校生でもかなり実力のある選手が増えているが、中々試合映像が見れない。今はBチームに所属する大学1、2年生でも追っている選手がいる。その選手を試合映像も見たい。多分海外のスカウトも利用するサービスになるんじゃないかな。"
              </p>
              <div className="flex items-center mt-auto">
                <div className="h-px w-8 sm:w-12 bg-blue-500 mr-3 sm:mr-4"></div>
                <p className="font-bold text-sm sm:text-base">J1スカウト</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Operators Section */}
      <section id="operators" className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-12 sm:mb-16 text-center relative inline-block">
            <span className="text-blue-400">運営者について</span>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-blue-500"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group hover:border-blue-500/50 transition-all duration-300">
              <div className="relative h-64 sm:h-80">
                <Image 
                  src="https://raw.githubusercontent.com/Sota10000/image-storage/main/%E8%92%BC%E5%A4%A7.jpg" 
                  alt="木戸口蒼大"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">木戸口蒼大<span className="text-xs sm:text-sm font-normal ml-2">（26歳）</span></h3>
                  <p className="text-blue-400 text-sm sm:text-base">阪南大高 ➡︎ 関西大学出身</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 group hover:border-blue-500/50 transition-all duration-300">
              <div className="relative h-64 sm:h-80">
                <Image 
                  src="https://raw.githubusercontent.com/Sota10000/image-storage/main/%E6%B6%BC%E5%A4%AA.jpg" 
                  alt="福原涼太"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">福原涼太<span className="text-xs sm:text-sm font-normal ml-2">（26歳）</span></h3>
                  <p className="text-blue-400 text-sm sm:text-base">静岡学園 ➡︎ 関西大学出身</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Thoughts Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 md:p-12 border border-white/10 mb-12 sm:mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 relative inline-block">
              <span className="text-blue-400">想い</span>
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500"></div>
            </h3>
            
            <div className="text-sm sm:text-base text-white leading-relaxed relative z-10">
              <p className="mb-4 sm:mb-6">「自チームが持つパイプだけが、自分の進路はおかしい。」「自分の人生だから自分が行きたい進路を選べるべきだ。」「インターネットが普及した今、日本中、世界中に選択肢を作れないか？」と思い、このサービスを開発しました。</p>
              <p className="mb-4 sm:mb-6">「サカウト」を通して、自分が『納得する』『後悔のない』サッカー人生を歩めた。「サカウト」のおかげで、自分の夢を掴めた。と、夢を追いかけるサッカー選手に思われるよう、私たちも全力で挑戦します。</p>
              <p className="font-semibold text-base sm:text-lg text-blue-400">一緒に夢に向かって頑張りましょう。</p>
            </div>
          </div>
          
          {/* Registration Section */}
          <div className="mb-12 sm:mb-16">
            <div className="bg-black backdrop-blur-sm p-6 sm:p-8 md:p-12 border border-white/10 text-center relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 blur-3xl"></div>
              
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 relative z-10">
                登録する<span className="text-base sm:text-xl md:text-2xl font-normal text-white ml-2 sm:ml-3 block sm:inline">Chrome(PC推奨)</span>
              </h2>
              
              <div className="flex justify-center relative z-10">
                <Link 
                  href="https://socout-client.vercel.app" 
                  target="_blank" 
                  className="bg-blue-500 text-white text-base sm:text-xl font-bold py-4 sm:py-5 px-8 sm:px-12 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20 w-full max-w-2xl flex items-center justify-center"
                >
                  会員登録する <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </div>
          </div>
          
          {/* Official LINE Section */}
          <div>
            <div className="bg-black backdrop-blur-sm p-6 sm:p-8 md:p-12 border border-white/10 relative overflow-hidden rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-500/5 blur-3xl"></div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 relative z-10">
                公式LINE<span className="text-base sm:text-lg font-normal text-white ml-2 sm:ml-3 block sm:inline">（お問い合わせや今後最新情報配信予定）</span>
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 relative z-10">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-6 sm:p-8 rounded-xl text-center hover:from-blue-500/30 hover:to-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    <Link 
                      href="https://lin.ee/ZIfHBCr" 
                      target="_blank" 
                      className="hover:text-blue-400 transition-colors inline-flex items-center justify-center"
                    >
                      選手 <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </h3>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/20 p-6 sm:p-8 rounded-xl text-center hover:from-blue-500/30 hover:to-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    <Link 
                      href="https://lin.ee/YPyqAWW" 
                      target="_blank" 
                      className="hover:text-blue-400 transition-colors inline-flex items-center justify-center"
                    >
                      スカウト <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 backdrop-blur-md py-12 sm:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 relative inline-block">
                <span className="text-blue-400">基本情報</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"></div>
              </h3>
              <ul className="mt-2 space-y-0.5">
                <li>
                  <Link href="#home" className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center py-1">
                    <ChevronRight size={14} className="mr-1" /> ホーム
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center py-1">
                    <ChevronRight size={14} className="mr-1" /> サービス内容
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center py-1">
                    <ChevronRight size={14} className="mr-1" /> スカウトの声
                  </Link>
                </li>
                <li>
                  <Link href="#operators" className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center py-1">
                    <ChevronRight size={14} className="mr-1" /> 運営者について
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 relative inline-block">
                <span className="text-blue-400">規約等</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"></div>
              </h3>
              <ul className="mt-2 space-y-0.5">
                <li>
                  <Link 
                    href="https://drive.google.com/file/d/1HgdhqNzcS75JwFkVhH1Qt_iI4HZNGfJ8/view?usp=sharing" 
                    target="_blank" 
                    className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center py-1"
                  >
                    <ChevronRight size={14} className="mr-1" /> 利用規約
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://drive.google.com/file/d/1Y5OnrqOHTqKSlnVbWZ-tzrpTQyI49S6l/view?usp=sharing" 
                    target="_blank" 
                    className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center py-1"
                  >
                    <ChevronRight size={14} className="mr-1" /> プライバシーポリシー
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://drive.google.com/file/d/1fTThFvrBhnEri5UeSMpvKxVOOTJLs3iS/view?usp=sharing" 
                    target="_blank" 
                    className="text-white hover:text-blue-400 transition-colors duration-300 flex items-center py-1"
                  >
                    <ChevronRight size={14} className="mr-1" /> 個人情報の取り扱いについて
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 relative inline-block">
                <span className="text-blue-400">お問い合わせ</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"></div>
              </h3>
              <ul className="mt-2 space-y-0.5 text-white text-sm sm:text-base">
                <li className="flex items-start py-1">
                  <span className="mr-2 mt-1">📧</span> info@bridgeahead.co.jp
                </li>
                <li className="flex items-start py-1">
                  <span className="mr-2 mt-1">📱</span> +81 (90) 1957-1070
                </li>
                <li className="flex items-start py-1">
                  <span className="mr-2 mt-1">📍</span> 東京都品川区南品川5-10-43-103
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 relative inline-block">
                <span className="text-blue-400">SNS</span>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500"></div>
              </h3>
              <div className="mt-2 flex space-x-4">
                <Link 
                  href="https://x.com/socout10?s=21&t=ag71USnj_cu7OsYs_YP61w" 
                  target="_blank" 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-300"
                >
                  <Twitter size={20} />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 text-center text-white text-sm">
            <p>&copy; LLC BridgeAhead　All rights reserved.</p>
            <p>&copy; LLC BridgeAhead　確認</p>
          </div>
        </div>
      </footer>
    </div>
  );
}