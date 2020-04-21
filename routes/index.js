var express = require('express');
var router = express.Router();

// Index
router.get('/', function(req, res) {
  res.render('pages/index', {

      brandName:'Von | Fitness & BJJ', 
      coverTitleimg: '/images/Typography/strngth_bjj.svg',
      aboutTitle: "Hey, I'm Von",
      aboutDescription: 
      "I'm Your Expert on strength and mobility for JiuJitsu and Self-Defense. ​​​​​​I can work with you Online or In-person.",
      aboutAppt: "Click the link below to schedule a free consultation with me ;)",
      aboutBtn: "SCHEDULE A CALL",
      aboutImg: "/images/me_narrow.jpg",
      aboutURL: "/contact",
      subTitle: "SIGNUP FOR MY NEWSLETTER",
      subDescription: 
      "Von's mission is to help you reach your goals and help you tap into your own potential. Join our newsletter and receive weekly health guides, fitness videos, and self-defense workshop updates that will help you become the master of your own life.",
      subscribeBtn: "GET STARTED",
      subURL: "https://signup.vonfitbjj.com/newsletter",
      offersTitle: "TRY THESE FREE PROGRAMS",
      offersSubtitle: 'THESE CLASSES AND PROGRAMS ARE DESIGNED TO JUMPSTART YOUR FITNESS JOURNEY',
      offeroneTitle: "7 DAY FITNESS CHALLENGE",
      offeroneDescription: "If you are someone who struggles to get started and stay committed to working out this challenge is for you.",
      offeroneDescadds: "Eat Healthier | Stay Consistent | Move your body in a fun way!",
      offeroneBtn: "SIGN ME UP!",
      offeroneURL: "https://signup.vonfitbjj.com/7day-challenge",
      offeroneImg: "/images/7day.jpg",
      offertwoTitle: "HALLWAY JIUJITSU",
      offertwoDescription: "Break down Jiujitsu one move at a time without a training partner! This class is designed to improve your strength and mobility while keeping your mind on Jiujitsu.",
      offertwoBtn: "LET'S DO IT!",
      offertwoURL: "https://signup.vonfitbjj.com/solo-bjj",
      offertwoImg: "/images/solo.jpg",
      servicesTitle: "SERVICES",
      ServicesSubtitle:"IN-PERSON OR REMOTE",
      onlineTitle: "ONLINE FITNESS COACHING",
      onlineSubtitle:"A PERSONALIZED APPROACH",
      onlineDescription: "My 1-on-1 Online Coaching is the ultimate expericence that helps you reach your goals from the inside out.",
      onlineImg: "/images/online.jpg",
      defenseImg: "/images/workshop.jpg",
      defenseTitle: "SELF-DEFENSE WORKSHOPS",
      defenseSubtitle:"GET EMPOWERED",
      defenseDescription: "Learn the mental and physical aspects of self-defense so you can be a strong, empowered bad @$$.",
      personalTitle: "IN-PERSON TRAINING",
      personalSubtitle:"GET THAT EXTRA PUSH",
      personalDescription: "In-Person training is great for those that need an extra push and my fine eye for correct technique.",
      personalImg: "/images/personal.jpg",
      bjjImg: "/images/bjj.jpg",
      bjjTitle: "NOGI JIUJITSU CLASSES",
      bjjSubtitle:"THE FOUNDATION",
      bjjDescription: "Learn Von's Foundational Martial Art behind Self-Defense while making friends and kicking butt!!!",
      
    });
})

// About
router.get('/about', function(req, res) {
  res.render('pages/about',{

    brandName:'Von | Fitness & BJJ',
    pageTitle: 'About',
    aboutImg: "/images/me_Capt.jpg",
    aboutTag: "JIUJITSU, SELF-DEFENSE, STRENGTH and LIFE",
    aboutBtn: "LET'S TALK!",
    aboutURL: "/contact"

  });
})

// Contact
router.get('/contact', function(req, res) {
  res.render('pages/contact',{

    brandName:'Von | Fitness & BJJ',
    pageTitle: 'Contact',
    pageDesc: "I provide daily support for your questions and appointment scheduling.",
    emailBtn: "EMAIL ME",
    emailURL: "mailto:von.fit.18@gmail.com",
    textBtn: "TEXT ME",
    textURL: "sms:+17076469780"

  });
})

 // Services
 router.get('/services', function(req, res) {
  res.render('pages/services',{

    brandName:'Von | Fitness & BJJ',
    pageTitle: "",
    servicesTitle: "SERVICES",
    ServicesSubtitle:"IN-PERSON OR REMOTE",
    onlineTitle: "ONLINE FITNESS COACHING",
    onlineSubtitle:"A PERSONALIZED APPROACH",
    onlineDescription: "My 1-on-1 Online Coaching is the ultimate expericence that helps you reach your goals from the inside out.",
    onlineImg: "/images/online.jpg",
    defenseImg: "/images/workshop.jpg",
    defenseTitle: "SELF-DEFENSE WORKSHOPS",
    defenseSubtitle:"GET EMPOWERED",
    defenseDescription: "Learn the mental and physical aspects of self-defense so you can be a strong, empowered bad @$$.",
    personalTitle: "IN-PERSON TRAINING",
    personalSubtitle:"GET THAT EXTRA PUSH",
    personalDescription: "In-Person training is great for those that need an extra push and my fine eye for correct technique.",
    personalImg: "/images/personal.jpg",
    bjjImg: "/images/bjj.jpg",
    bjjTitle: "NOGI JIUJITSU CLASSES",
    bjjSubtitle:"THE FOUNDATION",
    bjjDescription: "Learn Von's Foundational Martial Art behind Self-Defense while making friends and kicking butt!!!",

  });
 })

module.exports = router;