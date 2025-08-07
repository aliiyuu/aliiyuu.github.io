'use client';

import { useState } from 'react';
import { Mail, FileText, Github, Linkedin, Moon, Sun, LucideIcon } from 'lucide-react';

interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const socialLinks: SocialLink[] = [
    { icon: Mail, label: 'Email', href: 'mailto:aliciayu@g.ucla.edu' },
    { icon: FileText, label: 'Resume', href: 'https://drive.google.com/file/d/16_ss3T7sBmps-AdjIaRuo5mATmtl36z8/view?usp=sharing' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/alliciayu' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/aliiyuu' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #1a0b2e 0%, #2d1b3d 15%, #4a3a6b 30%, #3b2a5e 45%, #4a1e4a 60%, #5c3a8b 75%, #6b2e6b 90%, #2d1b3d 100%)'
        : 'linear-gradient(135deg, #faf0e6 0%, #e8d5ff 20%, #d6e8ff 40%, #f8d7da 60%, #ddd6fe 80%, #fce7f3 100%)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      transition: 'all 0.5s ease'
    }}>
      {/* Dark mode toggle */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{
          position: 'fixed',
          top: '24px',
          right: '24px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: 'none',
          background: isDarkMode
            ? 'linear-gradient(135deg, #f9a8d4 0%, #a78bfa 100%)'
            : 'linear-gradient(135deg, #a78bfa 0%, #e9d5ff 100%)',
          color: isDarkMode ? '#4c1d95' : '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: isDarkMode 
            ? '0 4px 20px rgba(236, 72, 153, 0.3)' 
            : '0 4px 20px rgba(139, 92, 246, 0.3)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          fontSize: '20px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = isDarkMode 
            ? '0 6px 25px rgba(236, 72, 153, 0.4)' 
            : '0 6px 25px rgba(139, 92, 246, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = isDarkMode 
            ? '0 4px 20px rgba(236, 72, 153, 0.3)' 
            : '0 4px 20px rgba(139, 92, 246, 0.3)';
        }}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Floating background elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        {/* Floating background orbs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '120px',
          height: '120px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(147, 51, 234, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(147, 51, 234, 0.08) 0%, rgba(147, 51, 234, 0.04) 50%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(20px)',
          animation: 'float 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '80px',
          height: '80px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(236, 72, 153, 0.06) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(15px)',
          animation: 'float-delayed 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '20%',
          width: '100px',
          height: '100px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(18px)',
          animation: 'float-slow 10s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '90px',
          height: '90px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(168, 85, 247, 0.04) 50%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(16px)',
          animation: 'float 7s ease-in-out infinite',
          animationDelay: '2s'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '40%',
          right: '30%',
          width: '70px',
          height: '70px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, rgba(14, 165, 233, 0.05) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(14, 165, 233, 0.04) 50%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(14px)',
          animation: 'float-delayed 9s ease-in-out infinite',
          animationDelay: '1s'
        }} />
        <div style={{
          position: 'absolute',
          top: '80%',
          left: '5%',
          width: '110px',
          height: '110px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(139, 92, 246, 0.04) 50%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(19px)',
          animation: 'float-slow 11s ease-in-out infinite',
          animationDelay: '3s'
        }} />
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '60%',
          width: '85px',
          height: '85px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0.04) 50%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(17px)',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '4s'
        }} />

        {/* Neon wispy clouds in cool tones */}
        <div className="animate-cloud-drift-fast" style={{
          position: 'absolute',
          top: '5%',
          left: '-50px',
          width: '200px',
          height: '80px',
          background: isDarkMode 
            ? 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.35) 0%, rgba(147, 51, 234, 0.2) 40%, rgba(147, 51, 234, 0.08) 70%, transparent 100%)'
            : 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.28) 0%, rgba(147, 51, 234, 0.15) 40%, rgba(147, 51, 234, 0.06) 70%, transparent 100%)',
          borderRadius: '50px',
          filter: 'blur(25px)',
          boxShadow: isDarkMode 
            ? '0 0 40px rgba(147, 51, 234, 0.5), 0 0 80px rgba(147, 51, 234, 0.2)' 
            : '0 0 35px rgba(147, 51, 234, 0.4), 0 0 70px rgba(147, 51, 234, 0.15)'
        }} />
        <div className="animate-cloud-bounce-wild" style={{
          position: 'absolute',
          top: '25%',
          right: '-30px',
          width: '150px',
          height: '60px',
          background: isDarkMode 
            ? 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.32) 0%, rgba(14, 165, 233, 0.18) 40%, rgba(14, 165, 233, 0.08) 70%, transparent 100%)'
            : 'radial-gradient(ellipse at center, rgba(14, 165, 233, 0.25) 0%, rgba(14, 165, 233, 0.14) 40%, rgba(14, 165, 233, 0.06) 70%, transparent 100%)',
          borderRadius: '40px',
          filter: 'blur(20px)',
          boxShadow: isDarkMode 
            ? '0 0 35px rgba(14, 165, 233, 0.45), 0 0 70px rgba(14, 165, 233, 0.18)' 
            : '0 0 30px rgba(14, 165, 233, 0.35), 0 0 60px rgba(14, 165, 233, 0.12)'
        }} />
        <div className="animate-cloud-spin-rapid" style={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: '180px',
          height: '70px',
          background: isDarkMode 
            ? 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.34) 0%, rgba(139, 92, 246, 0.19) 40%, rgba(139, 92, 246, 0.08) 70%, transparent 100%)'
            : 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.27) 0%, rgba(139, 92, 246, 0.15) 40%, rgba(139, 92, 246, 0.06) 70%, transparent 100%)',
          borderRadius: '45px',
          filter: 'blur(22px)',
          boxShadow: isDarkMode 
            ? '0 0 38px rgba(139, 92, 246, 0.48), 0 0 76px rgba(139, 92, 246, 0.19)' 
            : '0 0 32px rgba(139, 92, 246, 0.38), 0 0 64px rgba(139, 92, 246, 0.15)'
        }} />
        <div className="animate-cloud-bounce-wild" style={{
          position: 'absolute',
          top: '70%',
          right: '10%',
          width: '120px',
          height: '50px',
          background: isDarkMode 
            ? 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.33) 0%, rgba(6, 182, 212, 0.18) 40%, rgba(6, 182, 212, 0.08) 70%, transparent 100%)'
            : 'radial-gradient(ellipse at center, rgba(6, 182, 212, 0.26) 0%, rgba(6, 182, 212, 0.14) 40%, rgba(6, 182, 212, 0.06) 70%, transparent 100%)',
          borderRadius: '35px',
          filter: 'blur(18px)',
          boxShadow: isDarkMode 
            ? '0 0 34px rgba(6, 182, 212, 0.46), 0 0 68px rgba(6, 182, 212, 0.18)' 
            : '0 0 29px rgba(6, 182, 212, 0.36), 0 0 58px rgba(6, 182, 212, 0.14)',
          animationDelay: '2s'
        }} />
        <div className="animate-cloud-drift-fast" style={{
          position: 'absolute',
          top: '45%',
          left: '-40px',
          width: '160px',
          height: '65px',
          background: isDarkMode 
            ? 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.31) 0%, rgba(59, 130, 246, 0.17) 40%, rgba(59, 130, 246, 0.07) 70%, transparent 100%)'
            : 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.24) 0%, rgba(59, 130, 246, 0.13) 40%, rgba(59, 130, 246, 0.05) 70%, transparent 100%)',
          borderRadius: '42px',
          filter: 'blur(21px)',
          boxShadow: isDarkMode 
            ? '0 0 36px rgba(59, 130, 246, 0.44), 0 0 72px rgba(59, 130, 246, 0.17)' 
            : '0 0 31px rgba(59, 130, 246, 0.35), 0 0 62px rgba(59, 130, 246, 0.13)',
          animationDelay: '5s'
        }} />
        <div className="animate-cloud-spin-rapid" style={{
          position: 'absolute',
          bottom: '60%',
          right: '-20px',
          width: '140px',
          height: '55px',
          background: isDarkMode 
            ? 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.32) 0%, rgba(168, 85, 247, 0.18) 40%, rgba(168, 85, 247, 0.08) 70%, transparent 100%)'
            : 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.25) 0%, rgba(168, 85, 247, 0.14) 40%, rgba(168, 85, 247, 0.06) 70%, transparent 100%)',
          borderRadius: '38px',
          filter: 'blur(19px)',
          boxShadow: isDarkMode 
            ? '0 0 33px rgba(168, 85, 247, 0.42), 0 0 66px rgba(168, 85, 247, 0.16)' 
            : '0 0 28px rgba(168, 85, 247, 0.34), 0 0 56px rgba(168, 85, 247, 0.12)',
          animationDelay: '3s'
        }} />
        <div className="animate-cloud-bounce-wild" style={{
          position: 'absolute',
          top: '85%',
          left: '30%',
          width: '130px',
          height: '55px',
          background: isDarkMode 
            ? 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.33) 0%, rgba(147, 51, 234, 0.19) 40%, rgba(147, 51, 234, 0.08) 70%, transparent 100%)'
            : 'radial-gradient(ellipse at center, rgba(147, 51, 234, 0.26) 0%, rgba(147, 51, 234, 0.15) 40%, rgba(147, 51, 234, 0.06) 70%, transparent 100%)',
          borderRadius: '36px',
          filter: 'blur(20px)',
          boxShadow: isDarkMode 
            ? '0 0 35px rgba(147, 51, 234, 0.45), 0 0 70px rgba(147, 51, 234, 0.18)' 
            : '0 0 30px rgba(147, 51, 234, 0.36), 0 0 60px rgba(147, 51, 234, 0.14)',
          animationDelay: '2s'
        }} />

        {/* Vibrant pink, purple, and blue blobs */}
        <div className="animate-float" style={{
          position: 'absolute',
          top: '8%',
          left: '5%',
          width: '140px',
          height: '140px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, rgba(236, 72, 153, 0.4) 50%, rgba(236, 72, 153, 0.2) 80%, transparent 100%)'
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(236, 72, 153, 0.3) 50%, rgba(236, 72, 153, 0.15) 80%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          boxShadow: isDarkMode 
            ? '0 0 50px rgba(236, 72, 153, 0.7), 0 0 100px rgba(236, 72, 153, 0.3)' 
            : '0 0 40px rgba(236, 72, 153, 0.6), 0 0 80px rgba(236, 72, 153, 0.25)',
          animationDelay: '1s'
        }} />
        <div className="animate-float-delayed" style={{
          position: 'absolute',
          top: '50%',
          right: '8%',
          width: '120px',
          height: '120px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(147, 51, 234, 0.65) 0%, rgba(147, 51, 234, 0.45) 50%, rgba(147, 51, 234, 0.25) 80%, transparent 100%)'
            : 'radial-gradient(circle, rgba(147, 51, 234, 0.55) 0%, rgba(147, 51, 234, 0.35) 50%, rgba(147, 51, 234, 0.2) 80%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(28px)',
          boxShadow: isDarkMode 
            ? '0 0 45px rgba(147, 51, 234, 0.75), 0 0 90px rgba(147, 51, 234, 0.35)' 
            : '0 0 35px rgba(147, 51, 234, 0.65), 0 0 70px rgba(147, 51, 234, 0.3)',
          animationDelay: '3s'
        }} />
        <div className="animate-float-slow" style={{
          position: 'absolute',
          bottom: '15%',
          left: '15%',
          width: '160px',
          height: '160px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.35) 50%, rgba(59, 130, 246, 0.2) 80%, transparent 100%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.25) 50%, rgba(59, 130, 246, 0.15) 80%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(35px)',
          boxShadow: isDarkMode 
            ? '0 0 55px rgba(59, 130, 246, 0.6), 0 0 110px rgba(59, 130, 246, 0.3)' 
            : '0 0 45px rgba(59, 130, 246, 0.5), 0 0 90px rgba(59, 130, 246, 0.25)',
          animationDelay: '2s'
        }} />
        <div className="animate-float" style={{
          position: 'absolute',
          top: '25%',
          left: '70%',
          width: '100px',
          height: '100px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(168, 85, 247, 0.4) 50%, rgba(168, 85, 247, 0.2) 80%, transparent 100%)'
            : 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(168, 85, 247, 0.3) 50%, rgba(168, 85, 247, 0.15) 80%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(25px)',
          boxShadow: isDarkMode 
            ? '0 0 40px rgba(168, 85, 247, 0.7), 0 0 80px rgba(168, 85, 247, 0.3)' 
            : '0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.25)',
          animationDelay: '4s'
        }} />
        <div className="animate-float-delayed" style={{
          position: 'absolute',
          bottom: '40%',
          right: '25%',
          width: '130px',
          height: '130px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(236, 72, 153, 0.55) 0%, rgba(236, 72, 153, 0.35) 50%, rgba(236, 72, 153, 0.18) 80%, transparent 100%)'
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.45) 0%, rgba(236, 72, 153, 0.25) 50%, rgba(236, 72, 153, 0.12) 80%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(32px)',
          boxShadow: isDarkMode 
            ? '0 0 48px rgba(236, 72, 153, 0.65), 0 0 96px rgba(236, 72, 153, 0.28)' 
            : '0 0 38px rgba(236, 72, 153, 0.55), 0 0 76px rgba(236, 72, 153, 0.22)',
          animationDelay: '5s'
        }} />
        <div className="animate-float-slow" style={{
          position: 'absolute',
          top: '75%',
          left: '45%',
          width: '110px',
          height: '110px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, rgba(14, 165, 233, 0.35) 50%, rgba(14, 165, 233, 0.2) 80%, transparent 100%)'
            : 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(14, 165, 233, 0.25) 50%, rgba(14, 165, 233, 0.15) 80%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(27px)',
          boxShadow: isDarkMode 
            ? '0 0 42px rgba(14, 165, 233, 0.6), 0 0 84px rgba(14, 165, 233, 0.3)' 
            : '0 0 32px rgba(14, 165, 233, 0.5), 0 0 64px rgba(14, 165, 233, 0.25)',
          animationDelay: '1s'
        }} />
        <div className="animate-float" style={{
          position: 'absolute',
          top: '15%',
          right: '40%',
          width: '90px',
          height: '90px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(139, 92, 246, 0.2) 80%, transparent 100%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0.3) 50%, rgba(139, 92, 246, 0.15) 80%, transparent 100%)',
          borderRadius: '50%',
          filter: 'blur(22px)',
          boxShadow: isDarkMode 
            ? '0 0 35px rgba(139, 92, 246, 0.7), 0 0 70px rgba(139, 92, 246, 0.3)' 
            : '0 0 25px rgba(139, 92, 246, 0.6), 0 0 50px rgba(139, 92, 246, 0.25)',
          animationDelay: '3s'
        }} />

        {/* Twinkling stars */}
        <div className="star-shape animate-float-and-twinkle" style={{
          position: 'absolute',
          top: '8%',
          left: '20%',
          width: '6px',
          height: '6px',
          background: isDarkMode ? '#ffffff' : '#f8fafc',
          boxShadow: isDarkMode 
            ? '0 0 8px rgba(255, 255, 255, 0.9), 0 0 16px rgba(255, 255, 255, 0.5)' 
            : '0 0 8px rgba(248, 250, 252, 0.9), 0 0 16px rgba(248, 250, 252, 0.5)'
        }} />
        <div className="cross-shape animate-drift-and-spin" style={{
          position: 'absolute',
          top: '25%',
          right: '25%',
          width: '2px',
          height: '2px',
          background: isDarkMode ? '#e0e7ff' : '#e0e7ff',
          boxShadow: isDarkMode 
            ? '0 0 4px rgba(224, 231, 255, 0.9), 0 0 8px rgba(224, 231, 255, 0.5)' 
            : '0 0 4px rgba(224, 231, 255, 0.9), 0 0 8px rgba(224, 231, 255, 0.5)'
        }} />
        <div className="diamond-shape animate-bounce-and-twinkle" style={{
          position: 'absolute',
          bottom: '15%',
          left: '15%',
          width: '8px',
          height: '8px',
          background: isDarkMode ? '#f0f9ff' : '#f0f9ff',
          boxShadow: isDarkMode 
            ? '0 0 12px rgba(240, 249, 255, 0.9), 0 0 24px rgba(240, 249, 255, 0.5)' 
            : '0 0 12px rgba(240, 249, 255, 0.9), 0 0 24px rgba(240, 249, 255, 0.5)'
        }} />
        <div className="circle-shape animate-float-and-twinkle" style={{
          position: 'absolute',
          top: '45%',
          left: '8%',
          width: '3px',
          height: '3px',
          background: isDarkMode ? '#faf5ff' : '#faf5ff',
          boxShadow: isDarkMode 
            ? '0 0 6px rgba(250, 245, 255, 0.9), 0 0 12px rgba(250, 245, 255, 0.5)' 
            : '0 0 6px rgba(250, 245, 255, 0.9), 0 0 12px rgba(250, 245, 255, 0.5)',
          animationDelay: '2s'
        }} />
        <div className="star-shape animate-drift-and-spin" style={{
          position: 'absolute',
          bottom: '25%',
          right: '10%',
          width: '4px',
          height: '4px',
          background: isDarkMode ? '#f0f9ff' : '#f0f9ff',
          boxShadow: isDarkMode 
            ? '0 0 8px rgba(240, 249, 255, 0.9), 0 0 16px rgba(240, 249, 255, 0.5)' 
            : '0 0 8px rgba(240, 249, 255, 0.9), 0 0 16px rgba(240, 249, 255, 0.5)',
          animationDelay: '1s'
        }} />
        <div className="cross-shape animate-bounce-and-twinkle" style={{
          position: 'absolute',
          top: '65%',
          left: '35%',
          width: '1px',
          height: '1px',
          background: isDarkMode ? '#f8fafc' : '#f8fafc',
          boxShadow: isDarkMode 
            ? '0 0 3px rgba(248, 250, 252, 0.9), 0 0 6px rgba(248, 250, 252, 0.5)' 
            : '0 0 3px rgba(248, 250, 252, 0.9), 0 0 6px rgba(248, 250, 252, 0.5)',
          animationDelay: '3s'
        }} />
        <div className="diamond-shape animate-float-and-twinkle" style={{
          position: 'absolute',
          top: '12%',
          right: '8%',
          width: '7px',
          height: '7px',
          background: isDarkMode ? '#fefefe' : '#fefefe',
          boxShadow: isDarkMode 
            ? '0 0 10px rgba(254, 254, 254, 0.9), 0 0 20px rgba(254, 254, 254, 0.5)' 
            : '0 0 10px rgba(254, 254, 254, 0.9), 0 0 20px rgba(254, 254, 254, 0.5)',
          animationDelay: '4s'
        }} />
        <div className="circle-shape animate-drift-and-spin" style={{
          position: 'absolute',
          bottom: '8%',
          left: '45%',
          width: '2px',
          height: '2px',
          background: isDarkMode ? '#f0f9ff' : '#f0f9ff',
          boxShadow: isDarkMode 
            ? '0 0 4px rgba(240, 249, 255, 0.9), 0 0 8px rgba(240, 249, 255, 0.5)' 
            : '0 0 4px rgba(240, 249, 255, 0.9), 0 0 8px rgba(240, 249, 255, 0.5)',
          animationDelay: '2s'
        }} />
        <div className="star-shape animate-bounce-and-twinkle" style={{
          position: 'absolute',
          top: '35%',
          right: '15%',
          width: '9px',
          height: '9px',
          background: isDarkMode ? '#ffffff' : '#ffffff',
          boxShadow: isDarkMode 
            ? '0 0 14px rgba(255, 255, 255, 0.9), 0 0 28px rgba(255, 255, 255, 0.5)' 
            : '0 0 14px rgba(255, 255, 255, 0.9), 0 0 28px rgba(255, 255, 255, 0.5)',
          animationDelay: '5s'
        }} />
        <div className="cross-shape animate-float-and-twinkle" style={{
          position: 'absolute',
          bottom: '40%',
          left: '25%',
          width: '3px',
          height: '3px',
          background: isDarkMode ? '#faf5ff' : '#faf5ff',
          boxShadow: isDarkMode 
            ? '0 0 6px rgba(250, 245, 255, 0.9), 0 0 12px rgba(250, 245, 255, 0.5)' 
            : '0 0 6px rgba(250, 245, 255, 0.9), 0 0 12px rgba(250, 245, 255, 0.5)',
          animationDelay: '1s'
        }} />
        <div className="diamond-shape animate-drift-and-spin" style={{
          position: 'absolute',
          top: '80%',
          right: '35%',
          width: '5px',
          height: '5px',
          background: isDarkMode ? '#f0f9ff' : '#f0f9ff',
          boxShadow: isDarkMode 
            ? '0 0 10px rgba(240, 249, 255, 0.9), 0 0 20px rgba(240, 249, 255, 0.5)' 
            : '0 0 10px rgba(240, 249, 255, 0.9), 0 0 20px rgba(240, 249, 255, 0.5)',
          animationDelay: '3s'
        }} />
        <div className="circle-shape animate-bounce-and-twinkle" style={{
          position: 'absolute',
          top: '18%',
          left: '60%',
          width: '4px',
          height: '4px',
          background: isDarkMode ? '#f8fafc' : '#f8fafc',
          boxShadow: isDarkMode 
            ? '0 0 8px rgba(248, 250, 252, 0.9), 0 0 16px rgba(248, 250, 252, 0.5)' 
            : '0 0 8px rgba(248, 250, 252, 0.9), 0 0 16px rgba(248, 250, 252, 0.5)',
          animationDelay: '2s'
        }} />
        <div className="star-shape animate-float-and-twinkle" style={{
          position: 'absolute',
          bottom: '60%',
          right: '5%',
          width: '2px',
          height: '2px',
          background: isDarkMode ? '#faf5ff' : '#faf5ff',
          boxShadow: isDarkMode 
            ? '0 0 4px rgba(250, 245, 255, 0.9), 0 0 8px rgba(250, 245, 255, 0.5)' 
            : '0 0 4px rgba(250, 245, 255, 0.9), 0 0 8px rgba(250, 245, 255, 0.5)',
          animationDelay: '4s'
        }} />
        <div className="cross-shape animate-drift-and-spin" style={{
          position: 'absolute',
          top: '55%',
          left: '70%',
          width: '6px',
          height: '6px',
          background: isDarkMode ? '#f0f9ff' : '#f0f9ff',
          boxShadow: isDarkMode 
            ? '0 0 10px rgba(240, 249, 255, 0.9), 0 0 20px rgba(240, 249, 255, 0.5)' 
            : '0 0 10px rgba(240, 249, 255, 0.9), 0 0 20px rgba(240, 249, 255, 0.5)',
          animationDelay: '1s'
        }} />
        <div className="diamond-shape animate-bounce-and-twinkle" style={{
          position: 'absolute',
          bottom: '20%',
          left: '80%',
          width: '3px',
          height: '3px',
          background: isDarkMode ? '#ffffff' : '#ffffff',
          boxShadow: isDarkMode 
            ? '0 0 6px rgba(255, 255, 255, 0.9), 0 0 12px rgba(255, 255, 255, 0.5)' 
            : '0 0 6px rgba(255, 255, 255, 0.9), 0 0 12px rgba(255, 255, 255, 0.5)',
          animationDelay: '3s'
        }} />
        <div className="circle-shape animate-float-and-twinkle" style={{
          position: 'absolute',
          top: '75%',
          left: '10%',
          width: '5px',
          height: '5px',
          background: isDarkMode ? '#faf5ff' : '#faf5ff',
          boxShadow: isDarkMode 
            ? '0 0 8px rgba(250, 245, 255, 0.9), 0 0 16px rgba(250, 245, 255, 0.5)' 
            : '0 0 8px rgba(250, 245, 255, 0.9), 0 0 16px rgba(250, 245, 255, 0.5)',
          animationDelay: '5s'
        }} />
        <div className="star-shape animate-drift-and-spin" style={{
          position: 'absolute',
          top: '30%',
          left: '85%',
          width: '2px',
          height: '2px',
          background: isDarkMode ? '#f0f9ff' : '#f0f9ff',
          boxShadow: isDarkMode 
            ? '0 0 4px rgba(240, 249, 255, 0.9), 0 0 8px rgba(240, 249, 255, 0.5)' 
            : '0 0 4px rgba(240, 249, 255, 0.9), 0 0 8px rgba(240, 249, 255, 0.5)',
          animationDelay: '2s'
        }} />
      </div>

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '80px 40px'
      }} className="main-container">
        <div style={{
          maxWidth: '1400px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '100px'
        }} className="desktop-horizontal">
          {/* Left side - Profile and Info */}
          <div style={{
            flex: '0 0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            maxWidth: '400px'
          }} className="profile-container">
            {/* Profile Image */}
            <div style={{
              marginBottom: '24px',
              position: 'relative',
              display: 'inline-block'
            }}>
              <div style={{
                width: '240px',
                height: '240px',
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: isDarkMode 
                  ? '0 12px 40px rgba(168, 85, 247, 0.25), 0 4px 16px rgba(168, 85, 247, 0.15)' 
                  : '0 12px 40px rgba(139, 92, 246, 0.2), 0 4px 16px rgba(139, 92, 246, 0.12)',
                border: isDarkMode 
                  ? '3px solid rgba(168, 85, 247, 0.4)' 
                  : '3px solid rgba(196, 181, 253, 0.5)',
                backgroundColor: '#f8f9fa',
                position: 'relative',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = isDarkMode 
                  ? '0 20px 50px rgba(168, 85, 247, 0.4), 0 8px 20px rgba(168, 85, 247, 0.25)' 
                  : '0 20px 50px rgba(139, 92, 246, 0.3), 0 8px 20px rgba(139, 92, 246, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow = isDarkMode 
                  ? '0 12px 40px rgba(168, 85, 247, 0.25), 0 4px 16px rgba(168, 85, 247, 0.15)' 
                  : '0 12px 40px rgba(139, 92, 246, 0.2), 0 4px 16px rgba(139, 92, 246, 0.12)';
              }}>
                <img 
                  src="/profile.jpg" 
                  alt="Alicia Yu"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </div>

            {/* Name and Title */}
            <div style={{ 
              position: 'relative', 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100%',
              marginBottom: '32px'
            }}>
              <h1 style={{
                fontSize: '4.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#ffffff' : '#7C6FBE',
                margin: '0 0 8px 0',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                width: '100%'
              }} className={isDarkMode ? 'neon-glow' : ''}>
                alicia yu
              </h1>
              <p style={{
                fontSize: '1.2rem',
                color: isDarkMode ? '#b39ddb' : '#7C6FBE',
                margin: '0.2rem 0',
                fontWeight: '600',
                lineHeight: '1.5',
                whiteSpace: 'normal',
                wordWrap: 'break-word',
                textAlign: 'center',
                width: '100%'
              }}>
                cs + stats @ ucla
              </p>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              width: '100%',
              maxWidth: 'min(250px, calc(100vw - 60px))',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 20px',
              boxSizing: 'border-box'
            }} className="button-container">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: '12px 20px',
                    background: isDarkMode 
                      ? 'linear-gradient(90deg, #f9a8d4 0%, #a78bfa 100%)' 
                      : 'linear-gradient(90deg, #fde7f4 0%, #e9d5ff 100%)',
                    color: isDarkMode ? '#4c1d95' : '#7C6FBE',
                    borderRadius: '25px',
                    fontWeight: '500',
                    textDecoration: 'none',
                    boxShadow: isDarkMode 
                      ? '0 4px 12px rgba(168, 85, 247, 0.2)' 
                      : '0 4px 12px rgba(139, 92, 246, 0.15)',
                    border: isDarkMode 
                      ? '1px solid rgba(168, 85, 247, 0.4)' 
                      : '1px solid rgba(196, 181, 253, 0.5)',
                    transition: 'all 0.2s ease',
                    backdropFilter: 'blur(10px)',
                    fontSize: '0.95rem',
                    width: '100%',
                    maxWidth: '100%',
                    minWidth: '0',
                    textAlign: 'center',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = isDarkMode 
                      ? '0 8px 20px rgba(168, 85, 247, 0.3)' 
                      : '0 8px 20px rgba(139, 92, 246, 0.25)';
                    e.currentTarget.style.backgroundColor = isDarkMode 
                      ? 'rgba(45, 27, 61, 0.95)' 
                      : 'rgba(253, 242, 248, 0.95)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0px)';
                    e.currentTarget.style.boxShadow = isDarkMode 
                      ? '0 4px 12px rgba(168, 85, 247, 0.2)' 
                      : '0 4px 12px rgba(139, 92, 246, 0.15)';
                    e.currentTarget.style.backgroundColor = isDarkMode 
                      ? 'rgba(45, 27, 61, 0.8)' 
                      : 'rgba(253, 242, 248, 0.8)';
                  }}
                >
                  <Icon size={18} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - About Section */}
          <div style={{
            flex: '1 1 auto',
            maxWidth: '700px'
          }} className="text-content-container">
            <div style={{
              backgroundColor: isDarkMode 
                ? 'rgba(45, 27, 61, 0.7)' 
                : 'rgba(253, 242, 248, 0.7)',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: isDarkMode 
                ? '0 8px 32px rgba(168, 85, 247, 0.15)' 
                : '0 8px 32px rgba(139, 92, 246, 0.12)',
              border: isDarkMode 
                ? '1px solid rgba(168, 85, 247, 0.3)' 
                : '1px solid rgba(196, 181, 253, 0.4)',
              backdropFilter: 'blur(10px)',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = isDarkMode 
                ? '0 12px 40px rgba(168, 85, 247, 0.25)' 
                : '0 12px 40px rgba(139, 92, 246, 0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = isDarkMode 
                ? '0 8px 32px rgba(168, 85, 247, 0.15)' 
                : '0 8px 32px rgba(139, 92, 246, 0.12)';
            }}>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#d1c4e9' : '#7C6FBE',
                marginBottom: '20px',
                letterSpacing: '-0.01em'
              }}>
                about me
              </h2>
              <p style={{
                color: isDarkMode ? '#b39ddb' : '#7C6FBE',
                lineHeight: '1.6',
                fontSize: '1rem',
                margin: 0,
                paddingBottom: '1.5rem',
                whiteSpace: 'pre-line'
              }}>
                {`Hi, I'm Alicia! I'm a computer science student at UCLA with a passion for building AI-powered solutions that are not only technically robust, but also ethical, accessible, and impactful. I've developed full-stack applications using frameworks like React, Next.js, and TypeScript, and worked with data science tools such as PyTorch, scikit-learn, and Pandas to create tangible solutions. From crafting LLM-powered chatbots with persistent memory to engineering OCR pipelines that support healthcare providers, I am driven by the intersection of smart technology and practical impact.

I care deeply about making technology work for everyone. That means writing scalable and maintainable code, but also designing with accessibility in mind and considering who gets to benefit from the tools we build. Whether I'm working on backend infrastructure or user-facing apps, I'm always asking: how can this better serve real people?

In my spare time, I enjoy creative writing, language learning, and graphic design. While I started college wanting to become a software engineer or UI/UX designer, I found myself drawn to data science because of its unique ability to reveal stories in numbers and patterns. I love exploring new interests that blend art and science, and I'm also currently trying to get into voice acting and musical theater!

Thanks for stopping by! I'm excited to keep learning, building, and pushing for technology that empowers.`}
              </p>
            </div>
            <p></p>
            {/* What I'm Up To Section */}
            <div style={{
              backgroundColor: isDarkMode 
                ? 'rgba(45, 27, 61, 0.7)' 
                : 'rgba(253, 242, 248, 0.7)',
              borderRadius: '20px',
              padding: '30px',
              marginTop: '20px',
              boxShadow: isDarkMode 
                ? '0 8px 32px rgba(168, 85, 247, 0.15)' 
                : '0 8px 32px rgba(139, 92, 246, 0.12)',
              border: isDarkMode 
                ? '1px solid rgba(168, 85, 247, 0.3)' 
                : '1px solid rgba(196, 181, 253, 0.4)',
              backdropFilter: 'blur(10px)',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = isDarkMode 
                ? '0 12px 40px rgba(168, 85, 247, 0.25)' 
                : '0 12px 40px rgba(139, 92, 246, 0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = isDarkMode 
                ? '0 8px 32px rgba(168, 85, 247, 0.15)' 
                : '0 8px 32px rgba(139, 92, 246, 0.12)';
            }}>
              <h2 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: isDarkMode ? '#d1c4e9' : '#7C6FBE',
                marginBottom: '15px',
                letterSpacing: '-0.01em',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🚀</span>
                what i'm up to
              </h2>
              <p style={{
                color: isDarkMode ? '#b39ddb' : '#7C6FBE',
                lineHeight: '1.6',
                fontSize: '1rem',
                paddingBottom: '1.5rem',
                margin: 0
              }}>
                Exploring LLM-aided data storage and migration solutions @ <a href="https://www.avepoint.com/" target="_blank" rel="noopener noreferrer" style={{ color: isDarkMode ? '#d1c4e9' : '#7C6FBE', fontWeight: 'bold', textDecoration: 'underline' }}>AvePoint</a>
              </p>
            </div>
            <p></p>
            {/* What I'm Listening To Section */}
            <div style={{
              backgroundColor: isDarkMode 
                ? 'rgba(45, 27, 61, 0.7)' 
                : 'rgba(253, 242, 248, 0.7)',
              borderRadius: '20px',
              padding: '30px',
              marginTop: '20px',
              boxShadow: isDarkMode 
                ? '0 8px 32px rgba(168, 85, 247, 0.15)' 
                : '0 8px 32px rgba(139, 92, 246, 0.12)',
              border: isDarkMode 
                ? '1px solid rgba(168, 85, 247, 0.3)' 
                : '1px solid rgba(196, 181, 253, 0.4)',
              backdropFilter: 'blur(10px)',
              textAlign: 'left',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = isDarkMode 
                ? '0 12px 40px rgba(168, 85, 247, 0.25)' 
                : '0 12px 40px rgba(139, 92, 246, 0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = isDarkMode 
                ? '0 8px 32px rgba(168, 85, 247, 0.15)' 
                : '0 8px 32px rgba(139, 92, 246, 0.12)';
            }}>
              <h2 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: isDarkMode ? '#d1c4e9' : '#7C6FBE',
                marginBottom: '15px',
                letterSpacing: '-0.01em',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🎧</span>
                what i'm listening to
              </h2>
              <p style={{
                color: isDarkMode ? '#b39ddb' : '#7C6FBE',
                lineHeight: '1.6',
                fontSize: '1rem',
                paddingBottom: '1.5rem',
                margin: 0
              }}>
                <a href="https://www.youtube.com/watch?v=lzMkFIw8ETM" target="_blank" rel="noopener noreferrer" style={{ color: isDarkMode ? '#d1c4e9' : '#7C6FBE', fontWeight: 'bold', textDecoration: 'underline' }}>Knock Yourself Out XD</a> by Porter Robinson
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}