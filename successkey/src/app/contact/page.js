"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  const [language, setLanguage] = useState("en");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      title: "📬 Contact Us",
      subtitle: "We'd love to hear from you! Get in touch with us.",
      getInTouch: "Get in Touch",
      email: "Email",
      phone: "Phone",
      address: "Address",
      responseTime: "Response Time",
      responseText: "We reply within 24 hours",
      connectWithUs: "Connect With Us",
      yourName: "Your Name *",
      namePlaceholder: "Enter your full name",
      yourEmail: "Your Email *",
      emailPlaceholder: "Enter your email address",
      subjectLabel: "Subject *",
      subjectPlaceholder: "What is this about?",
      messageLabel: "Message *",
      messagePlaceholder: "Write your message here...",
      sendMessage: "Send Message",
      sending: "Sending...",
      successMessage: "✅ Thank you! Your message has been sent successfully. We'll get back to you soon!",
      backToHome: "← Back to Home",
      footerText: "Your ultimate platform for competitive exam preparation. Practice 5000+ questions across 10 subjects.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      followUs: "Follow Us",
      copyright: "© 2026 SuccessKey. All rights reserved.",
      madeWith: "Made with ❤️ by Sabir Hussain (Full Stack Developer)",
      addressFull: "Quaidabad, Khushab",
      phoneFull: "📞 0326-0431665",
      emailFull: "📧 sabir2014852@gmail.com",
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
      title: "📬 ہم سے رابطہ کریں",
      subtitle: "ہم آپ سے سننا پسند کریں گے! ہم سے رابطہ کریں۔",
      getInTouch: "رابطہ کریں",
      email: "ای میل",
      phone: "فون",
      address: "پتہ",
      responseTime: "جوابی وقت",
      responseText: "ہم 24 گھنٹوں کے اندر جواب دیتے ہیں",
      connectWithUs: "ہم سے جڑیں",
      yourName: "آپ کا نام *",
      namePlaceholder: "اپنا پورا نام درج کریں",
      yourEmail: "آپ کا ای میل *",
      emailPlaceholder: "اپنا ای میل پتہ درج کریں",
      subjectLabel: "موضوع *",
      subjectPlaceholder: "یہ کس بارے میں ہے؟",
      messageLabel: "پیغام *",
      messagePlaceholder: "اپنا پیغام یہاں لکھیں...",
      sendMessage: "پیغام بھیجیں",
      sending: "بھیجا جا رہا ہے...",
      successMessage: "✅ شکریہ! آپ کا پیغام کامیابی سے بھیج دیا گیا ہے۔ ہم جلد آپ سے رابطہ کریں گے!",
      backToHome: "← ہوم پر واپس جائیں",
      footerText: "مقابلے کے امتحانات کی تیاری کے لیے آپ کا بہترین پلیٹ فارم۔ 10 مضامین میں 5000+ سوالات کی مشق کریں۔",
      quickLinks: "فوری لنکس",
      contactUs: "رابطہ کریں",
      followUs: "ہمیں فالو کریں",
      copyright: "2026 © SuccessKey. جملہ حقوق محفوظ ہیں۔",
      madeWith: "محبت کے ساتھ بنایا ❤️ بذریعہ صابر حسین (فل اسٹیک ڈویلپر)",
      addressFull: "قائد آباد، خوشاب",
      phoneFull: "📞 0326-0431665",
      emailFull: "📧 sabir2014852@gmail.com",
    }
  };

  const t = content[language];
  const isUrdu = language === "ur";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

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
    // Main Content
    mainContent: {
      padding: "40px 20px",
      maxWidth: "900px",
      margin: "0 auto",
    },
    card: {
      background: "white",
      borderRadius: "16px",
      padding: "40px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
    },
    header: {
      textAlign: "center",
      marginBottom: "32px",
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
    contentWrapper: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "40px",
    },
    contactInfo: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    },
    infoTitle: {
      fontSize: "20px",
      fontWeight: 600,
      color: "#1a1a2e",
      marginBottom: "8px",
    },
    infoItem: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "16px",
      background: "#f5f7fa",
      borderRadius: "12px",
      transition: "all 0.3s ease",
      border: "1px solid transparent",
    },
    infoIcon: {
      fontSize: "24px",
      width: "48px",
      height: "48px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "white",
      borderRadius: "50%",
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    },
    infoContent: {
      flex: 1,
    },
    infoLabel: {
      fontSize: "12px",
      color: "#4a4a6a",
      fontWeight: 500,
      textTransform: "uppercase",
      letterSpacing: "0.5px",
    },
    infoText: {
      fontSize: "16px",
      color: "#1a1a2e",
      fontWeight: 500,
      marginTop: "2px",
    },
    infoLink: {
      color: "#1a237e",
      textDecoration: "none",
      transition: "color 0.3s ease",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    label: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#1a1a2e",
    },
    input: {
      padding: "12px 16px",
      border: "1px solid #e8ecf1",
      borderRadius: "8px",
      fontSize: "14px",
      transition: "border-color 0.3s ease",
      outline: "none",
      fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "'Inter', sans-serif",
    },
    textarea: {
      padding: "12px 16px",
      border: "1px solid #e8ecf1",
      borderRadius: "8px",
      fontSize: "14px",
      transition: "border-color 0.3s ease",
      outline: "none",
      fontFamily: isUrdu ? "'Noto Nastaliq Urdu', serif" : "'Inter', sans-serif",
      resize: "vertical",
      minHeight: "120px",
    },
    submitButton: {
      padding: "14px 32px",
      background: "#1a237e",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontSize: "16px",
      fontWeight: 600,
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "8px",
    },
    submitButtonDisabled: {
      opacity: 0.7,
      cursor: "not-allowed",
    },
    successMessage: {
      background: "#dcfce7",
      color: "#166534",
      padding: "16px",
      borderRadius: "8px",
      textAlign: "center",
      marginTop: "8px",
    },
    socialSection: {
      marginTop: "24px",
      paddingTop: "24px",
      borderTop: "1px solid #e8ecf1",
    },
    socialTitle: {
      fontSize: "16px",
      fontWeight: 600,
      color: "#1a1a2e",
      marginBottom: "12px",
    },
    socialLinks: {
      display: "flex",
      gap: "12px",
    },
    socialLink: {
      padding: "10px 16px",
      background: "#f5f7fa",
      borderRadius: "8px",
      color: "#4a4a6a",
      textDecoration: "none",
      fontSize: "14px",
      transition: "all 0.3s ease",
      border: "1px solid #e8ecf1",
    },
    // Back to Home Button
    backToHomeContainer: {
      textAlign: "center",
      marginTop: "32px",
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
    socialLinksFooter: {
      display: "flex",
      gap: "12px",
      flexWrap: "wrap",
    },
    socialLinkFooter: {
      color: "rgba(255,255,255,0.6)",
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
        React.createElement(Link, { href: "/", style: styles.navLink }, t.home),
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
        React.createElement(Link, { href: "/contact", style: styles.navLinkActive }, t.contact),
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
                  onMouseEnter: (e) => {
                    e.currentTarget.style.background = "#dc2626";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.background = "#ef4444";
                  },
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
        { style: styles.card },
        
        // Header
        React.createElement(
          "div",
          { style: styles.header },
          React.createElement("h1", { style: styles.title }, t.title),
          React.createElement("p", { style: styles.subtitle }, t.subtitle)
        ),

        // Content Wrapper
        React.createElement(
          "div",
          { style: styles.contentWrapper },
          
          // Left Side - Contact Info
          React.createElement(
            "div",
            { style: styles.contactInfo },
            React.createElement("h2", { style: styles.infoTitle }, t.getInTouch),
            
            // Email
            React.createElement(
              "div",
              {
                style: styles.infoItem,
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = "translateX(4px)";
                  e.currentTarget.style.borderColor = "#1a237e";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.borderColor = "transparent";
                },
              },
              React.createElement("div", { style: styles.infoIcon }, "📧"),
              React.createElement(
                "div",
                { style: styles.infoContent },
                React.createElement("div", { style: styles.infoLabel }, t.email),
                React.createElement(
                  "div",
                  { style: styles.infoText },
                  React.createElement(
                    "a",
                    {
                      href: "mailto:sabir2014852@gmail.com",
                      style: styles.infoLink,
                      onMouseEnter: (e) => {
                        e.currentTarget.style.color = "#0d1b5e";
                      },
                      onMouseLeave: (e) => {
                        e.currentTarget.style.color = "#1a237e";
                      },
                    },
                    "sabir2014852@gmail.com"
                  )
                )
              )
            ),

            // Phone
            React.createElement(
              "div",
              {
                style: styles.infoItem,
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = "translateX(4px)";
                  e.currentTarget.style.borderColor = "#1a237e";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.borderColor = "transparent";
                },
              },
              React.createElement("div", { style: styles.infoIcon }, "📞"),
              React.createElement(
                "div",
                { style: styles.infoContent },
                React.createElement("div", { style: styles.infoLabel }, t.phone),
                React.createElement(
                  "div",
                  { style: styles.infoText },
                  React.createElement(
                    "a",
                    {
                      href: "tel:+923260431665",
                      style: styles.infoLink,
                      onMouseEnter: (e) => {
                        e.currentTarget.style.color = "#0d1b5e";
                      },
                      onMouseLeave: (e) => {
                        e.currentTarget.style.color = "#1a237e";
                      },
                    },
                    "+92 326 0431665"
                  )
                )
              )
            ),

            // Address
            React.createElement(
              "div",
              {
                style: styles.infoItem,
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = "translateX(4px)";
                  e.currentTarget.style.borderColor = "#1a237e";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.borderColor = "transparent";
                },
              },
              React.createElement("div", { style: styles.infoIcon }, "📍"),
              React.createElement(
                "div",
                { style: styles.infoContent },
                React.createElement("div", { style: styles.infoLabel }, t.address),
                React.createElement("div", { style: styles.infoText }, "Lahore, Pakistan")
              )
            ),

            // Response Time
            React.createElement(
              "div",
              {
                style: styles.infoItem,
                onMouseEnter: (e) => {
                  e.currentTarget.style.transform = "translateX(4px)";
                  e.currentTarget.style.borderColor = "#1a237e";
                },
                onMouseLeave: (e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.borderColor = "transparent";
                },
              },
              React.createElement("div", { style: styles.infoIcon }, "⏱️"),
              React.createElement(
                "div",
                { style: styles.infoContent },
                React.createElement("div", { style: styles.infoLabel }, t.responseTime),
                React.createElement("div", { style: styles.infoText }, t.responseText)
              )
            ),

            // Social Links
            React.createElement(
              "div",
              { style: styles.socialSection },
              React.createElement("h3", { style: styles.socialTitle }, t.connectWithUs),
              React.createElement(
                "div",
                { style: styles.socialLinks },
                React.createElement(
                  "a",
                  {
                    href: "#",
                    style: styles.socialLink,
                    onMouseEnter: (e) => {
                      e.currentTarget.style.background = "#1a237e";
                      e.currentTarget.style.color = "white";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.background = "#f5f7fa";
                      e.currentTarget.style.color = "#4a4a6a";
                    },
                  },
                  "🐦 Twitter"
                ),
                React.createElement(
                  "a",
                  {
                    href: "#",
                    style: styles.socialLink,
                    onMouseEnter: (e) => {
                      e.currentTarget.style.background = "#1a237e";
                      e.currentTarget.style.color = "white";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.background = "#f5f7fa";
                      e.currentTarget.style.color = "#4a4a6a";
                    },
                  },
                  "📘 Facebook"
                ),
                React.createElement(
                  "a",
                  {
                    href: "#",
                    style: styles.socialLink,
                    onMouseEnter: (e) => {
                      e.currentTarget.style.background = "#1a237e";
                      e.currentTarget.style.color = "white";
                    },
                    onMouseLeave: (e) => {
                      e.currentTarget.style.background = "#f5f7fa";
                      e.currentTarget.style.color = "#4a4a6a";
                    },
                  },
                  "📸 Instagram"
                )
              )
            )
          ),

          // Right Side - Contact Form
          React.createElement(
            "div",
            null,
            React.createElement(
              "form",
              { onSubmit: handleSubmit, style: styles.form },
              
              // Name
              React.createElement(
                "div",
                { style: styles.formGroup },
                React.createElement("label", { style: styles.label }, t.yourName),
                React.createElement("input", {
                  type: "text",
                  name: "name",
                  placeholder: t.namePlaceholder,
                  value: formData.name,
                  onChange: handleChange,
                  required: true,
                  style: styles.input,
                  onFocus: (e) => {
                    e.target.style.borderColor = "#1a237e";
                  },
                  onBlur: (e) => {
                    e.target.style.borderColor = "#e8ecf1";
                  },
                })
              ),

              // Email
              React.createElement(
                "div",
                { style: styles.formGroup },
                React.createElement("label", { style: styles.label }, t.yourEmail),
                React.createElement("input", {
                  type: "email",
                  name: "email",
                  placeholder: t.emailPlaceholder,
                  value: formData.email,
                  onChange: handleChange,
                  required: true,
                  style: styles.input,
                  onFocus: (e) => {
                    e.target.style.borderColor = "#1a237e";
                  },
                  onBlur: (e) => {
                    e.target.style.borderColor = "#e8ecf1";
                  },
                })
              ),

              // Subject
              React.createElement(
                "div",
                { style: styles.formGroup },
                React.createElement("label", { style: styles.label }, t.subjectLabel),
                React.createElement("input", {
                  type: "text",
                  name: "subject",
                  placeholder: t.subjectPlaceholder,
                  value: formData.subject,
                  onChange: handleChange,
                  required: true,
                  style: styles.input,
                  onFocus: (e) => {
                    e.target.style.borderColor = "#1a237e";
                  },
                  onBlur: (e) => {
                    e.target.style.borderColor = "#e8ecf1";
                  },
                })
              ),

              // Message
              React.createElement(
                "div",
                { style: styles.formGroup },
                React.createElement("label", { style: styles.label }, t.messageLabel),
                React.createElement("textarea", {
                  name: "message",
                  placeholder: t.messagePlaceholder,
                  value: formData.message,
                  onChange: handleChange,
                  required: true,
                  style: styles.textarea,
                  onFocus: (e) => {
                    e.target.style.borderColor = "#1a237e";
                  },
                  onBlur: (e) => {
                    e.target.style.borderColor = "#e8ecf1";
                  },
                })
              ),

              // Submit Button
              React.createElement(
                "button",
                {
                  type: "submit",
                  disabled: isLoading,
                  style: Object.assign(
                    {},
                    styles.submitButton,
                    isLoading ? styles.submitButtonDisabled : {}
                  ),
                  onMouseEnter: (e) => {
                    if (!isLoading) {
                      e.currentTarget.style.background = "#0d1b5e";
                    }
                  },
                  onMouseLeave: (e) => {
                    if (!isLoading) {
                      e.currentTarget.style.background = "#1a237e";
                    }
                  },
                },
                isLoading ? t.sending : t.sendMessage
              ),

              // Success Message
              isSubmitted &&
                React.createElement("div", { style: styles.successMessage }, t.successMessage)
            )
          )
        ),

        // Back to Home Button - Added at the bottom
        React.createElement(
          "div",
          { style: styles.backToHomeContainer },
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
      )
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
            React.createElement("div", { style: styles.contactItem }, t.phoneFull),
            React.createElement("div", { style: styles.contactItem }, t.emailFull),
            React.createElement("div", { style: styles.contactItem }, "📍 " + t.addressFull)
          )
        ),
        // Social
        React.createElement(
          "div",
          { style: styles.footerSection },
          React.createElement("h3", { style: styles.footerTitle }, t.followUs),
          React.createElement(
            "div",
            { style: styles.socialLinksFooter },
            React.createElement("a", { href: "#", style: styles.socialLinkFooter }, "🐦 Twitter"),
            React.createElement("a", { href: "#", style: styles.socialLinkFooter }, "📘 Facebook"),
            React.createElement("a", { href: "#", style: styles.socialLinkFooter }, "📸 Instagram"),
            React.createElement("a", { href: "#", style: styles.socialLinkFooter }, "💼 LinkedIn")
          )
        )
      ),
      React.createElement(
        "div",
        { style: styles.footerBottom },
        t.copyright + " | " + t.madeWith + " | " + t.addressFull + " | " + t.phoneFull + " | " + t.emailFull
      )
    )
  );
}