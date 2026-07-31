"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [language, setLanguage] = useState("en");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const userData = localStorage.getItem('user');
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
  }, []);

  const content = {
    en: {
      title: "Welcome to SuccessKey",
      subtitle: "Your Gateway to Competitive Exam Success",
      getStarted: "Get Started Free",
      navHome: "Home",
      navAbout: "About",
      navSubjects: "Subjects",
      navQuiz: "🎯 Quiz",
      navContact: "Contact",
      navLogin: "Login",
      navRegister: "Register",
      heroTitle: "Crack Every Competitive Exam with Confidence",
      heroSubtitle: "Access 10,000+ premium MCQs across 15+ subjects. Practice smart, learn faster, and achieve your dream career!",
      statsStudents: "5,000+ Active Students",
      statsQuizzes: "200+ Practice Tests",
      statsQuestions: "10,000+ Questions",
      footer: "© 2026 SuccessKey. All rights reserved.",
      takeQuiz: "Start Practice Now",
      exploreSubjects: "Explore Subjects",
      startLearning: "Start Your Journey",
      featuredSubjects: "📚 Featured Subjects",
      examPreparation: "Complete Exam Preparation",
      competitiveEdge: "Get Your Competitive Edge",
      successStories: "Join 5,000+ Successful Students",
    },
    ur: {
      title: "SuccessKey میں خوش آمدید",
      subtitle: "مقابلے کے امتحانات میں کامیابی کا راستہ",
      getStarted: "مفت شروع کریں",
      navHome: "ہوم",
      navAbout: "ہمارے بارے میں",
      navSubjects: "مضامین",
      navQuiz: "🎯 کوئز",
      navContact: "رابطہ",
      navLogin: "لاگ ان",
      navRegister: "رجسٹر",
      heroTitle: "ہر مقابلے کے امتحان میں اعتماد کے ساتھ کامیاب ہوں",
      heroSubtitle: "15+ مضامین میں 10,000+ اعلیٰ معیار کے ایم سی کیوز تک رسائی حاصل کریں۔ سمارٹ طریقے سے مشق کریں، تیزی سے سیکھیں، اور اپنی خوابوں کی نوکری حاصل کریں!",
      statsStudents: "5,000+ فعال طلباء",
      statsQuizzes: "200+ پریکٹس ٹیسٹ",
      statsQuestions: "10,000+ سوالات",
      footer: "2026 © SuccessKey. جملہ حقوق محفوظ ہیں۔",
      takeQuiz: "ابھی پریکٹس شروع کریں",
      exploreSubjects: "مضامین دیکھیں",
      startLearning: "اپنا سفر شروع کریں",
      featuredSubjects: "📚 نمایاں مضامین",
      examPreparation: "مکمل امتحان کی تیاری",
      competitiveEdge: "اپنی مسابقتی برتری حاصل کریں",
      successStories: "5,000+ کامیاب طلباء میں شامل ہوں",
    },
  };

  const t = content[language];
  const isUrdu = language === "ur";

  const getLangButtonStyle = (active) => ({
    padding: "6px 16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: 600,
    background: active ? "#1a237e" : "transparent",
    color: active ? "white" : "#4a4a6a",
    transition: "all 0.3s ease",
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    router.push('/');
  };

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f8faff",
      fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "'Inter', sans-serif",
    },
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 40px",
      backgroundColor: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(232, 236, 241, 0.5)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
      flexWrap: "wrap",
      gap: "12px",
    },
    logo: {
      fontSize: "26px",
      fontWeight: 800,
      color: "#1a237e",
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    logoImage: {
      height: "45px",
      width: "auto",
      objectFit: "contain",
    },
    logoText: {
      fontSize: "26px",
      fontWeight: 800,
      color: "#1a237e",
      background: "linear-gradient(135deg, #1a237e, #e65100)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    logoIcon: {
      fontSize: "30px",
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    langToggle: {
      display: "flex",
      gap: "4px",
      background: "#f0f3ff",
      padding: "4px",
      borderRadius: "10px",
    },
    navLink: {
      color: "#4a4a6a",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 500,
      transition: "all 0.3s ease",
      padding: "6px 4px",
      borderBottom: "2px solid transparent",
    },
    navLinkActive: {
      color: "#e65100",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 600,
      borderBottom: "2px solid #e65100",
      padding: "6px 4px",
    },
    quizNavLink: {
      color: "#e65100",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: 600,
      padding: "8px 20px",
      background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
      borderRadius: "25px",
      transition: "all 0.3s ease",
      boxShadow: "0 2px 10px rgba(255, 111, 0, 0.15)",
    },
    hero: {
      padding: "120px 40px",
      backgroundImage: "url('/backgourrd.jfif')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "white",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },
    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(135deg, rgba(26, 35, 126, 0.88) 0%, rgba(13, 71, 161, 0.78) 50%, rgba(230, 81, 0, 0.65) 100%)",
      zIndex: 0,
    },
    heroContent: {
      position: "relative",
      zIndex: 1,
      maxWidth: "900px",
      margin: "0 auto",
    },
    heroBadge: {
      display: "inline-block",
      padding: "8px 24px",
      background: "linear-gradient(135deg, #e65100, #ff6f00)",
      borderRadius: "50px",
      fontSize: "14px",
      fontWeight: 600,
      marginBottom: "24px",
      backdropFilter: "blur(10px)",
      boxShadow: "0 4px 20px rgba(230, 81, 0, 0.4)",
    },
    heroTitle: {
      fontSize: "56px",
      fontWeight: 800,
      marginBottom: "16px",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      textShadow: "0 2px 20px rgba(0,0,0,0.2)",
    },
    heroSubtitle: {
      fontSize: "20px",
      opacity: 0.95,
      marginBottom: "40px",
      maxWidth: "700px",
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: 1.8,
      textShadow: "0 1px 10px rgba(0,0,0,0.15)",
    },
    heroButtons: {
      display: "flex",
      gap: "16px",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    primaryBtn: {
      padding: "16px 48px",
      background: "linear-gradient(135deg, #e65100, #ff6f00)",
      color: "white",
      border: "none",
      borderRadius: "50px",
      fontSize: "18px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
      display: "inline-block",
      boxShadow: "0 6px 30px rgba(230, 81, 0, 0.4)",
    },
    secondaryBtn: {
      padding: "16px 48px",
      background: "rgba(255,255,255,0.15)",
      color: "white",
      border: "2px solid rgba(255,255,255,0.4)",
      borderRadius: "50px",
      fontSize: "18px",
      fontWeight: 500,
      cursor: "pointer",
      transition: "all 0.3s ease",
      textDecoration: "none",
      display: "inline-block",
      backdropFilter: "blur(10px)",
    },
    stats: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "30px",
      padding: "60px 40px",
      backgroundColor: "white",
      maxWidth: "1100px",
      margin: "-40px auto 0",
      borderRadius: "20px",
      boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
      position: "relative",
      zIndex: 2,
    },
    statItem: {
      textAlign: "center",
    },
    statNumber: {
      fontSize: "40px",
      fontWeight: 800,
      color: "#1a237e",
      marginBottom: "4px",
      background: "linear-gradient(135deg, #1a237e, #e65100)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    statLabel: {
      color: "#4a4a6a",
      fontSize: "14px",
      fontWeight: 500,
    },
    subjectsSection: {
      padding: "80px 40px",
      backgroundColor: "#f8faff",
    },
    sectionHeader: {
      textAlign: "center",
      marginBottom: "48px",
    },
    sectionTitle: {
      fontSize: "36px",
      fontWeight: 700,
      color: "#1a1a2e",
      marginBottom: "8px",
    },
    sectionSubtitle: {
      fontSize: "18px",
      color: "#4a4a6a",
    },
    subjectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "24px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    subjectCard: {
      background: "white",
      padding: "30px 20px",
      borderRadius: "16px",
      textAlign: "center",
      boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      border: "2px solid transparent",
      position: "relative",
      overflow: "hidden",
    },
    subjectIcon: {
      fontSize: "44px",
      marginBottom: "12px",
    },
    subjectName: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#1a1a2e",
      marginBottom: "4px",
    },
    subjectCount: {
      fontSize: "12px",
      color: "#4a4a6a",
    },
    subjectBadge: {
      position: "absolute",
      top: "12px",
      right: "12px",
      padding: "4px 12px",
      borderRadius: "20px",
      fontSize: "10px",
      fontWeight: 600,
      color: "white",
    },
    footer: {
      backgroundColor: "#0d1b2a",
      color: "rgba(255,255,255,0.8)",
      padding: "60px 40px 30px",
    },
    footerContent: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "40px",
    },
    footerSection: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    footerTitle: {
      fontSize: "18px",
      fontWeight: 600,
      color: "white",
      marginBottom: "4px",
    },
    footerText: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.6)",
      lineHeight: 1.7,
    },
    footerLink: {
      color: "rgba(255,255,255,0.6)",
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.3s ease",
    },
    footerBottom: {
      borderTop: "1px solid rgba(255,255,255,0.08)",
      paddingTop: "20px",
      marginTop: "40px",
      textAlign: "center",
      fontSize: "13px",
      color: "rgba(255,255,255,0.4)",
    },
    authButtons: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    loginBtn: {
      padding: "8px 20px",
      color: "#1a237e",
      textDecoration: "none",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: 500,
      border: "1px solid #e8ecf1",
      transition: "all 0.3s ease",
    },
    registerBtn: {
      padding: "8px 20px",
      background: "linear-gradient(135deg, #e65100, #ff6f00)",
      color: "white",
      textDecoration: "none",
      borderRadius: "8px",
      fontSize: "14px",
      fontWeight: 500,
      transition: "all 0.3s ease",
      boxShadow: "0 2px 10px rgba(230, 81, 0, 0.3)",
    },
    userGreeting: {
      color: "#4a4a6a",
      fontSize: "14px",
      fontWeight: 500,
    },
    logoutBtn: {
      padding: "6px 16px",
      background: "#ef4444",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "13px",
      transition: "background 0.3s ease",
    },
  };

  // Subjects data with Urdu names
  const subjects = [
    { id: 1, name: "General Knowledge", nameUr: "عمومی علم", icon: "🧠", color: "#1a237e", count: 500 },
    { id: 2, name: "Islamiat", nameUr: "اسلامیات", icon: "🕌", color: "#2e7d32", count: 500 },
    { id: 3, name: "Current Affairs", nameUr: "موجودہ امور", icon: "📰", color: "#c62828", count: 500 },
    { id: 4, name: "Computer", nameUr: "کمپیوٹر", icon: "💻", color: "#283593", count: 500 },
    { id: 5, name: "English", nameUr: "انگریزی", icon: "📝", color: "#00695c", count: 500 },
    { id: 6, name: "Urdu", nameUr: "اردو", icon: "📖", color: "#4e342e", count: 500 },
    { id: 7, name: "Everyday Science", nameUr: "روزمرہ سائنس", icon: "🔬", color: "#2e7d32", count: 500 },
    { id: 8, name: "Mathematics", nameUr: "ریاضی", icon: "📐", color: "#c62828", count: 500 },
    { id: 9, name: "History", nameUr: "تاریخ", icon: "📜", color: "#4e342e", count: 500 },
    { id: 10, name: "Geography", nameUr: "جغرافیہ", icon: "🌍", color: "#00695c", count: 500 },
  ];

  const subjectCards = subjects.map((subject) =>
    React.createElement(
      "div",
      {
        key: subject.id,
        style: styles.subjectCard,
        onClick: () => router.push(`/quiz?id=${subject.id}`),
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
          e.currentTarget.style.borderColor = subject.color;
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.04)";
          e.currentTarget.style.borderColor = "transparent";
        },
      },
      React.createElement("div", { style: styles.subjectIcon }, subject.icon),
      React.createElement("h3", { style: styles.subjectName }, isUrdu ? subject.nameUr : subject.name),
      React.createElement("p", { style: styles.subjectCount }, `${subject.count} MCQs`),
      React.createElement("div", {
        style: {
          ...styles.subjectBadge,
          background: subject.color,
        },
      }, "📚")
    )
  );

  return React.createElement(
    "div",
    { style: styles.container, dir: isUrdu ? "rtl" : "ltr" },
    // ============================================
    // NAVBAR
    // ============================================
    React.createElement(
      "nav",
      { style: styles.navbar },
      React.createElement(
        Link,
        { href: "/", style: styles.logo },
        React.createElement("img", {
          src: "/logoss.jfif",
          alt: "SuccessKey Logo",
          style: styles.logoImage,
          onError: (e) => {
            e.currentTarget.style.display = "none";
          }
        }),
        React.createElement("span", { style: styles.logoText }, "SuccessKey")
      ),
      React.createElement(
        "div",
        { style: styles.navLinks },
        React.createElement(
          "div",
          { style: styles.langToggle },
          React.createElement(
            "button",
            {
              onClick: () => setLanguage("en"),
              style: getLangButtonStyle(language === "en"),
            },
            "EN"
          ),
          React.createElement(
            "button",
            {
              onClick: () => setLanguage("ur"),
              style: getLangButtonStyle(language === "ur"),
            },
            "اردو"
          )
        ),
        React.createElement(Link, { href: "/", style: styles.navLinkActive }, t.navHome),
        React.createElement(Link, { href: "/about", style: styles.navLink }, t.navAbout),
        React.createElement(Link, { href: "/subjects", style: styles.navLink }, t.navSubjects),
        React.createElement(
          Link,
          {
            href: "/quiz",
            style: styles.quizNavLink,
            onMouseEnter: (e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #ffe0b2, #ffcc80)";
              e.currentTarget.style.transform = "scale(1.05)";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.background = "linear-gradient(135deg, #fff3e0, #ffe0b2)";
              e.currentTarget.style.transform = "scale(1)";
            },
          },
          t.navQuiz
        ),
        React.createElement(Link, { href: "/contact", style: styles.navLink }, t.navContact),
        React.createElement(
          "div",
          { style: styles.authButtons },
          isLoggedIn ?
            React.createElement(
              React.Fragment,
              null,
              React.createElement("span", { style: styles.userGreeting }, "👋 " + (user?.full_name || user?.username)),
              React.createElement(
                "button",
                {
                  onClick: handleLogout,
                  style: styles.logoutBtn,
                  onMouseEnter: (e) => { e.currentTarget.style.background = "#dc2626"; },
                  onMouseLeave: (e) => { e.currentTarget.style.background = "#ef4444"; },
                },
                "Logout"
              )
            ) :
            React.createElement(
              React.Fragment,
              null,
              React.createElement(Link, { href: "/auth/login", style: styles.loginBtn }, t.navLogin),
              React.createElement(Link, { href: "/auth/register", style: styles.registerBtn }, t.navRegister)
            )
        )
      )
    ),
    // ============================================
    // HERO SECTION
    // ============================================
    React.createElement(
      "section",
      { style: styles.hero },
      React.createElement("div", { style: styles.heroOverlay }),
      React.createElement(
        "div",
        { style: styles.heroContent },
        React.createElement("span", { style: styles.heroBadge }, "🏆 " + t.examPreparation),
        React.createElement("h1", { style: styles.heroTitle }, t.heroTitle),
        React.createElement("p", { style: styles.heroSubtitle }, t.heroSubtitle),
        React.createElement(
          "div",
          { style: styles.heroButtons },
          React.createElement(
            Link,
            {
              href: isLoggedIn ? "/quiz" : "/auth/register",
              style: styles.primaryBtn,
              onMouseEnter: (e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 35px rgba(230, 81, 0, 0.5)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 6px 30px rgba(230, 81, 0, 0.4)";
              },
            },
            t.startLearning + " →"
          ),
          React.createElement(
            Link,
            {
              href: "/subjects",
              style: styles.secondaryBtn,
              onMouseEnter: (e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                e.currentTarget.style.transform = "scale(1.05)";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "scale(1)";
              },
            },
            t.exploreSubjects + " →"
          )
        )
      )
    ),
    // ============================================
    // STATS SECTION
    // ============================================
    React.createElement(
      "div",
      { style: styles.stats },
      React.createElement(
        "div",
        { style: styles.statItem },
        React.createElement("div", { style: styles.statNumber }, "10,000+"),
        React.createElement("div", { style: styles.statLabel }, t.statsQuestions)
      ),
      React.createElement(
        "div",
        { style: styles.statItem },
        React.createElement("div", { style: styles.statNumber }, "15+"),
        React.createElement("div", { style: styles.statLabel }, "Subjects")
      ),
      React.createElement(
        "div",
        { style: styles.statItem },
        React.createElement("div", { style: styles.statNumber }, "200+"),
        React.createElement("div", { style: styles.statLabel }, t.statsQuizzes)
      ),
      React.createElement(
        "div",
        { style: styles.statItem },
        React.createElement("div", { style: styles.statNumber }, "5,000+"),
        React.createElement("div", { style: styles.statLabel }, t.statsStudents)
      )
    ),
    // ============================================
    // SUBJECTS SECTION
    // ============================================
    React.createElement(
      "section",
      { style: styles.subjectsSection },
      React.createElement(
        "div",
        { style: styles.sectionHeader },
        React.createElement("h2", { style: styles.sectionTitle }, t.featuredSubjects),
        React.createElement("p", { style: styles.sectionSubtitle }, t.competitiveEdge)
      ),
      React.createElement("div", { style: styles.subjectsGrid }, subjectCards)
    ),
    // ============================================
    // FOOTER
    // ============================================
    React.createElement(
      "footer",
      { style: styles.footer },
      React.createElement(
        "div",
        { style: styles.footerContent },
        // Brand
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, "🔑 SuccessKey"),
          React.createElement("p", { style: styles.footerText },
            "Your ultimate platform for competitive exam preparation. Practice 10,000+ questions across 15+ subjects."
          )
        ),
        // Quick Links
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, "Quick Links"),
          React.createElement(Link, { href: "/", style: styles.footerLink }, "Home"),
          React.createElement(Link, { href: "/about", style: styles.footerLink }, "About Us"),
          React.createElement(Link, { href: "/subjects", style: styles.footerLink }, "Subjects"),
          React.createElement(Link, { href: "/contact", style: styles.footerLink }, "Contact")
        ),
        // Contact Info
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, "Contact Us"),
          React.createElement("p", { style: styles.footerText }, "📞 0326-0431665"),
          React.createElement("p", { style: styles.footerText }, "📧 sabir2014852@gmail.com"),
          React.createElement("p", { style: styles.footerText }, "📍 Quaidabad, Khushab")
        ),
        // Social
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, "Follow Us"),
          React.createElement(
            "a",
            { href: "#", style: styles.footerLink },
            "🐦 Twitter"
          ),
          React.createElement(
            "a",
            { href: "#", style: styles.footerLink },
            "📘 Facebook"
          ),
          React.createElement(
            "a",
            { href: "#", style: styles.footerLink },
            "📸 Instagram"
          )
        )
      ),
      React.createElement(
        "div",
        { style: styles.footerBottom },
        t.footer + " | " + t.successStories + " | Quaidabad, Khushab | 📞 0326-0431665"
      )
    )
  );
}