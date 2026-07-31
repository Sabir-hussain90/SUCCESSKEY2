"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Subjects Data with Urdu translations
const SUBJECTS = [
  { id: 1, name: "General Knowledge", nameUr: "عمومی علم", icon: "🧠", color: "#1a237e", total: 500 },
  { id: 2, name: "Islamiat", nameUr: "اسلامیات", icon: "🕌", color: "#2e7d32", total: 500 },
  { id: 3, name: "Current Affairs", nameUr: "موجودہ امور", icon: "📰", color: "#c62828", total: 500 },
  { id: 4, name: "Computer", nameUr: "کمپیوٹر", icon: "💻", color: "#283593", total: 500 },
  { id: 5, name: "English", nameUr: "انگریزی", icon: "📝", color: "#00695c", total: 500 },
  { id: 6, name: "Urdu", nameUr: "اردو", icon: "📖", color: "#4e342e", total: 500 },
  { id: 7, name: "Everyday Science", nameUr: "روزمرہ سائنس", icon: "🔬", color: "#2e7d32", total: 500 },
  { id: 8, name: "Mathematics", nameUr: "ریاضی", icon: "📐", color: "#c62828", total: 500 },
  { id: 9, name: "History", nameUr: "تاریخ", icon: "📜", color: "#4e342e", total: 500 },
  { id: 10, name: "Geography", nameUr: "جغرافیہ", icon: "🌍", color: "#00695c", total: 500 },
];

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

  // Language content
  const content = {
    en: {
      home: "Home",
      about: "About",
      subjects: "Subjects",
      quiz: "🎯 Quiz",
      contact: "Contact",
      login: "Login",
      register: "Register",
      logout: "Logout",
      title: "📚 Subject Wise MCQs",
      subtitle: "Click on any subject to view 500+ MCQs",
      footerText: "Your ultimate platform for competitive exam preparation. Practice 5000+ questions across 10 subjects.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      followUs: "Follow Us",
      copyright: "© 2026 SuccessKey. All rights reserved.",
      madeWith: "Made with ❤️ by Sabir Hussain (Full Stack Developer)",
      address: "Quaidabad, Khushab",
      phone: "📞 0326-0431665",
      email: "📧 sabir2014852@gmail.com",
      mcqs: "MCQs",
    },
    ur: {
      home: "ہوم",
      about: "ہمارے بارے میں",
      subjects: "مضامین",
      quiz: "🎯 کوئز",
      contact: "رابطہ",
      login: "لاگ ان",
      register: "رجسٹر",
      logout: "لاگ آؤٹ",
      title: "📚 مضمون وار ایم سی کیو",
      subtitle: "500+ ایم سی کیوز دیکھنے کے لیے کسی بھی مضمون پر کلک کریں",
      footerText: "مقابلے کے امتحانات کی تیاری کے لیے آپ کا بہترین پلیٹ فارم۔ 10 مضامین میں 5000+ سوالات کی مشق کریں۔",
      quickLinks: "فوری لنکس",
      contactUs: "رابطہ کریں",
      followUs: "ہمیں فالو کریں",
      copyright: "2026 © SuccessKey. جملہ حقوق محفوظ ہیں۔",
      madeWith: "محبت کے ساتھ بنایا ❤️ بذریعہ صابر حسین (فل اسٹیک ڈویلپر)",
      address: "قائد آباد، خوشاب",
      phone: "📞 0326-0431665",
      email: "📧 sabir2014852@gmail.com",
      mcqs: "ایم سی کیو",
    }
  };

  const t = content[language];
  const isUrdu = language === "ur";

  const styles = {
    container: {
      minHeight: "100vh",
      background: "#f5f7fa",
      fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "'Inter', sans-serif",
    },
    // Navbar Styles
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
    // Main Content Styles
    mainContent: {
      padding: "40px 20px",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    title: {
      fontSize: "36px",
      fontWeight: 700,
      color: "#1a1a2e",
      marginBottom: "8px",
    },
    subtitle: {
      color: "#4a4a6a",
      fontSize: "18px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gap: "24px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    card: {
      background: "white",
      padding: "30px 20px",
      borderRadius: "16px",
      textAlign: "center",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      border: "2px solid transparent",
    },
    icon: {
      fontSize: "48px",
      marginBottom: "12px",
    },
    name: {
      fontSize: "18px",
      fontWeight: 600,
      color: "#1a1a2e",
      marginBottom: "4px",
    },
    count: {
      fontSize: "13px",
      color: "#4a4a6a",
    },
    colorBar: {
      width: "60px",
      height: "4px",
      margin: "12px auto 0",
      borderRadius: "2px",
    },
    // Footer Styles
    footer: {
      backgroundColor: "#0d1b2a",
      color: "rgba(255,255,255,0.8)",
      padding: "60px 40px 30px",
      marginTop: "40px",
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
      color: "rgba(255,255,255,0.6)",
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.3s ease",
      padding: "4px 0",
    },
  };

  const handleSubjectClick = (subjectId) => {
    router.push(`/quiz?id=${subjectId}`);
  };

  const subjectCards = SUBJECTS.map((subject) =>
    React.createElement(
      "div",
      {
        key: subject.id,
        style: styles.card,
        onClick: () => handleSubjectClick(subject.id),
        onMouseEnter: (e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
          e.currentTarget.style.borderColor = subject.color;
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
          e.currentTarget.style.borderColor = "transparent";
        },
      },
      React.createElement("div", { style: styles.icon }, subject.icon),
      React.createElement("h3", { style: styles.name }, isUrdu ? subject.nameUr : subject.name),
      React.createElement("p", { style: styles.count }, `${subject.total} ${t.mcqs}`),
      React.createElement("div", { style: { ...styles.colorBar, background: subject.color } })
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
        React.createElement(Link, { href: "/", style: styles.navLinkActive }, t.home),
        React.createElement(Link, { href: "/about", style: styles.navLink }, t.about),
        React.createElement(Link, { href: "/subjects", style: styles.navLink }, t.subjects),
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
          t.quiz
        ),
        React.createElement(Link, { href: "/contact", style: styles.navLink }, t.contact),
        React.createElement(
          "div",
          { style: styles.authButtons },
          isLoggedIn ?
            React.createElement(
              React.Fragment,
              null,
              React.createElement("span", { style: styles.userGreeting }, "👋 " + (user?.full_name || user?.username || "User")),
              React.createElement(
                "button",
                {
                  onClick: handleLogout,
                  style: styles.logoutBtn,
                  onMouseEnter: (e) => { e.currentTarget.style.background = "#dc2626"; },
                  onMouseLeave: (e) => { e.currentTarget.style.background = "#ef4444"; },
                },
                t.logout
              )
            ) :
            React.createElement(
              React.Fragment,
              null,
              React.createElement(Link, { href: "/auth/login", style: styles.loginBtn }, t.login),
              React.createElement(Link, { href: "/auth/register", style: styles.registerBtn }, t.register)
            )
        )
      )
    ),

    // ============================================
    // MAIN CONTENT
    // ============================================
    React.createElement(
      "div",
      { style: styles.mainContent },
      React.createElement(
        "div",
        { style: styles.header },
        React.createElement("h1", { style: styles.title }, t.title),
        React.createElement("p", { style: styles.subtitle }, t.subtitle)
      ),
      React.createElement("div", { style: styles.grid }, subjectCards)
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
          React.createElement("p", { style: styles.footerText }, t.footerText)
        ),
        // Quick Links
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, t.quickLinks),
          React.createElement(Link, { href: "/", style: styles.footerLink }, t.home),
          React.createElement(Link, { href: "/about", style: styles.footerLink }, t.about),
          React.createElement(Link, { href: "/subjects", style: styles.footerLink }, t.subjects),
          React.createElement(Link, { href: "/contact", style: styles.footerLink }, t.contact)
        ),
        // Contact Info
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, t.contactUs),
          React.createElement(
            "div",
            { style: styles.contactRow },
            React.createElement("div", { style: styles.contactItem }, t.phone),
            React.createElement("div", { style: styles.contactItem }, t.email),
            React.createElement("div", { style: styles.contactItem }, "📍 " + t.address)
          )
        ),
        // Social
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
        t.copyright + " | " + t.madeWith + " | " + t.address + " | " + t.phone + " | " + t.email
      )
    )
  );
}