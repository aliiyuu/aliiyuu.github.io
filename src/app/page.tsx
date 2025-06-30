'use client';
import { Mail, FileText, Github, Linkedin, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div style={{
      minHeight: '100vh',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #1a0b2e 0%, #2d1b3d 15%, #4a3a6b 30%, #3b2a5e 45%, #4a1e4a 60%, #5c3a8b 75%, #6b2e6b 90%, #2d1b3d 100%)'
        : 'linear-gradient(135deg, #faf0e6 0%, #e8d5ff 20%, #d6e8ff 40%, #f8d7da 60%, #ddd6fe 80%, #fce7f3 100%)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Dark mode toggle button */}
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
          backgroundColor: isDarkMode 
            ? 'rgba(253, 242, 248, 0.9)' 
            : 'rgba(124, 111, 190, 0.9)',
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
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Subtle floating elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '120px',
          height: '120px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.1) 70%)'
            : 'radial-gradient(circle, rgba(196, 181, 253, 0.3) 0%, rgba(196, 181, 253, 0.1) 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '30%',
          right: '20%',
          width: '80px',
          height: '80px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(219, 39, 119, 0.25) 0%, rgba(236, 72, 153, 0.08) 70%)'
            : 'radial-gradient(circle, rgba(244, 114, 182, 0.25) 0%, rgba(244, 114, 182, 0.08) 70%)',
          borderRadius: '50%',
          filter: 'blur(25px)',
          animation: 'float 10s ease-in-out infinite',
          animationDelay: '3s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '100px',
          height: '100px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, rgba(147, 51, 234, 0.06) 70%)'
            : 'radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, rgba(167, 139, 250, 0.05) 70%)',
          borderRadius: '50%',
          filter: 'blur(35px)',
          animation: 'float 12s ease-in-out infinite',
          animationDelay: '6s'
        }}></div>
        
        {/* Floating pastel clouds */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '200px',
          height: '120px',
          background: isDarkMode 
            ? 'radial-gradient(ellipse, rgba(236, 72, 153, 0.7) 0%, rgba(236, 72, 153, 0.4) 30%, rgba(236, 72, 153, 0.1) 60%, transparent 80%)'
            : 'radial-gradient(ellipse, rgba(248, 180, 217, 0.9) 0%, rgba(248, 180, 217, 0.6) 30%, rgba(248, 180, 217, 0.2) 60%, transparent 80%)',
          borderRadius: '80px',
          filter: 'blur(35px)',
          animation: 'cloudFloat1 20s ease-in-out infinite',
          boxShadow: isDarkMode 
            ? '0 0 80px rgba(236, 72, 153, 0.8), 0 0 160px rgba(236, 72, 153, 0.6), 0 0 240px rgba(236, 72, 153, 0.3)'
            : '0 0 60px rgba(248, 180, 217, 0.9), 0 0 120px rgba(248, 180, 217, 0.7), 0 0 180px rgba(248, 180, 217, 0.4)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '8%',
          width: '250px',
          height: '140px',
          background: isDarkMode 
            ? 'radial-gradient(ellipse, rgba(168, 85, 247, 0.8) 0%, rgba(168, 85, 247, 0.5) 30%, rgba(168, 85, 247, 0.15) 60%, transparent 80%)'
            : 'radial-gradient(ellipse, rgba(196, 181, 253, 1.0) 0%, rgba(196, 181, 253, 0.7) 30%, rgba(196, 181, 253, 0.25) 60%, transparent 80%)',
          borderRadius: '90px',
          filter: 'blur(40px)',
          animation: 'cloudFloat2 25s ease-in-out infinite',
          animationDelay: '5s',
          boxShadow: isDarkMode 
            ? '0 0 100px rgba(168, 85, 247, 0.9), 0 0 180px rgba(168, 85, 247, 0.7), 0 0 260px rgba(168, 85, 247, 0.4)'
            : '0 0 70px rgba(196, 181, 253, 1.0), 0 0 140px rgba(196, 181, 253, 0.8), 0 0 210px rgba(196, 181, 253, 0.5)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '12%',
          width: '180px',
          height: '110px',
          background: isDarkMode 
            ? 'radial-gradient(ellipse, rgba(147, 197, 253, 0.8) 0%, rgba(147, 197, 253, 0.5) 30%, rgba(147, 197, 253, 0.2) 60%, transparent 80%)'
            : 'radial-gradient(ellipse, rgba(191, 219, 254, 1.1) 0%, rgba(191, 219, 254, 0.8) 30%, rgba(191, 219, 254, 0.3) 60%, transparent 80%)',
          borderRadius: '70px',
          filter: 'blur(32px)',
          animation: 'cloudFloat3 18s ease-in-out infinite',
          animationDelay: '10s',
          boxShadow: isDarkMode 
            ? '0 0 90px rgba(147, 197, 253, 1.0), 0 0 170px rgba(147, 197, 253, 0.8), 0 0 250px rgba(147, 197, 253, 0.5)'
            : '0 0 65px rgba(191, 219, 254, 1.1), 0 0 130px rgba(191, 219, 254, 0.9), 0 0 195px rgba(191, 219, 254, 0.6)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '65%',
          right: '25%',
          width: '220px',
          height: '130px',
          background: isDarkMode 
            ? 'radial-gradient(ellipse, rgba(244, 114, 182, 0.7) 0%, rgba(244, 114, 182, 0.4) 30%, rgba(244, 114, 182, 0.1) 60%, transparent 80%)'
            : 'radial-gradient(ellipse, rgba(251, 207, 232, 1.05) 0%, rgba(251, 207, 232, 0.7) 30%, rgba(251, 207, 232, 0.25) 60%, transparent 80%)',
          borderRadius: '85px',
          filter: 'blur(38px)',
          animation: 'cloudFloat4 22s ease-in-out infinite',
          animationDelay: '3s',
          boxShadow: isDarkMode 
            ? '0 0 95px rgba(244, 114, 182, 0.8), 0 0 175px rgba(244, 114, 182, 0.6), 0 0 255px rgba(244, 114, 182, 0.3)'
            : '0 0 68px rgba(251, 207, 232, 1.0), 0 0 135px rgba(251, 207, 232, 0.8), 0 0 200px rgba(251, 207, 232, 0.5)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '8%',
          right: '20%',
          width: '160px',
          height: '90px',
          background: isDarkMode 
            ? 'radial-gradient(ellipse, rgba(124, 58, 237, 0.8) 0%, rgba(124, 58, 237, 0.5) 30%, rgba(124, 58, 237, 0.15) 60%, transparent 80%)'
            : 'radial-gradient(ellipse, rgba(221, 214, 254, 0.95) 0%, rgba(221, 214, 254, 0.65) 30%, rgba(221, 214, 254, 0.2) 60%, transparent 80%)',
          borderRadius: '65px',
          filter: 'blur(30px)',
          animation: 'cloudFloat5 16s ease-in-out infinite',
          animationDelay: '8s',
          boxShadow: isDarkMode 
            ? '0 0 85px rgba(124, 58, 237, 0.9), 0 0 155px rgba(124, 58, 237, 0.7), 0 0 225px rgba(124, 58, 237, 0.4)'
            : '0 0 55px rgba(221, 214, 254, 0.9), 0 0 110px rgba(221, 214, 254, 0.7), 0 0 165px rgba(221, 214, 254, 0.5)'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '210px',
          height: '125px',
          background: isDarkMode 
            ? 'radial-gradient(ellipse, rgba(139, 92, 246, 0.8) 0%, rgba(139, 92, 246, 0.5) 30%, rgba(139, 92, 246, 0.12) 60%, transparent 80%)'
            : 'radial-gradient(ellipse, rgba(233, 213, 255, 1.0) 0%, rgba(233, 213, 255, 0.7) 30%, rgba(233, 213, 255, 0.25) 60%, transparent 80%)',
          borderRadius: '80px',
          filter: 'blur(36px)',
          animation: 'cloudFloat6 24s ease-in-out infinite',
          animationDelay: '12s',
          boxShadow: isDarkMode 
            ? '0 0 98px rgba(139, 92, 246, 0.9), 0 0 185px rgba(139, 92, 246, 0.7), 0 0 270px rgba(139, 92, 246, 0.4)'
            : '0 0 70px rgba(233, 213, 255, 1.0), 0 0 140px rgba(233, 213, 255, 0.8), 0 0 210px rgba(233, 213, 255, 0.5)'
        }}></div>

        {/* Additional night sky elements for dark mode */}
        {isDarkMode && (
          <>
            <div style={{
              position: 'absolute',
              top: '60%',
              right: '10%',
              width: '60px',
              height: '60px',
              background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(147, 51, 234, 0.1) 70%)',
              borderRadius: '50%',
              filter: 'blur(20px)',
              animation: 'float 9s ease-in-out infinite',
              animationDelay: '1s'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '80%',
              left: '60%',
              width: '40px',
              height: '40px',
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(236, 72, 153, 0.15) 70%)',
              borderRadius: '50%',
              filter: 'blur(15px)',
              animation: 'float 7s ease-in-out infinite',
              animationDelay: '4s'
            }}></div>
            <div style={{
              position: 'absolute',
              top: '5%',
              right: '40%',
              width: '30px',
              height: '30px',
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(168, 85, 247, 0.2) 70%)',
              borderRadius: '50%',
              filter: 'blur(12px)',
              animation: 'float 11s ease-in-out infinite',
              animationDelay: '2s'
            }}></div>
          </>
        )}
        
        {/* Animated glowing stars */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '25%',
          width: '20px',
          height: '20px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(168, 85, 247, 0.5) 100%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.7) 0%, rgba(196, 181, 253, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(168, 85, 247, 0.5)'
            : '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(196, 181, 253, 0.4)',
          animation: 'star1 15s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '45%',
          right: '30%',
          width: '16px',
          height: '16px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(236, 72, 153, 0.5) 100%)'
            : 'radial-gradient(circle, rgba(244, 114, 182, 0.6) 0%, rgba(251, 207, 232, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 35px rgba(255, 255, 255, 0.7), 0 0 70px rgba(236, 72, 153, 0.5)'
            : '0 0 25px rgba(244, 114, 182, 0.6), 0 0 50px rgba(251, 207, 232, 0.4)',
          animation: 'star2 18s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '30%',
          left: '70%',
          width: '14px',
          height: '14px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(124, 58, 237, 0.6) 100%)'
            : 'radial-gradient(circle, rgba(167, 139, 250, 0.7) 0%, rgba(221, 214, 254, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 30px rgba(255, 255, 255, 0.9), 0 0 60px rgba(124, 58, 237, 0.6)'
            : '0 0 20px rgba(167, 139, 250, 0.6), 0 0 40px rgba(221, 214, 254, 0.4)',
          animation: 'star3 12s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '70%',
          left: '15%',
          width: '18px',
          height: '18px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(147, 51, 234, 0.5) 100%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(233, 213, 255, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 45px rgba(255, 255, 255, 0.8), 0 0 90px rgba(147, 51, 234, 0.5)'
            : '0 0 35px rgba(139, 92, 246, 0.5), 0 0 70px rgba(233, 213, 255, 0.4)',
          animation: 'star4 20s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '25%',
          right: '15%',
          width: '12px',
          height: '12px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(219, 39, 119, 0.5) 100%)'
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, rgba(252, 231, 243, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 25px rgba(255, 255, 255, 0.7), 0 0 50px rgba(219, 39, 119, 0.5)'
            : '0 0 18px rgba(236, 72, 153, 0.5), 0 0 36px rgba(252, 231, 243, 0.4)',
          animation: 'star5 14s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '25%',
          width: '22px',
          height: '22px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(168, 85, 247, 0.6) 100%)'
            : 'radial-gradient(circle, rgba(124, 58, 237, 0.7) 0%, rgba(196, 181, 253, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 50px rgba(255, 255, 255, 0.9), 0 0 100px rgba(168, 85, 247, 0.6)'
            : '0 0 40px rgba(124, 58, 237, 0.6), 0 0 80px rgba(196, 181, 253, 0.4)',
          animation: 'star6 16s ease-in-out infinite'
        }}></div>
        
        {/* Additional twinkling stars */}
        <div style={{
          position: 'absolute',
          top: '35%',
          left: '5%',
          width: '15px',
          height: '15px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(147, 197, 253, 0.6) 100%)'
            : 'radial-gradient(circle, rgba(147, 197, 253, 0.7) 0%, rgba(191, 219, 254, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 35px rgba(255, 255, 255, 0.8), 0 0 70px rgba(147, 197, 253, 0.6)'
            : '0 0 25px rgba(147, 197, 253, 0.6), 0 0 50px rgba(191, 219, 254, 0.4)',
          animation: 'star7 13s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '55%',
          left: '85%',
          width: '19px',
          height: '19px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(244, 114, 182, 0.6) 100%)'
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.7) 0%, rgba(252, 231, 243, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 45px rgba(255, 255, 255, 0.9), 0 0 90px rgba(244, 114, 182, 0.6)'
            : '0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(252, 231, 243, 0.4)',
          animation: 'star8 19s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '45%',
          left: '3%',
          width: '13px',
          height: '13px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(139, 92, 246, 0.5) 100%)'
            : 'radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, rgba(233, 213, 255, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 30px rgba(255, 255, 255, 0.7), 0 0 60px rgba(139, 92, 246, 0.5)'
            : '0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(233, 213, 255, 0.4)',
          animation: 'star9 11s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '80%',
          right: '45%',
          width: '17px',
          height: '17px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(219, 39, 119, 0.5) 100%)'
            : 'radial-gradient(circle, rgba(244, 114, 182, 0.6) 0%, rgba(251, 207, 232, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 40px rgba(255, 255, 255, 0.8), 0 0 80px rgba(219, 39, 119, 0.5)'
            : '0 0 28px rgba(244, 114, 182, 0.5), 0 0 56px rgba(251, 207, 232, 0.4)',
          animation: 'star10 17s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '60%',
          width: '21px',
          height: '21px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(147, 51, 234, 0.6) 100%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.7) 0%, rgba(196, 181, 253, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 55px rgba(255, 255, 255, 0.9), 0 0 110px rgba(147, 51, 234, 0.6)'
            : '0 0 38px rgba(139, 92, 246, 0.6), 0 0 76px rgba(196, 181, 253, 0.4)',
          animation: 'star11 21s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '70%',
          right: '8%',
          width: '11px',
          height: '11px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(168, 85, 247, 0.5) 100%)'
            : 'radial-gradient(circle, rgba(167, 139, 250, 0.6) 0%, rgba(221, 214, 254, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 25px rgba(255, 255, 255, 0.6), 0 0 50px rgba(168, 85, 247, 0.5)'
            : '0 0 18px rgba(167, 139, 250, 0.5), 0 0 36px rgba(221, 214, 254, 0.4)',
          animation: 'star12 9s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '90%',
          left: '25%',
          width: '24px',
          height: '24px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(236, 72, 153, 0.7) 100%)'
            : 'radial-gradient(circle, rgba(219, 39, 119, 0.7) 0%, rgba(248, 180, 217, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 60px rgba(255, 255, 255, 1), 0 0 120px rgba(236, 72, 153, 0.7)'
            : '0 0 42px rgba(219, 39, 119, 0.6), 0 0 84px rgba(248, 180, 217, 0.4)',
          animation: 'star13 23s ease-in-out infinite'
        }}></div>
        
        {/* Mystical will o' the wisps */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '8px',
          height: '8px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(173, 216, 230, 1) 0%, rgba(135, 206, 235, 0.8) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(135, 206, 235, 0.9) 0%, rgba(173, 216, 230, 0.6) 50%, transparent 100%)',
          borderRadius: '50%',
          boxShadow: isDarkMode 
            ? '0 0 20px rgba(173, 216, 230, 0.9), 0 0 40px rgba(135, 206, 235, 0.7), 0 0 60px rgba(173, 216, 230, 0.4)'
            : '0 0 15px rgba(135, 206, 235, 0.8), 0 0 30px rgba(173, 216, 230, 0.6), 0 0 45px rgba(173, 216, 230, 0.3)',
          filter: 'blur(1px)',
          animation: 'wisp1 12s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '6px',
          height: '6px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 182, 193, 1) 0%, rgba(255, 192, 203, 0.8) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 182, 193, 0.8) 0%, rgba(255, 192, 203, 0.5) 50%, transparent 100%)',
          borderRadius: '50%',
          boxShadow: isDarkMode 
            ? '0 0 18px rgba(255, 182, 193, 0.9), 0 0 35px rgba(255, 192, 203, 0.7), 0 0 50px rgba(255, 192, 203, 0.4)'
            : '0 0 12px rgba(255, 182, 193, 0.7), 0 0 25px rgba(255, 192, 203, 0.5), 0 0 38px rgba(255, 192, 203, 0.2)',
          filter: 'blur(0.8px)',
          animation: 'wisp2 15s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '30%',
          left: '25%',
          width: '10px',
          height: '10px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(221, 160, 221, 1) 0%, rgba(186, 85, 211, 0.8) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(186, 85, 211, 0.8) 0%, rgba(221, 160, 221, 0.6) 50%, transparent 100%)',
          borderRadius: '50%',
          boxShadow: isDarkMode 
            ? '0 0 25px rgba(221, 160, 221, 0.9), 0 0 50px rgba(186, 85, 211, 0.7), 0 0 75px rgba(221, 160, 221, 0.4)'
            : '0 0 18px rgba(186, 85, 211, 0.7), 0 0 35px rgba(221, 160, 221, 0.5), 0 0 52px rgba(221, 160, 221, 0.3)',
          filter: 'blur(1.2px)',
          animation: 'wisp3 18s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '35%',
          left: '70%',
          width: '7px',
          height: '7px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(196, 181, 253, 1) 0%, rgba(147, 112, 219, 0.8) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(152, 251, 152, 0.7) 0%, rgba(144, 238, 144, 0.5) 50%, transparent 100%)',
          borderRadius: '50%',
          boxShadow: isDarkMode 
            ? '0 0 22px rgba(196, 181, 253, 0.9), 0 0 44px rgba(147, 112, 219, 0.7), 0 0 66px rgba(147, 112, 219, 0.4)'
            : '0 0 14px rgba(152, 251, 152, 0.6), 0 0 28px rgba(144, 238, 144, 0.4), 0 0 42px rgba(144, 238, 144, 0.2)',
          filter: 'blur(0.9px)',
          animation: 'wisp4 14s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '30%',
          width: '9px',
          height: '9px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 218, 185, 1) 0%, rgba(255, 192, 203, 0.8) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(255, 228, 196, 0.8) 0%, rgba(255, 218, 185, 0.5) 50%, transparent 100%)',
          borderRadius: '50%',
          boxShadow: isDarkMode 
            ? '0 0 24px rgba(255, 218, 185, 0.9), 0 0 48px rgba(255, 192, 203, 0.7), 0 0 72px rgba(255, 192, 203, 0.4)'
            : '0 0 16px rgba(255, 228, 196, 0.7), 0 0 32px rgba(255, 218, 185, 0.4), 0 0 48px rgba(255, 218, 185, 0.2)',
          filter: 'blur(1px)',
          animation: 'wisp5 20s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '75%',
          left: '45%',
          width: '5px',
          height: '5px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(230, 230, 250, 1) 0%, rgba(221, 160, 221, 0.8) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(230, 230, 250, 0.7) 0%, rgba(230, 230, 250, 0.4) 50%, transparent 100%)',
          borderRadius: '50%',
          boxShadow: isDarkMode 
            ? '0 0 15px rgba(230, 230, 250, 0.9), 0 0 30px rgba(221, 160, 221, 0.7), 0 0 45px rgba(221, 160, 221, 0.4)'
            : '0 0 10px rgba(230, 230, 250, 0.6), 0 0 20px rgba(230, 230, 250, 0.3), 0 0 30px rgba(230, 230, 250, 0.1)',
          filter: 'blur(0.7px)',
          animation: 'wisp6 16s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '45%',
          left: '5%',
          width: '11px',
          height: '11px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(175, 238, 238, 1) 0%, rgba(173, 216, 230, 0.8) 50%, transparent 100%)'
            : 'radial-gradient(circle, rgba(175, 238, 238, 0.9) 0%, rgba(175, 238, 238, 0.6) 50%, transparent 100%)',
          borderRadius: '50%',
          boxShadow: isDarkMode 
            ? '0 0 28px rgba(175, 238, 238, 0.9), 0 0 55px rgba(173, 216, 230, 0.7), 0 0 80px rgba(173, 216, 230, 0.4)'
            : '0 0 20px rgba(175, 238, 238, 0.8), 0 0 40px rgba(175, 238, 238, 0.5), 0 0 60px rgba(175, 238, 238, 0.3)',
          filter: 'blur(1.3px)',
          animation: 'wisp7 22s ease-in-out infinite'
        }}></div>

        {/* Additional twinkling stars */}
        <div style={{
          position: 'absolute',
          top: '35%',
          left: '8%',
          width: '8px',
          height: '8px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(168, 85, 247, 0.4) 100%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, rgba(196, 181, 253, 0.3) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(168, 85, 247, 0.4)'
            : '0 0 15px rgba(139, 92, 246, 0.6), 0 0 30px rgba(196, 181, 253, 0.3)',
          animation: 'twinkle1 3s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '55%',
          right: '12%',
          width: '6px',
          height: '6px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(236, 72, 153, 0.5) 100%)'
            : 'radial-gradient(circle, rgba(244, 114, 182, 0.7) 0%, rgba(251, 207, 232, 0.3) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 18px rgba(255, 255, 255, 0.7), 0 0 35px rgba(236, 72, 153, 0.4)'
            : '0 0 12px rgba(244, 114, 182, 0.5), 0 0 25px rgba(251, 207, 232, 0.3)',
          animation: 'twinkle2 4s ease-in-out infinite',
          animationDelay: '1s'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '45%',
          left: '85%',
          width: '10px',
          height: '10px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(124, 58, 237, 0.6) 100%)'
            : 'radial-gradient(circle, rgba(167, 139, 250, 0.8) 0%, rgba(221, 214, 254, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 25px rgba(255, 255, 255, 0.9), 0 0 50px rgba(124, 58, 237, 0.5)'
            : '0 0 18px rgba(167, 139, 250, 0.6), 0 0 35px rgba(221, 214, 254, 0.4)',
          animation: 'twinkle3 2.5s ease-in-out infinite',
          animationDelay: '0.5s'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '85%',
          left: '25%',
          width: '7px',
          height: '7px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(147, 51, 234, 0.5) 100%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.7) 0%, rgba(233, 213, 255, 0.3) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 22px rgba(255, 255, 255, 0.8), 0 0 45px rgba(147, 51, 234, 0.4)'
            : '0 0 14px rgba(139, 92, 246, 0.5), 0 0 28px rgba(233, 213, 255, 0.3)',
          animation: 'twinkle4 3.5s ease-in-out infinite',
          animationDelay: '2s'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '12%',
          left: '45%',
          width: '9px',
          height: '9px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(219, 39, 119, 0.6) 100%)'
            : 'radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, rgba(252, 231, 243, 0.4) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 24px rgba(255, 255, 255, 0.8), 0 0 48px rgba(219, 39, 119, 0.5)'
            : '0 0 16px rgba(236, 72, 153, 0.6), 0 0 32px rgba(252, 231, 243, 0.4)',
          animation: 'twinkle5 4.2s ease-in-out infinite',
          animationDelay: '1.5s'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '65%',
          right: '45%',
          width: '5px',
          height: '5px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(168, 85, 247, 0.4) 100%)'
            : 'radial-gradient(circle, rgba(196, 181, 253, 0.6) 0%, rgba(233, 213, 255, 0.2) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 15px rgba(255, 255, 255, 0.6), 0 0 30px rgba(168, 85, 247, 0.3)'
            : '0 0 10px rgba(196, 181, 253, 0.4), 0 0 20px rgba(233, 213, 255, 0.2)',
          animation: 'twinkle6 2.8s ease-in-out infinite',
          animationDelay: '0.8s'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '78%',
          right: '15%',
          width: '11px',
          height: '11px',
          background: isDarkMode 
            ? 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(147, 197, 253, 0.7) 100%)'
            : 'radial-gradient(circle, rgba(191, 219, 254, 0.9) 0%, rgba(147, 197, 253, 0.5) 100%)',
          clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
          boxShadow: isDarkMode 
            ? '0 0 28px rgba(255, 255, 255, 0.9), 0 0 55px rgba(147, 197, 253, 0.6)'
            : '0 0 20px rgba(191, 219, 254, 0.7), 0 0 40px rgba(147, 197, 253, 0.5)',
          animation: 'twinkle7 3.8s ease-in-out infinite',
          animationDelay: '2.5s'
        }}></div>
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
      }}>
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
          }}>
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
                {/* Placeholder for profile image */}
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
                textShadow: isDarkMode 
                  ? '0 0 5px rgba(168, 85, 247, 0.8), 0 0 10px rgba(168, 85, 247, 0.6), 0 0 15px rgba(168, 85, 247, 0.4), 0 0 20px rgba(236, 72, 153, 0.6), 0 0 30px rgba(236, 72, 153, 0.4), 0 0 40px rgba(147, 51, 234, 0.3)'
                  : 'none',
                animation: isDarkMode ? 'neonFlicker 3s ease-in-out infinite alternate' : 'none',
                textAlign: 'center',
                width: '100%'
              }}>
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
              maxWidth: '250px',
              alignItems: 'center',
              justifyContent: 'center'
            }} className="button-container">
              {[
                { icon: Mail, label: 'Email', href: 'mailto:aliciayu@g.ucla.edu' },
                { icon: FileText, label: 'Resume', href: 'https://drive.google.com/file/d/1548yYWGyIUUR3waotPBRsMFB4XipRdRA/view?usp=sharing' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/alliciayu' },
                { icon: Github, label: 'GitHub', href: 'https://github.com/aliiyuu' }
              ].map(({ icon: Icon, label, href }, index) => (
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
                    backgroundColor: isDarkMode 
                      ? 'rgba(45, 27, 61, 0.8)' 
                      : 'rgba(253, 242, 248, 0.8)',
                    color: isDarkMode ? '#d1c4e9' : '#7C6FBE',
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
                    textAlign: 'center'
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
          }}>
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
              textAlign: 'left'
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
                whiteSpace: 'pre-line'
              }}>
                {`Hi, I'm Alicia! I'm a fourth-year computer science student at UCLA with a passion for building AI-powered solutions that are not only technically robust, but also ethical, accessible, and impactful. I've developed full-stack applications using frameworks like React, Next.js, and TypeScript, and worked with data science tools such as PyTorch, scikit-learn, and Pandas to create tangible solutions. From crafting LLM-powered chatbots with persistent memory to engineering OCR pipelines that support healthcare providers, I am driven by the intersection of smart technology and practical impact.

I care deeply about making technology work for everyone. That means writing scalable and maintainable code, but also designing with accessibility in mind and considering who gets to benefit from the tools we build. Whether I'm working on backend infrastructure or user-facing apps, I'm always asking: how can this better serve real people?

In my spare time, I enjoy creative writing, language learning, and graphic design. While I started college wanting to become a software engineer or UI/UX designer, I found myself drawn to data science because of its unique ability to reveal stories in numbers and patterns. I love exploring new interests that blend art and science, and I'm also currently trying to get into voice acting and musical theater!

Thanks for stopping by! I'm excited to keep learning, building, and pushing for technology that empowers.`}
              </p>
            </div>

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
              textAlign: 'left'
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
                margin: 0
              }}>
                Exploring LLM-aided data storage and migration solutions @ <a href="https://www.avepoint.com/" target="_blank" rel="noopener noreferrer" style={{ color: isDarkMode ? '#d1c4e9' : '#7C6FBE', fontWeight: 'bold', textDecoration: 'underline' }}>AvePoint</a>
              </p>
            </div>

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
              textAlign: 'left'
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
                margin: 0
              }}>
                <a href="https://www.youtube.com/watch?v=lzMkFIw8ETM" target="_blank" rel="noopener noreferrer" style={{ color: isDarkMode ? '#d1c4e9' : '#7C6FBE', fontWeight: 'bold', textDecoration: 'underline' }}>Knock Yourself Out XD</a> by Porter Robinson
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-15px) translateX(8px); }
          50% { transform: translateY(-8px) translateX(-5px); }
          75% { transform: translateY(-12px) translateX(10px); }
        }
        
        @keyframes cloudFloat1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.8;
          }
          25% { 
            transform: translateY(-30px) translateX(40px) scale(1.1);
            opacity: 1;
          }
          50% { 
            transform: translateY(-15px) translateX(-20px) scale(0.9);
            opacity: 0.7;
          }
          75% { 
            transform: translateY(-45px) translateX(60px) scale(1.05);
            opacity: 0.9;
          }
        }
        
        @keyframes cloudFloat2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.9;
          }
          30% { 
            transform: translateY(-25px) translateX(-50px) scale(1.15);
            opacity: 1;
          }
          60% { 
            transform: translateY(-40px) translateX(30px) scale(0.85);
            opacity: 0.6;
          }
          90% { 
            transform: translateY(-10px) translateX(-70px) scale(1.1);
            opacity: 1;
          }
        }
        
        @keyframes cloudFloat3 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.7;
          }
          35% { 
            transform: translateY(-35px) translateX(45px) scale(0.9);
            opacity: 1;
          }
          70% { 
            transform: translateY(-20px) translateX(-25px) scale(1.2);
            opacity: 0.8;
          }
        }
        
        @keyframes cloudFloat4 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.8;
          }
          40% { 
            transform: translateY(-28px) translateX(-35px) scale(1.08);
            opacity: 1;
          }
          80% { 
            transform: translateY(-50px) translateX(55px) scale(0.95);
            opacity: 0.6;
          }
        }
        
        @keyframes cloudFloat5 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.9;
          }
          20% { 
            transform: translateY(-40px) translateX(25px) scale(0.8);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-15px) translateX(-40px) scale(1.3);
            opacity: 1;
          }
          80% { 
            transform: translateY(-32px) translateX(15px) scale(1.05);
            opacity: 0.8;
          }
        }
        
        @keyframes cloudFloat6 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.8;
          }
          25% { 
            transform: translateY(-22px) translateX(-45px) scale(1.12);
            opacity: 1;
          }
          50% { 
            transform: translateY(-38px) translateX(35px) scale(0.88);
            opacity: 0.7;
          }
          75% { 
            transform: translateY(-12px) translateX(-60px) scale(1.07);
            opacity: 0.9;
          }
        }
        
        @keyframes star1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.4;
          }
          25% { 
            transform: translateY(-40px) translateX(30px) scale(1.5) rotate(45deg);
            opacity: 1;
          }
          50% { 
            transform: translateY(-20px) translateX(-15px) scale(0.7) rotate(90deg);
            opacity: 0.6;
          }
          75% { 
            transform: translateY(-60px) translateX(45px) scale(1.2) rotate(135deg);
            opacity: 0.9;
          }
        }
        
        @keyframes star2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.5;
          }
          30% { 
            transform: translateY(-25px) translateX(-20px) scale(1.8) rotate(60deg);
            opacity: 1;
          }
          60% { 
            transform: translateY(-45px) translateX(25px) scale(0.6) rotate(120deg);
            opacity: 0.3;
          }
          90% { 
            transform: translateY(-15px) translateX(-35px) scale(1.3) rotate(180deg);
            opacity: 0.8;
          }
        }
        
        @keyframes star3 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.6;
          }
          20% { 
            transform: translateY(-30px) translateX(20px) scale(0.8) rotate(72deg);
            opacity: 0.8;
          }
          40% { 
            transform: translateY(-10px) translateX(-25px) scale(1.6) rotate(144deg);
            opacity: 1;
          }
          80% { 
            transform: translateY(-50px) translateX(15px) scale(0.9) rotate(216deg);
            opacity: 0.5;
          }
        }
        
        @keyframes star4 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.4;
          }
          35% { 
            transform: translateY(-35px) translateX(-30px) scale(1.4) rotate(90deg);
            opacity: 0.9;
          }
          70% { 
            transform: translateY(-15px) translateX(40px) scale(1.7) rotate(180deg);
            opacity: 0.7;
          }
        }
        
        @keyframes star5 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.5;
          }
          40% { 
            transform: translateY(-20px) translateX(25px) scale(0.7) rotate(108deg);
            opacity: 0.8;
          }
          80% { 
            transform: translateY(-40px) translateX(-20px) scale(1.5) rotate(216deg);
            opacity: 1;
          }
        }
        
        @keyframes star6 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.6;
          }
          25% { 
            transform: translateY(-25px) translateX(-35px) scale(1.3) rotate(72deg);
            opacity: 1;
          }
          50% { 
            transform: translateY(-45px) translateX(10px) scale(0.8) rotate(144deg);
            opacity: 0.5;
          }
          75% { 
            transform: translateY(-10px) translateX(30px) scale(1.8) rotate(216deg);
            opacity: 0.9;
          }
        }
        
        @keyframes star7 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.4;
          }
          30% { 
            transform: translateY(-40px) translateX(30px) scale(1.6) rotate(90deg);
            opacity: 0.9;
          }
          60% { 
            transform: translateY(-15px) translateX(-25px) scale(0.9) rotate(180deg);
            opacity: 0.7;
          }
          90% { 
            transform: translateY(-55px) translateX(15px) scale(1.2) rotate(270deg);
            opacity: 0.6;
          }
        }
        
        @keyframes star8 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.5;
          }
          25% { 
            transform: translateY(-30px) translateX(-20px) scale(0.8) rotate(95deg);
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-50px) translateX(35px) scale(1.7) rotate(190deg);
            opacity: 1;
          }
          75% { 
            transform: translateY(-20px) translateX(-40px) scale(1.1) rotate(285deg);
            opacity: 0.6;
          }
        }
        
        @keyframes star9 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.3;
          }
          40% { 
            transform: translateY(-35px) translateX(20px) scale(1.4) rotate(110deg);
            opacity: 0.9;
          }
          80% { 
            transform: translateY(-25px) translateX(-30px) scale(0.7) rotate(220deg);
            opacity: 0.5;
          }
        }
        
        @keyframes star10 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.6;
          }
          35% { 
            transform: translateY(-45px) translateX(-15px) scale(1.3) rotate(85deg);
            opacity: 1;
          }
          70% { 
            transform: translateY(-10px) translateX(45px) scale(1.8) rotate(170deg);
            opacity: 0.8;
          }
        }
        
        @keyframes star11 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.5;
          }
          20% { 
            transform: translateY(-25px) translateX(25px) scale(0.9) rotate(75deg);
            opacity: 0.7;
          }
          45% { 
            transform: translateY(-60px) translateX(-35px) scale(1.6) rotate(150deg);
            opacity: 1;
          }
          80% { 
            transform: translateY(-40px) translateX(10px) scale(1.1) rotate(225deg);
            opacity: 0.6;
          }
        }
        
        @keyframes star12 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-30px) translateX(-20px) scale(1.5) rotate(180deg);
            opacity: 0.9;
          }
        }
        
        @keyframes star13 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1) rotate(0deg);
            opacity: 0.7;
          }
          25% { 
            transform: translateY(-50px) translateX(40px) scale(0.8) rotate(92deg);
            opacity: 0.9;
          }
          50% { 
            transform: translateY(-20px) translateX(-45px) scale(1.9) rotate(184deg);
            opacity: 1;
          }
          75% { 
            transform: translateY(-65px) translateX(20px) scale(1.2) rotate(276deg);
            opacity: 0.8;
          }
        }
        
        @keyframes wisp1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-80px) translateX(60px) scale(1.5);
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-40px) translateX(-30px) scale(0.7);
            opacity: 1;
          }
          75% { 
            transform: translateY(-120px) translateX(90px) scale(1.2);
            opacity: 0.6;
          }
        }
        
        @keyframes wisp2 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.4;
          }
          30% { 
            transform: translateY(-60px) translateX(-50px) scale(1.3);
            opacity: 0.9;
          }
          60% { 
            transform: translateY(-100px) translateX(40px) scale(0.8);
            opacity: 0.7;
          }
          90% { 
            transform: translateY(-30px) translateX(-80px) scale(1.1);
            opacity: 0.5;
          }
        }
        
        @keyframes wisp3 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.5;
          }
          20% { 
            transform: translateY(-90px) translateX(30px) scale(0.6);
            opacity: 0.7;
          }
          45% { 
            transform: translateY(-50px) translateX(-70px) scale(1.4);
            opacity: 1;
          }
          70% { 
            transform: translateY(-140px) translateX(100px) scale(0.9);
            opacity: 0.8;
          }
        }
        
        @keyframes wisp4 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          35% { 
            transform: translateY(-70px) translateX(-40px) scale(1.6);
            opacity: 0.9;
          }
          65% { 
            transform: translateY(-110px) translateX(20px) scale(0.5);
            opacity: 0.6;
          }
        }
        
        @keyframes wisp5 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.4;
          }
          25% { 
            transform: translateY(-50px) translateX(80px) scale(1.2);
            opacity: 0.8;
          }
          50% { 
            transform: translateY(-130px) translateX(-60px) scale(0.7);
            opacity: 1;
          }
          75% { 
            transform: translateY(-80px) translateX(120px) scale(1.3);
            opacity: 0.6;
          }
        }
        
        @keyframes wisp6 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.2;
          }
          40% { 
            transform: translateY(-95px) translateX(-90px) scale(1.4);
            opacity: 0.7;
          }
          80% { 
            transform: translateY(-40px) translateX(110px) scale(0.8);
            opacity: 0.9;
          }
        }
        
        @keyframes wisp7 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.5;
          }
          30% { 
            transform: translateY(-100px) translateX(70px) scale(0.6);
            opacity: 0.8;
          }
          60% { 
            transform: translateY(-160px) translateX(-50px) scale(1.5);
            opacity: 1;
          }
          90% { 
            transform: translateY(-70px) translateX(140px) scale(1.1);
            opacity: 0.7;
          }
        }
        
        @keyframes neonFlicker {
          0%, 100% {
            text-shadow: 0 0 5px rgba(168, 85, 247, 0.8), 0 0 10px rgba(168, 85, 247, 0.6), 0 0 15px rgba(168, 85, 247, 0.4), 0 0 20px rgba(236, 72, 153, 0.6), 0 0 30px rgba(236, 72, 153, 0.4), 0 0 40px rgba(147, 51, 234, 0.3);
          }
          25% {
            text-shadow: 0 0 2px rgba(168, 85, 247, 0.9), 0 0 5px rgba(168, 85, 247, 0.7), 0 0 8px rgba(168, 85, 247, 0.5), 0 0 12px rgba(236, 72, 153, 0.7), 0 0 18px rgba(236, 72, 153, 0.5), 0 0 25px rgba(147, 51, 234, 0.4);
          }
          50% {
            text-shadow: 0 0 7px rgba(168, 85, 247, 0.9), 0 0 15px rgba(168, 85, 247, 0.7), 0 0 25px rgba(168, 85, 247, 0.5), 0 0 35px rgba(236, 72, 153, 0.7), 0 0 45px rgba(236, 72, 153, 0.5), 0 0 55px rgba(147, 51, 234, 0.4);
          }
          75% {
            text-shadow: 0 0 3px rgba(168, 85, 247, 0.8), 0 0 8px rgba(168, 85, 247, 0.6), 0 0 12px rgba(168, 85, 247, 0.4), 0 0 16px rgba(236, 72, 153, 0.6), 0 0 22px rgba(236, 72, 153, 0.4), 0 0 30px rgba(147, 51, 234, 0.3);
          }
        }
        
        .desktop-horizontal {
          flex-direction: row;
        }
        
        @media (max-width: 1400px) {
          .desktop-horizontal {
            flex-direction: column !important;
            gap: 40px !important;
            text-align: center;
          }
          
          .desktop-horizontal > div:first-child {
            align-items: center !important;
            text-align: center !important;
          }
          
          .desktop-horizontal > div:first-child > div:last-child {
            flex-direction: row !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
            max-width: none !important;
            gap: 12px !important;
          }
          
          .desktop-horizontal > div:first-child > div:last-child > a {
            width: auto !important;
            justify-content: center !important;
            padding: 10px 20px !important;
            min-width: 120px;
          }
        }
        
        @media (max-width: 768px) {
          h1 { font-size: 3.5rem !important; }
        }
        
        @media (max-width: 600px) {
          .desktop-horizontal > div:first-child {
            align-items: center !important;
            margin: 0 auto !important;
            width: 100% !important;
          }
          
          .desktop-horizontal > div:first-child > div:last-child {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            width: 100% !important;
            margin: 0 auto !important;
          }
          
          .desktop-horizontal > div:first-child > div:last-child > a {
            width: 200px !important;
            justify-content: center !important;
            padding: 12px 20px !important;
            text-align: center !important;
            margin: 0 auto !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 { 
            font-size: 3rem !important; 
            width: 100% !important;
            margin: 0 0 8px 0 !important;
          }
          
          .desktop-horizontal > div:first-child {
            align-items: center !important;
            margin: 0 auto !important;
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  )
}