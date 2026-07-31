"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function About() {
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
      navHome: "Home",
      navAbout: "About Us",
      navSubjects: "Subjects",
      navQuiz: "🎯 Quiz",
      navContact: "Contact",
      navLogin: "Login",
      navRegister: "Register",
      footer: "© 2026 SuccessKey. All rights reserved.",
      badge: "🌟 About Us",
      title: "About Us",
      subtitle: "Your ultimate platform for competitive exam preparation and success",
      missionTitle: "🎯 Our Mission",
      missionText: "At SuccessKey, we believe that every student deserves access to high-quality education and exam preparation resources. Our mission is to provide comprehensive, engaging, and effective learning tools that help students excel in competitive exams and achieve their career dreams. We are committed to making exam preparation accessible, affordable, and enjoyable for everyone.",
      featuresTitle: "✨ Why Choose SuccessKey?",
      featuresSubtitle: "Features that give you the competitive edge",
      whyChoose: "Why Choose SuccessKey?",
      teamTitle: "👨‍💻 About the Creator",
      teamSubtitle: "Passionate about education and technology",
      teamName: "Sabir Hussain",
      teamRole: "Full Stack Developer & Founder",
      backToHome: "← Back to Home",
      statsQuestions: "Questions",
      statsSubjects: "Subjects",
      statsQuizzes: "Practice Tests",
      statsStudents: "Active Students",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      followUs: "Follow Us",
      madeWith: "Made with ❤️ by Sabir Hussain (Full Stack Developer)",
      footerText: "Your ultimate platform for competitive exam preparation. Practice 10,000+ questions across 15+ subjects.",
      questions: "Questions",
      subjects: "Subjects",
      quizzes: "Practice Tests",
      students: "Active Students",
      successKey: "SuccessKey",
      ourVision: "🌟 Our Vision",
      visionText: "To become the most trusted and comprehensive exam preparation platform for students worldwide, helping millions achieve their career goals through quality education and innovative learning methods.",
      ourValues: "💎 Our Core Values",
    },
    ur: {
      navHome: "ہوم",
      navAbout: "ہمارے بارے میں",
      navSubjects: "مضامین",
      navQuiz: "🎯 کوئز",
      navContact: "رابطہ",
      navLogin: "لاگ ان",
      navRegister: "رجسٹر",
      footer: "2026 © SuccessKey. جملہ حقوق محفوظ ہیں۔",
      badge: "🌟 ہمارے بارے میں",
      title: "ہمارے بارے میں",
      subtitle: "مقابلے کے امتحانات اور کامیابی کے لیے آپ کا بہترین پلیٹ فارم",
      missionTitle: "🎯 ہمارا مشن",
      missionText: "SuccessKey میں، ہم سمجھتے ہیں کہ ہر طالب علم کو اعلیٰ معیار کی تعلیم اور امتحان کی تیاری کے وسائل تک رسائی کا حق ہے۔ ہمارا مشن جامع، دلچسپ اور موثر سیکھنے کے اوزار فراہم کرنا ہے جو طلباء کو مقابلے کے امتحانات میں کامیابی حاصل کرنے اور ان کے کیریئر کے خوابوں کو پورا کرنے میں مدد کریں۔ ہم ہر ایک کے لیے امتحان کی تیاری کو قابل رسائی، سستی اور پرلطف بنانے کے لیے پرعزم ہیں۔",
      featuresTitle: "✨ SuccessKey کیوں منتخب کریں؟",
      featuresSubtitle: "خصوصیات جو آپ کو مسابقتی برتری دیتی ہیں",
      whyChoose: "SuccessKey کیوں منتخب کریں؟",
      teamTitle: "👨‍💻 تخلیق کار کے بارے میں",
      teamSubtitle: "تعلیم اور ٹیکنالوجی کے بارے میں پرجوش",
      teamName: "صابر حسین",
      teamRole: "فل اسٹیک ڈویلپر اور بانی",
      backToHome: "← ہوم پر واپس جائیں",
      statsQuestions: "سوالات",
      statsSubjects: "مضامین",
      statsQuizzes: "پریکٹس ٹیسٹ",
      statsStudents: "فعال طلباء",
      quickLinks: "فوری لنکس",
      contactUs: "رابطہ کریں",
      followUs: "ہمیں فالو کریں",
      madeWith: "محبت کے ساتھ بنایا ❤️ بذریعہ صابر حسین (فل اسٹیک ڈویلپر)",
      footerText: "مقابلے کے امتحانات کی تیاری کے لیے آپ کا بہترین پلیٹ فارم۔ 15+ مضامین میں 10,000+ سوالات کی مشق کریں۔",
      questions: "سوالات",
      subjects: "مضامین",
      quizzes: "پریکٹس ٹیسٹ",
      students: "فعال طلباء",
      successKey: "SuccessKey",
      ourVision: "🌟 ہمارا وژن",
      visionText: "دنیا بھر کے طلباء کے لیے سب سے زیادہ قابل اعتماد اور جامع امتحان کی تیاری کا پلیٹ فارم بننا، معیاری تعلیم اور جدید سیکھنے کے طریقوں کے ذریعے لاکھوں افراد کو ان کے کیریئر کے اہداف حاصل کرنے میں مدد فراہم کرنا۔",
      ourValues: "💎 ہماری بنیادی اقدار",
    },
  };

  const t = content[language];
  const isUrdu = language === "ur";

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    router.push('/');
  };

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

  const features = [
    {
      icon: "📚",
      title: language === "ur" ? "15+ مضامین" : "15+ Subjects",
      description: language === "ur" 
        ? "سائنس، ریاضی، تاریخ، کمپیوٹر اور مزید سمیت مضامین کی وسیع رینج"
        : "Wide range of subjects including Science, Mathematics, History, Computer, and more.",
    },
    {
      icon: "✅",
      title: language === "ur" ? "فوری نتائج" : "Instant Results",
      description: language === "ur"
        ? "ہر سوال کے لیے تفصیلی وضاحت کے ساتھ فوری جواب اور تجزیہ"
        : "Instant feedback with detailed explanations and performance analysis for each question.",
    },
    {
      icon: "🎯",
      title: language === "ur" ? "10,000+ سوالات" : "10,000+ Questions",
      description: language === "ur"
        ? "مقابلے کے امتحانات کے لیے ڈیزائن کیے گئے 10,000+ اعلیٰ معیار کے سوالات"
        : "Access 10,000+ high-quality questions designed specifically for competitive exams.",
    },
    {
      icon: "📊",
      title: language === "ur" ? "پیشرفت کو ٹریک کریں" : "Track Progress",
      description: language === "ur"
        ? "تفصیلی کارکردگی کے تجزیات کے ساتھ اپنی بہتری کی نگرانی کریں"
        : "Monitor your improvement with detailed performance analytics and insights.",
    },
    {
      icon: "🌍",
      title: language === "ur" ? "کہیں بھی رسائی" : "Anywhere Access",
      description: language === "ur"
        ? "کسی بھی ڈیوائس پر کسی بھی وقت مطالعہ کریں - 24/7 دستیاب"
        : "Study anytime, anywhere on any device - available 24/7 for your convenience.",
    },
    {
      icon: "🏆",
      title: language === "ur" ? "مسابقتی برتری" : "Competitive Edge",
      description: language === "ur"
        ? "مسابقتی امتحانات میں کامیابی کے لیے بہترین تیاری کا پروگرام"
        : "Get the competitive edge with comprehensive preparation for all major exams.",
    },
    {
      icon: "⏱️",
      title: language === "ur" ? "وقت کے ساتھ پریکٹس" : "Timed Practice",
      description: language === "ur"
        ? "اصل امتحان کے ماحول میں مشق کریں اور اپنی رفتار بہتر بنائیں"
        : "Practice with timed tests to improve speed and accuracy for real exams.",
    },
    {
      icon: "📈",
      title: language === "ur" ? "تفصیلی تجزیات" : "Detailed Analytics",
      description: language === "ur"
        ? "اپنی طاقت اور کمزوریوں کے بارے میں تفصیلی بصیرت حاصل کریں"
        : "Get detailed insights into your strengths and weaknesses for targeted improvement.",
    },
  ];

  const styles = {
    container: {
      minHeight: "100vh",
      background: "#f8faff",
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
      background: "linear-gradient(135deg, #1a237e, #e65100)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
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
    card: {
      maxWidth: "1100px",
      margin: "40px auto",
      background: "white",
      borderRadius: "24px",
      padding: "50px 40px",
      boxShadow: "0 10px 60px rgba(0,0,0,0.06)",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    badge: {
      display: "inline-block",
      padding: "6px 20px",
      background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
      color: "#e65100",
      borderRadius: "50px",
      fontSize: "13px",
      fontWeight: 600,
      marginBottom: "12px",
    },
    title: {
      fontSize: "42px",
      fontWeight: 800,
      color: "#1a1a2e",
      marginBottom: "8px",
      letterSpacing: "-0.02em",
    },
    titleHighlight: {
      background: "linear-gradient(135deg, #1a237e, #e65100)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      color: "#4a4a6a",
      fontSize: "18px",
      maxWidth: "600px",
      margin: "0 auto",
    },
    missionSection: {
      background: "linear-gradient(135deg, #f0f3ff, #e8ecf1)",
      padding: "32px",
      borderRadius: "16px",
      marginBottom: "40px",
      border: "1px solid rgba(26, 35, 126, 0.08)",
      position: "relative",
      overflow: "hidden",
    },
    missionIcon: {
      fontSize: "48px",
      marginBottom: "12px",
    },
    missionTitle: {
      fontSize: "22px",
      fontWeight: 700,
      color: "#1a1a2e",
      marginBottom: "8px",
    },
    missionText: {
      color: "#4a4a6a",
      fontSize: "16px",
      lineHeight: 1.8,
      maxWidth: "800px",
    },
    sectionTitle: {
      fontSize: "28px",
      fontWeight: 700,
      color: "#1a1a2e",
      marginBottom: "8px",
      textAlign: "center",
    },
    sectionSubtitle: {
      textAlign: "center",
      color: "#4a4a6a",
      fontSize: "16px",
      marginBottom: "32px",
    },
    featuresGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
      marginTop: "16px",
    },
    featureItem: {
      background: "#f8faff",
      padding: "24px 20px",
      borderRadius: "14px",
      textAlign: "center",
      transition: "all 0.3s ease",
      border: "1px solid transparent",
      position: "relative",
    },
    featureIcon: {
      fontSize: "40px",
      marginBottom: "10px",
    },
    featureTitle: {
      fontWeight: 600,
      color: "#1a1a2e",
      marginBottom: "4px",
      fontSize: "16px",
    },
    featureDescription: {
      fontSize: "13px",
      color: "#4a4a6a",
      lineHeight: 1.5,
    },
    stats: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "20px",
      padding: "32px",
      background: "linear-gradient(135deg, #1a237e, #2a3a8e)",
      borderRadius: "16px",
      marginTop: "40px",
    },
    statItem: {
      textAlign: "center",
    },
    statNumber: {
      fontSize: "32px",
      fontWeight: 700,
      color: "white",
    },
    statLabel: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.7)",
    },
    teamSection: {
      marginTop: "40px",
      padding: "32px",
      background: "linear-gradient(135deg, #fff8f0, #f8faff)",
      borderRadius: "16px",
      border: "1px solid rgba(230, 81, 0, 0.1)",
    },
    teamTitle: {
      fontSize: "22px",
      fontWeight: 700,
      color: "#1a1a2e",
      textAlign: "center",
      marginBottom: "8px",
    },
    teamSubtitle: {
      textAlign: "center",
      color: "#4a4a6a",
      fontSize: "14px",
      marginBottom: "16px",
    },
    teamMember: {
      textAlign: "center",
      padding: "16px",
    },
    teamName: {
      fontSize: "24px",
      fontWeight: 700,
      color: "#1a1a2e",
      marginBottom: "4px",
    },
    teamRole: {
      fontSize: "15px",
      color: "#e65100",
      fontWeight: 600,
    },
    teamSkills: {
      display: "flex",
      justifyContent: "center",
      gap: "8px",
      marginTop: "8px",
      flexWrap: "wrap",
    },
    skillBadge: {
      padding: "4px 14px",
      background: "linear-gradient(135deg, #f0f3ff, #fff3e0)",
      color: "#1a237e",
      borderRadius: "50px",
      fontSize: "11px",
      fontWeight: 500,
    },
    backToHome: {
      display: "flex",
      justifyContent: "center",
      marginTop: "40px",
    },
    backToHomeLink: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "12px 32px",
      background: "linear-gradient(135deg, #1a237e, #e65100)",
      color: "white",
      textDecoration: "none",
      borderRadius: "50px",
      fontSize: "16px",
      fontWeight: 600,
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(26, 35, 126, 0.3)",
    },
    footer: {
      marginTop: "40px",
      padding: "40px 0 0",
      background: "linear-gradient(135deg, #0d1b2a, #1a237e)",
      borderRadius: "16px",
      overflow: "hidden",
    },
    footerContent: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "30px",
      padding: "0 32px 32px",
    },
    footerSection: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    footerTitle: {
      fontSize: "16px",
      fontWeight: 600,
      color: "white",
      marginBottom: "4px",
    },
    footerText: {
      fontSize: "13px",
      color: "rgba(255,255,255,0.7)",
      lineHeight: 1.6,
    },
    footerLink: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "none",
      fontSize: "13px",
      transition: "color 0.3s ease",
    },
    footerBottom: {
      borderTop: "1px solid rgba(255,255,255,0.08)",
      paddingTop: "16px",
      marginTop: "24px",
      textAlign: "center",
      fontSize: "12px",
      color: "rgba(255,255,255,0.5)",
      padding: "16px 32px",
      background: "rgba(0,0,0,0.2)",
    },
    contactRow: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "13px",
      color: "rgba(255,255,255,0.7)",
    },
    socialLinks: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
    },
    socialLink: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.3s ease",
      padding: "4px 0",
    },
  };

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
        React.createElement(Link, { href: "/", style: styles.navLink }, t.navHome),
        React.createElement(Link, { href: "/about", style: styles.navLinkActive }, t.navAbout),
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
    // MAIN CONTENT
    // ============================================
    React.createElement(
      "div",
      { style: styles.card },
      
      // Header
      React.createElement(
        "div",
        { style: styles.header },
        React.createElement("span", { style: styles.badge }, t.badge),
        React.createElement(
          "h1",
          { style: styles.title },
          t.title
        ),
        React.createElement("p", { style: styles.subtitle }, t.subtitle)
      ),

      // Mission Section
      React.createElement(
        "div",
        { style: styles.missionSection },
        React.createElement("div", { style: styles.missionIcon }, "🎯"),
        React.createElement("h2", { style: styles.missionTitle }, t.missionTitle),
        React.createElement(
          "p",
          { style: styles.missionText },
          t.missionText
        )
      ),

      // Features
      React.createElement("h2", { style: styles.sectionTitle }, t.featuresTitle),
      React.createElement("p", { style: styles.sectionSubtitle }, t.featuresSubtitle),
      React.createElement(
        "div",
        { style: styles.featuresGrid },
        features.map((feature, index) =>
          React.createElement(
            "div",
            {
              key: index,
              style: styles.featureItem,
              onMouseEnter: (e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(26, 35, 126, 0.08)";
                e.currentTarget.style.borderColor = "#1a237e";
                e.currentTarget.style.background = "white";
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.background = "#f8faff";
              },
            },
            React.createElement("div", { style: styles.featureIcon }, feature.icon),
            React.createElement("h3", { style: styles.featureTitle }, feature.title),
            React.createElement("p", { style: styles.featureDescription }, feature.description)
          )
        )
      ),

      // Stats
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
          React.createElement("div", { style: styles.statLabel }, t.statsSubjects)
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

      // Team Section - Without Image
      React.createElement(
        "div",
        { style: styles.teamSection },
        React.createElement("h2", { style: styles.teamTitle }, t.teamTitle),
        React.createElement("p", { style: styles.teamSubtitle }, t.teamSubtitle),
        React.createElement(
          "div",
          { style: styles.teamMember },
          React.createElement("div", { style: styles.teamName }, t.teamName),
          React.createElement("div", { style: styles.teamRole }, t.teamRole),
          React.createElement(
            "div",
            { style: styles.teamSkills },
            React.createElement("span", { style: styles.skillBadge }, "React"),
            React.createElement("span", { style: styles.skillBadge }, "Next.js"),
            React.createElement("span", { style: styles.skillBadge }, "TypeScript"),
            React.createElement("span", { style: styles.skillBadge }, "Node.js"),
            React.createElement("span", { style: styles.skillBadge }, "SQL"),
            React.createElement("span", { style: styles.skillBadge }, "AWS")
          )
        )
      ),

      // Back to Home Button
      React.createElement(
        "div",
        { style: styles.backToHome },
        React.createElement(
          Link,
          {
            href: "/",
            style: styles.backToHomeLink,
            onMouseEnter: (e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(26, 35, 126, 0.4)";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(26, 35, 126, 0.3)";
            },
          },
          t.backToHome
        )
      )
    ),

    // ============================================
    // FOOTER
    // ============================================
    React.createElement(
      "div",
      { style: styles.footer },
      React.createElement(
        "div",
        { style: styles.footerContent },
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, "🔑 SuccessKey"),
          React.createElement("p", { style: styles.footerText }, t.footerText)
        ),
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, t.quickLinks),
          React.createElement(Link, { href: "/", style: styles.footerLink }, t.navHome),
          React.createElement(Link, { href: "/about", style: styles.footerLink }, t.navAbout),
          React.createElement(Link, { href: "/subjects", style: styles.footerLink }, t.navSubjects),
          React.createElement(Link, { href: "/contact", style: styles.footerLink }, t.navContact)
        ),
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, t.contactUs),
          React.createElement(
            "div",
            { style: styles.contactRow },
            React.createElement("div", { style: styles.contactItem }, "📞 0326-0431665"),
            React.createElement("div", { style: styles.contactItem }, "📧 sabir2014852@gmail.com"),
            React.createElement("div", { style: styles.contactItem }, "📍 Quaidabad, Khushab")
          )
        ),
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, t.followUs),
          React.createElement(
            "div",
            { style: styles.socialLinks },
            React.createElement("a", { href: "#", style: styles.socialLink }, "🐦 Twitter"),
            React.createElement("a", { href: "#", style: styles.socialLink }, "📘 Facebook"),
            React.createElement("a", { href: "#", style: styles.socialLink }, "📸 Instagram"),
            React.createElement("a", { href: "#", style: styles.socialLink }, "💼 LinkedIn")
          )
        )
      ),
      React.createElement(
        "div",
        { style: styles.footerBottom },
        "© 2026 SuccessKey. " + t.footer + " | " + t.madeWith + " | Quaidabad, Khushab | 📞 0326-0431665 | 📧 sabir2014852@gmail.com"
      )
    )
  );
}