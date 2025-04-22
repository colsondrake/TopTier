import React from "react";
import ttlogo from "@/assets/ttlogo.png";

// website logo
function Logo() {
  return (
    <div className="flex items-center">
      <svg width="70" height="62" viewBox="0 0 70 62" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="34.9697" cy="31" r="30" fill="#0E1113" stroke="#D4AF37" strokeWidth="2"/>
      <g filter="url(#filter0_d_55_463)">
      <path d="M11.9347 23.9141C12.4439 26.0173 14.7646 27.2599 14.7646 27.2599C14.7646 27.2599 16.2606 25.0925 15.7527 22.9889C15.2426 20.8832 12.9212 19.6423 12.9212 19.6423C12.9212 19.6423 11.4268 21.8104 11.9347 23.9141ZM12.615 31.3791C14.1681 32.8869 16.7969 32.7038 16.7969 32.7038C16.7969 32.7038 16.9079 30.0755 15.3548 28.5677C13.8016 27.0598 11.1712 27.2422 11.1712 27.2422C11.1712 27.2422 11.0606 29.8717 12.615 31.3791ZM16.0908 37.4434C18.1762 38.033 20.4051 36.6258 20.4051 36.6258C20.4051 36.6258 19.2512 34.2619 17.1658 33.6723C15.0804 33.0827 12.8516 34.4898 12.8516 34.4898C12.8516 34.4898 14.0054 36.8538 16.0908 37.4434ZM22.5072 40.9971C24.6704 41.1439 26.5611 39.308 26.5611 39.308C26.5611 39.308 24.9433 37.2342 22.7796 37.0862C20.6164 36.9394 18.7274 38.7761 18.7274 38.7761C18.7274 38.7761 20.344 40.8504 22.5072 40.9971ZM15.763 17.3447C14.8173 19.2938 15.8153 21.7259 15.8153 21.7259C15.8153 21.7259 18.3501 20.9993 19.2958 19.0502C20.2415 17.101 19.2431 14.6677 19.2431 14.6677C19.2431 14.6677 16.7086 15.3956 15.763 17.3447Z" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <g filter="url(#filter1_d_55_463)">
      <path d="M44.3633 21.7752H46.1258C47.8869 21.7752 48.7667 21.7752 49.2271 22.3272C49.686 22.8807 49.4954 23.7094 49.1127 25.3683L48.5408 27.8574C47.6772 31.5969 44.5246 34.3788 40.6975 34.9528M25.3012 21.7752H23.5387C21.7776 21.7752 20.8964 21.7752 20.4374 22.3272C19.9785 22.8807 20.1691 23.7094 20.5518 25.3683L21.1237 27.8574C21.9873 31.5969 25.1399 34.3788 28.967 34.9528M34.8323 39.3453C32.3776 39.3453 30.2427 41.1975 29.14 43.9296C28.6121 45.2357 29.3688 46.6662 30.3717 46.6662H39.2913C40.2958 46.6662 41.0509 45.2357 40.5245 43.9296C39.4218 41.1975 37.2869 39.3453 34.8323 39.3453Z" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M34.8322 39.3453C39.2604 39.3453 42.9922 32.5193 44.1139 23.2247C44.4233 20.6566 44.5788 19.371 43.7576 18.3769C42.9365 17.3827 41.6095 17.3827 38.9569 17.3827H30.7074C28.0534 17.3827 26.7278 17.3827 25.9067 18.3769C25.0856 19.371 25.2424 20.6566 25.5504 23.2262C26.6721 32.5193 30.4039 39.3453 34.8322 39.3453Z" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <g filter="url(#filter2_d_55_463)">
      <path d="M58.0345 23.9141C57.5254 26.0173 55.2047 27.2599 55.2047 27.2599C55.2047 27.2599 53.7086 25.0925 54.2166 22.9889C54.7267 20.8832 57.0481 19.6423 57.0481 19.6423C57.0481 19.6423 58.5425 21.8104 58.0345 23.9141ZM57.3542 31.3791C55.8011 32.8869 53.1724 32.7038 53.1724 32.7038C53.1724 32.7038 53.0613 30.0755 54.6145 28.5677C56.1676 27.0598 58.7981 27.2422 58.7981 27.2422C58.7981 27.2422 58.9086 29.8717 57.3542 31.3791ZM53.8785 37.4434C51.7931 38.033 49.5642 36.6258 49.5642 36.6258C49.5642 36.6258 50.718 34.2619 52.8034 33.6723C54.8888 33.0827 57.1177 34.4898 57.1177 34.4898C57.1177 34.4898 55.9639 36.8538 53.8785 37.4434ZM47.462 40.9971C45.2988 41.1439 43.4081 39.308 43.4081 39.308C43.4081 39.308 45.0259 37.2342 47.1896 37.0862C49.3528 36.9394 51.2418 38.7761 51.2418 38.7761C51.2418 38.7761 49.6252 40.8504 47.462 40.9971ZM54.2063 17.3447C55.152 19.2938 54.154 21.7259 54.154 21.7259C54.154 21.7259 51.6191 20.9993 50.6734 19.0502C49.7277 17.101 50.7262 14.6677 50.7262 14.6677C50.7262 14.6677 53.2606 15.3956 54.2063 17.3447Z" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
      <filter id="filter0_d_55_463" x="-4.00024" y="6" width="48.5237" height="48.5236" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.686275 0 0 0 0 0.215686 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_55_463"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_55_463" result="shape"/>
      </filter>
      <filter id="filter1_d_55_463" x="15.4189" y="14.6327" width="38.8267" height="38.7835" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.686275 0 0 0 0 0.215686 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_55_463"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_55_463" result="shape"/>
      </filter>
      <filter id="filter2_d_55_463" x="25.4458" y="6" width="48.5234" height="48.5236" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="2"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.831373 0 0 0 0 0.686275 0 0 0 0 0.215686 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_55_463"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_55_463" result="shape"/>
      </filter>
      </defs>
      </svg>    
    </div>
  );
}

export default Logo;
