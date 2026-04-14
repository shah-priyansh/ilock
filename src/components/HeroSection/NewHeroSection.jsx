import React, { useRef, useEffect, useLayoutEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LuxryFrame } from "../LuxryFrame/LuxryFrame";
import Header from "../Header/Header";
import SEO from "../SEO/SEO";
import StructuredData from "../SEO/StructuredData";
import "./NewHeroSection.css";
import { useNavigate } from "react-router-dom";
import { trackEvent } from "../../utils/analytics";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Hero animation variants
// Container has no own animation; it exists solely to stagger children
const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 6 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Line 2 starts after line 1 finishes: 0.1 + (4 children × 0.12) = 0.58s
// Line 1 children: 1 group ("A structured platform to") + 3 words ("sell","luxury","watches")
const heroLine2ContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.58,
    },
  },
};

const taglineVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    // intentional overlap: last word (index 10) finishes ~1.9s, tagline starts at 1.6s
    // if word count changes, update this delay accordingly
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 1.6 },
  },
};

/* Card order and copy per Figma: Get Highest Market Price, Get Immediate Cash, Buy your watch back, Bank-Vault Storage */
const featureCards = [
  {
    image: "/images/wi1.png",
    title: "Unlock liquidity safely",
    subtitle: "at the best price",
  },
  {
    image: "/images/wi2.png",
    title: "Get Highest Market Price",
    subtitle: "Through our global dealer network",
  },
  {
    image: "/images/wi3.png",
    title: "Option to Repurchase ",
    subtitle: "Lock-in a future ‘Buy Back’ price",
  },
  {
    image: "/images/wi4.png",
    title: "Bank-Vault Storage",
    subtitle: "Secured, Insured & Tamper Proof",
  },
];

const whyItems = [
  {
    title: <><span>A Platform</span>, not a dealer</>,
    description: "We buy and store with TransGuard, UAE's most trusted custodian",
    icon: (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip_why_0)">
          <path fillRule="evenodd" clipRule="evenodd" d="M79.9339 6.86875C81.2036 6.86875 82.2356 7.90068 82.2356 9.17043C82.2356 10.4402 81.2036 11.4761 79.9339 11.4761C78.6641 11.4761 77.6282 10.4442 77.6282 9.17043C77.6282 7.89665 78.6601 6.86875 79.9339 6.86875ZM72.1098 6.86875C73.3836 6.86875 74.4155 7.90068 74.4155 9.17043C74.4155 10.4402 73.3836 11.4761 72.1098 11.4761C70.836 11.4761 69.8041 10.4442 69.8041 9.17043C69.8041 7.89665 70.84 6.86875 72.1098 6.86875ZM64.2897 6.86875C65.5595 6.86875 66.5914 7.90068 66.5914 9.17043C66.5914 10.4402 65.5595 11.4761 64.2897 11.4761C63.02 11.4761 61.984 10.4442 61.984 9.17043C61.984 7.89665 63.016 6.86875 64.2897 6.86875ZM67.2041 63.8665C66.7607 63.8665 66.3979 64.2293 66.3979 64.6767C66.3979 65.1242 66.7607 65.4869 67.2041 65.4869C67.6475 65.4869 68.0144 65.1242 68.0144 64.6767C68.0144 64.2293 67.6516 63.8665 67.2041 63.8665ZM65.7893 68.0345C64.4792 67.4782 63.5642 66.1843 63.5642 64.6767C63.5642 63.1691 64.4792 61.8712 65.7893 61.3189V60.6256C65.7893 59.8436 66.4221 59.2107 67.2041 59.2107C67.9861 59.2107 68.623 59.8436 68.623 60.6256V61.3189C69.9291 61.8712 70.8481 63.1691 70.8481 64.6767C70.8481 66.1843 69.9291 67.4782 68.623 68.0345V73.7867C68.623 74.5687 67.9861 75.2015 67.2041 75.2015C66.4221 75.2015 65.7893 74.5687 65.7893 73.7867V68.0345ZM75.3023 68.7238C74.8549 68.7238 74.4921 69.0866 74.4921 69.534C74.4921 69.9815 74.8549 70.3442 75.3023 70.3442C75.7498 70.3442 76.1125 69.9815 76.1125 69.534C76.1125 69.0866 75.7498 68.7238 75.3023 68.7238ZM73.8875 72.8918C72.5774 72.3396 71.6583 71.0456 71.6583 69.534C71.6583 68.0224 72.5774 66.7325 73.8875 66.1762V60.6256C73.8875 59.8436 74.5203 59.2107 75.3023 59.2107C76.0843 59.2107 76.7212 59.8436 76.7212 60.6256V66.1762C78.0273 66.7325 78.9463 68.0264 78.9463 69.534C78.9463 71.0416 78.0273 72.3396 76.7212 72.8918V73.7867C76.7212 74.5687 76.0843 75.2015 75.3023 75.2015C74.5203 75.2015 73.8875 74.5687 73.8875 73.7867V72.8918ZM59.11 68.7238C58.6625 68.7238 58.2997 69.0866 58.2997 69.534C58.2997 69.9815 58.6625 70.3442 59.11 70.3442C59.5574 70.3442 59.9202 69.9815 59.9202 69.534C59.9202 69.0866 59.5574 68.7238 59.11 68.7238ZM57.6911 72.8918C56.385 72.3396 55.466 71.0456 55.466 69.534C55.466 68.0224 56.385 66.7325 57.6911 66.1762V60.6256C57.6911 59.8436 58.328 59.2107 59.11 59.2107C59.892 59.2107 60.5248 59.8436 60.5248 60.6256V66.1762C61.8349 66.7325 62.7539 68.0264 62.7539 69.534C62.7539 71.0416 61.8349 72.3396 60.5248 72.8918V73.7867C60.5248 74.5687 59.892 75.2015 59.11 75.2015C58.328 75.2015 57.6911 74.5687 57.6911 73.7867V72.8918ZM67.2082 82.3887C75.5684 82.3887 82.3887 75.5684 82.3887 67.2082C82.3887 58.8479 75.5684 52.0276 67.2082 52.0276C58.8479 52.0276 52.0276 58.8439 52.0276 67.2082C52.0276 75.5724 58.8439 82.3887 67.2082 82.3887ZM67.2082 85.2225C57.2839 85.2225 49.1938 77.1283 49.1938 67.2082C49.1938 57.288 57.2839 49.1938 67.2082 49.1938C77.1324 49.1938 85.2225 57.2839 85.2225 67.2082C85.2225 77.1324 77.1283 85.2225 67.2082 85.2225ZM96.5213 70.9852C96.88 70.9852 97.1662 70.699 97.1662 70.3442V64.068C97.1662 63.7133 96.88 63.4271 96.5213 63.4271C89.0842 63.4271 85.3475 54.4139 90.6079 49.1495C90.8618 48.8995 90.8618 48.4924 90.6079 48.2425L86.1738 43.8044C85.9199 43.5505 85.5127 43.5505 85.2628 43.8044C79.9984 49.0648 70.9852 45.3321 70.9852 37.891C70.9852 37.5363 70.699 37.2461 70.3442 37.2461H64.068C63.7133 37.2461 63.4271 37.5363 63.4271 37.891C63.4271 45.3321 54.4139 49.0648 49.1495 43.8044C48.8995 43.5505 48.4924 43.5505 48.2425 43.8044L43.8044 48.2425C43.5505 48.4924 43.5505 48.8995 43.8044 49.1495C49.0648 54.4139 45.3321 63.4271 37.891 63.4271C37.5363 63.4271 37.2461 63.7133 37.2461 64.068V70.3442C37.2461 70.699 37.5363 70.9852 37.891 70.9852C45.3321 70.9852 49.0648 79.9984 43.8044 85.2628C43.5505 85.5127 43.5505 85.9239 43.8044 86.1738L48.2425 90.6119C48.4924 90.8618 48.8995 90.8618 49.1495 90.6119C54.4179 85.3475 63.4271 89.0761 63.4271 96.5253C63.4271 96.88 63.7133 97.1703 64.068 97.1703H70.3442C70.699 97.1703 70.9852 96.8841 70.9852 96.5253C70.9852 89.0882 79.9984 85.3515 85.2628 90.6119C85.5127 90.8618 85.9199 90.8618 86.1738 90.6119L90.6079 86.1738C90.8618 85.9239 90.8618 85.5127 90.6079 85.2628C85.3475 79.9984 89.0842 70.9852 96.5213 70.9852ZM2.83376 10.682V15.5071H86.4358V10.674C86.4358 8.60206 85.5732 6.61883 84.0414 5.15156C82.4936 3.66817 80.3894 2.83376 78.2006 2.83376H11.073C8.8802 2.83376 6.77604 3.66817 5.22815 5.15156C3.70042 6.61883 2.83376 8.60206 2.83376 10.674V10.682ZM2.83376 18.3409V67.4258C2.83376 69.4977 3.69639 71.485 5.22412 72.9482C6.77604 74.4357 8.8802 75.266 11.073 75.266H41.6317C40.6845 74.3833 39.4026 73.8189 37.891 73.8189C35.9682 73.8189 34.4123 72.263 34.4123 70.3442V64.068C34.4123 62.1493 35.9682 60.5934 37.891 60.5934C42.8088 60.5934 45.2757 54.6316 41.797 51.1569C40.4426 49.7985 40.4426 47.5975 41.797 46.2391L46.2391 41.797C47.5975 40.4426 49.7985 40.4426 51.1569 41.797C54.6316 45.2757 60.5934 42.8088 60.5934 37.891C60.5934 35.9723 62.1493 34.4123 64.068 34.4123H70.3442C72.263 34.4123 73.8189 35.9723 73.8189 37.891C73.8189 42.8088 79.7807 45.2757 83.2554 41.797C84.118 40.9384 85.3233 40.624 86.4358 40.8578V18.3409H2.83376ZM43.2723 78.0998H11.073C8.14253 78.0998 5.33699 76.9832 3.26508 74.996C1.17301 72.9886 0 70.2636 0 67.4258V10.674C0 4.79684 4.94195 0 11.073 0H78.2006C84.3276 0 89.2696 4.79684 89.2696 10.674V42.8934L92.6153 46.2391C93.9697 47.5975 93.9697 49.7985 92.6153 51.1569C89.1366 54.6316 91.6035 60.5934 96.5213 60.5934C98.4481 60.5934 100 62.1493 100 64.068V70.3442C100 72.263 98.4481 73.8189 96.5213 73.8189C91.6035 73.8189 89.1366 79.7807 92.6153 83.2554C93.9697 84.6138 93.9697 86.8188 92.6153 88.1772L88.1772 92.6153C86.8188 93.9737 84.6138 93.9737 83.2554 92.6153C79.7807 89.1366 73.8189 91.6076 73.8189 96.5253C73.8189 98.4521 72.263 100.004 70.3442 100.004H64.068C62.1493 100.004 60.5934 98.4521 60.5934 96.5253C60.5934 91.6035 54.6356 89.1366 51.1569 92.6153C49.7985 93.9737 47.5975 93.9737 46.2391 92.6153L41.797 88.1772C40.4426 86.8188 40.4426 84.6138 41.797 83.2554C43.2844 81.772 43.6835 79.8331 43.2723 78.0998Z" fill="white"/>
        </g>
        <defs><clipPath id="clip_why_0"><rect width="100" height="100" fill="white"/></clipPath></defs>
      </svg>
    ),
  },
  {
    title: <><span>Complete Transparency,</span> no hidden fees or surprises</>,
    description: "Your watch is priced through a competitive global dealer network. You see real market value.",
    icon: (
      <svg width="87" height="94" viewBox="0 0 87 94" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip_why_1)">
          <path fillRule="evenodd" clipRule="evenodd" d="M65.781 63.6035C64.7932 62.6199 63.1905 62.6199 62.2027 63.6035L56.4716 69.3098C55.4856 70.2934 55.4856 71.8892 56.4716 72.8727L73.9066 90.2324C74.8945 91.216 76.4971 91.216 77.4831 90.2324L83.2142 84.5261C84.202 83.5425 84.202 81.9468 83.2142 80.9651L65.7791 63.6054L65.781 63.6035ZM14.165 65.4058C13.5769 64.8088 13.5864 63.8461 14.1878 63.2624C14.7874 62.6768 15.7524 62.6881 16.3406 63.2851L18.4724 65.4532L23.4535 60.3874C24.0417 59.7904 25.0067 59.7791 25.6063 60.3647C26.2058 60.9503 26.2172 61.9111 25.6291 62.5081L19.5592 68.6806C19.2737 68.9725 18.8816 69.1355 18.4705 69.1355C18.0593 69.1355 17.6691 68.9706 17.3836 68.6806L14.1631 65.4058H14.165ZM51.0317 36.3814C50.8357 34.6417 50.4131 32.9701 49.7907 31.3971L37.1903 43.9412C38.2371 44.9817 39.3811 45.9254 40.6049 46.7612L51.0298 36.3814H51.0317ZM47.5009 50.0057C49.4271 47.3108 50.6891 44.1156 51.0488 40.6531L43.3097 48.3588C44.6401 49.0316 46.041 49.585 47.5009 50.0038V50.0057ZM48.3746 28.5222C47.6075 27.2448 46.7015 26.0604 45.6756 24.9896L32.744 37.8653C33.4349 39.2109 34.2495 40.4825 35.1727 41.667L48.3746 28.5222ZM43.4067 22.9599C42.2076 22.0407 40.8981 21.2561 39.5029 20.6288L30.2886 29.8033C30.4942 31.5525 30.8901 33.2468 31.4554 34.8615L43.4086 22.9599H43.4067ZM36.3166 19.5107C34.7863 19.1165 33.1836 18.9023 31.5334 18.8872C30.7644 21.0154 30.2905 23.284 30.1573 25.6415L36.3147 19.5107H36.3166ZM14.4334 48.8231C16.1464 48.2319 17.9832 47.9116 19.898 47.9116C26.7578 47.9116 32.6564 52.0392 35.2241 57.9351C39.147 57.16 42.6549 55.2288 45.3729 52.5149C43.4943 51.8706 41.7089 51.0272 40.0396 50.0095C40.0225 50 40.0054 49.9906 39.9883 49.9792C37.7289 48.5919 35.6885 46.8863 33.9317 44.9191C33.9317 44.9191 33.9317 44.9191 33.9298 44.9191C32.1482 42.9254 30.6598 40.6683 29.5291 38.214C29.5215 38.1951 29.512 38.178 29.5044 38.161C28.2615 35.4433 27.4564 32.485 27.1823 29.375C27.1137 28.5885 27.0776 27.7925 27.0776 26.9909C27.0776 24.2562 27.4868 21.6181 28.2482 19.1317C18.7978 20.6194 11.5631 28.7761 11.5631 38.6006C11.5631 42.3436 12.6137 45.844 14.4353 48.825L14.4334 48.8231ZM8.53098 57.0102C7.09012 59.165 6.24882 61.7519 6.24882 64.534C6.24882 72.0351 12.3644 78.1242 19.898 78.1242C27.4316 78.1242 33.5472 72.0351 33.5472 64.534C33.5472 57.033 27.4316 50.9438 19.898 50.9438C17.9623 50.9438 16.1198 51.3456 14.4505 52.0715C14.4467 52.0715 14.441 52.0752 14.4353 52.0771C12.0446 53.1195 10.0099 54.8232 8.56905 56.9572C8.55763 56.9742 8.54621 56.9932 8.53288 57.0102H8.53098ZM59.0602 62.4456L55.3238 58.7254C54.1818 60.0728 52.9256 61.3217 51.5723 62.4588L55.3086 66.179L59.0602 62.4437V62.4456ZM60.5144 50.1024C70.7241 47.3317 78.2387 38.0264 78.2387 26.9871C78.2387 13.7664 67.4579 3.03226 54.1799 3.03226C48.4697 3.03226 43.2202 5.01839 39.0918 8.33302C52.6629 11.7671 62.7147 24.0212 62.7147 38.5969C62.7147 42.6582 61.9343 46.5395 60.5144 50.1005V50.1024ZM35.62 10.7266C34.2305 10.5181 32.8068 10.4082 31.3583 10.4082C15.7315 10.4082 3.04542 23.0395 3.04542 38.5988C3.04542 44.0928 4.62713 49.223 7.3623 53.5592C8.58237 52.1795 10.027 51.0026 11.6411 50.0853C9.65398 46.7119 8.51385 42.7871 8.51385 38.5988C8.51385 26.3579 18.2459 16.3647 30.418 15.8739C30.418 15.8739 30.418 15.8739 30.4218 15.8739C30.7321 15.8625 31.0442 15.8549 31.3564 15.8549C34.2933 15.8549 37.1008 16.4083 39.6818 17.4146C39.6989 17.4203 39.7161 17.4279 39.7313 17.4336C42.3104 18.4475 44.6592 19.9125 46.6787 21.7356C48.6677 23.5284 50.3389 25.6662 51.5951 28.0522C51.6046 28.0711 51.6141 28.0882 51.6237 28.1071C53.0093 30.7547 53.8887 33.7054 54.1285 36.8344C54.1742 37.4162 54.197 38.0037 54.197 38.5988C54.197 43.909 52.3641 48.7985 49.2958 52.6703C49.2958 52.6703 49.2958 52.6703 49.2958 52.6722C46.062 56.7506 41.4558 59.7033 36.1739 60.8328C36.446 62.0229 36.5907 63.2605 36.5907 64.5321C36.5907 65.1367 36.5583 65.7356 36.4955 66.3231C40.8943 65.5176 44.939 63.7002 48.3746 61.1208C48.3746 61.1208 48.3746 61.1208 48.3765 61.1189C50.493 59.5289 52.3812 57.6508 53.9781 55.5434C53.9781 55.5434 53.9781 55.5434 53.9781 55.5415C54.9394 54.2736 55.794 52.9205 56.5306 51.4991C56.5306 51.4991 56.5306 51.4972 56.5306 51.4953C58.5349 47.6292 59.6655 43.2438 59.6655 38.5969C59.6655 24.4817 49.2254 12.7753 35.6181 10.7247H35.6143L35.62 10.7266ZM5.45701 56.1934C2.01378 51.1807 0 45.1219 0 38.5988C0 21.366 14.0508 7.37597 31.3583 7.37597C32.6964 7.37597 34.0154 7.45935 35.3116 7.62234C40.1919 2.90528 46.8481 0 54.1799 0C69.1405 0 81.2841 12.093 81.2841 26.9871C81.2841 40.2873 71.5997 51.3513 58.8756 53.5686C58.3597 54.5067 57.7963 55.4164 57.1892 56.292L61.388 60.4727C63.4932 59.3659 66.1636 59.6938 67.9338 61.4582L85.3688 78.8179C87.5444 80.984 87.5444 84.5014 85.3688 86.6676L79.6377 92.374C77.4621 94.5401 73.9294 94.5401 71.7539 92.374L54.3189 75.0143C52.5487 73.2518 52.2194 70.5929 53.3291 68.4968L49.1302 64.3161C45.2397 66.9864 40.7172 68.8057 35.8313 69.5031C33.7071 76.2518 27.3726 81.1546 19.8961 81.1546C10.6818 81.1546 3.2015 73.7066 3.2015 64.5321C3.2015 61.4942 4.02186 58.6439 5.45511 56.1915L5.45701 56.1934Z" fill="white"/>
        </g>
        <defs><clipPath id="clip_why_1"><rect width="87" height="94" fill="white"/></clipPath></defs>
      </svg>
    ),
  },
  {
    title: <><span>Structured Sale,</span> not a loan</>,
    description: "This is not financing. We facilitate a sale with an optional repurchase at a pre-agreed price.",
    icon: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="30" stroke="white" strokeWidth="2.5" fill="none"/>
        <circle cx="40" cy="40" r="20" stroke="white" strokeWidth="2" fill="none"/>
        <text x="40" y="46" textAnchor="middle" fill="white" fontSize="24" fontWeight="300">$</text>
        <line x1="40" y1="5" x2="40" y2="12" stroke="white" strokeWidth="2.5"/>
        <line x1="40" y1="68" x2="40" y2="75" stroke="white" strokeWidth="2.5"/>
        <line x1="5" y1="40" x2="12" y2="40" stroke="white" strokeWidth="2.5"/>
        <line x1="68" y1="40" x2="75" y2="40" stroke="white" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    title: <><span>Built ground-up for Security,</span> nothing left to luck</>,
    description: "This is not financing. We facilitate a sale with an optional repurchase at a pre-agreed price.",
    icon: (
      <svg width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="30" width="60" height="50" rx="5" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M25 30V20C25 11.716 31.716 5 40 5C48.284 5 55 11.716 55 20V30" stroke="white" strokeWidth="2.5" fill="none"/>
        <circle cx="40" cy="55" r="6" stroke="white" strokeWidth="2.5" fill="none"/>
        <line x1="40" y1="61" x2="40" y2="70" stroke="white" strokeWidth="2.5"/>
        <circle cx="15" cy="10" r="3" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M12 10L8 14" stroke="white" strokeWidth="1.5"/>
        <path d="M18 10L22 14" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: <><span>We take your privacy very seriously,</span> not just in words</>,
    description: "Private consultations. No public exposure. Fully encrypted communication.",
    icon: (
      <svg width="80" height="90" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 5L10 20V42C10 62 22 80 40 87C58 80 70 62 70 42V20L40 5Z" stroke="white" strokeWidth="2.5" fill="none"/>
        <path d="M28 45L36 53L52 37" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
];

const WhyCarousel = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = whyItems.length;

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // useLayoutEffect cleanup runs BEFORE React's DOM commit (removeChild),
    // giving gsap.context().revert() time to restore pinned nodes first.
    const ctx = gsap.context(() => {
      const items = section.querySelectorAll('.why-carousel-item');
      const viewport = section.querySelector('.why-carousel-viewport');
      const viewportH = viewport.offsetHeight;
      const activeY = viewportH * 0.15;
      const previewY = viewportH * 0.6;
      const exitY = -viewportH * 0.4;
      const enterY = viewportH * 1.1;

      // Initial state — matches onUpdate at progress=0
      items.forEach((item, i) => {
        if (i === 0) {
          gsap.set(item, { y: activeY, opacity: 1, scale: 1, filter: "blur(0px)" });
        } else if (i === 1) {
          gsap.set(item, { y: previewY, opacity: 0.3, scale: 0.9, filter: "blur(1px)" });
        } else {
          gsap.set(item, { y: enterY, opacity: 0, scale: 0.9, filter: "blur(1px)" });
        }
      });

      let isFirstUpdate = true;
      const transitions = totalItems - 1;

      ScrollTrigger.create({
        trigger: section,
        start: "center center",
        end: `+=${(transitions + 1) * 50}%`,
        pin: true,
        scrub: 1.2,
        onUpdate: (self) => {
          const progress = self.progress;
          const segmentSize = 1 / totalItems;

          items.forEach((item, i) => {
            const itemStart = (i - 0.6) * segmentSize;
            const diff = (progress - itemStart) / segmentSize;

            const animate = isFirstUpdate ? gsap.set : gsap.to;
            const tweenOpts = isFirstUpdate ? {} : { duration: 0.4, ease: "power2.out", overwrite: true };

            if (diff < -1.0) {
              animate(item, { y: enterY, opacity: 0, scale: 0.9, filter: "blur(1px)", ...tweenOpts });
            } else if (diff < -0.5) {
              const t = (diff + 1.0) / 0.5;
              animate(item, { y: enterY + (previewY - enterY) * t, opacity: 0.3 * t, scale: 0.9, filter: "blur(1px)", ...tweenOpts });
            } else if (diff < 0) {
              animate(item, { y: previewY, opacity: 0.3, scale: 0.9, filter: "blur(1px)", ...tweenOpts });
            } else if (diff < 0.3) {
              const t = diff / 0.3;
              animate(item, { y: previewY + (activeY - previewY) * t, opacity: 0.3 + 0.7 * t, scale: 0.9 + 0.1 * t, filter: `blur(${1 * (1 - t)}px)`, ...tweenOpts });
            } else if (diff < 0.7 || i === totalItems - 1) {
              animate(item, { y: activeY, opacity: 1, scale: 1, filter: "blur(0px)", ...tweenOpts });
            } else if (diff < 1.5) {
              const t = (diff - 0.7) / 0.8;
              animate(item, { y: activeY + (exitY - activeY) * t, opacity: Math.max(0, 1 - t * 1.3), scale: 1 - 0.1 * t, filter: "blur(0px)", ...tweenOpts });
            } else {
              animate(item, { y: exitY, opacity: 0, scale: 0.9, filter: "blur(0px)", ...tweenOpts });
            }
          });

          isFirstUpdate = false;
          const currentIndex = Math.min(Math.floor(progress / segmentSize + 0.3), totalItems - 1);
          setActiveIndex(currentIndex);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="why-section" ref={sectionRef}>
      <div className="why-carousel-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ps-title text-center why-carousel-title">
                <h3 className="mb-2"><span>Why</span> Capital Custodia<span>?</span></h3>
              </div>
              <div className="why-carousel-viewport">
                {whyItems.map((item, index) => (
                  <div
                    key={index}
                    className="why-carousel-item text-center"
                  >
                    <div className="wb-icon mb-4">
                      {item.icon}
                    </div>
                    <div className="wb-text">
                      <h5 className="mb-3">{item.title}</h5>
                      <p className="text-white">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NewHeroSection = () => {
  const navigate = useNavigate();

  const useMediaQuery = (query) => {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(() => {
      const media = window.matchMedia(query);
      setMatches(media.matches);

      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);

      return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
  };
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Scroll progress for process timeline
  const processRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start 80%", "end 60%"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <SEO
        title="Sell Luxury Watches for Highest Cash Prices | Capital Custodia"
        description="Get instant cash for your luxury watches with Capital Custodia's global dealer auction. Guaranteed highest prices, professional authentication, buyback options, and bank-vault storage. Rolex, Patek Philippe, Audemars Piguet & more."
        keywords="sell luxury watches, Capital Custodia, luxury watch trading, sell Rolex Dubai, Patek Philippe buyers, authenticated watch dealers, watch buyback program, instant cash for watches, luxury watch auction, watch valuation Dubai, sell watches online, repurchase agreement watches"
        canonical="/"
        ogTitle="Sell or Buyback Your Luxury Watches Securely | Capital Custodia"
        ogDescription="Capital Custodia — the trusted global dealer auction platform for luxury watches. Get highest market prices, professional authentication, bank-vault storage, and immediate payment. Free valuation today."
        ogUrl="https://capitalcustodia.com/"
      />
      <StructuredData type="all" />

      {/* Hero Section with Video */}
      <div className="hero-wrapper">
        <Header />
        <div className="hero-video-bg">
          {/*<iframe
              src="https://www.youtube.com/embed/0M8OMMbyBD0?autoplay=1&mute=1&loop=1&playlist=0M8OMMbyBD0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              title="Capital Custodia"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
          ></iframe>*/}
          <img src={'/images/hm-b.jpg'} alt={'img'} className={'img-fluid'}/>
          {/*<iframe
                src="https://www.youtube.com/embed/0M8OMMbyBD0?autoplay=1&mute=1&loop=1&playlist=0M8OMMbyBD0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                title="Capital Custodia"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>*/}
          <div className="hero-video-overlay"></div>
        </div>

        <div className="hero-text-overlay">
          <div className="hero-text-content">
            <div className={'text-end security-logo'}>
              <img src={'/images/secured-logo.png'} alt={'img'} className={'img-fluid'}/>
            </div>
            <h1 className="hero-main-text">
              {/* Line 1: "A structured platform to" fades in together, then "sell luxury watches" word by word */}
              <motion.span
                style={{ display: "block" }}
                variants={heroContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span variants={wordVariants} style={{ display: "inline-block", marginRight: "0.25em" }}>
                  A structured platform to
                </motion.span>
                <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                  {["sell", "luxury", "watches"].map((word, i) => (
                    <motion.span key={i} variants={wordVariants} style={{ display: "inline-block", marginRight: "0.25em" }}>
                      <b>{word}</b>
                    </motion.span>
                  ))}
                </span>
              </motion.span>
              {/* Line 2: "with an" fades in together, "optional repurchase" fades in together */}
              <motion.span
                style={{ display: "block" }}
                variants={heroLine2ContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.span variants={wordVariants} style={{ display: "inline-block", marginRight: "0.25em" }}>
                  with an
                </motion.span>
                <motion.span variants={wordVariants} style={{ display: "inline-block" }}>
                  <b>optional repurchase</b>
                </motion.span>
              </motion.span>
              {/* Tagline: each phrase slides up one by one */}
              <span style={{ display: "block", marginTop: "0.2em" }}>
                {["Transparent.", "Secure.", "Confidential."].map((phrase, i) => (
                  <span key={phrase} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.35em" }}>
                    <motion.span
                      className="hero-text-md"
                      style={{ display: "inline-block" }}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 1.0 + i * 0.18 }}
                    >
                      {phrase}
                    </motion.span>
                  </span>
                ))}
              </span>
            </h1>
            <motion.button
              className="cta-button"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 2.1 }}
              onClick={() => {
                trackEvent("click", "get_an_offer", "hero_section");
                navigate("/contact");
              }}
            >
              Request Private Consultation
            </motion.button>
          </div>
        </div>
        <motion.div
          className={'banner-bottom-text'}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 2.4 }}
        >
          <p className="features-subtitle">
            Designed for collectors, investors and professionals seeking discreet liquidity
          </p>
        </motion.div>
      </div>

      {/* Feature Cards Section */}
      <div className="features-section">
        <div className="features-content">
          <motion.div
            className="features-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="features-title">
              What if selling your watch <strong>didn't have to be permanent? </strong>

            </h2>
            <p className="features-subtitle">
              Speed, convenience and security like never before
            </p>
          </motion.div>

          <div className="features-cards">
            {featureCards.map((card, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-card-image">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    initial={{ opacity: 0, scale: 1.15 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.9,
                      ease: [0.16, 1, 0.3, 1],
                      delay: isMobile ? 0 : index * 0.15,
                    }}
                  />
                </div>
                <motion.div
                  className="feature-card-info"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: isMobile ? 0.1 : index * 0.15 + 0.3,
                  }}
                >
                  <h3 className="feature-card-title">{card.title}</h3>
                  <p className="feature-card-subtitle">{card.subtitle}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={'process-section py-5 my-md-5'}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-md-12'}>
              <div className={'ps-title text-center mb-5'}>
                <h3 className={'mb-2'}><span>Learn more about</span> our<br/> process</h3>
                <p>
                  Get paid in 4 simple steps
                </p>
              </div>
              <div className={'process-list-div position-relative'} ref={processRef}>
                <motion.div
                  className="process-progress-line"
                  style={{ height: lineHeight }}
                />
                <div className={'process-box process-box-left pe-5 mb-5 pt-5'}>
                  <div className={'px-text text-md-end'}>
                    <h1 className={'mb-2'}>1</h1>
                    <h4 className={'mb-2'}>Talk to us</h4>
                    <p>
                      Send details privately
                    </p>
                  </div>
                  <motion.div className={'pb-icon'} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ type: "spring", stiffness: 280, damping: 12 }}>
                    <svg width="91" height="72" viewBox="0 0 91 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_40000895_686)">
                        <path
                            d="M41.693 52.4126C48.9944 52.4126 54.9134 46.5014 54.9134 39.2095C54.9134 31.9176 48.9944 26.0063 41.693 26.0063C34.3916 26.0063 28.4727 31.9176 28.4727 39.2095C28.4727 46.5014 34.3916 52.4126 41.693 52.4126Z"
                            fill="white"/>
                        <path
                            d="M65.7347 60.015C65.7347 52.7113 71.6687 46.7905 78.9885 46.7905C80.5302 46.7905 82.0105 47.053 83.3865 47.5361V20.4585C83.3865 15.5244 79.0862 11.5248 73.7817 11.5248H62.9492C62.677 11.5248 62.4244 11.3921 62.2845 11.1749L57.869 4.33504C56.1328 1.64531 53.0072 0 49.6344 0H33.0369C29.6488 0 26.5116 1.66018 24.7805 4.36877L20.4326 11.172C20.2927 11.3906 20.0393 11.5248 19.766 11.5248H9.60515C4.30029 11.5245 0 15.5244 0 20.4585V57.9606C0 62.8947 4.30029 66.8943 9.60479 66.8943H67.6668C66.4409 64.89 65.7347 62.535 65.7347 60.015ZM41.6934 58.5717C30.9863 58.5717 22.3061 49.903 22.3061 39.2094C22.3061 28.5158 30.986 19.8471 41.6934 19.8471C52.4009 19.8471 61.0807 28.5161 61.0807 39.2094C61.0807 49.9027 52.4009 58.5717 41.6934 58.5717Z"
                            fill="white"/>
                        <path
                            d="M78.9881 48.0303C72.3545 48.0303 66.9766 53.3959 66.9766 60.0153C66.9766 66.6346 72.3541 72.0003 78.9881 72.0003C85.6221 72.0003 90.9996 66.6346 90.9996 60.0153C90.9996 53.3959 85.6221 48.0303 78.9881 48.0303ZM85.4076 61.2548H80.2304V66.4207C80.2304 67.1053 79.6739 67.6605 78.9877 67.6605C78.3015 67.6605 77.7451 67.1053 77.7451 66.4207V61.2548H72.5678C71.8816 61.2548 71.3252 60.6996 71.3252 60.0149C71.3252 59.3303 71.8816 58.775 72.5678 58.775H77.7451V53.6092C77.7451 52.9245 78.3015 52.3693 78.9877 52.3693C79.6739 52.3693 80.2304 52.9245 80.2304 53.6092V58.775H85.4076C86.0938 58.775 86.6503 59.3303 86.6503 60.0149C86.6503 60.6996 86.0938 61.2548 85.4076 61.2548Z"
                            fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_40000895_686">
                          <rect width="91" height="72" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </motion.div>
                </div>
                <div className={'process-box process-box-right ps-md-5 mb-5'}>

                  <motion.div className={'pb-icon'} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ type: "spring", stiffness: 280, damping: 12 }}>
                    <svg width="107" height="72" viewBox="0 0 107 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_40000901_711)">
                        <path
                            d="M32.1791 59.8602L23.5429 45.868C21.7242 42.9971 19.8121 40.9326 18.2252 39.5548C18.3942 39.3405 34.3727 12.7533 34.8417 11.4535C36.6927 12.1635 39.3039 12.69 42.4782 12.0598L48.6951 10.8244C52.3718 10.0945 56.218 10.6159 59.5215 12.2946C69.3787 17.3063 77.5534 18.7314 83.5644 20.1423C89.4145 21.5162 91.9618 25.8651 85.9969 29.5018C83.8707 30.76 81.4746 31.4974 79.0076 31.6484C74.4282 31.9242 71.7154 30.2181 69.9169 29.3782C66.5287 27.8105 62.5619 27.6795 58.9914 28.9388C58.1371 29.2397 57.2338 29.3782 56.3276 29.3782L32.9226 29.5018L32.9226 59.7901C32.8147 60.091 32.3688 60.169 32.1791 59.8608L32.1791 59.8602Z"
                            fill="white"/>
                        <path
                            d="M19.3037 0.167551C18.0347 0.502612 16.9745 1.30721 16.3181 2.43149L0.664944 28.7082C0.223677 29.4638 -0.000131692 30.2968 -0.000131728 31.1396C-0.000131747 31.5619 0.0558146 31.9858 0.169451 32.4035C0.508619 33.6571 1.3231 34.7045 2.46116 35.353L9.54392 39.3936C10.3157 39.8341 11.1607 40.0438 11.9937 40.0438C13.573 40.0438 15.1154 39.2934 16.0551 37.9389C16.1277 37.8352 16.1975 37.7258 16.2621 37.6152L17.1781 36.0767L31.4169 12.1745L31.9159 11.3363C32.1299 10.9693 32.2908 10.5869 32.3975 10.1983C32.9847 8.11158 32.0987 5.81915 30.1191 4.69145L23.0363 0.652478C21.8982 0.00229961 20.5733 -0.16865 19.3043 0.166411L19.3037 0.167551ZM20.4689 13.1238C20.1159 12.9227 19.9174 12.5557 19.9174 12.1802C19.9174 11.9944 19.9647 11.8081 20.0651 11.6354L22.328 7.76398C22.6331 7.24259 23.3068 7.06366 23.8346 7.3651C24.3624 7.66483 24.5435 8.33211 24.2384 8.8535L21.9755 12.7249C21.6715 13.2463 20.9967 13.4253 20.4689 13.1238Z"
                            fill="white"/>
                        <path
                            d="M66.8848 47.0478C66.8848 47.8342 67.2718 48.3225 68.5645 48.7345L68.5645 45.5161C67.337 45.6198 66.8848 46.2934 66.8848 47.0478Z"
                            fill="white"/>
                        <path
                            d="M71.3711 52.2726C71.3711 51.4287 70.9748 50.8509 69.542 50.3865L69.542 53.9639C70.7354 53.8522 71.3711 53.304 71.3711 52.2721L71.3711 52.2726Z"
                            fill="white"/>
                        <path
                            d="M75.9902 49.9322C75.9902 44.0481 72.9198 39.2798 69.1307 39.2798C65.3416 39.2798 62.2723 44.0481 62.2723 49.9322C62.2723 55.8163 65.3427 60.583 69.1307 60.583C72.9187 60.583 75.9902 55.8146 75.9902 49.9322ZM68.5648 56.0608L68.5648 55.0658C66.9763 54.9519 65.8965 54.2453 65.4085 53.2219C65.1916 52.7654 65.5487 52.2514 66.0874 52.2514C66.3937 52.2514 66.6631 52.4258 66.7796 52.6862C67.1003 53.4048 67.7648 53.8282 68.5648 53.949L68.5648 50.1123C66.2841 49.4786 65.3808 48.6968 65.3808 47.2056C65.3808 45.6146 66.7156 44.5553 68.5648 44.4328L68.5648 43.802C68.5648 43.553 68.7835 43.3501 69.0528 43.3501C69.3222 43.3501 69.5408 43.553 69.5408 43.802L69.5408 44.4482C71.1248 44.5923 71.9617 45.2921 72.3638 46.0346C72.6055 46.4825 72.2484 47.009 71.7068 47.009C71.4213 47.009 71.1559 46.858 71.0423 46.6158C70.8064 46.1132 70.3732 45.6915 69.5414 45.5502L69.5414 48.9983C72.159 49.6906 72.9181 50.7232 72.9181 52.1238C72.9181 53.8846 71.6474 54.9194 69.5414 55.0636L69.5414 56.0596C69.5414 56.3087 69.3228 56.5115 69.0534 56.5115C68.784 56.5115 68.5654 56.3087 68.5654 56.0596L68.5648 56.0608Z"
                            fill="white"/>
                        <path
                            d="M102.719 32.093L86.066 32.093C83.915 33.1643 81.5495 33.8002 79.1522 33.9473C74.9668 34.1991 72.0072 32.9825 70.1896 32.093L35.5458 32.093L35.5458 67.7702L102.719 67.7702L102.719 32.093ZM46.675 64.3165C46.2424 60.6496 43.2879 57.7315 39.5761 57.3024L39.5761 42.5614C41.3832 42.354 43.0549 41.5596 44.3573 40.2695C45.6615 38.9811 46.4673 37.3298 46.6761 35.5462L91.5879 35.5462C91.7949 37.3298 92.6019 38.9812 93.9067 40.2695C95.2097 41.5596 96.8813 42.354 98.6868 42.5614L98.6868 57.3024C94.9767 57.7315 92.0222 60.6496 91.5896 64.3165L46.6756 64.3165L46.675 64.3165Z"
                            fill="white"/>
                        <path d="M107 72L41.4266 72L41.4266 70.1281L105.106 70.1281L105.106 37.1086L107 37.1086L107 72Z"
                              fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_40000901_711">
                          <rect width="72" height="107" fill="white" transform="translate(107 4.67712e-06) rotate(90)"/>
                        </clipPath>
                      </defs>
                    </svg>

                  </motion.div>
                  <div className={'px-text'}>
                    <h1 className={'mb-2'}>2</h1>
                    <h4 className={'mb-2'}>Get the best price</h4>
                    <p>
                      Global dealerscompeteto<br/>
                      offer the highest price
                    </p>
                  </div>
                </div>
                <div className={'process-box process-box-left pe-5 mb-5'}>
                  <div className={'px-text text-md-end'}>
                    <h1 className={'mb-2'}>3</h1>
                    <h4 className={'mb-2'}>Secure Custody</h4>
                    <p>
                      We buy and store with<br/>
                      TransGuard, UAE's most trusted<br/>
                      custodian
                    </p>
                  </div>
                  <motion.div className={'pb-icon'} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ type: "spring", stiffness: 280, damping: 12 }}>
                    <svg width="85" height="87" viewBox="0 0 85 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_40000910_771)">
                        <path
                            d="M29.162 34.6931C26.777 34.6931 24.8438 36.633 24.8438 39.0261C24.8438 41.4192 26.777 43.3591 29.162 43.3591C31.547 43.3591 33.4803 41.4192 33.4803 39.0261C33.4803 36.633 31.547 34.6931 29.162 34.6931Z"
                            fill="white"/>
                        <path
                            d="M41.7011 41.4527H42.2412C42.8615 41.4527 43.5129 41.182 43.9514 40.742C44.3899 40.302 44.6866 39.6306 44.6597 39.0259C44.6317 38.3983 44.426 37.7473 43.9514 37.3099C43.4784 36.874 42.8966 36.5992 42.2412 36.5992H40.0361C39.9654 36.279 39.8821 35.9624 39.7815 35.6539C39.4639 34.6807 39.0295 33.7207 38.4518 32.8713C38.8298 32.4793 39.2074 32.0867 39.5854 31.6947C39.7104 31.5646 39.8359 31.4346 39.9609 31.3046C40.3968 30.8524 40.6691 30.2218 40.6691 29.5886C40.6818 29.2546 40.6122 28.9426 40.4608 28.6535C40.3633 28.3528 40.1966 28.0922 39.9609 27.8725C39.5 27.4478 38.8949 27.1327 38.2506 27.1618C37.6155 27.1904 36.9926 27.403 36.5404 27.8725C36.0186 28.4144 35.4968 28.9564 34.9745 29.4983C34.2936 29.0782 33.5635 28.7479 32.808 28.4695C32.4091 28.3227 31.9981 28.2029 31.5794 28.108V25.9015C31.5794 25.279 31.3096 24.6254 30.8711 24.1854C30.4514 23.7643 29.7635 23.4477 29.1609 23.4748C28.5354 23.5028 27.8866 23.7093 27.4507 24.1854C27.0162 24.6601 26.7424 25.2438 26.7424 25.9015V28.1152C26.5341 28.1616 26.3273 28.212 26.1235 28.2702C25.0393 28.5801 23.9809 29.066 23.0211 29.6982C22.6319 29.3209 22.2432 28.9436 21.854 28.5669C21.7245 28.4415 21.5949 28.3155 21.4653 28.1901C21.0147 27.7532 20.3862 27.4794 19.7551 27.4794C19.4223 27.4667 19.1114 27.5365 18.8233 27.6884C18.5235 27.7863 18.2639 27.9536 18.0449 28.1901C17.6216 28.6525 17.3076 29.2597 17.3366 29.9062C17.3651 30.5435 17.5769 31.1685 18.0449 31.6223C18.5845 32.1453 19.1236 32.6684 19.6631 33.1915C19.6388 33.2313 19.6118 33.2695 19.5879 33.3093C19.2618 33.8548 19.0153 34.4339 18.7745 35.0223C18.5647 35.5346 18.4097 36.0628 18.2943 36.5997H16.0745C15.4546 36.5997 14.8028 36.8704 14.3643 37.3104C13.9258 37.7503 13.6291 38.4218 13.656 39.0264C13.6839 39.654 13.8897 40.3051 14.3643 40.7425C14.8373 41.1784 15.4191 41.4532 16.0745 41.4532H18.2842C18.5489 42.6385 19.0042 43.7836 19.6225 44.8007C19.7007 44.9297 19.7831 45.0577 19.8669 45.1846C19.4904 45.5756 19.1134 45.9667 18.7369 46.3577C18.6114 46.4877 18.4864 46.6177 18.3614 46.7477C17.926 47.1999 17.6531 47.8306 17.6531 48.4638C17.6404 48.7977 17.71 49.1097 17.8615 49.3988C17.959 49.6996 18.1257 49.9601 18.3614 50.1799C18.8223 50.6045 19.4274 50.9196 20.0717 50.8906C20.7068 50.862 21.3297 50.6494 21.7819 50.1799C22.3032 49.6389 22.824 49.0975 23.3453 48.5566C23.6684 48.7569 24.0022 48.9395 24.3472 49.096C24.9453 49.3677 25.5555 49.6242 26.1891 49.8C26.372 49.851 26.5569 49.8928 26.7424 49.9306V52.1503C26.7424 52.7728 27.0122 53.4264 27.4507 53.8664C27.8703 54.2875 28.5583 54.6041 29.1609 54.5771C29.7863 54.5491 30.4352 54.3426 30.8711 53.8664C31.3055 53.3918 31.5794 52.808 31.5794 52.1503V49.9331C32.8903 49.6609 34.1666 49.1082 35.3012 48.3537C35.6898 48.7309 36.079 49.1077 36.4677 49.485C36.5973 49.6109 36.7269 49.7363 36.8564 49.8617C37.3071 50.2987 37.9356 50.5724 38.5667 50.5724C38.8995 50.5852 39.2104 50.5153 39.4985 50.3634C39.7983 50.2655 40.0579 50.0983 40.2769 49.8617C40.7001 49.3993 41.0141 48.7921 40.9852 48.1457C40.9567 47.5084 40.7448 46.8833 40.2769 46.4296C39.7378 45.907 39.1987 45.3845 38.6601 44.8619C39.308 43.8106 39.7886 42.6513 40.032 41.4522H41.7006L41.7011 41.4527ZM35.4165 39.8773C35.3205 40.4279 35.1736 40.9663 34.977 41.4889C34.7458 41.9829 34.4714 42.4535 34.1554 42.897C33.8109 43.3105 33.4314 43.6913 33.0198 44.0365C32.5773 44.3536 32.1088 44.6289 31.6165 44.8609C31.0967 45.0577 30.5612 45.205 30.0135 45.3014C29.4464 45.3554 28.8769 45.3554 28.3098 45.3014C27.7621 45.205 27.2266 45.0577 26.7068 44.8609C26.2145 44.6289 25.7455 44.3536 25.3035 44.0365C24.8914 43.6908 24.5119 43.31 24.1679 42.897C23.8518 42.453 23.5775 41.9829 23.3463 41.4889C23.1502 40.9673 23.0033 40.43 22.9073 39.8804C22.8534 39.3114 22.8534 38.7399 22.9073 38.171C23.0033 37.6214 23.1502 37.084 23.3463 36.5625C23.5775 36.0684 23.8518 35.5984 24.1679 35.1543C24.5124 34.7409 24.8919 34.36 25.3035 34.0149C25.746 33.6978 26.2145 33.4224 26.7068 33.1905C27.2266 32.9937 27.7621 32.8469 28.3098 32.75C28.8769 32.6965 29.4464 32.6965 30.0135 32.75C30.5612 32.8463 31.0962 32.9937 31.6165 33.1905C32.1088 33.4224 32.5778 33.6978 33.0198 34.0149C33.4319 34.3605 33.8114 34.7414 34.1554 35.1543C34.4714 35.5984 34.7458 36.0684 34.977 36.5625C35.1736 37.085 35.3205 37.6239 35.4165 38.174C35.4434 38.457 35.4617 38.7404 35.4627 39.0254C35.4617 39.3104 35.4429 39.5939 35.4165 39.8768V39.8773Z"
                            fill="white"/>
                        <path
                            d="M69.0435 45.1878L68.1543 44.7417L67.2652 45.1878C62.3108 47.6737 56.8478 48.9676 51.3086 48.9676V67.307C51.3086 74.1968 55.1879 80.4947 61.3292 83.576L68.1543 87.0005L74.9795 83.576C81.1208 80.4947 85.0001 74.1968 85.0001 67.307V48.9676C79.4609 48.9676 73.9979 47.6737 69.0435 45.1878ZM76.5399 62.2695C76.2005 62.6105 75.8611 62.9521 75.5217 63.2932C74.0528 64.7696 72.5839 66.2461 71.115 67.7225C70.1948 68.6479 69.2742 69.5732 68.3535 70.498C67.3617 71.4947 65.6784 71.4896 64.6887 70.498C64.4829 70.2915 64.2766 70.0851 64.0708 69.8791C62.6365 68.4424 61.2026 67.0062 59.7683 65.5696C59.2719 65.0725 59.0402 64.4204 59.0092 63.7311C58.9782 63.0388 59.3146 62.3882 59.7683 61.8927C60.2058 61.4145 60.9649 61.131 61.6005 61.131C62.2361 61.131 62.9622 61.4211 63.4326 61.8927C63.6384 62.0992 63.8447 62.3057 64.0505 62.5116C64.8726 63.3355 65.6952 64.1589 66.5173 64.9827C67.7159 63.778 68.9144 62.5728 70.113 61.3681C71.0332 60.4428 71.9538 59.5174 72.8745 58.5926C73.3699 58.0945 74.0197 57.862 74.7067 57.8309C75.3967 57.7998 76.045 58.1378 76.5388 58.5926C77.0154 59.0316 77.2979 59.7932 77.2979 60.431C77.2979 61.0688 77.0088 61.7974 76.5388 62.2695H76.5399Z"
                            fill="white"/>
                        <path
                            d="M42.9585 69.3682H12.3146C10.0383 69.3682 8.19296 67.5166 8.19296 65.2325V12.3571C8.19296 10.0731 10.0383 8.22143 12.3146 8.22143H65.0107C67.2869 8.22143 69.1323 10.0731 69.1323 12.3571V42.8105L70.0088 43.2504C72.3318 44.4159 74.7945 45.3055 77.3258 45.9025V6.95451C77.3258 3.11401 74.2229 0 70.3949 0H6.93086C3.10291 0 0 3.1135 0 6.95451V70.6357C0 74.4767 3.10291 77.5902 6.93086 77.5902H47.255L51.9335 77.633C50.4747 75.1425 49.5475 72.3344 49.2523 69.3687H42.9591L42.9585 69.3682Z"
                            fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_40000910_771">
                          <rect width="85" height="87" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>

                  </motion.div>
                </div>
                <div className={'process-box process-box-right ps-md-5 mb-5 pb-5'}>

                  <motion.div className={'pb-icon'} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ type: "spring", stiffness: 280, damping: 12 }}>
                    <svg width="110" height="98" viewBox="0 0 110 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_40000903_739)">
                        <path
                            d="M108.98 48.2815L103.495 48.2716C103.41 21.6427 81.7083 0 55.0107 0C52.9772 0 50.9434 0.126261 48.9318 0.377205C46.9663 0.622231 45.6468 2.52365 46.0402 4.46136C46.4011 6.24007 48.0827 7.39733 49.8876 7.17716C51.5826 6.97001 53.2962 6.86585 55.0107 6.86585C77.9122 6.86585 96.5371 25.4211 96.6272 48.259L91.4101 48.2495C90.5922 48.248 90.1052 49.1598 90.5626 49.8365L99.3259 62.8015C99.7291 63.3981 100.609 63.3997 101.014 62.8043L109.821 49.8704C110.281 49.1953 109.798 48.2823 108.98 48.2811V48.2815Z"
                            fill="white"/>
                        <path
                            d="M35.7575 11.1919C36.6706 11.1919 37.5584 10.8297 38.1964 10.1921C39.4721 8.91922 39.4721 6.61022 38.1964 5.33656C37.5584 4.6879 36.6702 4.32568 35.7575 4.32568C34.8447 4.32568 33.9695 4.6879 33.3311 5.33656C33.1686 5.4865 33.0311 5.6609 32.9062 5.86094C32.7813 6.03652 32.6686 6.23538 32.5808 6.44727C32.5061 6.64731 32.4314 6.87261 32.3935 7.08489C32.3433 7.30939 32.3184 7.53351 32.3184 7.7592C32.3184 8.66986 32.6939 9.55605 33.3315 10.1925C33.9695 10.8301 34.8578 11.1923 35.7578 11.1923L35.7575 11.1919Z"
                            fill="white"/>
                        <path
                            d="M26.7868 17.9792C28.2249 16.7307 28.3751 14.5583 27.1366 13.1355C25.8859 11.7004 23.7221 11.5505 22.284 12.7855C21.4961 13.4598 21.0957 14.4213 21.0957 15.3821C21.0957 16.1819 21.3712 16.9805 21.9337 17.6304C23.1845 19.0654 25.3483 19.2153 26.7868 17.9792Z"
                            fill="white"/>
                        <path
                            d="M18.0935 28.4013C19.5315 27.1529 19.6818 24.9804 18.4433 23.5576C17.1926 22.1225 15.0287 21.9726 13.5906 23.2076C12.8028 23.8819 12.4023 24.8435 12.4023 25.8042C12.4023 26.604 12.6779 27.4026 13.2404 28.0525C14.4911 29.4875 16.655 29.6374 18.0935 28.4013Z"
                            fill="white"/>
                        <path
                            d="M1.01977 49.7184L6.50414 49.7283C6.58952 76.3572 28.291 97.9999 54.989 97.9999C57.0224 97.9999 59.0563 97.8736 61.0679 97.6227C63.0334 97.3777 64.3529 95.4763 63.9595 93.5386C63.5986 91.7598 61.917 90.6026 60.1121 90.8228C58.4171 91.0299 56.7034 91.1341 54.989 91.1341C32.0874 91.1341 13.4626 72.5788 13.3724 49.7409L18.5896 49.7504C19.4075 49.752 19.8945 48.8401 19.4371 48.1634L10.6737 35.1984C10.2705 34.6018 9.3906 34.6002 8.98542 35.1956L0.178179 48.1291C-0.281553 48.8042 0.201502 49.7172 1.01977 49.7184Z"
                            fill="white"/>
                        <path
                            d="M74.2434 86.808C73.3302 86.808 72.4424 87.1702 71.8044 87.8078C70.5287 89.0807 70.5287 91.3897 71.8044 92.6634C72.4424 93.312 73.3306 93.6743 74.2434 93.6743C75.1561 93.6743 76.0313 93.312 76.6697 92.6634C76.8322 92.5134 76.9697 92.339 77.0947 92.139C77.2196 91.9634 77.3322 91.7646 77.42 91.5527C77.4947 91.3526 77.5694 91.1273 77.6074 90.915C77.6576 90.6905 77.6825 90.4664 77.6825 90.2407C77.6825 89.3301 77.3069 88.4439 76.6693 87.8074C76.0313 87.1698 75.1431 86.8076 74.243 86.8076L74.2434 86.808Z"
                            fill="white"/>
                        <path
                            d="M83.2128 80.0206C81.7747 81.269 81.6245 83.4415 82.8629 84.8643C84.1137 86.2993 86.2775 86.4493 87.7156 85.2143C88.5034 84.54 88.9039 83.5784 88.9039 82.6176C88.9039 81.8178 88.6284 81.0192 88.0658 80.3694C86.8151 78.9344 84.6513 78.7844 83.2128 80.0206Z"
                            fill="white"/>
                        <path
                            d="M91.9061 69.5987C90.468 70.8471 90.3178 73.0196 91.5563 74.4424C92.807 75.8775 94.9709 76.0274 96.409 74.7924C97.1968 74.1181 97.5972 73.1565 97.5972 72.1958C97.5972 71.396 97.3217 70.5974 96.7592 69.9475C95.5085 68.5125 93.3446 68.3625 91.9061 69.5987Z"
                            fill="white"/>
                        <path
                            d="M62.3209 49.1612H64.042C63.7495 44.7069 60.182 41.1456 55.7194 40.854V42.5719C55.7194 42.8986 55.4538 43.1638 55.1265 43.1638C54.7992 43.1638 54.5335 42.8986 54.5335 42.5719V40.854C50.071 41.146 46.5031 44.7069 46.2109 49.1612H47.9321C48.2594 49.1612 48.525 49.426 48.525 49.753C48.525 50.0801 48.2594 50.3449 47.9321 50.3449H46.2109C46.5035 54.7992 50.071 58.3605 54.5335 58.6521V56.9342C54.5335 56.6071 54.7988 56.3423 55.1265 56.3423C55.4542 56.3423 55.7194 56.6071 55.7194 56.9342V58.6521C60.182 58.3601 63.7499 54.7988 64.042 50.3449H62.3209C61.9936 50.3449 61.728 50.0801 61.728 49.753C61.728 49.426 61.9932 49.1612 62.3209 49.1612ZM61.5109 46.7539L56.3515 49.7302C56.3515 49.7377 56.3519 49.7456 56.3519 49.753C56.3519 50.4274 55.8021 50.9762 55.1265 50.9762C54.4509 50.9762 53.9011 50.4274 53.9011 49.753C53.9011 49.6441 53.9157 49.5388 53.9422 49.4386L51.7111 47.2996C51.4751 47.0732 51.4672 46.6987 51.6941 46.4628C51.921 46.2272 52.2965 46.2193 52.5325 46.4458L54.7632 48.5847C54.8778 48.5492 54.9996 48.5299 55.1261 48.5299C55.357 48.5299 55.5732 48.5938 55.7574 48.7051L60.9168 45.7289C61.2002 45.5655 61.5631 45.6622 61.7268 45.9451C61.8908 46.228 61.7936 46.5902 61.5102 46.7536L61.5109 46.7539Z"
                            fill="white"/>
                        <path
                            d="M55.0002 19.6633C38.793 19.6633 25.6094 32.8245 25.6094 49.0001C25.6094 65.1758 38.7934 78.3369 55.0002 78.3369C71.207 78.3369 84.3918 65.1762 84.3918 49.0001C84.3918 32.8241 71.2082 19.6633 55.0002 19.6633ZM49.2806 29.8668C49.2806 28.472 50.4131 27.3416 51.8105 27.3416H58.444C59.8414 27.3416 60.9739 28.472 60.9739 29.8668V37.2756C60.7269 37.1525 60.4759 37.0369 60.2225 36.9299C58.6065 36.2477 56.8921 35.9017 55.1275 35.9017C53.3629 35.9017 51.6485 36.2477 50.0325 36.9299C49.7791 37.0369 49.5281 37.1525 49.281 37.2756V29.8668H49.2806ZM60.9735 69.6391C60.9735 71.0339 59.841 72.1643 58.4436 72.1643H51.8101C50.4128 72.1643 49.2802 71.0335 49.2802 69.6391V62.2303C49.5273 62.3534 49.7783 62.469 50.0317 62.576C51.6477 63.2582 53.3621 63.6042 55.1267 63.6042C56.8913 63.6042 58.6057 63.2582 60.2217 62.576C60.4751 62.469 60.7261 62.3534 60.9731 62.2303V69.6391H60.9735ZM69.9318 51.0736C69.9318 51.5301 69.561 51.9002 69.1036 51.9002H68.6056C68.2707 51.9002 67.983 51.7013 67.8525 51.416C67.7043 52.5583 67.4031 53.6714 66.9501 54.7399C66.5156 55.7646 65.8298 57.0394 65.2783 57.9958C64.3059 59.6822 63.6541 62.9725 63.6541 62.9725C63.5189 63.6003 62.9631 64.5125 62.1112 64.5125H61.742V60.7318C61.2249 61.0423 60.685 61.3169 60.1236 61.554C58.5393 62.2228 56.8581 62.5621 55.1275 62.5621C53.3969 62.5621 51.7157 62.2228 50.1313 61.554C49.57 61.3169 49.03 61.0423 48.5129 60.7318V64.5125H48.1437C47.2915 64.5125 46.7361 63.6003 46.6009 62.9725C46.6009 62.9725 45.949 59.6826 44.9766 57.9958C44.4252 57.0394 43.7389 55.7646 43.3049 54.7399C42.6349 53.1585 42.2949 51.4804 42.2949 49.753C42.2949 48.0255 42.6349 46.3475 43.3049 44.766C43.7389 43.7413 44.4252 42.4665 44.9766 41.5101C45.949 39.8237 46.6009 36.5334 46.6009 36.5334C46.7361 35.9056 47.2919 34.9934 48.1437 34.9934H48.5129V38.7741C49.03 38.4636 49.57 38.189 50.1313 37.9519C51.7157 37.2831 53.3969 36.9438 55.1275 36.9438C56.8581 36.9438 58.5393 37.2831 60.1236 37.9519C60.685 38.1886 61.2249 38.4636 61.742 38.7741V34.9934H62.1112C62.9635 34.9934 63.5189 35.906 63.6541 36.5334C63.6541 36.5334 64.3059 39.8233 65.2783 41.5101C65.8298 42.4665 66.516 43.7413 66.9501 44.766C67.424 45.8846 67.7319 47.0518 67.8719 48.2504C68.0102 47.9869 68.2866 47.807 68.6052 47.807H69.1032C69.5606 47.807 69.9314 48.1771 69.9314 48.6336V51.0736H69.9318Z"
                            fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_40000903_739">
                          <rect width="110" height="98" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>


                  </motion.div>
                  <div className={'px-text'}>
                    <h1 className={'mb-2'}>4</h1>
                    <h4 className={'mb-2'}>Choose your Option</h4>
                    <p>
                      Repurchase . Extend . Exit
                    </p>
                  </div>
                </div>
              </div>
              <div className={'ps-title text-center mb-5'}>
                <h3 className={'mb-2'}>This is {" "}<span>not a loan</span></h3>
                <p>
                  This is a structured sale with optional repurchase
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhyCarousel />

      <LuxryFrame/>
    </>
  );
};

export default NewHeroSection;
