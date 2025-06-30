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
            textAlign: 'center'
          }}>
            {/* Profile Image */}
            <div style={{
              marginBottom: '1px',
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
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <h1 style={{
                fontSize: '4.5rem',
                fontWeight: '600',
                color: isDarkMode ? '#ffffff' : '#7C6FBE',
                marginBottom: '8px',
                lineHeight: '1.2',
                letterSpacing: '-0.02em',
                position: 'relative',
                zIndex: 1,
                textShadow: isDarkMode 
                  ? '0 0 5px rgba(168, 85, 247, 0.8), 0 0 10px rgba(168, 85, 247, 0.6), 0 0 15px rgba(168, 85, 247, 0.4), 0 0 20px rgba(236, 72, 153, 0.6), 0 0 30px rgba(236, 72, 153, 0.4), 0 0 40px rgba(147, 51, 234, 0.3)'
                  : 'none',
                animation: isDarkMode ? 'neonFlicker 3s ease-in-out infinite alternate' : 'none'
              }}>
                alicia yu
              </h1>
            </div>
            <p style={{
              fontSize: '1.2rem',
              color: isDarkMode ? '#b39ddb' : '#7C6FBE',
              marginBottom: '32px',
              fontWeight: '600',
              lineHeight: '1.5',
              whiteSpace: 'normal',
              wordWrap: 'break-word',
              maxWidth: '300px'
            }}>
              cs + stats + ling @ ucla
            </p>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              width: '100%',
              maxWidth: '250px'
            }}>
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
                    justifyContent: 'flex-start'
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
          }
          
          .desktop-horizontal > div:first-child > div:last-child > a {
            width: auto !important;
            justify-content: center !important;
            padding: 10px 20px !important;
          }
        }
        
        @media (max-width: 768px) {
          h1 { font-size: 3.5rem !important; }
        }
        
        @media (max-width: 480px) {
          h1 { font-size: 3rem !important; }
          
          .desktop-horizontal > div:first-child > div:last-child {
            flex-direction: column !important;
          }
          
          .desktop-horizontal > div:first-child > div:last-child > a {
            width: 100% !important;
            justify-content: flex-start !important;
            padding: 12px 20px !important;
          }
        }
      `}</style>
    </div>
  )
}