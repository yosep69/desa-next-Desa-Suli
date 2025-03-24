export interface Default {
  hovered?: boolean
  even?: boolean
}

export const MegaPhone: React.FC<Default & React.HTMLAttributes<HTMLOrSVGElement>> = ({ hovered, ...rest }) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M22.5469 3.53282C22.5422 3.81407 22.3875 4.2875 22.1719 4.65313C21.825 5.24375 20.8969 6.04532 19.9641 6.56094C18.6375 7.29688 16.4344 7.94375 14.85 8.075L14.4375 8.10782V12.1016V16.0953L14.85 16.1281C16.4344 16.2594 18.6375 16.9063 19.9641 17.6422C20.8969 18.1578 21.825 18.9594 22.1719 19.55C22.3875 19.9156 22.5422 20.3891 22.5469 20.6656V20.8906H23.2734H24V12.1016V3.3125H23.2734H22.5469V3.53282Z"
        fill={hovered ? '#377DE0' : '#6B7280'}
      />
      <path
        d="M2.41406 8.21092C1.35469 8.4453 0.553125 9.13905 0.145313 10.1937L0.0234375 10.5078V12.1016V13.6953L0.145313 14.0094C0.323438 14.4687 0.54375 14.8156 0.867188 15.1437C1.20938 15.4953 1.59375 15.7344 2.08594 15.9031C2.40938 16.0109 2.55938 16.0344 3.15469 16.0531L3.84375 16.0719V12.1062V8.14061L3.27188 8.1453C2.95313 8.1453 2.56875 8.17811 2.41406 8.21092Z"
        fill={hovered ? '#377DE0' : '#6B7280'}
      />
      <path
        d="M5.25 12.1016V16.0625H9.14063H13.0313V12.1016V8.14062H9.14063H5.25V12.1016Z"
        fill={hovered ? '#377DE0' : '#6B7280'}
      />
      <path
        d="M4.76718 17.4547C4.69687 17.5766 4.2703 18.9875 4.24218 19.1797C4.1953 19.5359 4.29374 20.0234 4.48124 20.4172C5.22187 21.9312 7.3078 22.1281 8.32968 20.7734C8.55936 20.4734 8.60155 20.3609 9.0703 18.9734C9.34218 18.1578 9.56249 17.4781 9.56249 17.4547C9.56249 17.4125 4.7953 17.4125 4.76718 17.4547Z"
        fill={hovered ? '#377DE0' : '#6B7280'}
      />
    </svg>
  )
}

export const Team: React.FC<Default & React.HTMLAttributes<HTMLOrSVGElement>> = ({ hovered, ...rest }) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g clipPath="url(#clip0_4_748)">
        <path
          d="M11.4837 2.51017C10.1388 2.65294 8.88148 3.52343 8.28273 4.73935C7.96954 5.36112 7.8544 5.88157 7.8544 6.6277C7.85901 8.4746 9.10256 10.0774 10.9172 10.5702C11.2166 10.6531 11.41 10.6715 11.9535 10.6715C12.497 10.6715 12.6904 10.6531 12.9898 10.5702C14.8045 10.0774 16.048 8.4746 16.0526 6.6277C16.0526 6.08883 15.9927 5.69273 15.8592 5.29664C15.3249 3.7399 13.9985 2.68058 12.3634 2.50556C12.1239 2.48253 11.9121 2.46411 11.8844 2.46871C11.8614 2.46871 11.6772 2.48714 11.4837 2.51017Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M4.28034 6.32371C3.63553 6.42964 3.08745 6.71059 2.59924 7.1988C2.02352 7.77452 1.74257 8.41011 1.69651 9.22993C1.59979 10.9801 3.00455 12.4539 4.76855 12.4539C5.52389 12.4539 6.27002 12.1638 6.82271 11.6572C7.97414 10.6024 8.1768 8.95819 7.31552 7.65477C6.92864 7.06984 6.23778 6.57702 5.55613 6.3974C5.20609 6.30989 4.60274 6.27304 4.28034 6.32371Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M18.747 6.30989C17.3284 6.54018 16.2737 7.5995 16.0895 8.98122C15.9928 9.6905 16.1632 10.4366 16.5547 11.04C17.4159 12.3572 19.1016 12.827 20.4972 12.1362C21.1466 11.8137 21.5887 11.367 21.9065 10.7222C22.1506 10.2156 22.2381 9.78722 22.2105 9.22993C22.1644 8.41011 21.8835 7.77451 21.3078 7.1988C20.7321 6.62768 20.1103 6.34673 19.3089 6.30989C19.074 6.30068 18.8253 6.30068 18.747 6.30989Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M9.42956 11.5328C8.63737 11.6433 8.04323 11.9381 7.4583 12.523C7.11287 12.8639 7.00233 13.0112 6.83192 13.3613C6.43583 14.1442 6.44964 13.9923 6.44964 18.2572C6.44964 21.951 6.44964 22.0155 6.54176 22.1721C6.59703 22.2596 6.70757 22.3701 6.79507 22.4254C6.95628 22.5175 7.01154 22.5175 11.9535 22.5175C16.8955 22.5175 16.9507 22.5175 17.1119 22.4254C17.1994 22.3701 17.31 22.2596 17.3653 22.1721C17.4574 22.0155 17.4574 21.951 17.4574 18.2572C17.4574 13.9923 17.4712 14.1442 17.0751 13.3613C16.7895 12.7902 16.2138 12.2006 15.6519 11.9105C14.892 11.519 14.8828 11.5144 12.1377 11.5052C10.8067 11.5006 9.59076 11.5144 9.42956 11.5328Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M2.93086 13.3336C1.87154 13.5409 0.996447 14.2087 0.508239 15.1806C0.162808 15.8714 0.158202 15.9267 0.172019 18.6303L0.185837 21.0022L0.356249 21.3476C0.572719 21.7898 0.876698 22.0938 1.30043 22.2964C1.75179 22.5129 1.99589 22.5359 3.75068 22.5405H5.23834L5.20149 22.3655C5.17846 22.2734 5.16004 20.3896 5.16004 18.1881V14.1811L5.26597 13.8034C5.32124 13.5962 5.38111 13.3935 5.39493 13.3567C5.42257 13.2922 5.30282 13.283 4.28034 13.2876C3.64935 13.2922 3.0414 13.3106 2.93086 13.3336Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M18.5121 13.3521C18.5259 13.3935 18.5858 13.5962 18.641 13.8034L18.747 14.1811V18.1881C18.747 20.3896 18.7285 22.2734 18.7055 22.3701L18.6687 22.5405H20.1563C21.9111 22.5359 22.1552 22.5129 22.6066 22.2964C23.0303 22.0938 23.3343 21.7898 23.5508 21.3476L23.7212 21.0022L23.735 18.6303C23.7488 15.9267 23.7442 15.8714 23.3988 15.1806C22.9658 14.3193 22.275 13.7297 21.3262 13.4166C21.0268 13.3198 20.9071 13.3106 19.7418 13.2922C18.5812 13.2784 18.4844 13.283 18.5121 13.3521Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
      </g>
      <defs>
        <clipPath id="clip0_4_748">
          <rect width="23.5814" height="23.5814" fill="white" transform="translate(0.162811 0.70932)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Box: React.FC<Default & React.HTMLAttributes<HTMLOrSVGElement>> = ({ hovered, ...rest }) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M7.82715 4.18457C5.29297 5.43946 3.22266 6.47461 3.22266 6.48926C3.22754 6.54297 12.4512 11.3867 12.5146 11.3672C12.6074 11.3477 21.6406 6.39649 21.7187 6.32813C21.7676 6.2793 20.7715 5.79102 17.2021 4.10156C14.6826 2.91504 12.5781 1.9336 12.5244 1.92383C12.4707 1.91406 10.3662 2.92969 7.82715 4.18457Z"
        fill={hovered ? '#377DE0' : '#6B7280'}
      />
      <path
        d="M18.335 9.79004C15.7324 11.2256 13.6035 12.4219 13.6133 12.4512C13.6328 12.5342 15.9229 15.3809 15.9717 15.3809C16.0547 15.3809 25 10.2344 25 10.1904C25 10.127 23.1348 7.17773 23.1006 7.18262C23.0859 7.18262 20.9424 8.35938 18.335 9.79004Z"
        fill={hovered ? '#377DE0' : '#6B7280'}
      />
      <path
        d="M0.927734 8.76465C0.419922 9.53125 0 10.1758 0 10.2002C0 10.2441 8.94043 15.3809 9.01855 15.3809C9.07715 15.3809 11.3525 12.5195 11.3525 12.4463C11.3525 12.3975 8.83789 11.0547 2.45605 7.69043L1.85547 7.37305L0.927734 8.76465Z"
        fill={hovered ? '#377DE0' : '#6B7280'}
      />
      <path
        d="M2.34375 15.6836V18.1397L7.04102 20.6201C9.61914 21.9824 11.7432 23.0908 11.7529 23.0811C11.7627 23.0713 11.7627 21.084 11.7578 18.6621L11.7432 14.2627L10.7178 15.542C10.1562 16.2402 9.62891 16.8604 9.55566 16.9141C9.2334 17.1533 9.30176 17.1826 5.70312 15.1221C3.88672 14.082 2.3877 13.2324 2.37305 13.2324C2.35352 13.2324 2.34375 14.3359 2.34375 15.6836Z"
        fill={hovered ? '#377DE0' : '#6B7280'}
      />
      <path
        d="M19.3359 15.0928C17.5488 16.1182 16.0107 16.9775 15.9131 17.002C15.7666 17.041 15.6885 17.0313 15.5225 16.9531C15.3369 16.875 15.1562 16.6699 14.2822 15.5615C13.7207 14.8486 13.2422 14.2627 13.2227 14.2627C13.1982 14.2578 13.1836 16.25 13.1836 18.6816V23.1055L13.6865 22.832C13.96 22.6855 16.084 21.5186 18.4082 20.2441L22.6318 17.9248L22.6465 15.5762C22.6514 14.2871 22.6416 13.2324 22.6221 13.2324C22.5976 13.2324 21.123 14.0723 19.3359 15.0928Z"
        fill={hovered ? '#377DE0' : '#6B7280'}
      />
    </svg>
  )
}

export const Papper: React.FC<Default & React.HTMLAttributes<HTMLOrSVGElement>> = ({ hovered, ...rest }) => {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g clipPath="url(#clip0_153_202)">
        <path
          d="M4.27031 0.593748C3.71719 0.795311 3.3 1.17031 3.03281 1.71406L2.88281 2.02344V12.5V22.9766L3.03281 23.2859C3.30469 23.8438 3.72656 24.2141 4.29375 24.4063C4.56563 24.5 4.69219 24.5 12.0938 24.4906L19.6172 24.4766L19.9453 24.3172C20.3766 24.1063 20.7469 23.7359 20.9578 23.3047L21.1172 22.9766L21.1313 15.2516L21.1406 7.53125H18.7406C17.4188 7.53125 16.1766 7.50781 15.9891 7.48438C15.0234 7.35781 14.2828 6.61719 14.1563 5.65156C14.1328 5.46406 14.1094 4.22187 14.1094 2.9V0.499998H9.31875C4.70625 0.504686 4.51406 0.504686 4.27031 0.593748ZM16.5328 10.4938C16.7344 10.6063 16.875 10.85 16.875 11.0938C16.875 11.3375 16.7625 11.5391 16.5469 11.6703L16.3828 11.7734H12C7.70156 11.7734 7.6125 11.7734 7.4625 11.6797C7.25156 11.5531 7.125 11.3375 7.125 11.0984C7.125 10.7563 7.32188 10.5172 7.66406 10.4328C7.73906 10.4141 9.73594 10.4047 12.0938 10.4047C16.0594 10.4141 16.3922 10.4188 16.5328 10.4938ZM16.5328 13.3063C16.7344 13.4188 16.875 13.6625 16.875 13.9063C16.875 14.15 16.7625 14.3516 16.5469 14.4828L16.3828 14.5859H12C7.70156 14.5859 7.6125 14.5859 7.4625 14.4922C7.25156 14.3656 7.125 14.15 7.125 13.9109C7.125 13.5688 7.32188 13.3297 7.66406 13.2453C7.73906 13.2266 9.73594 13.2172 12.0938 13.2172C16.0594 13.2266 16.3922 13.2313 16.5328 13.3063ZM16.5328 16.1188C16.7344 16.2313 16.875 16.475 16.875 16.7188C16.875 16.9625 16.7625 17.1641 16.5469 17.2953L16.3828 17.3984H12C7.70156 17.3984 7.6125 17.3984 7.4625 17.3047C7.25156 17.1781 7.125 16.9625 7.125 16.7234C7.125 16.3813 7.32188 16.1422 7.66406 16.0578C7.73906 16.0391 9.73594 16.0297 12.0938 16.0297C16.0594 16.0391 16.3922 16.0438 16.5328 16.1188ZM13.7203 18.9313C14.1703 19.1797 14.175 19.8453 13.725 20.1172C13.575 20.2063 13.4859 20.2109 10.5938 20.2109C7.70156 20.2109 7.6125 20.2063 7.4625 20.1172C7.25156 19.9906 7.125 19.775 7.125 19.5359C7.125 19.1938 7.31719 18.9547 7.66406 18.8703C7.73906 18.8516 9.10313 18.8375 10.6875 18.8422C13.3219 18.8516 13.5844 18.8563 13.7203 18.9313Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M15.5156 3.26093C15.5156 5.57655 15.5203 5.67499 15.6094 5.8203C15.8063 6.13905 15.7406 6.12968 18.3891 6.11562L20.7656 6.10155L18.1406 3.47655L15.5156 0.851554V3.26093Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
      </g>
      <defs>
        <clipPath id="clip0_153_202">
          <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Lamp: React.FC<Default & React.HTMLAttributes<HTMLOrSVGElement>> = ({ hovered, ...rest }) => {
  return (
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g clipPath="url(#clip0_153_206)">
        <path
          d="M12.6953 0.601563C12.5988 0.698047 12.5938 0.769141 12.5938 1.76953C12.5938 2.76992 12.5988 2.84102 12.6953 2.9375C12.7613 3.00352 12.8629 3.03906 13 3.03906C13.1371 3.03906 13.2387 3.00352 13.3047 2.9375C13.4012 2.84102 13.4062 2.76992 13.4062 1.76953C13.4062 0.769141 13.4012 0.698047 13.3047 0.601563C13.2387 0.535547 13.1371 0.5 13 0.5C12.8629 0.5 12.7613 0.535547 12.6953 0.601563Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M4.83437 3.81601C4.7582 3.89726 4.72266 3.99883 4.72266 4.13086C4.72266 4.31367 4.76836 4.36953 5.37266 4.98398C5.72812 5.34453 6.08867 5.66953 6.175 5.71015C6.56601 5.87773 6.93164 5.50703 6.73359 5.13633C6.69297 5.06015 6.36797 4.70469 6.00234 4.34414C5.38281 3.73476 5.33711 3.69922 5.14414 3.69922C5.00195 3.69922 4.91055 3.72969 4.83437 3.81601Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M19.9977 4.34414C19.632 4.70469 19.307 5.06015 19.2664 5.13633C19.0683 5.50703 19.434 5.87773 19.825 5.71015C19.9113 5.66953 20.2719 5.34453 20.6324 4.98398C21.2418 4.36445 21.2773 4.31367 21.2773 4.1207C21.2773 3.85664 21.1199 3.69922 20.8457 3.69922C20.6629 3.69922 20.607 3.74492 19.9977 4.34414Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M11.8066 4.79609C10.7656 4.96875 9.55702 5.48672 8.73437 6.10625C7.29218 7.19297 6.30702 8.77227 5.96171 10.5547C5.82968 11.2605 5.83476 12.5352 5.98202 13.2258C6.2664 14.5613 6.80468 15.6328 7.69335 16.6484C8.66327 17.7504 9.1203 18.7965 9.25234 20.1879L9.3082 20.8125H13H16.6918L16.7477 20.1879C16.8797 18.7965 17.3367 17.7504 18.3066 16.6484C19.1953 15.6277 19.7336 14.5563 20.018 13.2258C20.1754 12.4844 20.1703 11.1996 20.0129 10.4531C19.7133 9.04141 19.1293 7.92422 18.1645 6.91367C17.5449 6.26875 16.9711 5.84726 16.1738 5.45117C15.0922 4.91289 14.1984 4.70976 12.9492 4.71992C12.543 4.725 12.0301 4.75547 11.8066 4.79609Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M1.64023 11.5551C1.48789 11.5855 1.32031 11.8039 1.32031 11.9766C1.32031 12.0527 1.36602 12.1746 1.42695 12.2508L1.52852 12.3828H2.59492C3.66133 12.3828 3.66133 12.3828 3.7832 12.2559C3.9457 12.0984 3.9457 11.875 3.78828 11.6871L3.66641 11.5449L2.70664 11.5348C2.18359 11.5348 1.70117 11.5398 1.64023 11.5551Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M22.4098 11.5551C22.2523 11.5855 22.0898 11.809 22.0898 11.9867C22.0898 12.073 22.1406 12.1848 22.2168 12.2559C22.3387 12.3828 22.3387 12.3828 23.4051 12.3828H24.4715L24.5731 12.2508C24.7152 12.073 24.7051 11.8598 24.5578 11.6871L24.4359 11.5449L23.4762 11.5348C22.9531 11.5348 22.4707 11.5398 22.4098 11.5551Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M5.96679 18.4258C5.91093 18.4461 5.55039 18.7863 5.16953 19.1723C4.5043 19.8426 4.46875 19.8934 4.46875 20.0863C4.46875 20.3504 4.62617 20.5078 4.89531 20.5078C5.07305 20.5078 5.13906 20.457 5.77383 19.8324C6.6625 18.959 6.74375 18.8117 6.45429 18.5223C6.30195 18.375 6.15468 18.3445 5.96679 18.4258Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M19.5508 18.5172C19.2563 18.8117 19.3324 18.9539 20.2262 19.8324C20.8711 20.4723 20.9168 20.5078 21.1098 20.5078C21.3738 20.5078 21.5312 20.3504 21.5312 20.0762C21.5312 19.8934 21.4906 19.8375 20.8102 19.152C20.2008 18.5375 20.0535 18.4207 19.8961 18.3953C19.7336 18.3649 19.6879 18.3852 19.5508 18.5172Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M9.29297 22.5137C9.29297 23.509 9.32344 23.6359 9.61289 23.8086C9.77031 23.9051 9.89219 23.9102 12.9645 23.9102C16.4785 23.9102 16.4074 23.9152 16.6055 23.5953C16.6969 23.443 16.707 23.3414 16.707 22.5238V21.625H13H9.29297V22.5137Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
        <path
          d="M10.7656 24.8547C10.7656 25.007 11.0297 25.4844 11.248 25.7281C11.5273 26.0379 11.8676 26.2613 12.2688 26.4035C12.5176 26.4898 12.6648 26.5051 13.1066 26.4898C13.6043 26.4746 13.6652 26.4594 14.0258 26.2816C14.4777 26.0582 14.8992 25.6418 15.1023 25.2101C15.3309 24.7328 15.5289 24.7734 13 24.7734C11.0094 24.7734 10.7656 24.7836 10.7656 24.8547Z"
          fill={hovered ? '#377DE0' : '#6B7280'}
        />
      </g>
      <defs>
        <clipPath id="clip0_153_206">
          <rect width="26" height="26" fill="white" transform="translate(0 0.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Whatsapp: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = () => {
  return (
    <svg width="25" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.9046 6.19884C20.0435 0.246339 12.1604 -1.52332 6.04707 2.17688C0.0945667 5.87708 -1.83597 13.921 2.02511 19.8735L2.34686 20.3561L1.05984 25.1825L5.88619 23.8955L6.36882 24.2172C8.46024 25.3434 10.7125 25.9869 12.9648 25.9869C15.378 25.9869 17.7912 25.3434 19.8826 24.0563C25.8351 20.1953 27.6048 12.3122 23.9046 6.19884ZM20.5261 18.5865C19.8826 19.5517 19.0782 20.1953 17.9521 20.3561C17.3086 20.3561 16.5042 20.6779 13.2866 19.3909C10.5517 18.1038 8.29936 16.0124 6.69058 13.5992C5.72531 12.4731 5.24267 11.0252 5.0818 9.57728C5.0818 8.29026 5.56443 7.16411 6.36882 6.35972C6.69058 6.03796 7.01234 5.87708 7.33409 5.87708H8.13848C8.46024 5.87708 8.782 5.87708 8.94288 6.5206C9.26463 7.32499 10.069 9.25553 10.069 9.41641C10.2299 9.57728 10.2299 9.89904 10.069 10.0599C10.2299 10.3817 10.069 10.7034 9.90815 10.8643C9.74727 11.0252 9.58639 11.3469 9.42551 11.5078C9.10375 11.6687 8.94288 11.9905 9.10375 12.3122C9.74727 13.2775 10.5517 14.2428 11.3561 15.0471C12.3213 15.8515 13.2866 16.4951 14.4127 16.9777C14.7345 17.1386 15.0563 17.1386 15.2171 16.8168C15.378 16.4951 16.1824 15.6907 16.5042 15.3689C16.8259 15.0471 16.9868 15.0471 17.3085 15.208L19.8826 16.4951C20.2044 16.6559 20.5261 16.8168 20.687 16.9777C20.8479 17.4603 20.8479 18.1038 20.5261 18.5865Z"
        fill="#377de0"
      />
    </svg>
  )
}
